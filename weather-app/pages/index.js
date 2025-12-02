import Head from 'next/head';
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css';
import CityBtn from '../components/CityBtn/CityBtn';
import { LogoIcon } from '../public/icon';

export default function Home() {
  const router = useRouter();

  const handleCityClick = (city) => {
    router.push(`/${city}`);
  };

  return (
    <>
      <Head>
        <title>Weather App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <meta name="description" content="Weather App - 도시별 현재 날씨와 5일 예보를 확인할 수 있는 서비스" />
        <meta property="og:title" content="Weather App" />
        <meta property="og:description" content="도시별 현재 날씨와 5일 예보 정보를 확인하세요." />
        <meta property="og:image" content="/favicon.ico" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.container}>
        <h1 className="font-home-title">
          <span style={{ color: 'var(--color-gray-300)' }}>Welcome to</span>
          <br />
          <span style={{ color: 'var(--color-red-200)' }}>Weather app!</span>
        </h1>

        <p className="font-home-body" style={{ color: 'var(--color-gray-100)' }}>
          Choose a city from the list below to check the weather.
        </p>

        <nav className={styles.cityList} aria-label="City list">
          <CityBtn text="Seoul" />
          <CityBtn text="Tokyo" />
          <CityBtn text="Paris" />
          <CityBtn text="London" />
        </nav>

        <LogoIcon />
      </main>
    </>
  );
}
