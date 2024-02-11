"use client";

import React, {
  useState,
  useEffect,
  useRef,
  Dispatch,
  SetStateAction,
} from "react";
import bgm from "./bgm.mp3";
import { useGame } from "../context/GameContext";
import courseData from "@/app/constant/courseDataInterface";

const formatTimeString = (dateValue: number, isMs = false) => {
  const date = new Date(dateValue);
  if (isMs)
    return `${Math.floor((dateValue % 1000) / 10)}`.padStart(2, "0") + "0";
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  return `${hours}시 ${minutes}분 ${seconds}초 `;
};

const Clock = ({
  registeredCourses,
  setRegisteredCourses,
  resultType, setResultType,
  resetRegistered
}: {
  registeredCourses: courseData[];
  setRegisteredCourses: Dispatch<SetStateAction<courseData[]>>;
  resultType: string; 
  setResultType: Dispatch<SetStateAction<string>>;
  resetRegistered: () => void;
}) => {
  const [isRed, setIsRed] = useState<boolean>(false);
  const [bgmPlayed, setBgmplayed] = useState<boolean>(false);
  const { startGame, date: clockTime, clockStarted } = useGame();
  const [msChecked, setMsChecked] = useState(false);
  const [disableTransition, setDisableTransition] = useState(false);

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

  const handleButtonClick = () => {
    startGame();
    setIsRed(false);
    setDisableTransition(true);
    localStorage.setItem("registeredCourses", "[]");
    setRegisteredCourses([]);
    setResultType?.("toEarly");
    resetRegistered();
  };

  useEffect(() => {
    if (disableTransition) {
      const timer = setTimeout(() => {
        setDisableTransition(false);
      }, 0);

      return () => clearTimeout(timer);
    }
  }, [disableTransition]);

  return (
    <div
      style={{
        transition: disableTransition ? undefined : "background-color 7s",
        backgroundColor: isRed ? "red" : "transparent",
        borderBottomLeftRadius: "5px",
        borderBottomRightRadius: "5px",
      }}
    >
      <div
        style={{
          maxWidth: "500px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            letterSpacing: "-6px",
            fontSize: "40pt",
            color: "#a20131",
            fontWeight: "bold",
            textShadow: "rgb(80, 80, 80) -1px -1px 1px",
            width: "100%",
            marginLeft: "7px",
            paddingTop: "4px",
          }}
        >
          <div
            ref={clockRef}
            id="clock"
            style={{
              display: "flex",
              alignItems: "baseline",
            }}
          >
            {clockTime ? formatTimeString(clockTime) : "9시 59분 50초"}
            {msChecked && (
              <div
                style={{
                  letterSpacing: "-3px",
                  fontSize: "27pt",
                  color: "#a20131",
                  fontWeight: "bold",
                  textShadow: "rgb(80, 80, 80) -1px -1px 1px",
                  paddingTop: "2px",
                  paddingLeft: "10px",
                }}
              >
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
          <div style={{ fontSize: 17, margin: "0px 5px 5px 5px" }}>
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
              onClick={handleButtonClick}
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
