"use client";

import React, { useState, useEffect, useRef } from "react";
import styles from "./navysm.module.css";
import bgm from "./bgm.mp3";
import { useGame } from "../context/GameContext";
import { faK } from "@fortawesome/free-solid-svg-icons";

const Clock = ({}) => {
  const [timeFormat, setTimeFormat] = useState<string>("09시 59분 50초");
  const [msFormat, setMsFormat] = useState<string>("");
  const [isRed, setIsRed] = useState<boolean>(false);
  const [bgmPlayed, setBgmplayed] = useState<boolean>(false);
  const { startGame, clockStarted, startText, date: clockTime } = useGame();

  const clockRef = useRef(null);
  const msCheckboxRef = useRef<HTMLInputElement>(null);
  const bgmRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const timerId = setInterval(() => {
      const hours = String(new Date(clockTime).getHours()).padStart(2, "0");
      const minutes = String(new Date(clockTime).getMinutes()).padStart(2, "0");
      const seconds = String(new Date(clockTime).getSeconds()).padStart(2, "0");
      const milliSeconds = String(
        new Date(clockTime).getMilliseconds()
      ).padStart(3, "0");

      setTimeFormat(`${hours}시 ${minutes}분 ${seconds}초 `);
      setMsFormat(`${milliSeconds}`);

      if (hours === "09" && minutes === "59" && seconds >= "54") {
        setIsRed(true);
        setBgmplayed(true);
      } else if (hours === "10" && minutes === "00" && seconds === "03") {
        setIsRed(false);
        setBgmplayed(false);
      }
    }, 8);

    return () => clearInterval(timerId);
  }, [clockTime, clockStarted]);

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
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            padding: "0px 10px 10px 10px",
          }}
        >
          <div className={styles.checkboxes} style={{ fontSize: 17 }}>
            <label>
              <input ref={msCheckboxRef} type="checkbox" id="msCheckbox" />
              밀리초 보기
            </label>
          </div>
          <div>
            <button
              onClick={startGame}
              style={{
                backgroundColor: "#a20131",
                fontSize: 20,
                color: "#fff",
                width: 130,
                height: 40,
                borderRadius: 5,
                border: 0,
                cursor: "pointer",
              }}
            >
              {startText}
            </button>
          </div>
        </div>
      </div>
      <audio ref={bgmRef} src={bgm} id="backgroundMusic" />
    </div>
  );
};
export default Clock;
