module.exports = {
  "settings": {
    "import/resolver": {
      "node": {
        "extensions": [".js", ".jsx", ".ts", ".tsx"],
        "paths": [
          "src"
        ]
      }
    }
  },
  env: {
    browser: true,
    es6: true,
    "jest": true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:jest/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'jest'
  ],
  rules: {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".tsx"] }]
  },
};
