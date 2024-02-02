"use client";

import { useState, useEffect, useRef } from "react";
import styles from "./navysm.module.css";
import bgm from './bgm.mp3';

const Clock: React.FC = () => {
  const [date, setDate] = useState<number>(new Date(2024, 1, 13, 9, 59, 50).getTime());
  const [timeFormat, setTimeFormat] = useState<string>(""); 
  const [msFormat, setMsFormat] = useState<string>(""); 
  const [isRed, setIsRed] = useState<boolean>(false);
  const [bgmPlayed, setBgmplayed] = useState<boolean>(false);
  

  const clockRef = useRef(null);
  const msCheckboxRef = useRef(null);
  const bgmCheckboxRef = useRef(null);
  const bgmRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const timerId = setInterval(() => {
      setDate((prevDate) => prevDate + 10);

      const hours = String(new Date(date).getHours()).padStart(2, "0");
      const minutes = String(new Date(date).getMinutes()).padStart(2, "0");
      const seconds = String(new Date(date).getSeconds()).padStart(2, "0");
      const milliSeconds = String(new Date(date).getMilliseconds()).padStart(3,"0");

      setTimeFormat(`${hours}시 ${minutes}분 ${seconds}초 `);
      setMsFormat(`${milliSeconds}`);

      if (hours === '09' && minutes === '59' && seconds >= '53') {
        setIsRed(true);
        setBgmplayed(true);
      } else if (hours === '10' && minutes === '00' && seconds === '03') {
        setIsRed(false);
        setBgmplayed(false);
      }
      
    }, 10);
    
    return () => clearInterval(timerId);
  }, [date]); // date가 변경될 때마다 useEffect 실행

  useEffect(() => {
    if (bgmPlayed) {
      bgmRef.current?.play();
    } else {
      bgmRef.current?.pause();
      bgmRef.current.currentTime = 0; // 시작 지점으로 되돌림
    }
  }, [bgmPlayed]); 

  const backgroundClass = isRed ? styles.redBackground : '';

return (
  <div className={`${backgroundClass}`}>
    <div className="position">
      <div className={styles.timeArea}>
        <div ref={clockRef} id="clock" className={styles.clockWithMsec}>
          {timeFormat}
          {msCheckboxRef.current?.checked && (
            <div className={styles.msecArea}>
              {msFormat}
            </div>
          )}
        </div>
      </div>
      
      <div className={styles.checkboxes}> 
        <label>
          <input ref={msCheckboxRef} type="checkbox" id="msCheckbox" />밀리초 보기   
        </label>
        <label>
          <input ref={bgmCheckboxRef} type="checkbox" id="bgmCheckbox" />음악 듣기
        </label>
      </div>
    </div>
    <audio ref={bgmRef} src={bgm} id="backgroundMusic" />
  </div>
);

}
  export default Clock;
  

  

