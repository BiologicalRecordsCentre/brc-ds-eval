import { openPage, init, fileOpened, setFieldConfig, clearFieldConfig } from './src/gui'
import { summaryDisplay, redoSummaries } from './src/summary'
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
  redoSummaries
} 