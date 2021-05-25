import * as d3 from 'd3'
import { checkGr } from 'brc-atlas-bigr'
import * as summary from './summary'
import * as mapoverview from './mapoverview'

let data = [{}, {}]
let configFields = ['taxon', 'tvk', 'gr', 'date', 'recorder', 'verifier', 'verifyStatus', 'source' ]
let configLabels = {
  taxon: 'Taxon',
  tvk: 'TVK',
  gr: 'Grid ref',
  date: 'Date',
  recorder: 'Recorder',
  verifier: 'Verifier',
  verifyStatus: 'Verified status',
  source: 'Source',
}

// Load the JNCC taxon designations CSV - convert it to a simple object
// mapping tvk to desgination.
d3.csv('./dist/designations.csv', function(d) {
    if (d['Reporting category']==='Nationally Scarce, Nationally Rare and Other Species') {
      return {
        tvk: d['Recommended taxon version'],
        designation: d['Designation']
      }
    }
  }).then(function(data) {
    window.taxonDesignations = data.reduce((a, d) => {
      a[d.tvk] = d.designation
      return a
    }, {})
    d3.select('#jnccLoading').text('loaded').style('color','blue')
  })
  .catch(function(error){
     // handle error  
    console.log(error) 
    d3.select('#jnccLoading').text('failed to load').style('color', 'red')
  })

export function init() {
  document.getElementById("defaultOpen").click()
  guiLoadContent('#load')
  guiSummaryContent('#summary')
  guiOverviewMapContent('#mapoverview')
}

export function setFieldConfig(i) {
  
  const setValue = (key) => {
    const value = d3.select(`#${key}${i}`).property('value')
    data[i-1].fields[key] = value
    // Also store values in local storage so that they can be conveniently
    // set in future for similar dataset
    localStorage.setItem(`${key}${i}`, value)
  }
  data[i-1].fields = {}
  configFields.forEach(f => setValue(f))

  d3.selectAll(`#field-selects-${i} select`).property('disabled', true)
  d3.select(`#setFieldConfig${i}`).property('disabled', true)
  d3.select(`#clearFieldConfig${i}`).property('disabled', false)
  d3.select(`#configStatus${i}`).html('Config is set')
  d3.select(`#configStatus${i}`).style('color', 'blue')

  // Dataset stats for the configured fields
  configFields.forEach(cf => {
    const fcsv = data[i-1].fields[cf]
    if (fcsv) {
      const unique = [...new Set(data[i-1].json.filter(r => r[fcsv] !== '').map(r => r[fcsv]))]
      const missing = data[i-1].json.filter(r => r[fcsv] === '')
      let invalid
      if (cf === 'gr') {
        invalid = data[i-1].json.filter(r => {
          if (!r[fcsv]) return false // Missing values not counted as invalid
          try {
            checkGr(r[fcsv])
          }
          catch(err) {
            return true
          }
          return false
        })
      } else if (cf === 'date') {
        invalid = data[i-1].json.filter(r => {
          if (!r[fcsv]) return false // Missing values not counted as invalid
          return !(/^\d\d\d\d.\d\d.\d\d$/.test(r[fcsv]) || /^\d\d.\d\d.\d\d\d\d$/.test(r[fcsv])) 
        })
      }

      if (cf === 'date' || cf ==='gr') {
        d3.select(`#${cf}Info${i}`).text(`Invalid: ${invalid.length}, Missing: ${missing.length}`)
      } else {
        d3.select(`#${cf}Info${i}`).text(`Unique: ${unique.length}, Missing: ${missing.length}`)
      }
    } else {
      d3.select(`#${cf}Info${i}`).text('')
    }
  })
}

export function clearFieldConfig(i) {
  data[i-1].fields = null

  d3.selectAll(`#field-selects-${i} select`).property('disabled', false)
  d3.select(`#setFieldConfig${i}`).property('disabled', false)
  d3.select(`#clearFieldConfig${i}`).property('disabled', true)
  d3.select(`#configStatus${i}`).html('No config set')
  d3.select(`#configStatus${i}`).style('color', 'red')

  summary.clear(i)
  mapoverview.clear(i)
}

export function openPage(pageName,tabLink) {

  // Sort out style on the tablink buttons and display
  // the page content associated with the selected tab
  d3.selectAll(".tabcontent").style("display", "none")
  d3.select(`#${pageName}`).style("display", "block")
  d3.selectAll(".tablink").style("background-color", "")
  d3.select(tabLink).style("background-color", "green")

  if (pageName === 'summary') {
    summary.tabSelected(data)
  }

  if (pageName === 'mapoverview') {
    mapoverview.tabSelected(data)
  }
}

export function fileOpened(event, i) {
  if (event.target.files[0] !== undefined) {

    d3.select(`#csvLoading${i}`).html('Loading file...')
    d3.select(`#csvLoading${i}`).style('color', 'orange')

    const reader = new FileReader()
    reader.addEventListener('load', (event) => {
      d3.csv(event.target.result)
        .then(function(json) {
          //console.log(json)
          d3.select(`#csvLoading${i}`).html(`File loaded - ${json.length} records`)
          d3.select(`#csvLoading${i}`).style('color', 'blue')
          data[i-1].json = json
          setFieldDropdowns(i)
          d3.select(`#setFieldConfig${i}`).property('disabled', false)
        })
    })
    reader.readAsDataURL(event.target.files[0])
    data[i-1].name = event.target.files[0].name
  } else {
    clearDataset(i)
  }
  clearFieldConfig(i)
  d3.select(`#setFieldConfig${i}`).property('disabled', true)
}

