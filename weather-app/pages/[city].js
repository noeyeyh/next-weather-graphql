import { useRouter } from 'next/router';
import styles from '../styles/City.module.css';
import { SmallLogoIcon } from '../public/icon';
import Today from '../components/Today/Today';
import Forecast from '../components/Forecast/Forecast';

export default function City() {
  const router = useRouter();
  const { city } = router.query;

  const dummyToday = {
    datetime: 'May 23. 03:00am',
    city: 'Seoul',
    country: 'KR',
    population: '10,349,312',
    temp: '292.98℃',
    feelsLike: '291.91℃',
    desc: 'clear sky',
    windSpeed: '3.33m/s',
    humidity: '34%',
  };

  const dummyFiveDay = [
    {
      date: 'May 23',
      hours: [
        { time: '03:00am', temp: '297.32°C / 297.32°C', desc: 'clear sky' },
        { time: '06:00am', temp: '297.32°C / 297.32°C', desc: 'clear sky' },
        // ...
      ],
    },
    {
      date: 'May 24',
      hours: [
        { time: '03:00am', temp: '297.32°C / 297.32°C', desc: 'clear sky' },
        // ...
      ],
    },
    // ...
  ];

  return (
    <main className={styles.container}>
      <SmallLogoIcon />
      <h1 className="font-city-heading">Weather Information for {city}</h1>
      <Today today={dummyToday} />

      <Forecast days={dummyFiveDay} />
    </main>
  );
}
