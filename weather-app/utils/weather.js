/**
 * GraphQL items를 날짜별로 묶어서
 * [
 *   { date: 'Dec 3', hours: [{ time, tempText, desc, icon }, ...] },
 *   ...
 * ]
 * 형태로 변환
 * - 오늘 이전(과거) 시간대는 제외
 * - 최대 5일까지만 사용
 */
export function groupByDate(items) {
  const today = new Date();
  today.setHours(0, 0, 0, 0); // 오늘 0시로 고정 (로컬 기준)

  const map = new Map();

  items.forEach((item) => {
    // item.dt가 ms 단위 타임스탬프거나 ISO 문자열이라고 가정
    // 만약 Unix 초 단위라면: new Date(item.dt * 1000)
    const dateObj = new Date(item.dt);

    // 오늘 이전 데이터는 제외
    if (dateObj < today) return;

    // 로컬(브라우저) 기준 날짜 key: YYYY-MM-DD
    const year = dateObj.getFullYear();
    const month = String(dateObj.getMonth() + 1).padStart(2, '0');
    const day = String(dateObj.getDate()).padStart(2, '0');
    const dayKey = `${year}-${month}-${day}`;

    // 예: 'Dec 3'
    const dateLabel = dateObj.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
    });

    // 예: '03:00 AM'
    const timeLabel = dateObj.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    });

    if (!map.has(dayKey)) {
      map.set(dayKey, {
        date: dateLabel,
        hours: [],
      });
    }

    map.get(dayKey).hours.push({
      time: timeLabel,
      tempText: `${Math.round(item.tempMin)}℃ / ${Math.round(item.tempMax)}℃`,
      desc: item.description,
      icon: item.icon,
    });
  });

  // dayKey(YYYY-MM-DD) 기준으로 정렬 후, 오늘부터 최대 5일만 사용
  return Array.from(map.entries())
    .sort(([a], [b]) => (a < b ? -1 : a > b ? 1 : 0))
    .slice(0, 5)
    .map(([, value]) => value); // { date, hours }만 반환
}
