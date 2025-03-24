module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh', '@typescript-eslint'],
  rules: {
    'react/prop-types': 0,
    'no-extra-semi': 'error',
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
    'arrow-parens': ['warn', 'as-needed'],
    'no-unused-vars': ['off'],
    'no-console': ['off'],
    'import/prefer-default-export': ['off'],
    'react-hooks/exhaustive-deps': ['warn'],
    'react/jsx-props-no-spreading': [1, { custom: 'ignore' }],
  },
};
