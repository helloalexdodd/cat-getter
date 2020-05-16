module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-max-props-per-line': [
      2,
      {
        maximum: 1,
        when: 'always'
      }
    ],
    'prefer-destructuring': [
      2,
      {
        object: true,
        array: false
      }
    ],
    'no-trailing-spaces': [
      'error',
      {
        skipBlankLines: true,
      }
    ],
    'react/jsx-filename-extension': 0,
    'linebreak-style': 0,
    'react/require-default-props': 0,
    'import/prefer-default-export': 0,
  },
};
