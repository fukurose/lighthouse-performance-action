module.exports = {
  ci: {
    collect: {
      numberOfRuns: 3,
      url: ['https://example.com', 'https://www.google.com'],
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
}
