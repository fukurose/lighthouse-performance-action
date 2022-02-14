module.exports = {
  ci: {
    collect: {
      numberOfRuns: 1,
      url: ['https://example.com', 'https://www.google.com'],
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
}
