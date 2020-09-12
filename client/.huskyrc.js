module.exports = {
  husky: {
    hooks: {
      'pre-commit': 'lint-staged'
    }
  },
  'lint-staged': {
    '*.{js,jsx,ts,tsx}': [
      'eslint --fix'
    ]
  }
}
