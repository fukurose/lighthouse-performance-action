const fs = require('fs')

exports.parseAudits = async function parseAudits() {
  const manifest = JSON.parse(fs.readFileSync('./result/manifest.json', 'utf8'))
  const medianResults = await manifest.filter(function (item) {
    return item.isRepresentativeRun
  })

  return await medianResults.map((medianResult) => {
    const audits = JSON.parse(fs.readFileSync(medianResult.jsonPath, 'utf8')).audits
    medianResult.firstContentfulPaint = audits['first-contentful-paint']['displayValue']
    medianResult.speedIndex = audits['speed-index']['displayValue']
    medianResult.largestContentfulPaint = audits['largest-contentful-paint']['displayValue']
    medianResult.interactive = audits['interactive']['displayValue']
    medianResult.totalBlockingTime = audits['total-blocking-time']['displayValue']
    medianResult.cumulativeLayoutShift = audits['cumulative-layout-shift']['displayValue']

    const links = JSON.parse(fs.readFileSync('./.lighthouseci/links.json', 'utf8'))
    medianResult.publicUrl = links[medianResult.url]

    return medianResult
  })
}
