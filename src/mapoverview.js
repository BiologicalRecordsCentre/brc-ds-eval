import * as d3 from 'd3'
import * as gen from './gen'
import { getLowerResGrs, checkGr } from 'brc-atlas-bigr'
//import bigr from 'brc-atlas-bigr'

let dataraw, maps = [null, null], taxa = [null, null]

export function gui(sel) {

  function makeMapDiv(i) {
    const div = d3.select(sel).append('div')
    div.attr('id', `overviewmap-div-${i}`)
    div.classed('split2', true)
    div.append('h4').attr('id', `overviewmap-name-${i}`)
    const p = div.append('p')
    const input = p.append('input')
    input.attr('id', `overviewmap-taxon-${i}`)
    input.attr('list', `overviewmap-datalist-${i}`)
    input.attr('onfocus', `brcdseval.mapoverviewClearMap(${i}, this)`)
    input.attr('placeholder', 'Start typing taxon...')
    const datalist = p.append('datalist')
    datalist.attr('id', `overviewmap-datalist-${i}`)
    datalist.attr('autocomplete', 'on')
    const button = p.append('button').text('Map')
    button.attr('onclick', `brcdseval.mapoverviewMap(${i})`)
    div.append('p').attr('id', `overviewmap-message-${i}`)
    div.append('div').attr('id', `overviewmap-container-${i}`)
  }
  makeMapDiv(1)
  makeMapDiv(2)
}

export function tabSelected() {

  dataraw = gen.data

  const checkMap = (i) => {

    if (dataraw[i-1].fields && (!dataraw[i-1].fields.gr || !dataraw[i-1].fields.taxon)) {
      d3.select(`#overviewmap-message-${i}`)
        .html(`
          For the overview map, you must configure both the <i>Taxon</i> and <i>Grid ref</i> columns.
        `)
      d3.select(`#overviewmap-message-${i}`).style('display', '')
    } else {
      d3.select(`#overviewmap-message-${i}`).style('display', 'none')

      if (!maps[i-1] && dataraw[i-1].json && dataraw[i-1].fields) {
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
        const tf = dataraw[i-1].fields.taxon
        taxa[i-1] = []
        dataraw[i-1].json.forEach(r => {
          if (taxa[i-1].indexOf(r[tf]) === -1) {
            taxa[i-1].push(r[tf])
          }
        })
        taxa[i-1].sort().forEach(t => {
          d3.select(`#overviewmap-datalist-${i}`).append('option').text(t)
        })
      }
      d3.select(`#overviewmap-div-${i}`).style("display", maps[i-1] ? "" : "none")
      d3.select(`#overviewmap-name-${i}`).text(dataraw[i-1].name)
      console.log('taxa',taxa)
    }
  }
  checkMap(1)
  checkMap(2)
}

export function dataCleared(i) {
  //maps[i-1].clearMap()
}

export function fieldConfigCleared(i) {
  //maps[i-1].clearMap()
}

function genHecatdMap(props) {

  const i = props.i
  const taxon = props.taxon
  const fgr = dataraw[i-1].fields.gr
  const ft = dataraw[i-1].fields.taxon

  let hectads = []
  dataraw[i-1].json.forEach(r => {
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

export function mapoverviewMap(i) {
  const taxon = d3.select(`#overviewmap-taxon-${i}`).property('value')
  maps[i-1].setIdentfier({i: i, taxon: taxon})
  maps[i-1].redrawMap()
}

export function clear(i) {
  maps[i-1] = null
  taxa[i-1] = null
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