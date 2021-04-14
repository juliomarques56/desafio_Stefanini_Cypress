// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

const log = require('cypress-log-to-output')
const fs = require('fs')

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/*module.exports = (on, config) => {
  on('task', {
    failed: require('cypress-failed-log/src/failed')(),
  })
}*/

module.exports = (on, config) => {
  /** the rest of your plugins... **/
  log.install(on, (type, event) => {
    // return true or false from this plugin to control if the event is logged
    // `type` is either `console` or `browser`
    // if `type` is `browser`, `event` is an object of the type `LogEntry`:
    //  https://chromedevtools.github.io/devtools-protocol/tot/Log#type-LogEntry
    // if `type` is `console`, `event` is an object of the type passed to `Runtime.consoleAPICalled`:
    //  https://chromedevtools.github.io/devtools-protocol/tot/Runtime#event-consoleAPICalled
 
    // for example, to only show error events:
  
  }, { recordLogs: true })
}
const cucumber = require('cypress-cucumber-preprocessor').default
module.exports = (on, config) => {
  on('file:preprocessor', cucumber())
}