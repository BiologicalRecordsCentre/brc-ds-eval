import * as d3 from 'd3'
import * as summary from './summary'

let data = [{}, {}]
let configFields = ['taxon', 'tvk', 'gr', 'date', 'recorder', 'verifier', 'verifyStatus', 'source' ]

// Load the JNCC taxon designations CSV - convert it to a simple object
// mapping tvk to desgination.
d3.csv('../data/designations.csv', function(d) {
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

  console.log(data)
}

export function clearFieldConfig(i) {
  data[i-1].fields = null

  d3.selectAll(`#field-selects-${i} select`).property('disabled', false)
  d3.select(`#setFieldConfig${i}`).property('disabled', false)
  d3.select(`#clearFieldConfig${i}`).property('disabled', true)
  d3.select(`#configStatus${i}`).html('No config set')
  d3.select(`#configStatus${i}`).style('color', 'red')

  summary.clear(i)
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
          d3.select(`#csvLoading${i}`).html('File loaded')
          d3.select(`#csvLoading${i}`).style('color', 'blue')
          data[i-1].json = json
          setFieldDropdowns(i)
        })
    })
    reader.readAsDataURL(event.target.files[0])
    data[i-1].name = event.target.files[0].name
  } else {
    clearDataset(i)
  }
  clearFieldConfig(i)
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
