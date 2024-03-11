module.exports = {
  root: true,
  extends: [
    'plugin:@next/next/recommended',
    '@payloadcms',
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  ignorePatterns: ['**/payload-types.ts'],
  plugins: ['prettier', 'react', 'simple-import-sort'],
  rules: {
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    'no-console': 'off',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          // Packages `react` related packages come first.
          ['^react', '^@?\\w'],
          // Internal packages.
          ['^(@|components)(/.*|$)'],
          // Side effect imports.
          ['^\\u0000'],
          // Parent imports. Put `..` last.
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
          // Other relative imports. Put same-folder imports and `.` last.
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
          // Style imports.
          ['^.+\\.?(css)$'],
        ],
      },
    ],
  },
}
