import { openPage, init } from './src/gui'
import { fileOpened, setFieldConfig, clearFieldConfig } from './src/load'
import { summaryDisplay, redoSummaries  } from './src/summary'
import { phenologyDisplay } from './src/phenology'
import { timeseriesDisplay } from './src/timeseries'
import { mapoverviewDisplay, mapoverviewMap, mapoverviewClearMap } from './src/mapoverview'
import { mapslippyDisplay, mapslippyMap, mapslippyClearMap, mapslippySetHeight, mapslippyBasemapOpacity } from './src/mapslippy'
import pkg from './package.json'

// Output version from package json to console
// to assist with trouble shooting.
console.log(`Running ${pkg.name} version ${pkg.version}`)

export {
  openPage,
  init,
  fileOpened,
  setFieldConfig,
  clearFieldConfig,
  summaryDisplay,
  redoSummaries,
  mapoverviewDisplay,
  mapoverviewMap,
  mapoverviewClearMap,
  mapslippyDisplay,
  mapslippyMap,
  mapslippyClearMap,
  mapslippySetHeight,
  mapslippyBasemapOpacity,
  phenologyDisplay,
  timeseriesDisplay
} 