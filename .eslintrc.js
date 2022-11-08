module.exports = {
  env: {
    node: true,
    browser: true,
    es2020: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['react', '@typescript-eslint'],
  parserOptions: {
    ecmaFeatures: {
      tsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  rules: {
    'react/prop-types': ['off'],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    'no-empty': 'error',
    '@typescript-eslint/no-unused-vars': 'error',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
