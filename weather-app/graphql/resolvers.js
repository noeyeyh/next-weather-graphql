// graphql/resolvers.js
import { fetchCurrentWeather, fetchFiveDayForecast } from '../lib/openWeather';

export const resolvers = {
  Query: {
    // 현재 날씨
    currentWeather: async (_, { city }) => {
      const data = await fetchCurrentWeather(city);

      return {
        city: data.name,
        temp: data.main.temp,
        feelsLike: data.main.feels_like,
        description: data.weather[0].description,
        windSpeed: data.wind.speed,
        humidity: data.main.humidity,
        icon: data.weather[0].icon, // UI에서 아이콘 표시용
      };
    },

    // 5일(3시간 단위) 예보
    fiveDayForecast: async (_, { city }) => {
      const data = await fetchFiveDayForecast(city);

      return {
        city: data.city.name,
        items: data.list.map((item) => ({
          dt: item.dt_txt, // "2024-05-23 03:00:00"
          temp: item.main.temp, // 현재 기온
          feelsLike: item.main.feels_like, // 체감 온도
          tempMin: item.main.temp_min, // 최저 기온
          tempMax: item.main.temp_max, // 최고 기온
          description: item.weather[0].description,
          icon: item.weather[0].icon,
        })),
      };
    },
  },
};
