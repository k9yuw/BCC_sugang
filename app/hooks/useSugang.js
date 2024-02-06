import React, { useState, useCallback, useEffect } from 'react';


function useSugang() {
  const [startTime, setStartTime] = useState(0);
  const [clickTime, setClickTime] = useState(0);
  const [startText, setStartText] = useState("게임 시작");
  const [clockStarted, setClockStarted] = useState(false);
  const [date, setDate] = useState(new Date(2024, 1, 13, 9, 59, 50).getTime());


  // 게임 시작 
  const startGame = () => {
    setClockStarted(true);
    const time = new Date(2024, 1, 13, 10, 0, 0);
    setStartTime(time.getTime());
    setClickTime(0);
    setStartText("다시 시작");
  };

  
    // 시계 작동
    const tick = useCallback(() => {
      if (clockStarted) {
        setDate((prevDate) => prevDate + 8);
      }
    }, [clockStarted]);
    
    useEffect(() => {
      let timerId;
      if (clockStarted) {
        timerId = setInterval(tick, 8); // clockStarted가 true일 때만 interval 시작
      }
      return () => clearInterval(timerId); // 컴포넌트 언마운트 시 또는 clockStarted가 false로 바뀔 때 interval 정지
    }, [clockStarted, tick]); // clockStarted 변경 시 이 effect를 재실행
  

  // 등록 시 clickTime을 현재 date로 바꿔줌
  const register = () => {
    setClickTime(date);
  };


  return { date, startTime, clickTime, startText, clockStarted, date, tick, startGame, register };
}

export default useSugang;