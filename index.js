const { parseNode } = require('./src/parse')
const { extractData } = require('./src/extract')
const { parseFile, filterCalls, getArg, readFile } = require('./src/data')
const packageName = require('./package.json').name

module.exports = {
  getArg,
  parseFile,
  filterCalls,
  parseNode,
  readFile,
  extractData,
  packageName,
}
