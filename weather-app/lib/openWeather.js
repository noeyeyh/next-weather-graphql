import fetch from 'cross-fetch';

const BASE_URL = process.env.OPENWEATHER_BASE_URL;
const API_KEY = process.env.OPENWEATHER_API_KEY;

if (!API_KEY) {
  throw new Error('OPENWEATHER_API_KEY is not set');
}

// 현재 날씨
export async function fetchCurrentWeather(city) {
  const url = `${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric&lang=kr`;

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`OpenWeather error: ${res.status}`);
  }

  const data = await res.json();
  return data;
}

// 5일(3시간 간격) 예보
export async function fetchFiveDayForecast(city) {
  const url = `${BASE_URL}/forecast?q=${city}&appid=${API_KEY}&units=metric&lang=kr`;

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`OpenWeather error: ${res.status}`);
  }

  const data = await res.json();
  return data;
}
