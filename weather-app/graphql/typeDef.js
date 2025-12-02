// graphql/typeDef.js
import { gql } from 'apollo-server-micro';

export const typeDefs = gql`
  type Weather {
    city: String!
    temp: Float!
    feelsLike: Float!
    description: String!
    windSpeed: Float!
    humidity: Int!
    icon: String!
  }

  type ForecastItem {
    dt: String! # "2024-05-23 03:00:00"
    temp: Float! # 현재 기온
    feelsLike: Float! # 체감 온도
    tempMin: Float! # 최저 기온
    tempMax: Float! # 최고 기온
    description: String! # 날씨 설명 (clear sky 등)
    icon: String! # 날씨 아이콘 코드 (01d, 02n 등)
  }

  type Forecast {
    city: String!
    items: [ForecastItem!]!
  }

  type Query {
    currentWeather(city: String!): Weather!
    fiveDayForecast(city: String!): Forecast!
  }
`;
