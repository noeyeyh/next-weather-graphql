# 🌤️ Weather App – OpenWeather 기반 도시별 날씨 서비스

OpenWeather API를 기반으로 선택한 도시의 현재 날씨 정보와 5일 예보를 보여주는 기능을 구현했습니다.
GraphQL과 Apollo를 사용해 백엔드 API를 구성하고, 모듈 CSS & 반응형 레이아웃을 적용했습니다.

---

## 📁 프로젝트 구조

```
📦 weather-app
├── constants
│   └── weather.js              # 공통 상수 관리
│
├── graphql
│   ├── typeDef.js              # GraphQL Schema 정의
│   ├── resolvers.js            # Weather API 호출 및 데이터 가공
│   └── queries.js              # 클라이언트 GraphQL 쿼리
│
├── lib
│   ├── apolloClient.js         # Apollo Client 설정
│   └── openWeather.js          # OpenWeather API 관련 함수
│
├── pages
│   ├── index.js                # 메인 페이지 (도시 선택)
│   ├── [city].js               # 동적 라우팅 상세 페이지
│   └── api
│       └── graphql.js          # GraphQL API (Next.js API Route + ApolloServer)
│
├── public
│   ├── icon                    # 날씨 아이콘
│   ├── favicon.ico
│   └── vercel.svg
│
├── styles
│   ├── City.module.css         # 도시 상세 페이지 스타일
│   ├── Home.module.css         # 메인 페이지 스타일
│   └── globals.css             # 전역 스타일
│
└── utils
    └── weather.js              # 날씨 데이터 가공 함수
```

---

## ⚙️ 설치 및 실행 방법

### ✅ 1. 프로젝트 클론

```bash
git clone https://github.com/noeyeyh/next-weather-graphql.git
cd weather-app
```

---

### ✅ 2. 환경 변수 설정 (.env)

```bash
OPENWEATHER_API_KEY=발급받은_API_KEY

```

> OpenWeather API Key를 .env 파일에 저장합니다.

---

### ✅ 3. 패키지 설치 및 개발 서버 실행

```bash
yarn install
yarn dev
```

> 앱은 `http://localhost:3000` 에서 확인할 수 있습니다.

---

## 🚀 전체 동작 흐름

1. 사용자가 메인 페이지(/)에 접속
2. 서울/도쿄/파리/런던 중 도시 버튼 클릭
3. 동적 라우팅(/Seoul, /Tokyo…) 기반으로 해당 페이지 이동
4. 상세 페이지에서 Apollo Client가 GraphQL 서버에 요청
5. Next.js API Route(/api/graphql) 내부의 ApolloServer가 OpenWeather API 호출
6. 현재 날씨 + 3시간 간격 5일 예보 데이터를 파싱
7. 프론트엔드 컴포넌트(Today, Forecast)에서 시각화

---

## 🧠 주요 기능

- ✅ Next.js 12 기반 프론트엔드 & 백엔드
- ✅ GraphQL API 구현 (ApolloServer + Next API Route)
- ✅ OpenWeather Current Weather / 5-day Forecast 처리
- ✅ 도시별 동적 라우팅
- ✅ 반응형 레이아웃

---

## 📌 사용 기술 스택

| 영역       | 기술                                              |
| ---------- | ------------------------------------------------- |
| 프론트엔드 | Next.js 12, React.js, Apollo Client               |
| 백엔드     | Next.js API Route, Apollo Server Micro            |
| 데이터     | OpenWeather API (Current Weather, 5-day Forecast) |
| 스타일     | CSS Module                                        |
| 기타       | 코드 스플리팅, 반응형 레이아웃, fetch API         |

---
