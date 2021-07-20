import * as d3 from 'd3'
import * as gen from './gen'
import { getLowerResGrs, checkGr } from 'brc-atlas-bigr'

const visitData = [null, null]

// Standard interface functions
export function gui(sel) {
  d3.select(sel).append('p').attr('id', `visits-message-1`)
  d3.select(sel).append('p').attr('id', `visits-message-2`)
}

export function tabSelected() {

  console.log('visits tab ')
  for (let i=0; i<2; i++) {
    // Warn if data selected but the necessary config is not set
    if (gen.data[i] && gen.data[i].fields) {
      if (!gen.data[i].fields.taxon  || !gen.data[i].fields.date || !gen.data[i].fields.gr) {
        //d3.select(`#summary-message-${i}`).style('display', '')
        showMessage(i+1, 
          `To carry out visit analysis for dataset ${i+1}, the fields
          <i>taxon</i>, <i>date</i> and <i>gr</i> must be configured.
        `)
      } else {
        showMessage(i+1, null)
      }
    } else {
      showMessage(i+1, null)
    }
  }
  displayData()
}

export function dataCleared(i) {
  clear(i)
}

export function fieldConfigCleared(i) {

}

// Exported from the library to use from html interface
export function visitsDisplay() {


}

// Helper functions

function showMessage(i, html) {
  if (html) {
    d3.select(`#visits-message-${i}`).style('display', '')
    d3.select(`#visits-message-${i}`).html(html)
  } else {
    d3.select(`#visits-message-${i}`).style('display', 'none')
    d3.select(`#visits-message-${i}`).html('')
  }
}

function displayData() {  
  console.log("Display visit stuff")

  const deferreds = []
  const p1 = new Promise(function(resolve, reject){
      deferreds.push({resolve: resolve, reject: reject})
  })
  const p2 = new Promise(function(resolve, reject){
      deferreds.push({resolve: resolve, reject: reject})
  })
  const pLoads = [p1, p2]

  for (let i=0; i<2; i++) {
    let p
    // Generate time visit data if not already exists and all the necessary config is set
    if (gen.data[i] && gen.data[i].fields && gen.data[i].fields.taxon  && gen.data[i].fields.date && gen.data[i].fields.gr) {
      if (visitData[i]) {
        deferreds[i].resolve()
      } else {
        showMessage(i+1, `<span style='color: orange; font-weight: bold'>Configuring dataset ${i+1} for visit analysis...</span>`)
        setTimeout(() => {
          // Timeout required to allow GUI to update (i.e. tab to show)
          loadData(i).then(() => {
            showMessage(i+1, null)
            deferreds[i].resolve()
          })
        }, 1)
      }
    } else {
      deferreds[i].resolve()
    }
    pLoads.push(p)
  }
  Promise.all(pLoads).then(() => {

    console.log("all loaded")

    if (visitData[0] && visitData[1]) {
      makeChart()
    }
  })
}

function loadData(i) {
  visitData[i] = []
  // Data generation is wrapped in a promise so that the interface will
  // not hang.
  return new Promise((resolve, reject) => {
    gen.data[i].json.forEach(r => {

      const taxon = r[gen.data[i].fields.taxon]

      // Standardise the date
      let date = r[gen.data[i].fields.date]
      if (date && gen.dateValid(date)) {
        date = gen.dateStandard(date)
      } else {
        date = null
      }
      
      // Get the 1km gr from the gr
      let gr = r[gen.data[i].fields.gr]
      if (gr) {
        let grcheck
        try {
          grcheck = checkGr(gr)
        } catch (err) {
          gr = null
        }
        if (grcheck && grcheck.precision <= 1000) {
          gr = getLowerResGrs(gr).p1000
        } else {
          gr = null
        }
      }

      if (gr && date && taxon) {
        const pd = visitData[i].find(pd => pd.taxon === taxon)
        const visit = `${gr}-${date}`
        if (pd) {
          if (pd.visits.indexOf(visit) === -1) {
            pd.visits.push(visit)
          }
        } else {
          visitData[i].push({
            taxon: taxon,
            visits: [visit]
          })
        }
      }
    })
    resolve()
  })
}

function clear(i) {
  visitData[i-1] = null
  //d3.select(`#timeseries-chart-${i}`).html('')
}

function makeChart() {
  console.log(visitData)
}