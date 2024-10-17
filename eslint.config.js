import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginTs from 'typescript-eslint';
import pluginVue from 'eslint-plugin-vue';
import eslintConfigPrettier from 'eslint-config-prettier';

export default [
  {
    files: ['**/*.vue', '**/*.js', '**/*.ts'],
    ignores: ['venv', 'dist', 'dist-ssr', '.vite-ssg-temp', 'components.d.ts'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.jquery,
      },
    },
  },
  pluginJs.configs.recommended,
  ...pluginTs.configs.recommended,
  ...pluginVue.configs['flat/vue2-recommended'],
  eslintConfigPrettier,
];
