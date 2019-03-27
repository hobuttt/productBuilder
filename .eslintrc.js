module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-new': 0,
    'dot-location': 0,
    'no-useless-constructor': 0,
    'no-trailing-spaces': 0,
    'no-unused-vars': 0,
    // allow paren-less arrow functions
    'arrow-parens': 0,
    'eol-last': 0,
    // allow async-await
    'generator-star-spacing': 0,
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
