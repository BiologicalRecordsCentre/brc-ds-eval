import * as d3 from 'd3'
import * as gen from './gen'

const phenData = [null, null, null]
const dChecked = [true, false, false]
const currentPerRow = [0, 0, 0]
const currentTaxonFilter = ['', '', '']
const currentYtype = ['', '', '']

// Standard interface functions
export function gui(sel) {
  
  gen.datasetCheckboxes(sel, 'phenology-check', 'phenologyDisplay', true)

  // Layout for phenology charts
  const div = d3.select(sel).append('div')

  const fldset = div.append('fieldset')
  fldset.append('legend').text('Phenology chart options')
  fldset.style('margin-top', '0.5em')

  // Taxon filter
  gen.textInput(fldset, 'phenology-filter', 'Enter a filter for taxa', 'brcdseval.phenologyDisplay', 'Apply')

  // Proportions vs counts radio buttons

  const radios = [
    {value: 'count', label: 'Record counts', checked: true},
    {value: 'proportion', label: 'Proporation of record counts', checked: false}
  ]
  gen.radioButtonSet(fldset, 'rad-phen-count-type', 'rad-phen-count', 'brcdseval.phenologyDisplay', radios)

  function tableDiv(i, initDisplay) {
    const tabDiv = div.append('div')
    if(!initDisplay) {
      tabDiv.style('display', 'none')
    }
    tabDiv.attr('id', `phenology-div-${i}`)
    tabDiv.append('h4').attr('id', `phenology-name-${i}`)
    tabDiv.append('p').attr('id', `phenology-message-${i}`)
    tabDiv.append('div').attr('id', `phenology-chart-${i}`)
  }
  tableDiv(1, true)
  tableDiv(2, false)

  // Div for combined display
  const tabDiv = div.append('div')
  tabDiv.style('display', 'none')
  tabDiv.attr('id', `phenology-div-combine`)
  tabDiv.append('h4').attr('id', `phenology-name-combine`)
  tabDiv.append('p').attr('id', `phenology-message-combine`)
  tabDiv.append('div').attr('id', `phenology-chart-combine`)
}

export function tabSelected() {
  
  for (let i=0; i<2; i++) {
    
    // Warn if data selected but the necessary config is not set
    if (gen.data[i] && gen.data[i].fields && (!gen.data[i].fields.taxon  || !gen.data[i].fields.date)) {
      d3.select(`#summary-message-${i}`).style('display', '')
      showMessage(i+1, `To see phenology charts for dataset ${i+1}, both <i>taxon</i> and <i>date</i> fields must be configured.`)
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
  clear(i)
}

// Exported from the library to use from html interface
export function phenologyDisplay() {
  // Function responsible for display one or both charts
  dChecked[0] = d3.select('#phenology-check-1').property("checked")
  dChecked[1] = d3.select('#phenology-check-2').property("checked")
  dChecked[2] = d3.select(`#phenology-check-combine`).property('checked')

  if (dChecked[2] && dChecked[0] && dChecked[1]) {
    d3.select('#phenology-div-combine').style("display", "")
    d3.select('#phenology-div-1').style("display", "none")
    d3.select('#phenology-div-2').style("display", "none")
  } else {
    d3.select('#phenology-div-combine').style("display", "none")
    if (dChecked[0] && dChecked[1]) {
      d3.select('#phenology-div-1').classed("splitx", true)
      d3.select('#phenology-div-2').classed("splitx", true)
    } else {
      d3.select('#phenology-div-1').classed("splitx", false)
      d3.select('#phenology-div-2').classed("splitx", false)
    }
    if (dChecked[0]) {
      d3.select('#phenology-div-1').style("display", "")
    } else {
      d3.select('#phenology-div-1').style("display", "none")
    }
    if (dChecked[1]) {
      d3.select('#phenology-div-2').style("display", "")
    } else {
      d3.select('#phenology-div-2').style("display", "none")
    }
  }
  displayData()
}

// Helper functions
function clear(i) {
  phenData[i-1] = null
  phenData[2] = null // Combined data
  d3.select(`#phenology-chart-${i}`).html('')
  d3.select(`#phenology-chart-combine`).html('')
}

function displayData() {
  const pLoads = []
  for (let i=0; i<2; i++) {
    let p
    // Generate penology data if not already exists and all the necessary config is set
    if (dChecked[i] && gen.data[i] && gen.data[i].fields && gen.data[i].fields.taxon  && gen.data[i].fields.date) {

      if (phenData[i]) {
        makeChart(i)
        p = Promise.resolve()
      } else {
        showMessage(i+1, "<span style='color: orange; font-weight: bold'>Configuring data for phenology display...</span>")
        setTimeout(() => {
          // Timeout required to allow GUI to update (i.e. phenology tab to show)
          p = loadData(i).then(() => {
            showMessage(i+1, null)
            makeChart(i)
          })
        }, 1)
      }
    } else {
      p = Promise.resolve()
    }
    pLoads.push(p)
  }
  Promise.all(pLoads).then(() => {
    console.log("promises resolved")
    // If combine display box is checked
    if (dChecked[2]) {
      if (phenData[2]) {
        makeChart(2)
      } else {
        showMessage('combine', "<span style='color: orange; font-weight: bold'>Configuring data for combined phenology display...</span>")
        setTimeout(() => {
          combineData()
          if (phenData[2]) makeChart(2)
          showMessage('combine', null)
        }, 1)
      }
    }
  })
}

function showMessage(i, html) {
  if (html) {
    d3.select(`#phenology-message-${i}`).style('display', '')
    d3.select(`#phenology-message-${i}`).html(html)
  } else {
    d3.select(`#phenology-message-${i}`).style('display', 'none')
    d3.select(`#phenology-message-${i}`).html('')
  }
}

function loadData(i) {
  phenData[i] = []

  // Data generation is wrapped in a promise so that the interface will
  // not hang.
  return new Promise((resolve, reject) => {
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
        resolve()
      } else {
        reject()
      }
    })
  })
}

