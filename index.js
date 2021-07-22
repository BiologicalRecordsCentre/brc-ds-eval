import { openPage, init } from './src/gui'
import { fileOpened, setFieldConfig, clearFieldConfig } from './src/load'
import { summaryDisplay, redoSummaries, summaryDownloadCSV } from './src/summary'
import { phenologyDisplay } from './src/phenology'
import { timeseriesDisplay } from './src/timeseries'
import { mapoverviewDisplay, mapoverviewMap, mapoverviewClearMap } from './src/mapoverview'
import { mapslippyDisplay, mapslippyMap, mapslippyClearMap, mapslippySetHeight, mapslippyBasemapOpacity, mapslippyClusterChanged } from './src/mapslippy'
import { visitsDownloadCSV } from './src/visits'
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
  summaryDownloadCSV,
  redoSummaries,
  mapoverviewDisplay,
  mapoverviewMap,
  mapoverviewClearMap,
  mapslippyDisplay,
  mapslippyMap,
  mapslippyClearMap,
  mapslippySetHeight,
  mapslippyBasemapOpacity,
  mapslippyClusterChanged,
  phenologyDisplay,
  timeseriesDisplay,
  visitsDownloadCSV,
} 