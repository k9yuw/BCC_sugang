import { useState, useEffect, useCallback } from 'react';

function useClock(clockStarted) {
  const [date, setDate] = useState(new Date(2024, 1, 13, 9, 59, 50).getTime());

  const tick = useCallback(() => {
    if (clockStarted) {
      setDate((prevDate) => prevDate + 8);
    }
  }, [clockStarted]);

  useEffect(() => {
    const timerId = setInterval(tick, 1000); // 1초마다 tick 함수 호출
    return () => clearInterval(timerId); // 언마운트 시 타이머 제거
  }, [tick]);

  return { date, tick };
}

export default useClock;