function combineData() {
  if (phenData[0] && phenData[1]) {
    // Combine the data into a single collection
    phenData[2] = phenData[0].map(pd => {return {...pd, count1: null}})
    phenData[1].forEach(pd1 => {
      const pdcmatch = phenData[2].find(pdc => pdc.taxon === pd1.taxon && pdc.week === pd1.week)
      if (pdcmatch) {
        pdcmatch.count1 = pd1.count
      } else {
        phenData[2].push({
          taxon: pd1.taxon,
          week: pd1.week,
          count: null,
          count1: pd1.count
        })
      }
    })
  }
}

function makeChart(i) {

  let perRow = 4
  if (dChecked[0] && dChecked[1] && !dChecked[2]){
    perRow = 2
  }

  const ytype = d3.select('input[name=rad-phen-count-type]:checked').property('value')

  let metrics, selector
  if (i < 2) {
    selector = `#phenology-chart-${i+1}`
    metrics = [{ prop: 'count', label: gen.data[i].name, colour: '#4188A3' }]
  } else {
    selector = `#phenology-chart-combine`
    metrics = [
      { prop: 'count', label: gen.data[0].name, colour: '#4188A3' },
      { prop: 'count1', label: gen.data[1].name, colour: 'red' }
    ]
  }

  const taxonFilter = d3.select('#phenology-filter').property('value')
  let taxaFiltered
  const taxa = phenData[i].map(tw => tw.taxon)
  const uniqueTaxa = [...new Set(taxa)].sort()
  if (taxonFilter) {
    taxaFiltered = uniqueTaxa.filter(taxon => taxon.toLowerCase().includes(taxonFilter.toLowerCase()))
  } else {
    taxaFiltered = uniqueTaxa
  }

  if (perRow !== currentPerRow[i] 
    || !d3.select(selector).html().length 
    || taxonFilter !== currentTaxonFilter[i]
    || currentYtype[i] !== ytype
    ) {
    // Either this chart has not yet been generated or
    // the perRow value has changed.

    d3.select(selector).html('')

    const opts = {
      selector: selector,
      data: phenData[i],
      taxa: taxaFiltered,
      metrics: metrics,
      taxonLabelItalics: true,
      taxonLabelFontSize: 11,
      legendFontSize: 14,
      width: 350,
      height: 220,
      perRow: perRow,
      expand: true,
      axisLeft: 'tick',
      axisBottom: 'tick',
      axisRight: 'on',
      axisTop: 'on',
      ytype: ytype,
      interactivity: '',
    }

console.log('phenData', opts)

    showMessage(i === 2 ? 'combine' : i+1, "<span style='color: orange; font-weight: bold'>Generating phenology display...</span>")
    setTimeout(() => {
      window.brccharts.phen1(opts)
      showMessage(i === 2 ? 'combine' : i+1, null)
    },1)
  }
  currentPerRow[i] = perRow
  currentTaxonFilter[i] = taxonFilter
  currentYtype[i] = ytype
}