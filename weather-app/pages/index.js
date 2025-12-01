import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Weather App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <meta name="description" content="Weather App - 도시별 현재 날씨와 5일 예보를 확인할 수 있는 서비스" />
        <meta property="og:title" content="Weather App" />
        <meta property="og:description" content="도시별 현재 날씨와 5일 예보 정보를 확인하세요." />
        <meta property="og:image" content="/favicon.ico" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
}
