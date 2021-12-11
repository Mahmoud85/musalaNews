module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:sonarjs/recommended',
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['prettier', 'import'],
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        alias: {
          assets: './src/assets',
          scenes: './src/scenes',
          navigation: './src/navigation',
          services: './src/services',
          styles: './src/styles',
          utils: './src/utils',
        },
      },
    },
  },
  globals: {
    JSX: 'writable',
  },
  rules: {
    'import/no-cycle': 'off',
    'react/prefer-stateless-function': 'off',
    'array-callback-return': 'off',
    'consistent-return': 'off',
    'react/no-array-index-key': 'off',
    'react/state-in-constructor': 'off',
    'import/no-unresolved': 'off',
    'comma-dangle': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/require-default-props': 'off',
    'no-debugger': 'error',
    'react-native/no-inline-styles': 2,
    'no-unused-vars': 2,
    'import/prefer-default-export': 'off',
    'react/prop-types': 2,
    'global-require': 'off',
    'react/no-children-prop': 0,
    'react/no-access-state-in-setstate': 0,
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js'],
      },
    ],
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        // printWidth: 120,
        bracketSpacing: true,
        endOfLine: 'auto',
      },
    ],
    'import/no-extraneous-dependencies': ['error', {packageDir: './'}],
    'no-console': ['error', {allow: ['warn', 'error', 'tron']}],
  },
};
