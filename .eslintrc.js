module.exports = {
  'extends': [
    'next/core-web-vitals', 
    'plugin:@typescript-eslint/recommended',
    'prettier', 
  ],
  'root': true,
  // "env": {
  //   "browser": true,
  //   "es2021": true,
  //   "node" : true,
  // },
  // overrides: [],
  'rules': {
    'no-var': 'error',
    'quotes': ['error', 'single'],
    // "no-unused-vars": "error",
    '@typescript-eslint/no-unused-vars': 'error',
    'object-curly-spacing': [ 'error', 'always' ],
    // "object-curly-newline": [ "error", {
    //   "ObjectPattern": { multiline: false },
    //   "minProperties": 3,
    // } ],
    // "operatator-linebreak": [ "error", "after" ],
    'no-duplicate-imports': 'error',
    'prefer-const': 'warn',
    'max-len': [ 'error', {
      code: 100, 
      ignoreUrls: true,
      ignoreComments: true,
      }, 
    ],
    'semi': [ 'error', 'always' ],
    '@typescript-eslint/comma-dangle': [ 'error', {
      'arrays': 'always-multiline',
      'objects': 'always-multiline',
      'imports': 'always-multiline',
      'exports': 'always-multiline',
      'enums': 'always-multiline',
      'functions': 'never',
    } ],
    '@typescript-eslint/comma-spacing': [ 'error', {
      before: false,
      after: true,
      },
    ],
    'jsx-quotes': ['error', 'prefer-double'],
    'no-multiple-empty-lines': [ 'error', { max: 2 } ],
    'arrow-body-style': [ 'error', 'as-needed' ],
    'react/jsx-sort-props': 'off',
    'react/function-component-definition': [
      2, {
        'namedComponents': [ 'arrow-function', 'function-declaration' ],
        'unnammedComponents': 'arrow-function',
      },
    ],
  },
};
