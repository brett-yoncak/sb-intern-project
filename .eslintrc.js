/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: ['eslint:recommended', 'plugin:vue/vue3-recommended'],
  rules: {
    // 'import/first': 'off',
    // 'vue/multi-word-component-names': 'off',
    // 'vue/no-multiple-template-root': 'off',
    // 'vue/script-setup-uses-vars': 2,
    // 'vue/valid-define-emits': 2,
    'quotes': ['error', 'single'],
  },
  ignorePatterns: ['server'],
  env: {
    'vue/setup-compiler-macros': true,
  },
};
