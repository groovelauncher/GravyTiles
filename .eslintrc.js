module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    node: true
  },
  extends: [
    'plugin:@typescript-eslint/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  rules: {
    'indent': ['error', 2],
    'max-len': ['warn', 120],
    'no-trailing-spaces': 'warn',
    'prefer-const': 0,
    '@typescript-eslint/ban-ts-comment': 0
  }
};
