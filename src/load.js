import * as d3 from 'd3'
import * as gen from './gen'
import { checkGr } from 'brc-atlas-bigr'

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

// Standard interface functions
export function gui(sel) {
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

    gen.configFields.forEach(f => {
      const d3 = d2.append('div')
      d3.classed('field-input', true)
      const label = d3.append('label')
      label.attr('for', `${f.id}${i}`)
      label.text(`${f.caption}:`)
      const select = d3.append('select')
      select.attr('id', `${f.id}${i}`)
      const d4 = d3.append('div')
      d4.classed('input-info', true)
      d4.attr('id', `${f.id}Info${i}`)
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

export function tabSelected() {
}

export function dataCleared(i) {
  d3.select(`#csvLoading${i}`).html('No file loaded')
  d3.select(`#csvLoading${i}`).style('color', 'red')
  setFieldDropdowns(i)
}

export function fieldConfigCleared(i) {
  d3.selectAll(`#field-selects-${i} select`).property('disabled', false)
  d3.select(`#setFieldConfig${i}`).property('disabled', false)
  d3.select(`#clearFieldConfig${i}`).property('disabled', true)
  d3.select(`#configStatus${i}`).html('No config set')
  d3.select(`#configStatus${i}`).style('color', 'red')
}

// Exported from the library to use from html interface
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
          gen.data[i-1].json = json
          setFieldDropdowns(i)
          d3.select(`#setFieldConfig${i}`).property('disabled', false)
        })
    })
    reader.readAsDataURL(event.target.files[0])
    gen.data[i-1].name = event.target.files[0].name
  } else {
    clearDataset(i)
  }
  clearFieldConfig(i)
  d3.select(`#setFieldConfig${i}`).property('disabled', true)
}

export function setFieldConfig(i) {
  
  const setValue = (key) => {
    const value = d3.select(`#${key}${i}`).property('value')
    gen.data[i-1].fields[key] = value
    // Also store values in local storage so that they can be conveniently
    // set in future for similar dataset
    localStorage.setItem(`${key}${i}`, value)
  }
  gen.data[i-1].fields = {}
  gen.configFields.forEach(f => setValue(f.id))

  d3.selectAll(`#field-selects-${i} select`).property('disabled', true)
  d3.select(`#setFieldConfig${i}`).property('disabled', true)
  d3.select(`#clearFieldConfig${i}`).property('disabled', false)
  d3.select(`#configStatus${i}`).html('Config is set')
  d3.select(`#configStatus${i}`).style('color', 'blue')

  // Dataset stats for the configured fields
  gen.configFields.forEach(cf => {
    const fcsv = gen.data[i-1].fields[cf.id]
    if (fcsv) {
      const unique = [...new Set(gen.data[i-1].json.filter(r => r[fcsv] !== '').map(r => r[fcsv]))]
      const missing = gen.data[i-1].json.filter(r => r[fcsv] === '')
      let invalid
      if (cf.id === 'gr') {
        invalid = gen.data[i-1].json.filter(r => {
          if (!r[fcsv]) return false // Missing values not counted as invalid
          try {
            checkGr(r[fcsv])
          }
          catch(err) {
            return true
          }
          return false
        })
      } else if (cf.id === 'date') {
        invalid = gen.data[i-1].json.filter(r => {
          if (!r[fcsv]) return false // Missing values not counted as invalid
          return !(/^\d\d\d\d.\d\d.\d\d$/.test(r[fcsv]) || /^\d\d.\d\d.\d\d\d\d$/.test(r[fcsv])) 
        })
      }

      if (cf.id === 'date' || cf.id ==='gr') {
        d3.select(`#${cf.id}Info${i}`).text(`Invalid: ${invalid.length}, Missing: ${missing.length}`)
      } else {
        d3.select(`#${cf.id}Info${i}`).text(`Unique: ${unique.length}, Missing: ${missing.length}`)
      }
    } else {
      d3.select(`#${cf.id}Info${i}`).text('')
    }
  })
}

export function clearFieldConfig(i) {
  gen.data[i-1].fields = null
  gen.tabs.forEach(t => {
    t.fns.fieldConfigCleared(i)
  })
}

// Helper functions
function clearDataset(i) {
  gen.data[i-1].name = null
  gen.data[i-1].json = null
  gen.data[i-1].fields = null
  gen.tabs.forEach(t => {
    t.fns.dataCleared(i)
  })
}

function setFieldDropdowns(i){

  // Clear existing
  gen.configFields.forEach(cf => d3.select(`#${cf.id}${i}`).html(''))
  gen.configFields.forEach(cf => d3.select(`#${cf.id}Info${i}`).text(''))

  if (gen.data[i-1].json) {
    const fields = ['', ...Object.keys(gen.data[i-1].json[0])]
    fields.forEach(f => {
      gen.configFields.forEach(cf => {
        const opt = d3.select(`#${cf.id}${i}`).append('option')
        opt.attr('value', f)
        opt.text(f)
      })
    })
    gen.configFields.forEach(cf => {
      d3.select(`#${cf.id}${i}`).property('value', localStorage.getItem(`${cf.id}${i}`))
    })
  } else {
    gen.configFields.forEach(cf => d3.select(`#${cf.id}${i}`).html(''))
  }
}

