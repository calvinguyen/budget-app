module.exports = {
  env: { browser: true, es2020: true },
  extends: ['react-app', 'prettier'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['prettier'],
  rules: {
    semi: 'warn',
  },
};
