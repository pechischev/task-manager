module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
    'standard-with-typescript',
  ],
  rules: {
    'comma-dangle': 'off',
    'space-before-function-paren': 0,
    'react/prop-types': 0,
    '@typescript-eslint/consistent-type-definitions': 0,
    '@typescript-eslint/strict-boolean-expressions': 0,
    '@typescript-eslint/space-before-function-paren': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
  },
}
