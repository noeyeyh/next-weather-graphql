import { fetchCurrentWeather, fetchFiveDayForecast } from '../lib/openWeather';

export const resolvers = {
  Query: {
    currentWeather: async (_, { city }) => {
      const data = await fetchCurrentWeather(city);

      return {
        city: data.name,
        country: data.sys.country,
        temp: data.main.temp,
        feelsLike: data.main.feels_like,
        description: data.weather[0].description,
        windSpeed: data.wind.speed,
        humidity: data.main.humidity,
        icon: data.weather[0].icon,
      };
    },

    fiveDayForecast: async (_, { city }) => {
      const data = await fetchFiveDayForecast(city);

      return {
        city: data.city.name,
        country: data.city.country,
        population: data.city.population,
        items: data.list.map((item) => ({
          dt: item.dt_txt,
          temp: item.main.temp,
          feelsLike: item.main.feels_like,
          tempMin: item.main.temp_min,
          tempMax: item.main.temp_max,
          description: item.weather[0].description,
          icon: item.weather[0].icon,
        })),
      };
    },
  },
};
