const core = require('@actions/core')
const github = require('@actions/github')
const fs = require('fs')

try {
  const manifest = JSON.parse(fs.readFileSync('./result/manifest.json', 'utf8'))
  const medianResults = manifest.filter(function (item) {
    return item.isRepresentativeRun
  })
  const results = medianResults.map((medianResult) => {
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
  const result = results[0]
  core.setOutput('url', result.url)
  core.setOutput('performance', result.summary.performance)
  core.setOutput('accessibility', result.summary.accessibility)
  core.setOutput('bestPractices', result.summary['best-practices'])
  core.setOutput('seo', result.summary.seo)
  core.setOutput('pwa', result.summary.pwa)
  core.setOutput('firstContentfulPaint', result.firstContentfulPaint)
  core.setOutput('speedIndex', result.speedIndex)
  core.setOutput('largestContentfulPaint', result.largestContentfulPaint)
  core.setOutput('interactive', result.interactive)
  core.setOutput('totalBlockingTime', result.totalBlockingTime)
  core.setOutput('publicUrl', result.cumulativeLayoutShift)

  console.log(result)
} catch (error) {
  core.setFailed(error.message)
}