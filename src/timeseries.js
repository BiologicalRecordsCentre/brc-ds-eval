import * as d3 from 'd3'
import * as gen from './gen'
import { getLowerResGrs, checkGr } from 'brc-atlas-bigr'

const timeData = [null, null, null]
const dChecked = [true, false, false]
const currentPerRow = [0, 0, 0]
const currentTaxonFilter = ['', '', '']
const currentYtype = ['', '', '']
const currentMinYear = ['', '', '']
const currentMaxYear = ['', '', '']

// Standard interface functions
export function gui(sel) {
  
  gen.datasetCheckboxes(sel, 'timeseries-check', 'timeseriesDisplay', true)

  // Layout for time series charts
  const div = d3.select(sel).append('div')

  const fldset = div.append('fieldset')
  fldset.append('legend').text('Time series chart options')
  fldset.style('margin-top', '0.5em')

  // Taxon filter
  gen.textInput(fldset, 'timeseries-filter', 'Enter a filter for taxa', 'brcdseval.timeseriesDisplay', 'Apply')

  // Records vs visits radio buttons
  const radios = [
    {value: 'count', label: 'Record counts', checked: true},
    {value: 'visits', label: 'Unique visits', checked: false}
  ]
  gen.radioButtonSet(fldset, 'rad-timeseries-count-type', 'rad-timeseries-count', 'brcdseval.timeseriesDisplay', radios)

  // Year input
  gen.numberInput(fldset, 'input-timeseries-minyear', 'Min year', 1980, 2021, 'brcdseval.timeseriesDisplay')
  gen.numberInput(fldset, 'input-timeseries-maxyear', 'Max year', 1980, 2021, 'brcdseval.timeseriesDisplay')

  function tableDiv(i, initDisplay) {
    const tabDiv = div.append('div')
    if(!initDisplay) {
      tabDiv.style('display', 'none')
    }
    tabDiv.attr('id', `timeseries-div-${i}`)
    tabDiv.append('h4').attr('id', `timeseries-name-${i}`)
    tabDiv.append('p').attr('id', `timeseries-message-${i}`)
    tabDiv.append('div').attr('id', `timeseries-chart-${i}`)
  }
  tableDiv(1, true)
  tableDiv(2, false)

  // Div for combined display
  const tabDiv = div.append('div')
  tabDiv.style('display', 'none')
  tabDiv.attr('id', `timeseries-div-combine`)
  tabDiv.append('h4').attr('id', `timeseries-name-combine`)
  tabDiv.append('p').attr('id', `timeseries-message-combine`)
  tabDiv.append('div').attr('id', `timeseries-chart-combine`)
}

