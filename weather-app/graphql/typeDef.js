import { gql } from 'apollo-server-micro';

export const typeDefs = gql`
  type Weather {
    city: String!
    country: String!
    temp: Float!
    feelsLike: Float!
    description: String!
    windSpeed: Float!
    humidity: Int!
    icon: String!
  }

  type ForecastItem {
    dt: String!
    temp: Float!
    feelsLike: Float!
    tempMin: Float!
    tempMax: Float!
    description: String!
    icon: String!
  }

  type Forecast {
    population: Int!
    items: [ForecastItem!]!
  }

  type Query {
    currentWeather(city: String!): Weather!
    fiveDayForecast(city: String!): Forecast!
  }
`;
