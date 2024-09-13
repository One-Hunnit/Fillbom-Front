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
    'react-native/no-unused-styles': 2,
    'react-native/split-platform-components': 2,
    'react-native/no-inline-styles': 2,
    'react-native/no-color-literals': 0,
    'react-native/no-raw-text': 2,
    'react-native/no-single-element-style-arrays': 0,
  },
};
