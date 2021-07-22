import * as d3 from 'd3'
import * as gen from './gen'
import marked from 'marked'

export function init() {

  gen.tabs.forEach(t => {
    const button = d3.select('#tabbar').append('button')
    button.text(t.caption)
    button.attr('id', `tablink-${t.id}`)
    button.classed('tablink', true)
    button.attr('onclick', `brcdseval.openPage('${t.id}')`)

    const div = d3.select('body').append('div')
    div.attr('id', t.id)
    div.classed('tabcontent', true)

    t.fns.gui(`#${t.id}`)

    // Get the readme file - which is the help file for the 
    // project - and display on the Help page.
    console.log('href', window.location)
    let root
    if (window.location.pathname ==='/index.html') {
      root = window.location.href.substring(0, window.location.href.length - 10)
    } else {
      root = window.location.href
    }

    fetch(`${root}/README.md`) 
      .then(response => response.text())
      .then(result => document.getElementById('markdown').innerHTML = marked(result))
  })
  // Initialise on help page
  openPage('help')
}

export function openPage(id) {

  // Sort out style on the tablink buttons and display
  // the page content associated with the selected tab
  d3.selectAll(".tabcontent").style("display", "none")
  d3.select(`#${id}`).style("display", "block")
  d3.selectAll(".tablink").style("background-color", "")
  d3.select(`#tablink-${id}`).style("background-color", "green")

  // Call the tabSelected function
  const tab = gen.tabs.find(t => t.id === id)
  if (tab) tab.fns.tabSelected()
}