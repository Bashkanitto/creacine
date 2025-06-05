import js from '@eslint/js'
import next from 'eslint-plugin-next'
import prettier from 'eslint-config-prettier'
import pluginImport from 'eslint-plugin-import'
import pluginReactHooks from 'eslint-plugin-react-hooks'
import pluginTailwind from 'eslint-plugin-tailwindcss'

export default [
  js.configs.recommended,

  {
    files: ['**/*.ts', '**/*.tsx'],
    plugins: {
      import: pluginImport,
      'react-hooks': pluginReactHooks,
      tailwindcss: pluginTailwind,
    },
    rules: {
      // Import
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
          'newlines-between': 'always',
        },
      ],

      // React Hooks
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      // Tailwind
      'tailwindcss/classnames-order': 'warn',
    },
  },
  next,

  // Prettier disables conflicting rules
  prettier,
]
