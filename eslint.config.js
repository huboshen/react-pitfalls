import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import importPlugin from 'eslint-plugin-import';


const sharedRules = {
  ...js.configs.recommended.rules,
  ...reactHooks.configs.recommended.rules,
  'semi': ['error', 'always'],
  'import/no-duplicates': 'error',
  'import/order': [
    'error',
    {
      'groups': ['builtin', 'external', 'internal'],
      'newlines-between': 'always'
    }
  ]
};

const sharedPlugins = {
  'react-hooks': reactHooks,
  'react-refresh': reactRefresh,
  'import': importPlugin,
};

export default [
  { ignores: ['dist'] },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    plugins: sharedPlugins,
    rules: {
      ...sharedRules,
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
  // for vitest
  {
    files: ['**/__tests__/**/*.{js,jsx}', '**/*.{test,spec}.{js,jsx}'],
    languageOptions: {
      globals: {
        ...globals.jest,
        vi: 'readonly',   // Vitest global object
        beforeEach: 'readonly',
        afterEach: 'readonly',
        expect: 'readonly',
        describe: 'readonly',
        it: 'readonly',
        act: 'readonly'
      }
    }
  },
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
      globals: globals.browser,
    },
    plugins: {
      '@typescript-eslint': typescriptEslint,
      ...sharedPlugins,
    },
    rules: {
      ...sharedRules,
    }
  }
];
