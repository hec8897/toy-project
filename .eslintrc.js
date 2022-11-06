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
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    "@next/next/no-html-link-for-pages": ["error", "services/app/src/pages/"],
    'react/prop-types': ['off'],
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "single"],
    "no-empty": "error",
    "no-use-before-define": "warn",
    "no-unused-vars": "warn"
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};