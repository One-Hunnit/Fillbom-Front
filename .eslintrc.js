module.exports = {
  env: {
    'react-native/react-native': true, // react-native plugin 사용하기 위해
  },
  parser: '@typescript-eslint/parser', // eslint를 typescript에 적용하기위해
  extends: [
    'plugin:react-native/all', // react-native plugin 사용하기 위해
    'plugin:@typescript-eslint/recommended', // typescript 설정 사용
    'plugin:prettier/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
  ],
  ignorePatterns: ['/*', '!/src', '!/app'],
  plugins: [
    '@typescript-eslint',
    'react',
    'react-native',
    'react-hooks',
    'import',
  ],
  rules: {
    'import/no-named-as-default-member': 'off',
    '@typescript-eslint/consistent-type-imports': 'error',
    'import/prefer-default-export': 'off',
    'import/no-unresolved': 0,
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'import/no-extraneous-dependencies': 0,
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.jsx', '.tsx', '.js'],
      },
    ],
    'import/order': [
      'error',
      {
        groups: [
          ['builtin', 'external'], // 내장 모듈과 외부 모듈을 먼저
          ['internal'], // 내부 모듈
          ['parent', 'sibling', 'index'], // 상위/형제/인덱스 모듈 순서로
        ],
        pathGroups: [
          {
            pattern: 'react*',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '@/*',
            group: 'internal',
            position: 'after',
          },
        ],
        'newlines-between': 'never',
        alphabetize: { order: 'asc', caseInsensitive: true }, // 알파벳 순으로 정렬
      },
    ],
    'react-native/no-unused-styles': 2,
    'react-native/split-platform-components': 2,
    'react-native/no-inline-styles': 2,
    'react-native/no-color-literals': 0,
    'react-native/no-raw-text': 2,
    'react-native/no-single-element-style-arrays': 0,
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: true,
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
