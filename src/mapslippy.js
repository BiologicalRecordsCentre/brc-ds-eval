import * as d3 from 'd3'
import * as gen from './gen'
import { getLowerResGrs, checkGr } from 'brc-atlas-bigr'

//import Split from 'split.js'

//import bigr from 'brc-atlas-bigr'

let maps = [null, null, null]
const dChecked = [true, false, false]
let mapDisplayed = [false, false, false]
const taxa = ['', '', '']
let movingMap = false
const noTaxonText = 'No taxon displayed'

// Standard interface functions
export function gui(sel) {

  gen.datasetCheckboxes(sel, 'slippymap-check', 'mapslippyDisplay', true)

  // Layout for the slippy maps
  const div = d3.select(sel).append('div')

  // Options for slippy maps
  const fldset = div.append('fieldset')
  fldset.append('legend').text('Map options')
  fldset.style('margin-top', '0.5em')

  // Combined taxon selector
  gen.taxonSelectionControl(fldset, 'slippymap', 'brcdseval.mapslippyClearMap', 'brcdseval.mapslippyMap')

  // Map type selector
  gen.dropDown(fldset, 'input-slippymap-maptype', 'Set map type...', ['Hectad', 'Quadrant', 'Tetrad', 'Monad', 'Point'], 'Hectad', 'brcdseval.mapslippyMap')

  // Height input
  gen.numberInput(fldset, 'input-slippymap-height', 'Map height:', 300, 1200, 500, 'brcdseval.mapslippySetHeight', true)

  // Basemap fader
  gen.numberInput(fldset, 'input-slippymap-basemap-opacity', 'Base opacity:', 0, 100, 50, 'brcdseval.mapslippyBasemapOpacity', true)


  gen.checkbox(fldset, 'cluster-threshold', 'Reduce cluster at high zoom', 'brcdseval.mapslippyClusterChanged', false)

  // Layout for slippy maps
  const divMaps = d3.select(sel).append('div')
  const divCombined = d3.select(sel).append('div')

  function makeMapDiv(i) {
    const parent = i < 3 ? divMaps : divCombined
    const div = parent.append('div')
    div.attr('id', `slippymap-div-${i}`)
    div.append('h4').attr('id', `slippymap-name-${i}`)
    div.append('p').attr('id', `slippymap-message-${i}`)
    div.append('p').attr('id', `slippymap-taxon-name-${i}`).text(noTaxonText)
    const container = div.append('div').attr('id', `slippymap-container-${i}`)
    container.style('border', '1px solid black')
  }
  makeMapDiv(1)
  makeMapDiv(2)
  makeMapDiv(3)
}

