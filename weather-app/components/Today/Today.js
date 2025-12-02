import styles from './Today.module.css';
import { WeatherIcon } from '../../public/icon';

export default function Today() {
  return (
    <article className={styles.today}>
      <header>
        <div className={styles.info}>
          <WeatherIcon />
          <div className={styles.textGroup}>
            <p className="font-city-time">May 23. 03:00am</p>
            <div className={styles.cityTitle}>
              <h2 className="font-city-title">Seoul, KR</h2>
              <p className="font-city-population">(인구수 : 10349312)</p>
            </div>
          </div>
        </div>
      </header>
      <section className={styles.temperature}>
        <h2 className="font-city-temp">292.98℃</h2>
        <p className="font-city-desc">Feels like 291.91℃ clear sky 풍속 3.33m/s 습도 34%</p>
      </section>
    </article>
  );
}
