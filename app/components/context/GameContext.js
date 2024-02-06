import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

const GameContext = createContext();

// Provider 컴포넌트
function GameProvider({ children }) {
  const [clockStarted, setClockStarted] = useState(false);
  const [startTime, setStartTime] = useState(0);
  const [clickTime, setClickTime] = useState(0);
  const [startText, setStartText] = useState("게임 시작");
  const [date, setDate] = useState(new Date().getTime());

  // 게임 시작 함수
  const startGame = () => {
    setClockStarted(true);
    const time = new Date(2024, 1, 13, 10, 0, 0);
    setStartTime(time.getTime());
    setClickTime(0);
    setStartText("다시 시작");
  };

  // 시계 작동 함수
  const tick = useCallback(() => {
    if (clockStarted) {
      setDate((prevDate) => prevDate + 8);
    }
  }, [clockStarted]);

  // useEffect를 사용하여 시계 작동
  useEffect(() => {
    let timerId;
    if (clockStarted) {
      timerId = setInterval(tick, 8); // clockStarted가 true일 때만 시계 시작
    }
    return () => clearInterval(timerId); // 컴포넌트 언마운트 시 시계 정지
  }, [clockStarted, tick]);

    // 과목 신청
    const register = () => {
      setClickTime(date);
    };


  return (
    <GameContext.Provider value={{ startGame, register, startText, clockStarted, clickTime, date }}>
      {children}
    </GameContext.Provider>
  );
}

// Custom Hook
function useGame() {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
}

export { GameProvider, useGame };