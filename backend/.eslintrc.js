module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  ignorePatterns: ['src/@generated/*'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:type-graphql/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'prettier', 'import', 'type-graphql'],
  rules: {
    'prettier/prettier': 'error',
    'import/extensions': 'off',
    'no-use-before-define': 'off',
    'import/prefer-default-export': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'import/no-unresolved.': 'off',
    'eslint/class-methods-use-this': 'off',
    'import/order': [
      'warn',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          ['parent', 'sibling', 'object', 'index'],
        ],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        'newlines-between': 'never',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          'jest.setup.ts',
          '**/*.test.tsx',
          '**/*.spec.tsx',
          '**/*.test.ts',
          '**/*.spec.ts',
        ],
      },
    ],
  },
  settings: {
    'import/resolver': {
      // use <root>/tsconfig.json
      typescript: {
        project: '.',
      },
    },
  },
}
