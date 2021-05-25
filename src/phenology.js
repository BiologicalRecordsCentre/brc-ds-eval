import * as d3 from 'd3'
import * as gen from './gen'

const phenData = [null, null]

// Standard interface functions
export function gui(sel) {
  
  gen.datasetCheckboxes(sel, 'phenology-check', 'phenologyDisplay')

  // Layout for summary tables
  const div = d3.select(sel).append('div')
  
  function tableDiv(i) {
    const tabDiv = div.append('div')
    tabDiv.attr('id', `phenology-div-${i}`)
    tabDiv.append('h4').attr('id', `phenology-name-${i}`)
    tabDiv.append('p').attr('id', `phenology-message-${i}`)
    tabDiv.append('div').attr('id', `phenology-chart-${i}`)
  }
  tableDiv(1)
  tableDiv(2)

  //d3.select('#phenology-div-1').text('phenology chart 1')
  //d3.select('#phenology-div-2').text('phenology chart 2')

  //const d1 = d3.select(sel).append('div')
}

export function tabSelected() {
  
  for (let i=0; i<2; i++) {
    
    // Warn if data selected but the necessary config is not set
    if (gen.data[i] && gen.data[i].fields && (!gen.data[i].fields.taxon  || !gen.data[i].fields.date)) {
      d3.select(`#phenology-message-${i+1}`).html(`
        To see phenology charts, both <i>taxon</i> and <i>date</i> fields must be configured.
      `)
    } else {
      d3.select(`#phenology-message-${i+1}`).html('blah')
    }

    // Generate penology data if not already exists and all the necessary config is set
    if (!phenData[i] && gen.data[i] && gen.data[i].fields && gen.data[i].fields.taxon  && gen.data[i].fields.taxon) {
      phenData[i] = []
      gen.data[i].json.forEach(r => {
        const date = r[gen.data[i].fields.date]
        const taxon = r[gen.data[i].fields.taxon]
        if (date && taxon && gen.dateValid(date)) {
          const week = gen.dateWeek(date)
          const pd = phenData[i].find(pd => pd.taxon === taxon && pd.week === week)
          if (pd) {
            pd.count = pd.count + 1
          } else {
            phenData[i].push({
              taxon: taxon,
              week: week,
              count: 1
            })
          }
        }
      })

      console.log("phen data", phenData[i])
    }
  }
}

export function dataCleared(i) {
  clear(i)
}

export function fieldConfigCleared(i) {
  clear(i)
}

// Exported from the library to use from html interface
export function phenologyDisplay() {
  // Function responsible for display one or both charts
  const d1 = d3.select('#phenology-check-1').property("checked")
  const d2 = d3.select('#phenology-check-2').property("checked")

  if (d1 && d2) {
    d3.select('#phenology-div-1').classed("split", true)
    d3.select('#phenology-div-2').classed("split", true)
  } else {
    d3.select('#phenology-div-1').classed("split", false)
    d3.select('#phenology-div-2').classed("split", false)
  }
  if (d1) {
    d3.select('#phenology-div-1').style("display", "")
  } else {
    d3.select('#phenology-div-1').style("display", "none")
  }
  if (d2) {
    d3.select('#phenology-div-2').style("display", "")
  } else {
    d3.select('#phenology-div-2').style("display", "none")
  }
}

// Helper functions
function clear(i) {
  phenData[i-1] = null
}