export function tabSelected() {

  const moveMaps = (iMap) => {
    if (!movingMap) {
      movingMap = true
      const latlng = maps[iMap-1].lmap.getCenter()
      const zoom =  maps[iMap-1].lmap.getZoom()
      maps.forEach((m,i) => {
        if (m && i+1 !== iMap) {
          m.lmap.setView(latlng, zoom)
        }
      })
      movingMap = false
    }
  }

  const checkFields = (i) => {
    if (!gen.data[i-1].fields) {
      return `You must configure the column mappings of dataset ${i}.`
    } else  if (gen.data[i-1].fields && (!gen.data[i-1].fields.gr || !gen.data[i-1].fields.taxon)) {
      return `For the exploration map, you must configure both the <i>Taxon</i> and <i>Grid ref</i> columns of dataset ${i}.`
    } else {
      return ''
    }
  }
  
  const pointClicked = (gr, id, caption) => {

    const ids = id.split('-')
    const i = ids[0]
    const row = ids[1]
    const attrs = gen.data[i-1].json[row]
    let html = ''
    Object.keys(attrs).forEach(a => {
      html = html ? `${html}</br>` : ''
      html = `${html}<b>${a}</b>: ${attrs[a]}`
    })
    d3.select('#modalDialogContent').html(html)
    d3.select('#modalDialog').style('display', 'block')
    d3.select('.modal-close').on('click', () => {
      d3.select('#modalDialog').style('display', 'none')
    })
  }

  const checkMap = (i) => {
    let msg
    if (i === 3) {
      const msg1 = checkFields(1)
      const msg2 = checkFields(2)
      msg = msg1 && msg2 ? `${msg1} ${msg2}` : msg1 ? msg1 :  msg2 ? msg2 : ''
    } else {
      msg = checkFields(i)
    }
  
    if (msg) {
      d3.select(`#slippymap-message-${i}`).html(msg)
      d3.select(`#slippymap-message-${i}`).style('display', '')
    } else {
      d3.select(`#slippymap-message-${i}`).style('display', 'none')

      if (!maps[i-1]) {
        // Create brc-atlas map object
        const reduceCluster = d3.select('#cluster-threshold').property('checked')
        maps[i-1] = window.brcatlas.leafletMap({
          selector: `#slippymap-container-${i}`,
          mapid: `slippymap${i}`,
          mapTypesSel: {atlas: atlasMap},
          mapTypesKey: 'atlas',
          //legendOptlegendOpts: {display: true}
          clusterZoomThreshold: reduceCluster ? 10 : 19,
          legendOpts: {
            display: i===3 ? true : false,
            scale: 0.8,
            x: 10
          },
          onclick: pointClicked
        })

        // Set opacity
        mapslippyBasemapOpacity()

        // Synchronise panning/zooming
        maps[i-1].lmap.on('zoomend', () => moveMaps(i))
        maps[i-1].lmap.on('moveend', () => moveMaps(i))

        // Basemaps
        addBaseMaps(i)

        // Reset map width to 100%
        d3.select(`#slippymap${i}`).style('width', '100%')

        // Create taxon selection list
        //gen.populateTaxonSelectionControl(i, 'slippymap')
      }
      d3.select(`#slippymap-div-${i}`).style("display", maps[i-1] ? "" : "none")

      if (i === 3) {
        d3.select(`#slippymap-name-${i}`).text('Combined display')
      } else {
        d3.select(`#slippymap-name-${i}`).text(`D${i}: ${gen.data[i-1].name}`)
      }
      
    }
  }
  gen.populateTaxonSelectionControl('slippymap')

  checkMap(1)
  checkMap(2)
  checkMap(3)

  mapslippyDisplay()

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
  // If no argument set, then the function has been called from
  // map type drop-down.

  const updateMap = (i) => {

    const taxon = taxa[i-1]
    const mapType = d3.select('#input-slippymap-maptype').property('value')

    // Taxon text
    if (taxon) {
      d3.select(`#slippymap-taxon-name-${i}`).text(`${taxon} - ${mapType}`)
    } else {
      d3.select(`#slippymap-taxon-name-${i}`).text(noTaxonText)  
    }
    // Map
    maps[i-1].setIdentfier({i: i, taxon: taxon, mapType: mapType})
    maps[i-1].redrawMap()
  }

  if (i) {
    // Called from taxon selector.
    let taxon = d3.select('#slippymap-taxon').property('value')
    // Strip the ds suffix
    if (taxon.endsWith('1,2')) {
      taxon = taxon.substring(0, taxon.length-4)
    } else {
      taxon = taxon.substring(0, taxon.length-2)
    }
    
    if (i === 3) {
      // 'Both' button clicked
      if (mapDisplayed[2]) {
        console.log('update 3')        // Combined map
        taxa[i-1] = taxon
        updateMap(3)
      } else {
        // Separate maps
        taxa[0] = taxon
        if (mapDisplayed[0]) updateMap(1)
        taxa[1] = taxon
        if (mapDisplayed[1]) updateMap(2)
      }
    } else {
      // D1 or D2 button clicked
      taxa[i-1] = taxon
      if (mapDisplayed[i-1]) updateMap(i)
    }
  } else {
    // Map type changed
    maps.forEach((m,i) => {
      if(m && mapDisplayed[i]) {
        updateMap(i+1)
      }
    })
  }
}

