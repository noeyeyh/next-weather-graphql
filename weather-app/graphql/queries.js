import { gql } from '@apollo/client';

export const GET_CURRENT_WEATHER = gql`
  query GetCurrentWeather($city: String!) {
    currentWeather(city: $city) {
      city
      temp
      feelsLike
      description
      windSpeed
      humidity
      icon
    }
  }
`;

export const GET_FIVE_DAY_FORECAST = gql`
  query GetFiveDayForecast($city: String!) {
    fiveDayForecast(city: $city) {
      city
      items {
        dt
        temp
        feelsLike
        tempMin
        tempMax
        description
        icon
      }
    }
  }
`;
