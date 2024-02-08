import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";

const GameContext = createContext();

// Provider 컴포넌트

const START_TIME = 1707785990000; // 2024-02-13T09:59:50.000
function GameProvider({ children }) {
  const [clockStarted, setClockStarted] = useState(false);
  const [startTime, setStartTime] = useState(0);
  const [date, setDate] = useState(START_TIME);
  // const timeTaken = clickTime - startTime;

  // 게임 시작 함수
  const startGame = () => {
    // start
    if (!clockStarted) {
      setClockStarted(true);
      setStartTime(new Date().valueOf());
    } else {
      setClockStarted(false);
      setDate(START_TIME);
    }

    return;
  };

  // 시계 작동
  useEffect(() => {
    let timerId;
    if (clockStarted) {
      timerId = setInterval(() => {
        setDate(START_TIME + new Date().valueOf() - startTime);
      }, 8);
    }
    return () => clearInterval(timerId); // 컴포넌트 언마운트 시 시계 정지
  }, [clockStarted, startTime]);

  // 과목 신청
  const register = () => {
    if (!clockStarted) return -1;
    const clickTime = new Date().valueOf() - startTime;

    return clickTime - 10 * 1000;
  };

  return (
    <GameContext.Provider
      value={{
        startGame,
        register,
        clockStarted,
        date,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

// Custom Hook
function useGame() {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error("useGame must be used within a GameProvider");
  }
  return context;
}

export { GameProvider, useGame };
