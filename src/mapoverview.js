import * as d3 from 'd3'
import * as gen from './gen'
import { getLowerResGrs, checkGr } from 'brc-atlas-bigr'
//import bigr from 'brc-atlas-bigr'

let maps = [null, null]

// Standard interface functions
export function gui(sel) {

  function makeMapDiv(i) {
    const div = d3.select(sel).append('div')
    div.attr('id', `overviewmap-div-${i}`)
    div.classed('split2', true)
    div.append('h4').attr('id', `overviewmap-name-${i}`)
    const p = div.append('p')
    gen.taxonSelectionControl(p, i, 'overviewmap', 'brcdseval.mapoverviewClearMap', 'brcdseval.mapoverviewMap', 'Map')
    div.append('p').attr('id', `overviewmap-message-${i}`)
    div.append('div').attr('id', `overviewmap-container-${i}`)
  }
  makeMapDiv(1)
  makeMapDiv(2)
}

export function tabSelected() {

  const checkMap = (i) => {

    if (gen.data[i-1].fields && (!gen.data[i-1].fields.gr || !gen.data[i-1].fields.taxon)) {
      d3.select(`#overviewmap-message-${i}`)
        .html(`
          For the overview map, you must configure both the <i>Taxon</i> and <i>Grid ref</i> columns.
        `)
      d3.select(`#overviewmap-message-${i}`).style('display', '')
    } else {
      d3.select(`#overviewmap-message-${i}`).style('display', 'none')

      if (!maps[i-1] && gen.data[i-1].json && gen.data[i-1].fields) {
        // Create brc-atlas map object
        maps[i-1] = window.brcatlas.svgMap({
          selector: `#overviewmap-container-${i}`,
          mapid: `overviewmap${i}`,
          transOptsKey: 'BI4',
          mapTypesControl: false,
          transOptsControl: false,
          mapTypesSel: {hectad: genHecatdMap},
          mapTypesKey: 'hectad'
        })
        // Create taxon selection list
        gen.populateTaxonSelectionControl(i, 'overviewmap')
      }
      d3.select(`#overviewmap-div-${i}`).style("display", maps[i-1] ? "" : "none")
      d3.select(`#overviewmap-name-${i}`).text(gen.data[i-1].name)
    }
  }
  checkMap(1)
  checkMap(2)
}

export function dataCleared(i) {
  clear(i)
}

export function fieldConfigCleared(i) {
  clear(i)
}

// Exported from the library to use from html interface
export function mapoverviewMap(i) {
  const taxon = d3.select(`#overviewmap-taxon-${i}`).property('value')
  maps[i-1].setIdentfier({i: i, taxon: taxon})
  maps[i-1].redrawMap()
}

export function clear(i) {
  maps[i-1] = null
  d3.select(`#overviewmap-container-${i}`).html('')
}

export function mapoverviewClearMap(i, input) {
  input.value = ''
  maps[i-1].clearMap()
}

export function mapoverviewDisplay() {
  // Function responsible for display one or both maps
  const d1 = d3.select('#overviewmap-check-1').property("checked")
  const d2 = d3.select('#overviewmap-check-2').property("checked")

  if (d1) {
    d3.select('#overviewmap-div-1').style("display", "")
  } else {
    d3.select('#overviewmap-div-1').style("display", "none")
  }
  if (d2) {
    d3.select('#overviewmap-div-2').style("display", "")
  } else {
    d3.select('#overviewmap-div-2').style("display", "none")
  }
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