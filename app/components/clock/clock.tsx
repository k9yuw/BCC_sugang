"use client";

import React, { useState, useEffect, useRef } from "react";
import styles from "./navysm.module.css";
import bgm from "./bgm.mp3";
import { useGame } from "../context/GameContext";
import { faK } from "@fortawesome/free-solid-svg-icons";

const formatTimeString = (dateValue: number, isMs = false) => {
  const date = new Date(dateValue);
  if (isMs)
    return `${Math.floor((dateValue % 1000) / 10)}`.padStart(2, "0") + "0";
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  return `${hours}시 ${minutes}분 ${seconds}초 `;
};

const Clock = ({}) => {
  const [isRed, setIsRed] = useState<boolean>(false);
  const [bgmPlayed, setBgmplayed] = useState<boolean>(false);
  const {
    startGame,
    // startText,
    date: clockTime,
    clockStarted,
  } = useGame();
  const [msChecked, setMsChecked] = useState(false);

  const clockRef = useRef(null);
  const bgmRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const redStart = new Date(2024, 1, 13, 9, 59, 53, 200);
    const redEnd = new Date(2024, 1, 13, 10, 0, 3);

    if (redEnd < clockTime) {
      setIsRed(false);
      setBgmplayed(false);
      return;
    }

    if (redStart < clockTime) {
      setIsRed(true);
      setBgmplayed(true);
    }
  }, [clockTime]);

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
            {clockTime ? formatTimeString(clockTime) : "9시 59분 50초"}
            {msChecked && (
              <div className={styles.msecArea}>
                {clockTime ? formatTimeString(clockTime, true) : "000"}
              </div>
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
              <input
                type="checkbox"
                id="msCheckbox"
                onChange={(e) => {
                  setMsChecked(e.target.checked);
                }}
              />
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
              {clockStarted ? "다시 시작" : "게임 시작"}
            </button>
          </div>
        </div>
      </div>
      <audio ref={bgmRef} src={bgm} id="backgroundMusic" />
    </div>
  );
};
export default Clock;
