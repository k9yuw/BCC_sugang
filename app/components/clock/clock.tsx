"use client";

import { useState, useEffect } from "react";
import styles from "./navysm.module.css";

const Clock: React.FC = () => {
  const [date, setDate] = useState<number>(
    new Date(2024, 1, 13, 9, 59, 50).getTime()
  );
  const [musicPlayed, setMusicPlayed] = useState(false);

  const getClock = () => {
    if (typeof window === "undefined") return;

    const clock = document.getElementById("clock") as HTMLDivElement;
    const dateCheckbox = document.getElementById(
      "dateCheckbox"
    ) as HTMLInputElement;
    const msCheckbox = document.getElementById(
      "msCheckbox"
    ) as HTMLInputElement;
    const bgmCheckbox = document.getElementById(
      "bgmCheckbox"
    ) as HTMLInputElement;
    const bgm = document.getElementById("backgroundMusic") as HTMLAudioElement;

    const year = String(new Date(date).getFullYear());
    const month = String(new Date(date).getMonth() + 1).padStart(2, "0");
    const day = String(new Date(date).getDate()).padStart(2, "0");
    const hours = String(new Date(date).getHours()).padStart(2, "0");
    const minutes = String(new Date(date).getMinutes()).padStart(2, "0");
    const seconds = String(new Date(date).getSeconds()).padStart(2, "0");
    const milliSeconds = String(new Date(date).getMilliseconds()).padStart(
      3,
      "0"
    );

    const dateFormat = `${year}년 ${month}월 ${day}일 `;
    const timeFormat = `${hours}시 ${minutes}분 ${seconds}초 `;
    const msFormat = `${milliSeconds}`;

    const timeText = msCheckbox.checked ? msFormat : "";
    clock.innerText = dateCheckbox.checked
      ? timeFormat + timeText
      : dateFormat + timeFormat + timeText;

    setDate((prevDate) => prevDate + 10);

    if (
      bgmCheckbox.checked &&
      !musicPlayed &&
      new Date(date).getSeconds() >= 53 &&
      new Date(date).getMilliseconds() >= 0
    ) {
      document.body.classList.add("red-background");
      bgm.play();
      setMusicPlayed(true);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      // setTime(new Date());
    }, 10);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <h2 id="clock" className={styles.timeArea}>
        00:00
      </h2>
      <label>
        <input type="checkbox" id="dateCheckbox" /> 날짜 제거
      </label>
      <label>
        <input type="checkbox" id="msCheckbox" /> 밀리초 보기
      </label>
      <label>
        <input type="checkbox" id="bgmCheckbox" /> 음악 켜기
      </label>
      <button id="Button">수강신청</button>
      <h1 className="hidden" id="greeting"></h1>
    </div>
  );
};

export default Clock;
