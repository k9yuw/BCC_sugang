"use client";

import React, { useState, useEffect, useRef } from "react";
import styles from "./navysm.module.css";
import bgm from './bgm.mp3';
import useClock from '../../hooks/useClock';


const Clock: React.FC = () => {
  const [timeFormat, setTimeFormat] = useState<string>("");
  const [msFormat, setMsFormat] = useState<string>("");
  const [isRed, setIsRed] = useState<boolean>(false);
  const [bgmPlayed, setBgmplayed] = useState<boolean>(false);
  const [clockStarted, setClockStarted] = useState<boolean>(false);
  const { date: clockDate, tick } = useClock(clockStarted);


  const clockRef = useRef(null);
  const msCheckboxRef = useRef<HTMLInputElement>(null);
  const bgmCheckboxRef = useRef<HTMLInputElement>(null);
  const bgmRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const timerId = setInterval(() => {
      
      const hours = String(new Date(clockDate).getHours()).padStart(2, "0");
      const minutes = String(new Date(clockDate).getMinutes()).padStart(2, "0");
      const seconds = String(new Date(clockDate).getSeconds()).padStart(2, "0");
      const milliSeconds = String(new Date(clockDate).getMilliseconds()).padStart(3,"0");

      setTimeFormat(`${hours}시 ${minutes}분 ${seconds}초 `);
      setMsFormat(`${milliSeconds}`);

      tick();

      if (hours === "09" && minutes === "59" && seconds >= "53") {
        setIsRed(true);
        setBgmplayed(true);
      } else if (hours === "10" && minutes === "00" && seconds === "03") {
        setIsRed(false);
        setBgmplayed(false);
      }
      
    }, 8);
    
    return () => clearInterval(timerId);
  }, [clockDate, clockStarted]); 

  useEffect(() => {
    if (bgmPlayed) {
      if (bgmRef.current) {
        bgmRef.current.play();
      }
    } else {
      if (bgmRef.current) {
        bgmRef.current.pause();
        bgmRef.current.currentTime = 0; // 시작 지점으로 되돌림
      }
    }
  }, [bgmPlayed]);
  

  const backgroundClass = isRed ? styles.redBackground : "";

  return (
    <div className={`${backgroundClass}`}>
      <div className="position">
        <div className={styles.timeArea}>
          <div ref={clockRef} id="clock" className={styles.clockWithMsec}>
            {timeFormat}
            {msCheckboxRef.current?.checked && (
              <div className={styles.msecArea}>{msFormat}</div>
            )}
          </div>
        </div>

        <div className={styles.checkboxes}>
          <label>
            <input ref={msCheckboxRef} type="checkbox" id="msCheckbox" />
            밀리초 보기
          </label>
          <label>
            <input ref={bgmCheckboxRef} type="checkbox" id="bgmCheckbox" />
            음악 듣기
          </label>
        </div>
        <div>
          <button onClick={() => setClockStarted(true)}>게임 시작</button>
      </div>
      </div>
      <audio ref={bgmRef} src={bgm} id="backgroundMusic" />
    </div>

);

}
export default Clock;