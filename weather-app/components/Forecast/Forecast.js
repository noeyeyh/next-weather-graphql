import { useState } from 'react';
import styles from './Forecast.module.css';
import { UpIcon, DownIcon, SmallWeatherIcon } from '../../public/icon';

export default function Forecast({ days }) {
  // index -> boolean 으로 열림 상태 관리 (여러 개 true 가능)
  const [openMap, setOpenMap] = useState({});

  const handleToggle = (index) => {
    setOpenMap((prev) => ({
      ...prev,
      [index]: !prev[index], // 이미 열려 있으면 닫고, 닫혀 있으면 열기
    }));
  };

  return (
    <section className={styles.section} aria-labelledby="forecast-heading">
      <header className={styles.header}>
        <h2 id="forecast-heading" className="font-city-title">
          5-day Forecast
        </h2>
      </header>

      {days.map((day, index) => {
        const isOpen = !!openMap[index];
        const panelId = `day-panel-${index}`;
        const headerId = `day-header-${index}`;

        return (
          <article key={day.date} className={styles.dayArticle}>
            <header className={styles.dayHeader} id={headerId}>
              <button
                type="button"
                className={styles.dayBtn}
                onClick={() => handleToggle(index)}
                aria-expanded={isOpen}
                aria-controls={panelId}>
                <span className="font-city-body" style={{ color: 'var(--color-gray-300)' }}>
                  {day.date}
                </span>
                {isOpen ? <DownIcon /> : <UpIcon />}
              </button>
            </header>

            {isOpen && (
              <div id={panelId} role="region" aria-labelledby={headerId}>
                <ul className={styles.hourList}>
                  {day.hours.map((hour) => (
                    <li key={hour.time} className={styles.hourItem}>
                      <div className={styles.hourRow}>
                        {/* 왼쪽 블록: 아이콘 + 시간 */}
                        <div className={styles.hourLeft}>
                          <SmallWeatherIcon />
                          <time className="font-city-body" style={{ color: 'var(--color-gray-200)' }}>
                            {hour.time}
                          </time>
                        </div>

                        {/* 오른쪽 블록: 상태 + 온도 */}
                        <div className={styles.hourRight}>
                          <p className="font-city-caption">{hour.desc}</p>
                          <p className="font-city-body" style={{ color: 'var(--color-gray-300)' }}>
                            {hour.temp}
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </article>
        );
      })}
    </section>
  );
}
