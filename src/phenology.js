import * as d3 from 'd3'
import * as gen from './gen'

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

  d3.select('#phenology-div-1').text('phenology chart 1')
  d3.select('#phenology-div-2').text('phenology chart 2')

  //const d1 = d3.select(sel).append('div')
}

export function tabSelected() {

  // const phenData = [null, null]
  
  // for (let i=0; i<=2; i++) {

  //   if (gen.data[i] && gen.data[i].fields && gen.data[i].fields.taxon) {
  //     gen.data[i].json
  //   }
  // }
}

export function dataCleared(i) {
}

export function fieldConfigCleared(i) {
}

export function phenologyDisplay() {
  // Function responsible for display one or both tables
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