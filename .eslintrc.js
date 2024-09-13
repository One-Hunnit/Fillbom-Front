module.exports = {
  env: {
    'react-native/react-native': true, // react-native plugin 사용하기 위해
  },
  parser: '@typescript-eslint/parser', // eslint를 typescript에 적용하기위해
  extends: [
    'airbnb', // airbnb style
    'airbnb/hooks', // airbnb hooks 옵션
    'plugin:react-native/all', // react-native plugin 사용하기 위해
    'plugin:@typescript-eslint/recommended', // typescript 설정 사용
    'prettier', // prettier 와 충돌 막기 위해
    'prettier/react', // prettier 와 충돌 막기 위해
    'prettier/@typescript-eslint', // prettier 와 충돌 막기 위해
  ],
  plugins: ['@typescript-eslint', 'react', 'react-native', 'react-hooks'],
  rules: {
    'import/no-unresolved': 0,
    'import/extensions': [
      'error',
      'never',
      {
        ts: 'never',
        tsx: 'never',
        js: 'never',
        jsx: 'never',
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
        'newlines-between': 'always', // 그룹 간 줄바꿈을 강제
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
};