export function mapslippyClearMap(input) {
  input.value = ''
  //maps[i-1].clearMap()
}

export function mapslippyDisplay() {

  // Function responsible for display one or both maps
  dChecked[0] = d3.select('#slippymap-check-1').property("checked")
  dChecked[1] = d3.select('#slippymap-check-2').property("checked")
  dChecked[2] = d3.select(`#slippymap-check-combine`).property('checked')

  if (dChecked[2] && dChecked[0] && dChecked[1]) {
    mapDisplayed = [false, false, true]
  } else {
    mapDisplayed[0] = dChecked[0]
    mapDisplayed[1] = dChecked[1]
    mapDisplayed[2] = false
    if (dChecked[0] && dChecked[1]) {
      d3.select('#slippymap-div-1').classed("splitx", true)
      d3.select('#slippymap-div-2').classed("splitx", true)
    } else {
      d3.select('#slippymap-div-1').classed("splitx", false)
      d3.select('#slippymap-div-2').classed("splitx", false)
    }
  }
  for (let i=0; i<3; i++) {
    d3.select(`#slippymap-div-${i+1}`).style("display",  mapDisplayed[i] ? '' : 'none')
  }

  refreshMaps()
}

export function mapslippySetHeight(){
  maps.forEach((m,i) => {
    if (m) {
      let height = Number(d3.select('#input-slippymap-height').property('value'))
      if (!height) {
        height = 500 // This matches the default in brcatlas
      }
      const bounds = document.getElementById(`slippymap${i+1}`).getBoundingClientRect()
      const width = bounds.width
      m.setSize(width, height)

      d3.select(`#slippymap${i}`).style('width', '100%')
    }
  })
}

export function mapslippyBasemapOpacity() {
 const opacity = Number(d3.select('#input-slippymap-basemap-opacity').property('value'))
 d3.selectAll('.leaflet-tile-pane').style('opacity', opacity/100)
}

export function mapslippyClusterChanged() {

  const reduceCluster = d3.select('#cluster-threshold').property('checked')
  maps.forEach(m => {
    if(m){
      m.changeClusterThreshold(reduceCluster ? 10 : 19)
    }
  })
  console.log('mapslippyClusterChanged')
}

// Helper functions
function clear(i) {
  maps[i-1] = null
  d3.select(`#slippymap-container-${i}`).html('')
  d3.select(`#slippymap-container-3`).html('')

  d3.select(`#slippymap-taxon-name-${i}`).text(noTaxonText)
  d3.select(`#slippymap-taxon-name-3`).html('')
}

