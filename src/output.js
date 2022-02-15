const core = require('@actions/core')

exports.setOutput = async function setOutput(results) {
  const firstResult = results[0]
  core.setOutput('url', firstResult.url)
  core.setOutput('performance', firstResult.summary.performance)
  core.setOutput('accessibility', firstResult.summary.accessibility)
  core.setOutput('bestPractices', firstResult.summary['best-practices'])
  core.setOutput('seo', firstResult.summary.seo)
  core.setOutput('pwa', firstResult.summary.pwa)
  core.setOutput('firstContentfulPaint', firstResult.firstContentfulPaint)
  core.setOutput('speedIndex', firstResult.speedIndex)
  core.setOutput('largestContentfulPaint', firstResult.largestContentfulPaint)
  core.setOutput('interactive', firstResult.interactive)
  core.setOutput('totalBlockingTime', firstResult.totalBlockingTime)
  core.setOutput('publicUrl', firstResult.publicUrl)

  for (let i = 1; i <= results.length; i++) {
    let result = results[i - 1]
    core.setOutput(`url${i}`, result.url)

    // These values are decimal points. So need to multiply them by 100.
    core.setOutput(`url${i}_performance`, result.summary.performance * 100)
    core.setOutput(`url${i}_accessibility`, result.summary.accessibility * 100)
    core.setOutput(`url${i}_bestPractices`, result.summary['best-practices'] * 100)
    core.setOutput(`url${i}_seo`, result.summary.seo * 100)
    core.setOutput(`url${i}_pwa`, result.summary.pwa * 100)

    core.setOutput(`url${i}_firstContentfulPaint`, result.firstContentfulPaint)
    core.setOutput(`url${i}_speedIndex`, result.speedIndex)
    core.setOutput(`url${i}_largestContentfulPaint`, result.largestContentfulPaint)
    core.setOutput(`url${i}_interactive`, result.interactive)
    core.setOutput(`url${i}_totalBlockingTime`, result.totalBlockingTime)
    core.setOutput(`url${i}_publicUrl`, result.publicUrl)
  }
}
