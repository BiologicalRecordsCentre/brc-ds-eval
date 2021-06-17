import * as d3 from 'd3'
import * as gen from './gen'
import { getLowerResGrs, checkGr } from 'brc-atlas-bigr'
//import Split from 'split.js'

//import bigr from 'brc-atlas-bigr'

let maps = [null, null, null]
const dChecked = [true, false, false]
let movingMap = false

// Standard interface functions
export function gui(sel) {

  gen.datasetCheckboxes(sel, 'slippymap-check', 'mapslippyDisplay', true)

  // Layout for the slippy maps
  const div = d3.select(sel).append('div')

  // Options for slippy maps
  const fldset = div.append('fieldset')
  fldset.append('legend').text('Map options')
  fldset.style('margin-top', '0.5em')

  // Height input
  gen.numberInput(fldset, 'input-slippymap-height', 'Map height:', 300, 1200, 500, 'brcdseval.mapslippySetHeight', true)

  // Basemap fader
  gen.numberInput(fldset, 'input-slippymap-basemap-opacity', 'Base opacity:', 0, 100, 50, 'brcdseval.mapslippyBasemapOpacity', true)

  // Map type selector
  gen.dropDown(fldset, 'input-slippymap-maptype', 'Set map type...', ['Hectad', 'Quadrant', 'Tetrad', 'Monad', 'Point'], 'Hectad', 'brcdseval.mapslippyMap')

  // Layout for slippy maps
  const divMaps = d3.select(sel).append('div')
  const divCombined = d3.select(sel).append('div')

  function makeMapDiv(i) {
    const parent = i < 3 ? divMaps : divCombined
    const div = parent.append('div')
    div.attr('id', `slippymap-div-${i}`)
    div.append('h4').attr('id', `slippymap-name-${i}`)
    const p = div.append('p')
    gen.taxonSelectionControl(p, i, 'slippymap', 'brcdseval.mapslippyClearMap', 'brcdseval.mapslippyMap', 'Map')
    div.append('p').attr('id', `slippymap-message-${i}`)
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
        maps[i-1] = window.brcatlas.leafletMap({
          selector: `#slippymap-container-${i}`,
          mapid: `slippymap${i}`,
          mapTypesSel: {visit: atlasMap},
          mapTypesKey: 'visit'
        })

        // Synchronise panning/zooming
        maps[i-1].lmap.on('zoomend', () => moveMaps(i))
        maps[i-1].lmap.on('moveend', () => moveMaps(i))

        // Add event handler to set basemap opacity
        maps[i-1].lmap.on('layeradd', () => mapslippyBasemapOpacity())

        // Basemaps
        addBaseMaps(i)

        // 

        // Reset map width to 100%
        d3.select(`#slippymap${i}`).style('width', '100%')

        // Create taxon selection list
        gen.populateTaxonSelectionControl(i, 'slippymap')
      }
      d3.select(`#slippymap-div-${i}`).style("display", maps[i-1] ? "" : "none")

      if (i === 3) {
        d3.select(`#slippymap-name-${i}`).text('Combined display')
      } else {
        d3.select(`#slippymap-name-${i}`).text(gen.data[i-1].name)
      }
      
    }
  }
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

  const mapType = d3.select('#input-slippymap-maptype').property('value')
  console.log(mapType)

  const updateMap = (i) => {
    const taxon = d3.select(`#slippymap-taxon-${i}`).property('value')
    maps[i-1].setIdentfier({i: i, taxon: taxon, mapType: mapType})
    maps[i-1].redrawMap()
  }

  if (i) {
    updateMap(i)
  } else {
    maps.forEach((m,i) => {
      if(m) {
        updateMap(i+1)
      }
    })
  }
}

export function mapslippyClearMap(i, input) {
  input.value = ''
  maps[i-1].clearMap()
}

export function mapslippyDisplay() {

   // Function responsible for display one or both maps
  dChecked[0] = d3.select('#slippymap-check-1').property("checked")
  dChecked[1] = d3.select('#slippymap-check-2').property("checked")
  dChecked[2] = d3.select(`#slippymap-check-combine`).property('checked')

  if (dChecked[2] && dChecked[0] && dChecked[1]) {
    d3.select('#slippymap-div-3').style("display", "")
    d3.select('#slippymap-div-1').style("display", "none")
    d3.select('#slippymap-div-2').style("display", "none")
  } else {
    d3.select('#slippymap-div-3').style("display", "none")
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
 d3.selectAll('.leaflet-tile-container').style('opacity', opacity/100)
}

// Helper functions
function clear(i) {
  maps[i-1] = null
  d3.select(`#slippymap-container-${i}`).html('')
  d3.select(`#slippymap-container-3`).html('')
}

function atlasMap(identifier) {

  const getData = (i, taxon, precision) => {

    console.log(i, taxon, precision)
    const fgr = gen.data[i-1].fields.gr
    const ft = gen.data[i-1].fields.taxon

    let data = []
    gen.data[i-1].json.forEach(r => {
      let grcheck
      try {
        grcheck = checkGr(r[fgr])
      }
      catch(err) {
        grcheck = null
      }
      if (grcheck && grcheck.precision <= precision) {
        let gr = getLowerResGrs(r[fgr])[`p${precision}`]

        // For quadrants and array is returned
        if (precision === 5000){
          if (gr.length === 1) {
            gr = gr[0]
          } else {
            gr = null
          }
        }

        if (gr && r[ft] === taxon) {
          if (data.indexOf(gr) === -1) {
            data.push(gr)
          }
        }
      }
    })
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
      console.log('No precision!!!!!!!!!!!!')
  }

  let visits
  if (i===3) {
    visits = []
    //v1 = 
  } else {
    visits = getData(i, taxon, precision)
  }

  const data = visits.map(gr => {
    return {gr: gr, colour: 'blue'}
  })

  return new Promise((resolve) => {
    resolve({
      records: data,
      precision: precision,
      shape: 'square',
      opacity: 0.8,
      size: 1
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
