import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { MouseEvent } from "react";
import { usePathname } from "next/navigation";
import BodyBottomPreferred from "../BodyBottomPreferred";
import courseData from "@/app/constant/courseDataInterface";
import ResultPopUp from "../popups/ResultPopUp";
import WaitingPopUp from "../popups/WatingPopUp";
import CustomPopup from "../popups/CustomPopup";
import { all } from "@/app/data/all";
import { useGame } from "../context/GameContext";
import BodyBottomRegister from "../BodyBottomRegister";

const rand = Math.random();

export default function RegisterByCourseCode({
  registeredCourses,
  setRegisteredCourses,
  preferredCourses,
  setPreferredCourses,
  registeredNum,
  plusRegistered,
  resultType,
  setResultType,
}: {
  registeredCourses: courseData[];
  setRegisteredCourses: Dispatch<SetStateAction<courseData[]>>;
  preferredCourses: courseData[];
  setPreferredCourses: Dispatch<SetStateAction<courseData[]>>;
  registeredNum: number;
  plusRegistered: () => void;
  resultType: string;
  setResultType: Dispatch<SetStateAction<string>>;
}) {
  const pathname = usePathname();
  const [courseCode, setCourseCode] = useState<string>("");
  const [section, setSection] = useState<string>("");
  const [preferredCredit, setPreferredCredit] = useState<number>(0);
  const { register, clockStarted } = useGame();
  const [timeTaken, setTimeTaken] = useState<number>();
  const [registeredCredit, setRegisteredCredit] = useState<number>(0);
  const [customPopupOpen, setCustomPopupOpen] = useState(false);
  const [textAlert, setTextAlert] = useState<string>("");
  const [resultPopupOpen, setResultPopupOpen] = useState(false);
  const [waitingOpen, setWaitingOpen] = useState(false);

  const openCustomPopup = () => {
    setCustomPopupOpen(true);
  };
  const closeCustomPopup = () => {
    setCustomPopupOpen(false);
  };

  useEffect(() => {
    const preferredCoursesCached = localStorage.getItem("preferredCourses");
    if (!preferredCoursesCached) {
      localStorage.setItem("preferredCourses", "[]");
    }
    const data = JSON.parse(preferredCoursesCached ?? "[]") as courseData[];
    setPreferredCourses(data);
    const preferredCreditArray = data.map((prop) => prop.credit);
    setPreferredCredit(preferredCreditArray.reduce((a, b) => a + b, 0));
  }, [setPreferredCourses]);

  useEffect(() => {
    const registeredCoursesCached = localStorage.getItem("registeredCourses");
    if (!registeredCoursesCached) {
      localStorage.setItem("registeredCourses", "[]");
    }
    const data = JSON.parse(registeredCoursesCached ?? "[]") as courseData[];
    // setRegisteredCourses(data);
    const registeredCreditArray = data.map((prop) => prop.credit);
    setRegisteredCredit(registeredCreditArray.reduce((a, b) => a + b, 0));
  }, [setRegisteredCourses, registeredCourses]);

  const onRegisterClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    //입력 에러 핸들링
    if (courseCode.length !== 7) {
      openCustomPopup();
      setTextAlert("학수번호를 올바르게 입력해주세요.");
      return;
    }
    if (section.length !== 2) {
      openCustomPopup();
      setTextAlert("분반을 올바르게 입력해주세요.");
      return;
    }
    const params = courseCode + "@" + section;
    const data = all.filter((prop) => prop.cour_cd === courseCode);
    if (!data) {
      openCustomPopup();
      setTextAlert("해당하는 과목이 없습니다. 다시 한 번 입력해주세요.");
      return;
    }
    const searchedData = data.find((prop) => prop.params === params);
    if (!searchedData) {
      openCustomPopup();
      setTextAlert(`해당하는 과목이 없습니다. 다시 한 번 입력해주세요.`);
      return;
    }
    let registeredTimes: number[] = [];
    registeredCourses.forEach((prop) => {
      prop.time_room.forEach((e) => {
        if (e !== "미정") {
          const dayIdx = e.search(/[월화수목금토]/);
          const startIdx = e.indexOf("(") + 1;
          const endIdx = e.indexOf(")") - 1;
          const day = e.substring(dayIdx, dayIdx + 1);
          const startTime = parseInt(e.substring(startIdx, startIdx + 1));
          const endTime = parseInt(e.substring(endIdx, endIdx + 1));
          let time;
          if (day === "월") {
            for (time = startTime; time <= endTime; time++)
              registeredTimes.push((time - 1) * 6);
          } else if (day === "화") {
            for (time = startTime; time <= endTime; time++)
              registeredTimes.push((time - 1) * 6 + 1);
          } else if (day === "수") {
            for (time = startTime; time <= endTime; time++)
              registeredTimes.push((time - 1) * 6 + 2);
          } else if (day === "목") {
            for (time = startTime; time <= endTime; time++)
              registeredTimes.push((time - 1) * 6 + 3);
          } else if (day === "금") {
            for (time = startTime; time <= endTime; time++)
              registeredTimes.push((time - 1) * 6 + 4);
          } else if (day === "토") {
            for (time = startTime; time <= endTime; time++)
              registeredTimes.push((time - 1) * 6 + 5);
          }
        }
      });
    });
    let preferredTimes: number[] = [];
    preferredCourses.forEach((prop) => {
      prop.time_room.forEach((e) => {
        if (e !== "미정") {
          const dayIdx = e.search(/[월화수목금토]/);
          const startIdx = e.indexOf("(") + 1;
          const endIdx = e.indexOf(")") - 1;
          const day = e.substring(dayIdx, dayIdx + 1);
          const startTime = parseInt(e.substring(startIdx, startIdx + 1));
          const endTime = parseInt(e.substring(endIdx, endIdx + 1));
          let time;
          if (day === "월") {
            for (time = startTime; time <= endTime; time++)
              preferredTimes.push((time - 1) * 6);
          } else if (day === "화") {
            for (time = startTime; time <= endTime; time++)
              preferredTimes.push((time - 1) * 6 + 1);
          } else if (day === "수") {
            for (time = startTime; time <= endTime; time++)
              preferredTimes.push((time - 1) * 6 + 2);
          } else if (day === "목") {
            for (time = startTime; time <= endTime; time++)
              preferredTimes.push((time - 1) * 6 + 3);
          } else if (day === "금") {
            for (time = startTime; time <= endTime; time++)
              preferredTimes.push((time - 1) * 6 + 4);
          } else if (day === "토") {
            for (time = startTime; time <= endTime; time++)
              preferredTimes.push((time - 1) * 6 + 5);
          }
        }
      });
    });
    let searchedTimes: number[] = [];
    searchedData.time_room.forEach((e) => {
      if (e !== "미정") {
        const dayIdx = e.search(/[월화수목금토]/);
        const startIdx = e.indexOf("(") + 1;
        const endIdx = e.indexOf(")") - 1;
        const day = e.substring(dayIdx, dayIdx + 1);
        const startTime = parseInt(e.substring(startIdx, startIdx + 1));
        const endTime = parseInt(e.substring(endIdx, endIdx + 1));
        let time;
        if (day === "월") {
          for (time = startTime; time <= endTime; time++)
            searchedTimes.push((time - 1) * 6);
        } else if (day === "화") {
          for (time = startTime; time <= endTime; time++)
            searchedTimes.push((time - 1) * 6 + 1);
        } else if (day === "수") {
          for (time = startTime; time <= endTime; time++)
            searchedTimes.push((time - 1) * 6 + 2);
        } else if (day === "목") {
          for (time = startTime; time <= endTime; time++)
            searchedTimes.push((time - 1) * 6 + 3);
        } else if (day === "금") {
          for (time = startTime; time <= endTime; time++)
            searchedTimes.push((time - 1) * 6 + 4);
        } else if (day === "토") {
          for (time = startTime; time <= endTime; time++)
            searchedTimes.push((time - 1) * 6 + 5);
        }
      }
    });
    const registeredSet = new Set([...registeredTimes, ...searchedTimes]);
    const preferredSet = new Set([...preferredTimes, ...searchedTimes]);
    //과목 신청 or 등록
    const courseId = searchedData.rowid + searchedData.params;
    let maxCreditLimit = localStorage.getItem("maxCreditLimit");
    if (maxCreditLimit === null) {
      maxCreditLimit = "19";
      localStorage.setItem("maxCreditLimit", "19");
    }
    //수강신청
    if (pathname === "/courseRegisteration") {
      const courseIdArrayRegistered = registeredCourses.map(
        (prop) => prop.rowid + prop.params
      );
      if (courseIdArrayRegistered.includes(courseId)) {
        //중복 신청 filtering
        openCustomPopup();
        setTextAlert("이미 신청된 과목입니다.");
      } else if (
        registeredTimes.length + searchedTimes.length >
        registeredSet.size
      ) {
        //강의시간 중복 filtering
        openCustomPopup();
        setTextAlert(`수강신청과목의 강의날짜와 강의시간이 중복되었습니다.`);
      } else if (
        registeredCredit + searchedData.credit >
        parseInt(maxCreditLimit)
      ) {
        //학점 초과 filtering
        openCustomPopup();
        setTextAlert("신청가능한 학점을 초과했습니다");
        return;
      } else {
        //여기에 게임 넣으면 됨!
        const result = register();
        const timePassed = Math.ceil((result * 3) / 1000);
        const time = timePassed >= 4 ? Math.ceil(4 + (result % 3)) : timePassed;
        if (result < 0) {
          setResultPopupOpen(true);
        } else {
          if (registeredNum === 0) {
            // 게임 시작 후 첫 수강 신청
            if (result < 700) {
              setWaitingOpen(true);
              setResultType("success");
              setResultPopupOpen(true);
              plusRegistered();
              setTimeout(() => {
                const data = [...registeredCourses, searchedData];
                setRegisteredCourses(data);
                setRegisteredCredit((prep) => prep + searchedData.credit);
                localStorage.setItem("registeredCourses", JSON.stringify(data));
              }, time * 1000);
            } else {
              setWaitingOpen(true);
              setResultType("fail");
              setResultPopupOpen(true);
            }
          } else {
            if (result < 5000 + (registeredNum - 1) * 7000) {
              setWaitingOpen(true);
              setResultType("success");
              setResultPopupOpen(true);
              plusRegistered();
              setTimeout(() => {
                const data = [...registeredCourses, searchedData];
                setRegisteredCourses(data);
                setRegisteredCredit((prep) => prep + searchedData.credit);
                localStorage.setItem("registeredCourses", JSON.stringify(data));
              }, time * 1000);
            } else {
              setWaitingOpen(true);
              setResultType("fail");
              setResultPopupOpen(true);
            }
          }
        }
        setTimeTaken(result);
        // alert("신청 되었습니다.");
      }
    }
    //관심과목 등록
    else if (pathname === "/preferredCourses") {
      const courseIdArrayPreferred = preferredCourses.map(
        (prop) => prop.rowid + prop.params
      );
      if (courseIdArrayPreferred.includes(courseId)) {
        //중복 신청 filtering
        openCustomPopup();
        setTextAlert("이미 신청된 과목입니다.");
      } else if (
        preferredTimes.length + searchedTimes.length >=
        preferredSet.size
      ) {
        //강의시간 중복 filtering
        openCustomPopup();
        setTextAlert(`관심과목의 강의날짜와 강의시간이 중복되었습니다.`);
      } else if (
        preferredCredit + searchedData.credit >
        parseInt(maxCreditLimit)
      ) {
        //학점 초과 filtering
        openCustomPopup();
        setTextAlert("신청가능한 학점을 초과했습니다");
      } else {
        const data = [...preferredCourses, searchedData];
        setPreferredCourses(data);
        setPreferredCredit((prep) => prep + searchedData.credit);
        localStorage.setItem("preferredCourses", JSON.stringify(data));
        openCustomPopup();
        setTextAlert("관심과목 등록 되었습니다.");
      }
    }
  };

  return (
    <div>
      <div //학수번호 입력하여 신청
        style={{
          marginRight: 30,
          marginLeft: 30,
          marginBottom: 32.7,
          borderTop: 1,
          borderTopStyle: "solid",
          marginTop: 10,
          lineHeight: 2.5,
          fontSize: 14,
        }}
      >
        <CustomPopup
          customPopupOpen={customPopupOpen}
          closeCustomPopup={closeCustomPopup}
          textValue={textAlert}
        />
        <div
          style={{
            borderBottom: 1,
            borderBottomStyle: "solid",
            borderBottomColor: "#ccc",
            height: 36,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              width: 150,
              minWidth: 150,
              height: "100%",
              textAlign: "left",
              paddingLeft: 10,
              borderRight: 1,
              borderRightStyle: "solid",
              borderRightColor: "#ccc",
              backgroundColor: "#F2EEEB",
              fontSize: 12,
              lineHeight: 3,
            }}
          >
            학수번호
          </div>
          <div style={{ width: "100%" }}>
            <input
              type="text"
              maxLength={7}
              value={courseCode}
              onChange={(e) => {
                setCourseCode(
                  e.target.value.replace(/[^a-zA-Z0-9]/g, "").toUpperCase()
                );
              }}
              style={{
                margin: 5,
                height: 25,
                width: 150,
                border: 1,
                borderStyle: "solid",
                borderColor: "#ccc",
                paddingLeft: 5,
                fontSize: 12,
              }}
            />
          </div>
        </div>
        <div
          style={{
            borderBottom: 1,
            borderBottomStyle: "solid",
            borderBottomColor: "#ccc",
            height: 36,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              width: 150,
              minWidth: 150,
              height: "100%",
              textAlign: "left",
              paddingLeft: 10,
              borderRight: 1,
              borderRightStyle: "solid",
              borderRightColor: "#ccc",
              backgroundColor: "#F2EEEB",
              fontSize: 12,
              lineHeight: 3,
            }}
          >
            분반
          </div>
          <div style={{ width: "100%" }}>
            <input
              type="text"
              maxLength={2}
              value={section}
              onChange={(e) => {
                setSection(
                  e.target.value.replace(/[^a-zA-Z0-9]/g, "").toUpperCase()
                );
              }}
              style={{
                margin: 5,
                height: 25,
                width: 150,
                border: 1,
                borderStyle: "solid",
                borderColor: "#ccc",
                paddingLeft: 5,
                fontSize: 12,
              }}
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          <button
            onClick={onRegisterClick}
            style={{
              height: 30,
              width: 70,
              fontSize: 12,
              backgroundColor: "#a20131",
              border: 0,
              color: "#fff",
              marginTop: "14.5px",
              marginRight: 3,
              cursor: "pointer",
              paddingTop: "0px",
            }}
          >
            신청
          </button>
          <button
            onClick={() => {
              setCourseCode("");
              setSection("");
            }}
            style={{
              height: 30,
              width: 70,
              fontSize: 12,
              border: 1,
              backgroundColor: "#f9f9f9",
              borderStyle: "solid",
              borderColor: "#ccc",
              marginTop: "14.5px",
              marginLeft: 1,
              color: "#333",
              cursor: "pointer",
              paddingTop: "0px",
            }}
          >
            초기화
          </button>
        </div>
      </div>
      {/* 대기 및 결과 팝업 */}
      {timeTaken === undefined ? null : timeTaken > 0 && waitingOpen ? (
        <WaitingPopUp
          timeTaken={timeTaken ?? 0}
          rand={rand}
          waitingOpen={waitingOpen}
          setWaitingOpen={setWaitingOpen}
          resultType={resultType}
          setResultType={setResultType}
        />
      ) : (
        <ResultPopUp
          resultType={resultType}
          setResultType={setResultType}
          resultOpen={resultPopupOpen}
          setResultOpen={setResultPopupOpen}
        />
      )}

      {pathname === "/courseRegisteration" ? (
        <BodyBottomRegister
          registeredCourses={registeredCourses}
          setRegisteredCourses={setRegisteredCourses}
        />
      ) : null}
      {pathname === "/preferredCourses" ? (
        <BodyBottomPreferred
          preferredCourses={preferredCourses}
          setPreferredCourses={setPreferredCourses}
        />
      ) : null}
    </div>
  );
}
