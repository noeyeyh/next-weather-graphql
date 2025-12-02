import { useRouter } from 'next/router';
import styles from '../styles/City.module.css';
import { SmallLogoIcon } from '../public/icon';
import Today from '../components/Today/Today';
import Forecast from '../components/Forecast/Forecast';
import { useQuery } from '@apollo/client';
import { GET_CURRENT_WEATHER, GET_FIVE_DAY_FORECAST } from '../graphql/queries';

export default function City() {
  const router = useRouter();
  const { city } = router.query;

  // 1) useQuery는 조건 없이 최상단에서 호출
  const {
    data: todayData,
    loading: todayLoading,
    error: todayError,
  } = useQuery(GET_CURRENT_WEATHER, {
    variables: { city },
    skip: !city, // ← city 없으면 쿼리 실행 안함
  });

  const {
    data: forecastData,
    loading: forecastLoading,
    error: forecastError,
  } = useQuery(GET_FIVE_DAY_FORECAST, {
    variables: { city },
    skip: !city,
  });

  // 2) city 없으면 화면만 비워두기
  if (!city) return null;

  // 3) 로딩/에러 처리
  if (todayLoading || forecastLoading)
    return (
      <main className={styles.container}>
        <p role="status">날씨 정보를 불러오는 중입니다…</p>
      </main>
    );

  if (todayError || forecastError)
    return (
      <main className={styles.container}>
        <p role="alert">날씨 데이터를 가져오지 못했습니다.</p>
      </main>
    );

  // 4) Response 데이터
  const w = todayData.currentWeather;
  const f = forecastData.fiveDayForecast;

  const today = {
    datetime: new Date().toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }),
    city: w.city,
    country: w.country,
    population: f.population.toLocaleString(),
    temp: w.temp,
    feelsLike: w.feelsLike,
    desc: w.description,
    windSpeed: w.windSpeed,
    humidity: w.humidity,
    icon: w.icon,
  };

  const forecastList = forecastData.fiveDayForecast.items;

  return (
    <main className={styles.container}>
      <SmallLogoIcon />
      <h1 className="font-city-heading">Weather Information for {city}</h1>
      <Today today={today} />
      <Forecast items={forecastList} />
    </main>
  );
}
