/**
 * GraphQL items를 날짜별로 묶어서
 * [
 *   { date: 'May 23', hours: [{ time, tempText, desc, icon }, ...] },
 *   ...
 * ]
 * 형태로 변환
 */
export function groupByDate(items) {
  const map = {};

  items.forEach((item) => {
    const dateObj = new Date(item.dt);

    // 예: "May 23"
    const dateLabel = dateObj.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
    });

    // 예: "03:00 AM"
    const timeLabel = dateObj.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    });

    if (!map[dateLabel]) {
      map[dateLabel] = [];
    }

    map[dateLabel].push({
      time: timeLabel,
      tempText: `${Math.round(item.tempMin)}℃ / ${Math.round(item.tempMax)}℃`,
      desc: item.description,
      icon: item.icon,
    });
  });

  return Object.entries(map).map(([date, hours]) => ({ date, hours }));
}
