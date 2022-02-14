const childProcess = require('child_process')
const lhci = require.resolve('@lhci/cli/src/cli')

function run(command, ...options) {
  const result = childProcess.spawnSync('node', [lhci, command, 'config=./lighthouserc.js', ...options])
  console.log(result.status == 0 ? result.stdout.toString() : result.stderr.toString())

  return result.status
}

exports.runLhci = async function runLhci(results) {
  console.log('collecting....')
  let status = -1
  status = run('collect')
  if (status !== 0) throw new Error('collect failed!')

  console.log('writing reports....')
  status = run('upload', '--target=filesystem', '--outputDir=./result')
  if (status !== 0) throw new Error('writing reports failed!')

  console.log('Uploading....')
  status = run('upload', '--target=temporary-public-storage')
  if (status !== 0) throw new Error('Upload failed!')
}
