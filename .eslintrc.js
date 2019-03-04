module.exports = {
  parser: 'babel-eslint',
  extends: 'airbnb',
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    'react/jsx-filename-extension': 0,
    'linebreak-style': 0,
    'import/no-extraneous-dependencies': 0,
    'comma-dangle': 0,
    'arrow-parens': ['error', 'as-needed'],
    'react/forbid-prop-types': 'any',
    'react/jsx-one-expression-per-line': 'allow',
    'no-console': 0,
    'no-param-reassign': 0,
    'jsx-a11y/label-has-for': 0,
    'jsx-a11y/label-has-associated-control': 0
  },
  env: {
    browser: true
  }
};
