module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-recess-order'],
  plugins: ['stylelint-order'],
  ignoreFiles: ['**/node_modules/**'],
  rules: {
    'string-quotes': 'single',
    'no-empty-source': null,
    'no-eol-whitespace': null,
    'no-missing-end-of-source-newline': null,
  },
};
