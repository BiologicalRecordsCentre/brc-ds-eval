import * as d3 from 'd3'
import Tabulator from 'tabulator-tables'

let summary = [{}, {}]

function summarise(data, i) {

  if (!data.fields.taxon) {
    d3.select(`#summary-message-${i}`)
      .html(`
        For the summary table, you must configure the <i>Taxon</i> column as a minimum.
        Configuring the <i>Date</i> column will also give richer output.
      `)
    d3.select(`#summary-message-${i}`).style('display', '')
  } else {
    d3.select(`#summary-message-${i}`).style('display', 'none')

    const sumData = {}
    data.json.forEach(d => {

      const taxon = d[data.fields.taxon]
      // Count the record agains the appropriate taxon
      if (sumData[taxon]) {
        sumData[taxon].records++
      } else {
        sumData[taxon] = {
          taxon: taxon,
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
          if (sumData[taxon].minYear) {
            if (year < sumData[taxon].minYear) {
              sumData[taxon].minYear = year
            }
          } else {
            sumData[taxon].minYear = year
          }
          if (sumData[taxon].maxYear) {
            if (year > sumData[taxon].maxYear) {
              sumData[taxon].maxYear = year
            }
          } else {
            sumData[taxon].maxYear = year
          }
        } else {
          badDate++
        }
      }
    })
    const sumArray = Object.keys(sumData).map(k => sumData[k])

    const cols = [
      {title:"Taxon", field:"taxon"},
      {title:"Records", field:"records"}
    ]
    if (data.fields.date) {
      cols.push({title:"MinYear", field:"minYear"})
      cols.push({title:"MaxYear", field:"maxYear"})
    }
    return new Tabulator(`#summary-table-${i}`, {
      height: 600,
      data: sumArray,
      columns:cols
    })
  }
}

export function clear(i) {
  if (summary[i-1].table) {
    summary[i-1].table.destroy()
    summary[i-1].table = null
    d3.select(`#summary-table-${i}`).html('')
  }
}

export function tabSelected(data) {
  const generate = (i) => {
    if (!summary[i-1].table && data[i-1].json && data[i-1].fields ) {
      d3.select(`#summary-name-${i}`).text(data[i-1].name)
      summary[i-1].table = summarise(data[i-1], i)
    }
  }
  generate(1)
  generate(2)
}

export function summaryDisplay() {
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
  console.log(d1, d2)
}