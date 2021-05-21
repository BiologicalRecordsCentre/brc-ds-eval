import * as d3 from 'd3'
import Tabulator from 'tabulator-tables'

let dataraw
let summary = [null, null]

function summarise(i) {
  const data = dataraw[i-1]

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
        let badDate = 0
        if (/^\d\d\d\d.\d\d.\d\d$/.test(date) || /^\d\d.\d\d.\d\d\d\d$/.test(date)) {
          if (/^\d\d\d\d.\d\d.\d\d$/.test(date)) {
            year = Number(date.substr(0,4))
          } else {
            year = Number(date.substr(6,4))
          }
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
        } else {
          // Date not parsed - this not yet reported to user
          badDate++
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
    if (!summary[i-1] && dataraw[i-1].json && dataraw[i-1].fields ) {
      d3.select(`#summary-name-${i}`).text(dataraw[i-1].name)
      summary[i-1] = summarise(i)
    } else if (summary[i-1]) {
      summary[i-1].redraw(true)
    }
  }
  generate(1)
  generate(2)
}

export function redoSummaries() {
  clear(1)
  clear(2)
  summariesTables()
}

export function tabSelected(data) {
  dataraw = data
  summariesTables()
}

export function clear(i) {
  if (summary[i-1]) {
    summary[i-1].destroy()
    summary[i-1] = null
    d3.select(`#summary-table-${i}`).html('')
  }
}

export function summaryDisplay() {
  // Function responsible for display one or both tables
  const d1 = d3.select('#summary-check-1').property("checked")
  const d2 = d3.select('#summary-check-2').property("checked")

  if (d1 && d2) {
    d3.select('#summary-div-1').classed("split", true)
    d3.select('#summary-div-2').classed("split", true)
  } else {
    d3.select('#summary-div-1').classed("split", false)
    d3.select('#summary-div-2').classed("split", false)
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