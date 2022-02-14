const core = require('@actions/core')

const { setOutput } = require('./output')
const { parseAudits } = require('./parse')
const { runLhci } = require('./lhci')

async function main() {
  runLhci()
  const results = await parseAudits()
  await setOutput(results)
}

try {
  main()
} catch (error) {
  core.setFailed(error.message)
}
