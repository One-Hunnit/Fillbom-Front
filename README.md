# 돌봄의 꽃을 피우다, 필봄 🌸

필봄(Fillbom) 모바일 애플리케이션의 프론트엔드 레포지토리입니다.

## 기능 소개

## 기술 스택

- React Native
- Expo
- TypeScript
- React Query
- Zustand
- React Hook Form
- React Navigation
- Zod
- Axios

## 주요 기능

- 카카오/애플 소셜 로그인
- 푸시 알림 (Firebase Cloud Messaging)
- 지도 기능 (네이버 맵)
- 이미지 업로드 및 처리
- 캘린더 기능
- 실시간 API 통신

## 개발 환경 설정

1. 필수 요구사항:

   - Node.js
   - Yarn
   - Xcode (iOS 개발)
   - Android Studio (Android 개발)
   - Expo CLI

2. 설치:

```bash
# 의존성 설치
yarn install

# iOS 의존성 설치
cd ios && pod install && cd ..
```

3. 개발 서버 실행:

```bash
# iOS
yarn ios

# Android
yarn android

# 실제 디바이스에서 실행
yarn ios:device
yarn android:device
```

## 스크립트

- `yarn ios`: iOS 시뮬레이터에서 실행
- `yarn android`: Android 에뮬레이터에서 실행
- `yarn lint`: 코드 린팅
- `yarn test`: 테스트 실행
- `yarn doctor`: Expo 프로젝트 진단
- `yarn openapi`: OpenAPI 타입 생성

## 환경 변수 설정

프로젝트 실행을 위해 다음 환경 변수가 필요합니다:

- Kakao API 키
- Apple Sign In 설정
- Firebase 설정
- Naver Maps API 키

## 배포

Expo EAS를 통해 배포가 진행됩니다. 자세한 배포 프로세스는 팀 내부 문서를 참고해주세요.
