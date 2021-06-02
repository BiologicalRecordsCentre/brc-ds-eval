import d3 from 'd3'
import dateFormat from 'dateformat'
import * as load from './load'
import * as summary from './summary'
import * as phenology from './phenology'
import * as mapoverview from './mapoverview'
import * as timeseries from './timeseries'

const dateFormats = [
  {
    re: /^\d\d\d\d.\d\d.\d\d$/,
    fnYear: (date) => date.substr(0,4),
    fnWeek: (date) => {
      const year = date.substr(0,4)
      const month = date.substr(5,2)
      const day = date.substr(8,2)
      const dte = new Date(year, month, day)
      return Number(dateFormat(dte, 'W'))
    }
  },
  {
    re: /^\d\d.\d\d.\d\d\d\d$/,
    fnYear: (date) => date.substr(6,4),
    fnWeek: (date) => {
      const year = date.substr(6,4)
      const month = date.substr(3,2)
      const day = date.substr(0,2)
      const dte = new Date(year, month, day)
      return Number(dateFormat(dte, 'W'))
    }
  }
]

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
  {
    id: 'timeseries',
    caption: 'Time series',
    fns: timeseries
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

export function datasetCheckboxes(sel, prefix, fn, combineButton) {

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

  if (combineButton) {
    const input = fldset.append('input')
    input.style('margin-left', '2em')
    input.attr('type', 'checkbox')
    input.attr('id', `${prefix}-combine`)
    input.attr('onclick', `brcdseval.${fn}()`)
    fldset.append('label').text(`Combine display`)
  }
}

export function taxonSelectionControl(parent, i, prefix, onfocusFn, onclickFn, buttonCaption) {
  const input = parent.append('input')
  input.attr('id', `${prefix}-taxon-${i}`)
  input.attr('list', `${prefix}-datalist-${i}`)
  input.attr('onfocus', `${onfocusFn}(${i}, this)`)
  input.attr('placeholder', 'Start typing taxon...')
  const datalist = parent.append('datalist')
  datalist.attr('id', `${prefix}-datalist-${i}`)
  datalist.attr('autocomplete', 'on')
  const button = parent.append('button').text(buttonCaption)
  button.attr('onclick', `${onclickFn}(${i})`)
}

export function populateTaxonSelectionControl(i, prefix) {
  const tf = data[i-1].fields.taxon
  const taxa = []
  data[i-1].json.forEach(r => {
    if (taxa.indexOf(r[tf]) === -1) {
      taxa.push(r[tf])
    }
  })
  taxa.sort().forEach(t => {
    d3.select(`#${prefix}-datalist-${i}`).append('option').text(t)
  })
}

export function textInput(parent, id, placeholder, onclickFn, buttonCaption) {
  const divTs = parent.append('div')
  divTs.style('display', 'inline-block')
  const iTs = divTs.append('input')
  iTs.attr('id', id)
  iTs.attr('placeholder', placeholder)
  const bTs = divTs.append('button')
  bTs.text(buttonCaption)
  bTs.attr('onclick', `${onclickFn}()`)
}

export function radioButtonSet (parent, name, prefix, onclickFn, data) {

  // Proportions vs counts radio buttons
  function makeRadio(value, label, checked, ) {
    const rad = divRads.append('input')
    rad.attr('type', 'radio')
    rad.attr('id', `${prefix}-${value}`)
    rad.attr('name', name)
    rad.attr('value', value)
    rad.attr('onclick', `${onclickFn}()`)
    rad.property('checked', checked)
    const radlab = divRads.append('label').text(label)
    radlab.attr('for', `${prefix}-${value}`)
  }
  const divRads = parent.append('div')
  divRads.style('margin-left', '1em')
  divRads.style('display', 'inline-block')

  // The data must be an array of objects with these properties:
  // value, label and checked.
  data.forEach(d => makeRadio(d.value, d.label, d.checked))
}

export function dateValid(date) {
  return dateFormats.some(df => df.re.test(date))
}

export function dateYear(date) {
  const df = dateFormats.find(df => df.re.test(date))
  if (df) {
    return df.fnYear(date)
  } else {
    return null
  }
}

export function dateWeek(date) {
  const df = dateFormats.find(df => df.re.test(date))
  if (df) {
    return df.fnWeek(date)
  } else {
    return null
  }
}