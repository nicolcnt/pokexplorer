// Controllo del codice: npm run lint
import globals from 'globals';

export default [
  { ignores: ['js/vendor/**', 'build/**', 'node_modules/**', 'tools/.cache/**'] },
  {
    files: ['js/**/*.js', 'config*.js'],
    languageOptions: { ecmaVersion: 'latest', sourceType: 'module', globals: { ...globals.browser } },
    rules: {
      'no-undef': 'error', 'no-unused-vars': ['warn', { args: 'none', caughtErrors: 'none' }], 'no-dupe-keys': 'error',
      'no-unreachable': 'error', 'no-redeclare': 'error', 'no-const-assign': 'error', 'no-import-assign': 'error',
      'no-self-assign': 'error', 'no-dupe-class-members': 'error', 'no-fallthrough': 'error',
    },
  },
  { files: ['config*.js'], languageOptions: { sourceType: 'script' } },
  { files: ['tests/**/*.mjs', 'tools/**/*.mjs', 'eslint.config.mjs'], languageOptions: { ecmaVersion: 'latest', sourceType: 'module', globals: { ...globals.node } } },
];
