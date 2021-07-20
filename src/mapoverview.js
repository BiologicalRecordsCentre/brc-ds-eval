import * as d3 from 'd3'
import * as gen from './gen'
import { getLowerResGrs, checkGr } from 'brc-atlas-bigr'
//import bigr from 'brc-atlas-bigr'

let maps = [null, null]
const noTaxonText = 'No taxon displayed'

// Standard interface functions
export function gui(sel) {

  // Options for overvie map
  const fldset = d3.select(sel).append('fieldset')
  fldset.append('legend').text('Map options')
  fldset.style('margin-top', '0.5em')
   // Combined taxon selector
  gen.taxonSelectionControl(fldset, 'overviewmap', 'brcdseval.mapoverviewClearMap', 'brcdseval.mapoverviewMap')
  function makeMapDiv(i) {
    const div = d3.select(sel).append('div')
    div.attr('id', `overviewmap-div-${i}`)
    div.classed('split2', true)
    div.append('h4').attr('id', `overviewmap-name-${i}`)
    div.append('p').attr('id', `overviewmap-message-${i}`)
    div.append('p').attr('id', `overviewmap-taxon-name-${i}`).text(noTaxonText)
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
        gen.populateTaxonSelectionControl('overviewmap')
      }
      d3.select(`#overviewmap-div-${i}`).style("display", maps[i-1] ? "" : "none")
      d3.select(`#overviewmap-name-${i}`).text(`D${i}: ${gen.data[i-1].name}`)
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
  
  let taxon = d3.select('#overviewmap-taxon').property('value')
  // Strip the ds suffix
  if (taxon.endsWith('1,2')) {
    taxon = taxon.substring(0, taxon.length-4)
  } else {
    taxon = taxon.substring(0, taxon.length-2)
  }

  const updateMap = (i) => {
    // Taxon text
    if (taxon) {
      d3.select(`#overviewmap-taxon-name-${i}`).text(taxon)
    } else {
      d3.select(`#overviewmap-taxon-name-${i}`).text(noTaxonText)  
    }
    maps[i-1].setIdentfier({i: i, taxon: taxon})
    maps[i-1].redrawMap()
  }
 
  if (i === 3) {
    if (maps[0]) updateMap(1)
    if (maps[1]) updateMap(2)
  } else {
    if (maps[i-1]) updateMap(i)
  }
}

export function clear(i) {
  maps[i-1] = null
  d3.select(`#overviewmap-container-${i}`).html('')
  d3.select(`#overviewmap-taxon-name-${i}`).text(noTaxonText)
}

export function mapoverviewClearMap(input) {
  input.value = ''
  //maps[i-1].clearMap()
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