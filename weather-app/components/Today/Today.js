import styles from './Today.module.css';
import Image from 'next/image';
import { WEATHER_ICON_BASE_URL } from '../../constants/weather';

export default function Today({ today }) {
  if (!today) return null;

  const { datetime, city, country, population, temp, feelsLike, desc, windSpeed, humidity, icon } = today;

  return (
    <article className={styles.today}>
      <header>
        <div className={styles.info}>
          <div className={styles.imgContainer}>
            <Image
              src={`${WEATHER_ICON_BASE_URL}${icon}@2x.png`}
              alt={desc}
              layout="fill"
              className={styles.icon}
              sizes="5rem"
            />
          </div>
          <div className={styles.textGroup}>
            <p className="font-city-time">{datetime}</p>
            <div className={styles.cityTitle}>
              <h2 className="font-city-title">
                {city}, {country}
              </h2>
              <p className="font-city-population">(인구수 : {population})</p>
            </div>
          </div>
        </div>
      </header>
      <section className={styles.temperature}>
        <h2 className="font-city-temp">{temp}℃</h2>
        <p className="font-city-desc">
          Feels like {feelsLike}℃ {desc} 풍속 {windSpeed}m/s 습도 {humidity}%
        </p>
      </section>
    </article>
  );
}