export function tabSelected() {
  
  for (let i=0; i<2; i++) {
    
    // Warn if data selected but the necessary config is not set
    if (gen.data[i] && gen.data[i].fields) {

      if (!gen.data[i].fields.taxon  || !gen.data[i].fields.date) {
        d3.select(`#summary-message-${i}`).style('display', '')
        showMessage(i+1, 
          `To see time series charts for dataset ${i+1}, 
          both <i>taxon</i> and <i>date</i> fields must be configured.
        `)
      } else if(!gen.data[i].fields.gr) {
        d3.select(`#summary-message-${i}`).style('display', '')
        showMessage(i+1, 
          `For 'visit' counts rather than 'record' counts on the Y axis, you also
          need to configure the <i>grid ref</i> field for dataset ${i+1}.
        `)
      } else {
        showMessage(i+1, null)
      }
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
export function timeseriesDisplay() {
  // Function responsible for display one or both charts
  dChecked[0] = d3.select('#timeseries-check-1').property("checked")
  dChecked[1] = d3.select('#timeseries-check-2').property("checked")
  dChecked[2] = d3.select(`#timeseries-check-combine`).property('checked')

  if (dChecked[2] && dChecked[0] && dChecked[1]) {
    d3.select('#timeseries-div-combine').style("display", "")
    d3.select('#timeseries-div-1').style("display", "none")
    d3.select('#timeseries-div-2').style("display", "none")
  } else {
    d3.select('#timeseries-div-combine').style("display", "none")
    if (dChecked[0] && dChecked[1]) {
      d3.select('#timeseries-div-1').classed("split", true)
      d3.select('#timeseries-div-2').classed("split", true)
    } else {
      d3.select('#timeseries-div-1').classed("split", false)
      d3.select('#timeseries-div-2').classed("split", false)
    }
    if (dChecked[0]) {
      d3.select('#timeseries-div-1').style("display", "")
    } else {
      d3.select('#timeseries-div-1').style("display", "none")
    }
    if (dChecked[1]) {
      d3.select('#timeseries-div-2').style("display", "")
    } else {
      d3.select('#timeseries-div-2').style("display", "none")
    }
  }
  displayData()
}

// Helper functions

function showMessage(i, html) {
  if (html) {
    d3.select(`#timeseries-message-${i}`).style('display', '')
    d3.select(`#timeseries-message-${i}`).html(html)
  } else {
    d3.select(`#timeseries-message-${i}`).style('display', 'none')
    d3.select(`#timeseries-message-${i}`).html('')
  }
}

function displayData() {  
  console.log("Display time series stuff")
  const pLoads = []
  for (let i=0; i<2; i++) {
    let p
    // Generate time series data if not already exists and all the necessary config is set
    if (dChecked[i] && gen.data[i] && gen.data[i].fields && gen.data[i].fields.taxon  && gen.data[i].fields.date) {
      if (timeData[i]) {
        makeChart(i)
        p = Promise.resolve()
      } else {
        showMessage(i+1, "<span style='color: orange; font-weight: bold'>Configuring data for time series display...</span>")
        setTimeout(() => {
          // Timeout required to allow GUI to update (i.e. time series tab to show)
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
      if (timeData[2]) {
        makeChart(2)
      } else {
        showMessage('combine', "<span style='color: orange; font-weight: bold'>Configuring data for combined time series display...</span>")
        setTimeout(() => {
          combineData()
          if (timeData[2]) makeChart(2)
          showMessage('combine', null)
        }, 1)
      }
    }
  })
}

function clear(i) {
  timeData[i-1] = null
  timeData[2] = null // Combined data
  d3.select(`#timeseries-chart-${i}`).html('')
  d3.select(`#timeseries-chart-combine`).html('')
}

function loadData(i) {
  timeData[i] = []
  // Data generation is wrapped in a promise so that the interface will
  // not hang.
  return new Promise((resolve, reject) => {
    gen.data[i].json.forEach(r => {
      const date = r[gen.data[i].fields.date]
      const taxon = r[gen.data[i].fields.taxon]
      const gr = gen.data[i].fields.gr ? r[gen.data[i].fields.gr] : null

      // If the gr and date are set, concatenate them - unique combinations
      // are considered unique visits.
      let date1km = null
      if (gr && date) {
        let grcheck
        try {
          grcheck = checkGr(gr)
        } catch (err) {
          grcheck = null
        }
        if (grcheck && grcheck.precision <= 1000) {
          date1km = `${getLowerResGrs(gr).p1000}-${date}`
        }
      }
      
      if (date && taxon && gen.dateValid(date)) {
        const year = gen.dateYear(date)
        const pd = timeData[i].find(pd => pd.taxon === taxon && pd.year === year)
        if (pd) {
          pd.count = pd.count + 1
          if (date1km && pd.date1km.indexOf(date1km) === -1) {
            pd.date1km.push(date1km)
          }
        } else {
          timeData[i].push({
            taxon: taxon,
            year: year,
            count: 1,
            date1km: date1km ? [date1km] : []
          })
        }
      }
    })

    // Set the visit count from array and then delete the array which
    // is no longer required
    timeData[i].forEach(r => {
      r['visits'] = r.date1km.length
      delete r.date1km
    })
    resolve()
  })
}

function combineData() {
  if (timeData[0] && timeData[1]) {
    // Combine the data into a single collection
    timeData[2] = timeData[0].map(ts => {return {...ts, count1: null, visits1: null}})
    timeData[1].forEach(ts1 => {
      const tscmatch = timeData[2].find(tsc => tsc.taxon === ts1.taxon && tsc.year === ts1.year)
      if (tscmatch) {
        tscmatch.count1 = ts1.count
        tscmatch.visits1 = ts1.visits
      } else {
        timeData[2].push({
          taxon: ts1.taxon,
          year: ts1.year,
          count: null,
          count1: ts1.count,
          visits: null,
          visits1: ts1.visits
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

  const ytype = d3.select('input[name=rad-timeseries-count-type]:checked').property('value')
  const minYear = Number(d3.select('#input-timeseries-minyear').property('value'))
  const maxYear = Number(d3.select('#input-timeseries-maxyear').property('value'))

  let selector, metrics
  if (i < 2) {
    selector = `#timeseries-chart-${i+1}`
    metrics = [{ prop: ytype, label: gen.data[i].name, colour: '#4188A3', opacity: 1 }]
  } else {
    selector = `#timeseries-chart-combine`
    metrics = [
      { prop: ytype, label: gen.data[0].name, colour: '#4188A3', opacity: 0.5 },
      { prop: `${ytype}1`, label: gen.data[1].name, colour: 'red', opacity: 0.5 }
    ]
  }

  const taxonFilter = d3.select('#timeseries-filter').property('value')
  let taxaFiltered
  const taxa = timeData[i].map(tw => tw.taxon)
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
    || currentMinYear[i] !== minYear
    || currentMaxYear[i] !== maxYear
    ) {
    // Either this chart has not yet been generated or
    // one of the major configuration options has changed.

    d3.select(selector).html('')

    console.log('timedata', timeData[i])

    console.log('years', minYear, maxYear)

    const opts = {
      selector: selector,
      data: timeData[i],
      metrics: metrics,
      taxa: taxaFiltered,
      taxonLabelItalics: true,
      taxonLabelFontSize: 11,
      showLegend: true,
      legendFontSize: 14,
      width: 350,
      height: 220,
      perRow: perRow,
      expand: true,
      axisLeft: 'tick',
      axisBottom: 'tick',
      axisRight: 'on',
      axisTop: 'on',
      interactivity: '',
      showCounts: 'bar',
      minYear: minYear ? minYear : null,
      maxYear: maxYear ? maxYear : null
    }

    showMessage(i === 2 ? 'combine' : i+1, "<span style='color: orange; font-weight: bold'>Generating time series display...</span>")
    setTimeout(() => {
      window.brccharts.yearly(opts)
      showMessage(i === 2 ? 'combine' : i+1, null)
    },1)
  }
  currentPerRow[i] = perRow
  currentTaxonFilter[i] = taxonFilter
  currentYtype[i] = ytype
  currentMinYear[i] = minYear
  currentMaxYear[i] = maxYear
}