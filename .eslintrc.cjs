module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'airbnb',
    'airbnb/hooks'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    semi: ['error', 'never'],
    'comma-dangle': ['error', 'never'],
    quotes: ['error', 'single'],
    'import/no-cycle': 0,
    'react/prop-types': 0,
    'max-len': ['error', { code: 150 }],
    'import/prefer-default-export': ['off', { target: 'any' }],
    'default-param-last': 0,
    'react/jsx-props-no-spreading': 0,
    'react/destructuring-assignment': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'linebreak-style': 0,
    'no-magic-numbers': ['error', { ignore: [0, 1] }]
  }
}
