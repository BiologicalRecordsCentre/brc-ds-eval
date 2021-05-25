import d3 from 'd3'
import dateFormat from 'dateformat'
import * as load from './load'
import * as summary from './summary'
import * as phenology from './phenology'
import * as mapoverview from './mapoverview'

console.log('dateFormat', dateFormat)


const dateFormats = [
  {
    re: /^\d\d\d\d.\d\d.\d\d$/,
    fnYear: (date) => date.substr(0,4),
    fnWeek: (date) => {
      const year = date.substr(0,4)
      const month = date.substr(5,2)
      const day = date.substr(8,2)
      const dte = new Date(year, month, day)
      return dateFormat(dte, 'W')
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
      return dateFormat(dte, 'W')
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

export function dateValid(date) {

  return dateFormats.some(df => df.re.test(date))
  //return /^\d\d\d\d.\d\d.\d\d$/.test(date) || /^\d\d.\d\d.\d\d\d\d$/.test(date)
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