function clearDataset(i) {
  d3.select(`#csvLoading${i}`).html('No file loaded')
  d3.select(`#csvLoading${i}`).style('color', 'red')
  data[i-1].name = null
  data[i-1].json = null
  data[i-1].fields = null
  setFieldDropdowns(i)

  summary.clear(i)
}

function setFieldDropdowns(i){

  // Clear existing
  configFields.forEach(cf => d3.select(`#${cf}${i}`).html(''))
  configFields.forEach(cf => d3.select(`#${cf}Info${i}`).text(''))

  if (data[i-1].json) {
    const fields = ['', ...Object.keys(data[i-1].json[0])]
    fields.forEach(f => {
      configFields.forEach(cf => {
        const opt = d3.select(`#${cf}${i}`).append('option')
        opt.attr('value', f)
        opt.text(f)
      })
    })
    configFields.forEach(cf => {
      d3.select(`#${cf}${i}`).property('value', localStorage.getItem(`${cf}${i}`))
    })
  } else {
    configFields.forEach(cf => d3.select(`#${cf}${i}`).html(''))
  }
}

function guiDatasetCheckboxes(sel, prefix, fn) {

  // Generic control to switch between datasets
  function makeCheckBox (id, checked) {
    const input = fldset.append('input')
    input.attr('type', 'checkbox')
    input.attr('id', `${prefix}-${id}`)
    input.attr('onclick', `brcdseval.${fn}()`)
    if (checked) {
      input.property('checked', true)
    }
    fldset.append('label').text(`Dataset ${id}`)
  }

  const fldset = d3.select(sel).append('fieldset')
  fldset.style('margin-top', '0.5em')
  const legend = fldset.append('legend')
  legend.text('Display dataset')
  makeCheckBox(1, true)
  makeCheckBox(2, false)
}

function guiSummaryContent(sel) {

  // Dataset checkboxes
  guiDatasetCheckboxes(sel, 'summary-check', 'summaryDisplay')

  // Record grouping
  const p = d3.select(sel).append('p')
  const fldset = p.append('fieldset')
  fldset.append('legend').text('Group records by')

  function makeInput(txt, value, checked) {
    const input = fldset.append('input')
    input.attr('type', 'radio')
    input.attr('id', `rad-${value ? value : 'none'}`)
    input.attr('name', 'rad-grouping')
    input.attr('value', value)
    input.attr('onclick', `brcdseval.redoSummaries()`)
    if (checked) {
      input.property('checked', true)
    }
    const label = fldset.append('label').text(txt)
    label.attr('for', `rad-${value ? value : 'none'}`)
  }
  makeInput('None', '', true)
  makeInput('Recorder', 'recorder')
  makeInput('Verifier', 'verifier')
  makeInput('Verified status', 'verifyStatus')
  makeInput('Source', 'source')

  // Layout for summary tables
  const div = d3.select(sel).append('div')
  
  function tableDiv(i) {
    const tabDiv = div.append('div')
    tabDiv.attr('id', `summary-div-${i}`)
    tabDiv.append('h4').attr('id', `summary-name-${i}`)
    tabDiv.append('p').attr('id', `summary-message-${i}`)
    tabDiv.append('div').attr('id', `summary-table-${i}`)
  }
  tableDiv(1)
  tableDiv(2)
}

function guiOverviewMapContent(sel) {

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

function guiLoadContent(sel) {

  // Background downloading of resources
  d3.select(sel).append('h3').text('Packaged resources')
  d3.select(sel).append('p').text(`
    These resources are packaged with the tool, you can carry on 
    specifying your local CSV datasets whilst these are downloading.
  `)
  d3.select(sel).append('p').html('JNCC taxon designations (2020): <span id="jnccLoading">downloading...</span>')

  // Dataset load and field mapping
  const d1 = d3.select(sel).append('div')

  function splitDiv(i) {
    const d2 = d1.append('div')
    d2.classed('split2', true)
    d2.append('h3').text(`Local resource - dataset ${i}`)
    const label = d2.append('label')
    label.attr('for', `csvFile${i}`)
    label.text(`Browse for dataset ${i} CSV`)
    const input = d2.append('input')
    input.attr('type', 'file')
    input.attr('id', `csvFile${i}`)
    input.attr('name', `csvFile${i}`)
    input.attr('accept', '.csv')
    input.attr('onChange', `brcdseval.fileOpened(event, ${i})`)
    input.style('margin-left', '0.5em')
    d2.append('div').attr('id', `csvLoading${i}`).style('margin-top', '0.5em').text('No file loaded')
    d2.append('div').attr('id', `field-selects-${i}`)

    configFields.forEach(f => {
      const d3 = d2.append('div')
      d3.classed('field-input', true)
      const label = d3.append('label')
      label.attr('for', `${f}${i}`)
      label.text(`${configLabels[f]}:`)
      const select = d3.append('select')
      select.attr('id', `${f}${i}`)
      const d4 = d3.append('div')
      d4.classed('input-info', true)
      d4.attr('id', `${f}Info${i}`)
    })

    const d5 = d2.append('div')
    d5.classed('config-buttons', true)
    const button1 = d5.append('button')
    button1.attr('id', `setFieldConfig${i}`)
    button1.attr('onClick', `brcdseval.setFieldConfig(${i})`)
    button1.attr('disabled', 'true')
    button1.text('Set config')
    const button2 = d5.append('button')
    button2.attr('id', `clearFieldConfig${i}`)
    button2.attr('onClick', `brcdseval.clearFieldConfig(${i})`)
    button2.attr('disabled', 'true')
    button2.text('Clear config')
    const d6 = d2.append('div')
    d6.attr('id', `configStatus${i}`)
    d6.text('No config set')
  }
  splitDiv(1)
  splitDiv(2)
}
