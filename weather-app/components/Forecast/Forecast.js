import { useState } from 'react';
import styles from './Forecast.module.css';
import { UpIcon, DownIcon } from '../../public/icon';
import { groupByDate } from '../../utils/weather';
import Image from 'next/image';
import { WEATHER_ICON_BASE_URL } from '../../constants/weather';

export default function Forecast({ items }) {
  const [openMap, setOpenMap] = useState({});

  if (!items || items.length === 0) return null;

  const days = groupByDate(items);

  const handleToggle = (index) => {
    setOpenMap((prev) => ({
      ...prev,
      [index]: !prev[index],
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
                <time className="font-city-body" style={{ color: 'var(--color-gray-300)' }}>
                  {day.date}
                </time>
                {isOpen ? <DownIcon /> : <UpIcon />}
              </button>
            </header>

            {isOpen && (
              <div id={panelId} role="region" aria-labelledby={headerId}>
                <ul className={styles.hourList}>
                  {day.hours.map((hour) => (
                    <li key={hour.time} className={styles.hourItem}>
                      <div className={styles.hourRow}>
                        {/* 왼쪽: 아이콘 + 시간 */}
                        <div className={styles.hourLeft}>
                          <div className={styles.imgContainer}>
                            <Image
                              src={`${WEATHER_ICON_BASE_URL}${hour.icon}@2x.png`}
                              alt={hour.desc}
                              layout="fill"
                              className={styles.icon}
                              sizes="3.75rem"
                            />
                          </div>
                          <time className="font-city-body" style={{ color: 'var(--color-gray-200)' }}>
                            {hour.time}
                          </time>
                        </div>

                        {/* 오른쪽: 상태 + 온도 */}
                        <div className={styles.hourRight}>
                          <p className="font-city-caption">{hour.desc}</p>
                          <p className="font-city-body" style={{ color: 'var(--color-gray-300)' }}>
                            {hour.tempText}
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
