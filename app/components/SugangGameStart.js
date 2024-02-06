import React, { useState } from 'react';
import ClickGame from './enrollment/ClickGame';
import Clock from './clock/clock';
import useClock from '../hooks/useClock';

function SugangGameStart() {
  const [startTime, setStartTime] = useState(0);
  const [clickTime, setClickTime] = useState(0);
  const [startText, setStartText] = useState("게임 시작");
  const [clockStarted, setClockStarted] = useState(false);
  const { date: clockTime, tick } = useClock(clockStarted);

  const startSugang = () => {
    const time = new Date(2024, 1, 13, 10, 0, 0);
    setStartTime(time.getTime());
    setClickTime(0);
    setStartText("다시 시작");
    setClockStarted(true);
    tick();
  };

  const register = () => {
    setClickTime(clockTime);
  };


  return (
    <div>
      <Clock
        clockStarted={clockStarted}
        setClockStarted={setClockStarted}
        startText={startText}
        startSugang={startSugang}
      />
      <ClickGame
        startTime={startTime}
        clickTime={clickTime}
        setClickTime={setClickTime}
        clockStarted={clockStarted}
        register = {register}
        startText={startText}
      />
    </div>
  );
}

export default SugangGameStart;