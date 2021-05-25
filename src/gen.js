import * as d3 from 'd3'
import * as load from './load'
import * as summary from './summary'
import * as phenology from './phenology'
import * as mapoverview from './mapoverview'

export const data = [{}, {}]

export const tabs = [
  {
    id: 'load',
    caption: 'Load',
    fns: load,
  },
  {
    id: 'summary',
    caption: 'Summary',
    fns: summary,
  },
  {
    id: 'mapoverview',
    caption: 'Overview map',
    fns: mapoverview,
  },
  {
    id: 'phenology',
    caption: 'Phenology',
    fns: phenology
  },
]

export const configFields = [
  {
    id: 'taxon',
    caption: 'Taxon',
  },
  {
    id: 'tvk',
    caption: 'TVK',
  },
  {
    id: 'gr',
    caption: 'Grid ref',
  },
  {
    id: 'date',
    caption: 'Date',
  },
  {
    id: 'recorder',
    caption: 'Recorder',
  },
  {
    id: 'verifier',
    caption: 'Verifier',
  },
  {
    id: 'verifyStatus',
    caption: 'Verified status',
  },
  {
    id: 'source',
    caption: 'Source',
  },
]

export function datasetCheckboxes(sel, prefix, fn) {

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