import * as d3 from 'd3'
import * as gen from './gen'
import { getLowerResGrs, checkGr } from 'brc-atlas-bigr'
//import Split from 'split.js'

//import bigr from 'brc-atlas-bigr'

let maps = [null, null]
const dChecked = [true, false, false]

// Standard interface functions
export function gui(sel) {

  gen.datasetCheckboxes(sel, 'slippymap-check', 'mapslippyDisplay', true)

  // Layout for time series charts
  const div = d3.select(sel).append('div')

  // Options for slippy map
  const fldset = div.append('fieldset')
  fldset.append('legend').text('Map options')
  fldset.style('margin-top', '0.5em')

  // Height input
  gen.numberInput(fldset, 'input-slippymap-height', 'Map height', 300, 1200, 'brcdseval.mapslippySetHeight')

  // Layout for time series charts
  const divMaps = d3.select(sel).append('div')

  function makeMapDiv(i) {
    const div = divMaps.append('div')
    div.attr('id', `slippymap-div-${i}`)


    div.append('h4').attr('id', `slippymap-name-${i}`)
    const p = div.append('p')
    gen.taxonSelectionControl(p, i, 'slippymap', 'brcdseval.mapslippyClearMap', 'brcdseval.mapslippyMap', 'Map')
    div.append('p').attr('id', `slippymap-message-${i}`)
    div.append('div').attr('id', `slippymap-container-${i}`)
  }

  makeMapDiv(1)
  makeMapDiv(2)

  // Div for combined display
  const tabDiv = div.append('div')
  tabDiv.style('display', 'none')
  tabDiv.attr('id', `slippymap-div-combine`)
  tabDiv.append('h4').attr('id', `slippymap-name-combine`)
  tabDiv.append('p').attr('id', `slippymap-message-combine`)
  tabDiv.append('div').attr('id', `slippymap-chart-combine`)
}

export function tabSelected() {

  const checkMap = (i) => {

    if (gen.data[i-1].fields && (!gen.data[i-1].fields.gr || !gen.data[i-1].fields.taxon)) {
      d3.select(`#slippymap-message-${i}`)
        .html(`
          For the slippy map, you must configure both the <i>Taxon</i> and <i>Grid ref</i> columns.
        `)
      d3.select(`#slippymap-message-${i}`).style('display', '')
    } else {
      d3.select(`#slippymap-message-${i}`).style('display', 'none')

      if (!maps[i-1] && gen.data[i-1].json && gen.data[i-1].fields) {
        // Create brc-atlas map object
        maps[i-1] = window.brcatlas.leafletMap({
          selector: `#slippymap-container-${i}`,
          mapid: `slippymap${i}`,
          mapTypesSel: {hectad: genHecatdMap},
          mapTypesKey: 'hectad'
        })

        // Reset map width to 100%
        d3.select(`#slippymap${i}`).style('width', '100%')

        // Create taxon selection list
        gen.populateTaxonSelectionControl(i, 'slippymap')
      }
      d3.select(`#slippymap-div-${i}`).style("display", maps[i-1] ? "" : "none")
      d3.select(`#slippymap-name-${i}`).text(gen.data[i-1].name)
    }
  }
  checkMap(1)
  checkMap(2)

  refreshMaps()
}

export function dataCleared(i) {
  clear(i)
}

export function fieldConfigCleared(i) {
  clear(i)
}

// Exported from the library to use from html interface
export function mapslippyMap(i) {
  const taxon = d3.select(`#slippymap-taxon-${i}`).property('value')
  maps[i-1].setIdentfier({i: i, taxon: taxon})
  maps[i-1].redrawMap()
}

export function clear(i) {
  maps[i-1] = null
  d3.select(`#slippymap-container-${i}`).html('')
}

export function mapslippyClearMap(i, input) {
  input.value = ''
  maps[i-1].clearMap()
}

export function mapslippyDisplay() {
   // Function responsible for display one or both charts
  dChecked[0] = d3.select('#slippymap-check-1').property("checked")
  dChecked[1] = d3.select('#slippymap-check-2').property("checked")
  dChecked[2] = d3.select(`#slippymap-check-combine`).property('checked')

  if (dChecked[2] && dChecked[0] && dChecked[1]) {
    d3.select('#slippymap-div-combine').style("display", "")
    d3.select('#slippymap-div-1').style("display", "none")
    d3.select('#slippymap-div-2').style("display", "none")
  } else {
    d3.select('#slippymap-div-combine').style("display", "none")
    if (dChecked[0] && dChecked[1]) {
      d3.select('#slippymap-div-1').classed("splitx", true)
      d3.select('#slippymap-div-2').classed("splitx", true)
    } else {
      d3.select('#slippymap-div-1').classed("splitx", false)
      d3.select('#slippymap-div-2').classed("splitx", false)
    }
    if (dChecked[0]) {
      d3.select('#slippymap-div-1').style("display", "")
    } else {
      d3.select('#slippymap-div-1').style("display", "none")
    }
    if (dChecked[1]) {
      d3.select('#slippymap-div-2').style("display", "")
    } else {
      d3.select('#slippymap-div-2').style("display", "none")
    }
  }
  //displayData()

  refreshMaps()
}

export function mapslippySetHeight(){
  maps.forEach((m,i) => {
    if (m) {
      let height = Number(d3.select('#input-slippymap-height').property('value'))
      if (!height) {
        height = 500
      }
      const bounds = document.getElementById(`slippymap${i+1}`).getBoundingClientRect()
      const width = bounds.width
      m.setSize(width, height)

      d3.select(`#slippymap${i}`).style('width', '100%')
    }
  })
}

// Helper functions
function genHecatdMap(props) {

  const i = props.i
  const taxon = props.taxon
  const fgr = gen.data[i-1].fields.gr
  const ft = gen.data[i-1].fields.taxon

  let hectads = []
  gen.data[i-1].json.forEach(r => {
    let grcheck
    try {
      grcheck = checkGr(r[fgr])
    }
    catch(err) {
      grcheck = null
    }
    if (grcheck && grcheck.precision <= 10000) {
      const hectad = getLowerResGrs(r[fgr]).p10000
      if (r[ft] === taxon) {
        if (hectads.indexOf(hectad) === -1) {
          hectads.push(hectad)
        }
      }
    }
  })
  const data = hectads.map(h => {
    return {gr: h, colour: 'black'}
  })

  return new Promise((resolve) => {
    resolve({
      records: data,
      precision: 10000,
      shape: 'circle',
      opacity: 1,
      size: 1
    })
  })
}

function refreshMaps() {

  // let width, height
  // if (maps[0]) {
  //   const bounds = document.getElementById('slippymap1').getBoundingClientRect()
  //   width = bounds.width
  //   height = bounds.height
  // }
  // if (maps[0] && maps[1]) {
  //    maps[1].setSize(width, height)
  // }

  maps.forEach(m => {
    if(m){
      m.invalidateSize()
    }
  })
}