function atlasMap(identifier) {

  console.log('atlasmap', identifier)

  const isCached = (i, taxon, precision) => {
    return gen.data[i-1] && gen.data[i-1].atlas && gen.data[i-1].atlas[taxon] && gen.data[i-1].atlas[taxon][`p${precision}`]
  }
  const getCached = (i, taxon, precision) => {
    if (isCached(i, taxon, precision)) {
      return gen.data[i-1].atlas[taxon][`p${precision}`]
    }
  }
  const setCache = (i, taxon, precision, data) => {
    if (!gen.data[i-1]) gen.data[i-1]={} // Can be the case for combined data (i=3)
    if (!gen.data[i-1].atlas) gen.data[i-1].atlas={}
    if (!gen.data[i-1].atlas[taxon]) gen.data[i-1].atlas[taxon]={}
    gen.data[i-1].atlas[taxon][`p${precision}`] = data
  }

  const getData = (i, taxon, precision) => {

    //console.log('rawdata', gen.data[i-1])
    console.log(i, taxon, precision)

    const fgr = gen.data[i-1].fields.gr
    const ft = gen.data[i-1].fields.taxon

    let data
    if (isCached(i, taxon, precision)) {
      data = getCached(i, taxon, precision)
    } else {
      // Generate data
      data = []
      gen.data[i-1].json.forEach((r,row) => {
        let grcheck
        try {
          grcheck = checkGr(r[fgr])
        }
        catch(err) {
          grcheck = null
        }
        if (grcheck && (grcheck.precision <= precision  || precision === 0)) {
          let gr = precision === 0 ? r[fgr] : getLowerResGrs(r[fgr])[`p${precision}`]

          // For quadrants and array is returned
          if (precision === 5000){
            if (gr.length === 1) {
              gr = gr[0]
            } else {
              gr = null
            }
          }
          if (gr && r[ft] === taxon) {
            if (precision === 0) {
              // No aggregating of point data
              data.push({id: `${i}-${row}`, gr: gr})
            } else {
              //Altas data is aggregated
              if (data.indexOf(gr) === -1) {
                data.push(gr)
              }
            }
          }
        }
      })
      setCache(i, taxon, precision, data)
    }
    return data
  }
 
  const i = identifier.i
  const taxon = identifier.taxon
  let precision
  switch(identifier.mapType) {
    case 'Hectad': 
      precision=10000
      break
    case 'Quadrant':
      precision=5000
      break
    case 'Tetrad':
      precision=2000
      break
    case 'Monad':
      precision=1000
      break
    default:
      precision=0
  }

  let atlas
  if (i===3) {
    if (isCached(3, taxon, precision)) {
      atlas = getCached(3, taxon, precision)
    } else {
      const d1 = getData(1, taxon, precision)
      const d2 = getData(2, taxon, precision)
      if (precision === 0) {
        atlas = [...d1.map(d => {return{gr: d.gr, id: d.id, colour: 'blue'}}), ...d2.map(d => {return{gr: d.gr, id: d.id, colour: 'red'}})]
      } else {
        // Merge the two datasets, mapping grs to objects that
        // indicate both gr and dataset occurrence (colour)
        atlas = d1.map(gr => {return {gr: gr, colour: 'blue'}})
        d2.forEach(gr => {
          const match = atlas.find(e => e.gr === gr)
          if (match){
            match.colour = 'gold'
          } else {
            atlas.push({gr: gr, colour: 'red'})
          }
        })
      }
      setCache(i, taxon, precision, atlas)
      console.log(atlas)
    }
  } else {
    atlas = getData(i, taxon, precision)
  }

  console.log('atlas', atlas)
  console.log('i', i)

  let data, legend
  if (i < 3) {
    if (precision === 0) {
      data = atlas.map(r => {
        return {gr: r.gr, id: r.id, colour: 'blue'}
      })
    } else {
      data = atlas.map(gr => {
        return {gr: gr, colour: 'blue'}
      })
    }
    legend = {}
  } else {
    data = atlas
    legend = {
      title: 'Dataset presence',
      size: 1,
      shape: 'square',
      precision: precision,
      opacity: 0.8,
      lines:[
        {
          colour: 'blue',
          text: gen.data[0].name,
        },
        {
          colour: 'red',
          text: gen.data[1].name,
        },
        {
          colour: 'gold',
          text: 'Both datasets',
        },
      ]
    }
  }
 
  console.log('legend', legend)
  return new Promise((resolve) => {
    resolve({
      records: data,
      precision: precision,
      shape: 'square',
      opacity: 0.8,
      size: 1,
      legend: legend
    })
  })
}

function refreshMaps() {
  maps.forEach(m => {
    if(m){
      m.invalidateSize()
    }
  })
}

function addBaseMaps(iMap) {
  const stamentoner = {
    name: 'Stamen Toner',
    type: 'wms',
    selected: true,
    url: 'https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}{r}.png', 
    opts: {
      attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      // bounds: [[49.6, -12], [61.7, 3]],
      // minZoom: 1,
      // maxZoom: 18,
      // subdomains: '0123'
      opacity: 1
    }
    
  }
  maps[iMap-1].addBasemapLayer(stamentoner)
}
