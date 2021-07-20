import d3 from 'd3'
import dateFormat from 'dateformat'
import * as load from './load'
import * as summary from './summary'
import * as phenology from './phenology'
import * as mapoverview from './mapoverview'
import * as mapslippy from './mapslippy'
import * as timeseries from './timeseries'


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target.id === 'modalDialog') {
    d3.select('#modalDialog').style('display', 'none')
  }
}

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
    id: 'phenology',
    caption: 'Phenology',
    fns: phenology
  },
  {
    id: 'timeseries',
    caption: 'Time series',
    fns: timeseries
  },
  {
    id: 'mapoverview',
    caption: 'Overview map',
    fns: mapoverview,
  },
  {
    id: 'mapslippy',
    caption: 'Explore map',
    fns: mapslippy,
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

export function dropDown(fldset, id, label, values, value, fn) {
  const input = fldset.append('select')
  input.style('margin', '0 1em')
  input.attr('id', id)
  input.attr('placeholder', label)
  values.forEach(v => {
    const opt = input.append('option')
    opt.attr('value', v).text(v)
    if (v === value) {
      opt.property('selected', true)
    }
  })
  input.attr('onchange', `${fn}()`)
}

export function numberInput(fldset, id, label, min, max, val, fn, slider) {

  const ctl = fldset.append('div')
  ctl.style('margin', '0 0.5em')
  ctl.style('display', 'inline-block')

  if (slider) {
    const lab = ctl.append('label').text(label)
    lab.attr('for', id)
    lab.text(label)
    lab.style('margin-right', '0.5em')
  }

  const input = ctl.append('input')
  if (slider) {
    input.attr('type', 'range')
    input.classed('slider', true)
  } else {
    input.attr('type', 'number')
    input.attr('placeholder', label)
  }
  input.attr('min', min)
  input.attr('max', max)
  input.attr('value', val)
  input.attr('id', id)
  input.style('width', '80px')
  input.attr('onchange', `${fn}()`)
}

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

// export function taxonSelectionControl(parent, i, prefix, onfocusFn, onclickFn, buttonCaption) {
//   const input = parent.append('input')
//   input.attr('id', `${prefix}-taxon-${i}`)
//   input.attr('list', `${prefix}-datalist-${i}`)
//   input.attr('onfocus', `${onfocusFn}(${i}, this)`)
//   input.attr('placeholder', 'Start typing taxon...')
//   const datalist = parent.append('datalist')
//   datalist.attr('id', `${prefix}-datalist-${i}`)
//   datalist.attr('autocomplete', 'on')
//   const button = parent.append('button').text(buttonCaption)
//   button.attr('onclick', `${onclickFn}(${i})`)
// }

export function taxonSelectionControl(parent, prefix, onfocusFn, onclickFn) {
  const input = parent.append('input')
  input.attr('id', `${prefix}-taxon`)
  input.attr('list', `${prefix}-datalist`)
  input.attr('onfocus', `${onfocusFn}(this)`)
  input.attr('placeholder', 'Start typing taxon...')
  const datalist = parent.append('datalist')
  datalist.attr('id', `${prefix}-datalist`)
  datalist.attr('autocomplete', 'on')
  const b1 = parent.append('button').text('D1')
  b1.attr('onclick', `${onclickFn}(1)`)
  const b2 = parent.append('button').text('D2')
  b2.attr('onclick', `${onclickFn}(2)`)
  const b3 = parent.append('button').text('Both')
  b3.attr('onclick', `${onclickFn}(3)`)
}

export function populateTaxonSelectionControl(prefix) {

  const getTaxa = (i) => {
    const taxa = []
    if (data[i-1] && data[i-1].fields && data[i-1].fields.taxon && data[i-1].json) {
      const tf = data[i-1].fields.taxon
      data[i-1].json.forEach(r => {
        if (taxa.indexOf(r[tf]) === -1) {
          taxa.push(r[tf])
        }
      })
    }
    return taxa
  }

  const t1 = getTaxa(1)
  const t2 = getTaxa(2)
  const tc = [...new Set([...t1, ...t2])] //[...new Set(t1, t2)] gives emtpy array if t1 empty

  // Clear the datalist if it already has options
  d3.select(`#${prefix}-datalist`).html('')

  // Create the taxon options
  tc.sort().forEach(t => {
    const ds=[]
    if (t1.indexOf(t) > -1) {
      ds.push('1')
    }
    if (t2.indexOf(t) > -1) {
      ds.push('2')
    }
    d3.select(`#${prefix}-datalist`).append('option').text(`${t} ${ds.join(',')}`)
  })
}

// export function populateTaxonSelectionControl(i, prefix) {

//   const getTaxa = (i) => {
//     const taxa = []
//     if (data[i-1] && data[i-1].fields && data[i-1].fields.taxon && data[i-1].json) {
//       const tf = data[i-1].fields.taxon
//       data[i-1].json.forEach(r => {
//         if (taxa.indexOf(r[tf]) === -1) {
//           taxa.push(r[tf])
//         }
//       })
//     }
//     return taxa
//   }

//   let tc
//   if (i === 3){
//     const t1 = getTaxa(1)
//     const t2 = getTaxa(2)
//     tc = [...new Set(t1, t2)]
//   } else {
//     tc = getTaxa(i)
//   }
  
//   tc.sort().forEach(t => {
//     d3.select(`#${prefix}-datalist-${i}`).append('option').text(t)
//   })
// }

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

export function checkbox(parent, id, label, onchangeFn, checked) {
  const input = parent.append('input')
  input.attr('type', 'checkbox')
  input.attr('id', id)
  input.attr('onchange', `${onchangeFn}()`)
  if (checked) {
    input.property('checked', true)
  }
  parent.append('label').text(label)
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