import * as d3 from 'd3'
import * as gen from './gen'
import Tabulator from 'tabulator-tables'

let summary = [null, null]

// Standard interface functions
export function gui(sel) {
  
  // Dataset checkboxes
  gen.datasetCheckboxes(sel, 'summary-check', 'summaryDisplay')

  // Record grouping
  const p = d3.select(sel).append('p')
  const fldset = p.append('fieldset')
  fldset.append('legend').text('Group records by')

  // Other controls
  const p2 = d3.select(sel).append('p')
  const fldset2 = p2.append('fieldset')
  fldset2.append('legend').text('Other controls')
  gen.button(fldset2, 'brcdseval.summaryDownloadCSV', 'Download CSV')

  function makeInput(txt, value, checked) {
    const input = fldset.append('input')
    input.attr('type', 'radio')
    input.attr('id', `rad-${value ? value : 'none'}`)
    input.attr('name', 'rad-grouping')
    input.attr('value', value)
    input.attr('onclick', `brcdseval.redoSummaries()`)
    if (checked) {
      input.property('checked', true)
    }
    const label = fldset.append('label').text(txt)
    label.attr('for', `rad-${value ? value : 'none'}`)
  }
  makeInput('None', '', true)
  makeInput('Recorder', 'recorder')
  makeInput('Verifier', 'verifier')
  makeInput('Verified status', 'verifyStatus')
  makeInput('Source', 'source')

  // Layout for summary tables
  const div = d3.select(sel).append('div')
  
  function tableDiv(i) {
    const tabDiv = div.append('div')
    tabDiv.attr('id', `summary-div-${i}`)
    tabDiv.append('h4').attr('id', `summary-name-${i}`)
    tabDiv.append('p').attr('id', `summary-message-${i}`)
    tabDiv.append('div').attr('id', `summary-table-${i}`)
  }
  tableDiv(1)
  tableDiv(2)
}

export function tabSelected() {
  summariesTables()
}

export function dataCleared(i) {
  clear(i)
}

export function fieldConfigCleared(i) {
  clear(i)
}

// Exported from the library to use from html interface
export function redoSummaries() {
  clear(1)
  clear(2)
  summariesTables()
}

export function summaryDisplay() {
  // Function responsible for display one or both tables
  const d1 = d3.select('#summary-check-1').property("checked")
  const d2 = d3.select('#summary-check-2').property("checked")

  if (d1 && d2) {
    d3.select('#summary-div-1').classed("splitx", true)
    d3.select('#summary-div-2').classed("splitx", true)
  } else {
    d3.select('#summary-div-1').classed("splitx", false)
    d3.select('#summary-div-2').classed("splitx", false)
  }
  if (d1) {
    d3.select('#summary-div-1').style("display", "")
  } else {
    d3.select('#summary-div-1').style("display", "none")
  }
  if (d2) {
    d3.select('#summary-div-2').style("display", "")
  } else {
    d3.select('#summary-div-2').style("display", "none")
  }
  if (summary[0]) summary[0].redraw(true)
  if (summary[1]) summary[1].redraw(true)
}

export function summaryDownloadCSV() {
  const generate = (i) => {
    if (summary[i-1]) {
      summary[i-1].download("csv", `brc-ds-eval-summary-ds${i}.csv`)
    }
  }
  generate(1)
  generate(2)
}

// Helper functions
function summarise(i) {
  const data = gen.data[i-1]

  if (!data.fields.taxon) {
    d3.select(`#summary-message-${i}`)
      .html(`
        For the summary table, you must configure the <i>Taxon</i> column as a minimum.
        Configuring the <i>Date</i> column will also give richer output.
      `)
    d3.select(`#summary-message-${i}`).style('display', '')
  } else {
    d3.select(`#summary-message-${i}`).style('display', 'none')

    const groupCol = d3.select('input[name=rad-grouping]:checked').property('value')
    const sumData = {}
    data.json.forEach(d => {

      const rowKey = groupCol && data.fields[groupCol] ? `${d[data.fields.taxon]}-${d[data.fields[groupCol]]}` : d[data.fields.taxon]
   
      // Count the record against the appropriate taxon
      if (sumData[rowKey]) {
        sumData[rowKey].records++
      } else {
        let designation = ''
        if (data.fields.tvk) {
          if (!d[data.fields.tvk]) {
            designation = "no tvk"
          } else if (window.taxonDesignations[d[data.fields.tvk]]){
            designation = window.taxonDesignations[d[data.fields.tvk]]
          }
        }

        sumData[rowKey] = {
          taxon: d[data.fields.taxon],
          designation: designation,
          grouping: groupCol && data.fields[groupCol] ? d[data.fields[groupCol]] : '',
          records: 1
        }
      }

      // Date
      // Currently recognise these two formats yyyy*mm*dd dd*mm*yyyy
      if (data.fields.date) {
        const date = d[data.fields.date]
        let year
        if (gen.dateValid(date)) {
          year = gen.dateYear(date)

          if (sumData[rowKey].minYear) {
            if (year < sumData[rowKey].minYear) {
              sumData[rowKey].minYear = year
            }
          } else {
            sumData[rowKey].minYear = year
          }
          if (sumData[rowKey].maxYear) {
            if (year > sumData[rowKey].maxYear) {
              sumData[rowKey].maxYear = year
            }
          } else {
            sumData[rowKey].maxYear = year
          }
        }
      }
    })
    const sumArray = Object.keys(sumData).map(k => sumData[k])

    const cols = []
    if (groupCol && data.fields[groupCol]) {
      cols.push({title: data.fields[groupCol], field:"grouping",  headerFilter:"input"})
    }
    cols.push({title:"Taxon", field:"taxon",  headerFilter:"input"})
    if (data.fields.tvk) {
      cols.push({title: "Designation", field:"designation",  headerFilter:"input"})
    }
    cols.push({title:"Records", field:"records"})
    if (data.fields.date) {
      cols.push({title:"MinYear", field:"minYear"})
      cols.push({title:"MaxYear", field:"maxYear"})
    }

    console.log('cols', cols)
    console.log('sumArray', sumArray)

    return new Tabulator(`#summary-table-${i}`, {
      height: 600,
      data: sumArray,
      columns: cols,
      groupBy: groupCol ? "grouping" : ""
    })
  }
}

function summariesTables() {
  // Generate summary data for each table
  const generate = (i) => {
    if (!summary[i-1] && gen.data[i-1].json && gen.data[i-1].fields ) {
      d3.select(`#summary-name-${i}`).text(gen.data[i-1].name)
      summary[i-1] = summarise(i)
    } else if (summary[i-1]) {
      summary[i-1].redraw(true)
    }
  }
  generate(1)
  generate(2)
}

function clear(i) {
  if (summary[i-1]) {
    summary[i-1].destroy()
    summary[i-1] = null
    d3.select(`#summary-table-${i}`).html('')
  }
}



