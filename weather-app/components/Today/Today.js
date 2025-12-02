import styles from './Today.module.css';
import { WeatherIcon } from '../../public/icon';

export default function Today({ today }) {
  if (!today) return null;

  const { datetime, city, country, population, temp, feelsLike, desc, windSpeed, humidity, icon } = today;

  return (
    <article className={styles.today}>
      <header>
        <div className={styles.info}>
          <WeatherIcon icon={icon} />
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
