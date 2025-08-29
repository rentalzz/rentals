module.exports = {
  // Check TypeScript errors in staged files
  '*.{ts,tsx}': ['eslint --fix', 'prettier --write'],

  // Check JavaScript files
  '*.{js,jsx}': ['eslint --fix', 'prettier --write'],

  // Format other files
  '*.{json,md,yml,yaml}': ['prettier --write'],
};
