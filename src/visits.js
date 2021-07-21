import * as d3 from 'd3'
import * as gen from './gen'
import Tabulator from 'tabulator-tables'
import { getLowerResGrs, checkGr } from 'brc-atlas-bigr'

const visitData = [null, null]
let combinedData = null
const barWidth = 200
const barHeight = 20

// Standard interface functions
export function gui(sel) {
  d3.select(sel).append('h4').attr('id', `visits-name-1`)
  d3.select(sel).append('p').attr('id', `visits-message-1`)
  d3.select(sel).append('h4').attr('id', `visits-name-2`)
  d3.select(sel).append('p').attr('id', `visits-message-2`)
  const legend = d3.select(sel).append('p').attr('id', `visits-legend`)
  d3.select(sel).append('p').attr('id', `visits-table`)

  // Legend
  const legendItems=[
    {colour: 'red', caption: 'Visits only in D1'}, 
    {colour: 'gold', caption: 'Visits in D1 & D2'}, 
    {colour: 'blue', caption: 'Visits only in D2'}
  ]
  legendItems.forEach(li => {
    legend.append('div')
      .style('background-color', li.colour)
      .style('display', 'inline-block')
      .style('padding', '0.2em 0.4em')
      .style('color', li.colour === 'gold' ? 'black' : 'white')
      .style('font-weight', 'bold')
      .style('font-size', '0.9em')
      .text(li.caption)
  })
  legend.style('display', 'none')
}

export function tabSelected() {

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
      d3.select(`#visits-name-${i+1}`).text(`D${i+1}: ${gen.data[i].name}`)
      d3.select(`#visits-name-${i+1}`).style('display', '')
    } else {
      d3.select(`#visits-name-${i+1}`).text('')
      d3.select(`#visits-name-${i+1}`).style('display', 'none')
      showMessage(i+1, null)
    }
  }
  displayData()
}

export function dataCleared(i) {
  clear(i)
}

export function fieldConfigCleared(i) {
  clear(i)
}

// Exported from the library to use from html interface
// None

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
    // Generate visit data if not already exists and all the necessary config is set
    if (gen.data[i] && gen.data[i].fields && gen.data[i].fields.taxon  && gen.data[i].fields.date && gen.data[i].fields.gr) {
      if (visitData[i]) {
        deferreds[i].resolve()
      } else {
        combinedData = null
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

    if (!combinedData) {
      combinedData = []
      for (let i=0; i<2; i++) {
        if(visitData[i]) {
          visitData[i].forEach(r => {
            const cd = combinedData.find(c => c.taxon === r.taxon)
            if (cd) {
              if (i===0) {
                cd.d1 = r.visits
              } else {
                cd.d2 = r.visits
              }
            } else {
              combinedData.push({
                taxon: r.taxon,
                d1: i===0 ? r.visits : [],
                d2: i===1 ? r.visits : [],
              })
            }
          })
        }
      }
      const d1 = visitData[0]
      const d2 = visitData[1]
      const both = d1 && d2

      combinedData.forEach(cd => {
        if (cd.d1 && cd.d2) {
          const union = new Set([...cd.d1, ...cd.d2])
          cd.union = both ? [...union].length : null
          cd.intersect = both ? cd.d1.filter(v => cd.d2.indexOf(v) > -1).length : null
          cd.d1 = d1 ? cd.d1.length : null
          cd.d2 = d2 ? cd.d2.length : null
          cd.ud1 = cd.d1 && both ? Math.round(cd.union/cd.d1*10)/10 : null
          cd.ud2 = cd.d2 && both ? Math.round(cd.union/cd.d2*10)/10 : null
          const d1Prop = (cd.d1-cd.intersect)/cd.union
          const d2Prop = (cd.d2-cd.intersect)/cd.union
          const iProp = cd.intersect/cd.union
          cd.graphic = both ? `<div>
            <div style="background-color:red; height:${barHeight}px; width:${barWidth*d1Prop}px; float:left"></div>
            <div style="background-color:gold; height:${barHeight}px; width:${barWidth*iProp}px; float:left"></div>
            <div style="background-color:blue; height:${barHeight}px; width:${barWidth*d2Prop}px; float:left"></div>
          </div>` : null
        }
      })
    }
    makeChart()
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
  combinedData = null
  d3.select(`#visits-table`).html()
  d3.select(`#visits-table`).style('display', 'none')
}

function makeChart() {

  if (visitData[0] && visitData[1]) {
    d3.select('#visits-legend').style('display', '')
  } else {
    d3.select('#visits-legend').style('display', 'none')
  }
  if (combinedData.length) {
    const cols = [
      {title: "Taxon", field: "taxon"},
      {title: "D1", field: "d1"},
      {title: "D2", field: "d2"},
      {title: "Union", field: "union"},
      {title: "Intersect", field: "intersect"},
      {title: "Union/D1", field: "ud1"},
      {title: "Union/D2", field: "ud2"},
      {title: "Graphic", field: "graphic", formatter: "html", minWidth: `${Math.round(barWidth)*1.1}px`, headerSort:false},
    ]

    d3.select(`#visits-table`).style('display', '')

    new Tabulator(`#visits-table`, {
      height: 600,
      data: combinedData,
      columns: cols
    })
  }
}