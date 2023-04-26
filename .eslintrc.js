module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  parser: '@babel/eslint-parser',
  extends: 'plugin:react/jsx-runtime',
  overrides: [],
  ignorePatterns: [
    'build/*.*',
    'package.json',
    'package-lock.json',
    'yarn-lock.json',
    '**/vendor/*.js',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      json: true,
    },
    requireConfigFile: false,
    babelOptions: {
      babelrc: false,
      configFile: false,
      presets: ['@babel/preset-react'],
    },
  },
  plugins: ['react'],
  rules: {
    'react/prop-types': 'off',
  },
};
