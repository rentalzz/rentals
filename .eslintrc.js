module.exports = {
  root: true,
  extends: ['@react-native', 'prettier'],
  plugins: ['prettier', 'import', 'unused-imports'],

  rules: {
    'prettier/prettier': 'error',

    // TypeScript
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {argsIgnorePattern: '^_', varsIgnorePattern: '^_'},
    ],
    'unused-imports/no-unused-imports': 'error',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',

    // General best practices
    'no-console': ['warn', {allow: ['warn', 'error']}],
    eqeqeq: ['error', 'always'], // enforce === instead of ==
    'no-duplicate-imports': 'error',
    'no-shadow': 'off', // disabled due to false positives with enums
    'no-undef': 'off', // handled by TS

    // React-specific
    'react/react-in-jsx-scope': 'off', // not needed in React 17+
    'react/jsx-boolean-value': ['warn', 'never'],
    'react/jsx-curly-spacing': ['error', {when: 'never', children: true}],
    'react/self-closing-comp': 'warn',
    'react/jsx-no-duplicate-props': 'error',

    // STRICT Import organization - enforcing exact order:
    // 1. React/React Native core modules (react, react-native)
    // 2. External third-party libraries (react-redux, axios, etc.)
    // 3. Aliased absolute imports (@navigation, @store, @components, etc.)
    // 4. Relative imports (../components/..., ./utils/...)
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        pathGroups: [
          // React and React Native MUST come first
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
          {
            pattern: 'react-native',
            group: 'external',
            position: 'before',
          },
          // All @ aliases go in internal group
          {
            pattern: '@**',
            group: 'internal',
          },
        ],
        pathGroupsExcludedImportTypes: ['react', 'react-native'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'max-len': ['error', {code: 100, ignoreUrls: true, ignoreStrings: true}],
    'no-trailing-spaces': 'error',
    'eol-last': 'error',
  },
};
