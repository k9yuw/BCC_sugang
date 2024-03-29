import courseData from "@/app/constant/courseDataInterface";
import Image from "next/image";
import {
  MouseEvent,
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
} from "react";
import { useGame } from "../context/GameContext";
import BodyBottomRegister from "../BodyBottomRegister";
import WaitingPopUp from "../popups/WatingPopUp";
import ResultPopUp from "../popups/ResultPopUp";
import CustomPopup from "../popups/CustomPopup";

const rand = Math.random();

export default function RegisterByPreferredCourses({
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
  const [tableMouseEnter, setTableMouseEnter] = useState(false);
  const [registeredCredit, setRegisteredCredit] = useState<number>(0);
  const { register } = useGame();
  const [timeTaken, setTimeTaken] = useState<number>();
  const [customPopupOpen, setCustomPopupOpen] = useState(false);
  const [textAlert, setTextAlert] = useState("");
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

  const onRegisterClick = (
    e: MouseEvent<HTMLButtonElement>,
    prop: courseData
  ) => {
    e.preventDefault();
    const courseId = prop.rowid + prop.params;
    let maxCreditLimit = localStorage.getItem("maxCreditLimit");
    if (maxCreditLimit === null) {
      maxCreditLimit = "19";
      localStorage.setItem("maxCreditLimit", "19");
    }
    const courseIdArrayRegistered = registeredCourses.map(
      (prop) => prop.rowid + prop.params
    );
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
    let searchedTimes: number[] = [];
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
    } else if (registeredCredit + prop.credit > parseInt(maxCreditLimit)) {
      //학점 초과 filtering

      openCustomPopup();
      setTextAlert("신청가능한 학점을 초과했습니다");
      return;
    } else {
      const data = [...registeredCourses, prop];

      //여기에 게임 넣으면 됨!

      const result = register();
      const timePassed = Math.ceil((result * 3) / 1000);
      const time = timePassed >= 4 ? Math.ceil(4 + (result % 3)) : timePassed;

      if (result < 0) {
        setResultPopupOpen(true);
        // return;
      } else {
        if (registeredNum === 0) {
          // 게임 시작 후 첫 수강 신청
          if (result < 700) {
            setWaitingOpen(true);
            setResultType("success");
            setResultPopupOpen(true);
            plusRegistered();
            setTimeout(() => {
              const data = [...registeredCourses, prop];
              setRegisteredCourses(data);
              setRegisteredCredit((prep) => prep + prop.credit);
              localStorage.setItem("registeredCourses", JSON.stringify(data));
            }, time * 1000);
          } else {
            setWaitingOpen(true);
            setResultType("fail");
            setResultPopupOpen(true);
          }
        } else {
          if (result < 5000 + (registeredNum - 1) * 6100) {
            setWaitingOpen(true);
            setResultType("success");
            setResultPopupOpen(true);
            plusRegistered();
            setTimeout(() => {
              const data = [...registeredCourses, prop];
              setRegisteredCourses(data);
              setRegisteredCredit((prep) => prep + prop.credit);
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
    }
  };

  return (
    <div>
      <div
        style={{
          marginTop: 10,
          borderTop: 0.7,
          borderTopStyle: "solid",
          marginRight: 30,
          marginLeft: 30,
          marginBottom: 32.7,
        }}
      >
        <CustomPopup
          customPopupOpen={customPopupOpen}
          closeCustomPopup={closeCustomPopup}
          textValue={textAlert}
        />
        <table
          style={{
            borderCollapse: "collapse",
            width: "100%",
            boxSizing: "content-box",
            tableLayout: "fixed",
          }}
        >
          <thead style={{ backgroundColor: "#f2eee8" }}>
            <tr
              style={{
                fontSize: 12,
                textAlign: "center",
                height: 34,
              }}
            >
              <th
                style={{
                  borderRightStyle: "solid",
                  borderRightWidth: 1,
                  borderRightColor: "#ccc",
                  borderBottomStyle: "solid",
                  borderBottomWidth: 1,
                  borderBottomColor: "#ccc",
                  fontWeight: 600,
                  width: 65.13,
                }}
              >
                수강신청
              </th>
              <th
                style={{
                  borderRightStyle: "solid",
                  borderRightWidth: 1,
                  borderRightColor: "#ccc",
                  borderBottomStyle: "solid",
                  borderBottomWidth: 1,
                  borderBottomColor: "#ccc",
                  fontWeight: 600,
                  width: 65.13,
                }}
              >
                학수번호
              </th>
              <th
                style={{
                  borderRightStyle: "solid",
                  borderRightWidth: 1,
                  borderRightColor: "#ccc",
                  borderBottomStyle: "solid",
                  borderBottomWidth: 1,
                  borderBottomColor: "#ccc",
                  fontWeight: 600,
                  width: 39.08,
                }}
              >
                분반
              </th>
              <th
                style={{
                  borderRightStyle: "solid",
                  borderRightWidth: 1,
                  borderRightColor: "#ccc",
                  borderBottomStyle: "solid",
                  borderBottomWidth: 1,
                  borderBottomColor: "#ccc",
                  fontWeight: 600,
                  width: 77.16,
                }}
              >
                이수구분
              </th>
              <th
                style={{
                  borderRightStyle: "solid",
                  borderRightWidth: 1,
                  borderRightColor: "#ccc",
                  borderBottomStyle: "solid",
                  borderBottomWidth: 1,
                  borderBottomColor: "#ccc",
                  fontWeight: 600,
                  width: 141.29,
                }}
              >
                교과목명(강의계획서)
              </th>
              <th
                style={{
                  borderRightStyle: "solid",
                  borderRightWidth: 1,
                  borderRightColor: "#ccc",
                  borderBottomStyle: "solid",
                  borderBottomWidth: 1,
                  borderBottomColor: "#ccc",
                  fontWeight: 600,
                  width: 77.16,
                }}
              >
                담당교수
              </th>
              <th
                style={{
                  borderRightStyle: "solid",
                  borderRightWidth: 1,
                  borderRightColor: "#ccc",
                  borderBottomStyle: "solid",
                  borderBottomWidth: 1,
                  borderBottomColor: "#ccc",
                  fontWeight: 600,
                  width: 77.16,
                }}
              >
                학점 <br /> (시간)
              </th>
              <th
                style={{
                  borderRightStyle: "solid",
                  borderRightWidth: 1,
                  borderRightColor: "#ccc",
                  borderBottomStyle: "solid",
                  borderBottomWidth: 1,
                  borderBottomColor: "#ccc",
                  fontWeight: 600,
                  width: 115.23,
                }}
              >
                강의시간/강의실
              </th>
              <th
                style={{
                  borderRightStyle: "solid",
                  borderRightWidth: 1,
                  borderRightColor: "#ccc",
                  borderBottomStyle: "solid",
                  borderBottomWidth: 1,
                  borderBottomColor: "#ccc",
                  width: 65.13,
                }}
              >
                재수강
              </th>
              <th
                style={{
                  borderBottomStyle: "solid",
                  borderBottomWidth: 1,
                  borderBottomColor: "#ccc",
                  width: 65.13,
                }}
              >
                마감현황
              </th>
            </tr>
          </thead>
        </table>
        <div
          style={{
            maxHeight: 489,
            borderBottom: 1,
            borderBottomStyle: "solid",
            borderBottomColor: "#ccc",
            overflowY: "scroll",
          }}
        >
          <table
            style={{
              borderCollapse: "collapse",
              width: "100%",
              boxSizing: "content-box",
              tableLayout: "fixed",
            }}
          >
            <thead>
              {preferredCourses.map((prop: courseData, index) => (
                <tr
                  style={{
                    fontSize: 12,
                    textAlign: "center",
                    height: 34,
                    borderBottomStyle: "solid",
                    borderBottomWidth: 1,
                    borderBottomColor: "#ddd",
                    color: "#333",
                    backgroundColor: index % 2 == 0 ? "#fff" : "#f9f9f9",
                  }}
                  key={prop.params + index}
                >
                  <th
                    style={{
                      borderRightStyle: "solid",
                      borderRightWidth: 1,
                      borderRightColor: "#ddd",
                      borderBottomStyle: "solid",
                      borderBottomWidth: 1,
                      borderBottomColor: "#ddd",
                      width: 65.13,
                      paddingTop: 4,
                      paddingRight: 6,
                      paddingBottom: 4,
                      paddingLeft: 6,
                      fontWeight: 400,
                    }}
                  >
                    <button
                      onClick={(e) => {
                        onRegisterClick(e, prop);
                      }}
                      style={{
                        height: 21,
                        width: 40,
                        fontSize: 12,
                        backgroundColor: "#a20131",
                        border: 0,
                        color: "#fff",
                        cursor: "pointer",
                        paddingTop: "0px",
                      }}
                    >
                      신청
                    </button>
                  </th>
                  <th
                    style={{
                      borderRightStyle: "solid",
                      borderRightWidth: 1,
                      borderRightColor: "#ddd",
                      borderBottomStyle: "solid",
                      borderBottomWidth: 1,
                      borderBottomColor: "#ddd",
                      width: 65.13,
                      paddingTop: 4,
                      paddingRight: 6,
                      paddingBottom: 4,
                      paddingLeft: 6,
                      fontWeight: 400,
                    }}
                  >
                    {prop.cour_cd}
                  </th>
                  <th
                    style={{
                      borderRightStyle: "solid",
                      borderRightWidth: 1,
                      borderRightColor: "#ddd",
                      borderBottomStyle: "solid",
                      borderBottomWidth: 1,
                      borderBottomColor: "#ddd",
                      width: 39.08,
                      paddingTop: 4,
                      paddingRight: 6,
                      paddingBottom: 4,
                      paddingLeft: 6,
                      fontWeight: 400,
                    }}
                  >
                    {prop.cour_cls}
                  </th>
                  <th
                    style={{
                      borderRightStyle: "solid",
                      borderRightWidth: 1,
                      borderRightColor: "#ddd",
                      borderBottomStyle: "solid",
                      borderBottomWidth: 1,
                      borderBottomColor: "#ddd",
                      width: 77.16,
                      paddingTop: 4,
                      paddingRight: 6,
                      paddingBottom: 4,
                      paddingLeft: 6,
                      fontWeight: 400,
                    }}
                  >
                    {prop.isu_nm}
                  </th>
                  <th
                    style={{
                      borderRightStyle: "solid",
                      borderRightWidth: 1,
                      borderRightColor: "#ddd",
                      borderBottomStyle: "solid",
                      borderBottomWidth: 1,
                      borderBottomColor: "#ddd",
                      width: 141.29,
                      textAlign: "left",
                      paddingTop: 4,
                      paddingRight: 6,
                      paddingBottom: 4,
                      paddingLeft: 6,
                      fontWeight: 400,
                    }}
                  >
                    {prop.cour_nm}
                    <br />
                    {prop.apply_dept}
                  </th>
                  <th
                    style={{
                      borderRightStyle: "solid",
                      borderRightWidth: 1,
                      borderRightColor: "#ddd",
                      borderBottomStyle: "solid",
                      borderBottomWidth: 1,
                      borderBottomColor: "#ddd",
                      width: 77.16,
                      paddingTop: 4,
                      paddingRight: 6,
                      paddingBottom: 4,
                      paddingLeft: 6,
                      fontWeight: 400,
                    }}
                  >
                    {prop.prof_nm}
                  </th>
                  <th
                    style={{
                      borderRightStyle: "solid",
                      borderRightWidth: 1,
                      borderRightColor: "#ddd",
                      borderBottomStyle: "solid",
                      borderBottomWidth: 1,
                      borderBottomColor: "#ddd",
                      width: 77.16,
                      paddingTop: 4,
                      paddingRight: 6,
                      paddingBottom: 4,
                      paddingLeft: 6,
                      fontWeight: 400,
                    }}
                  >
                    {prop.time}
                  </th>
                  <th
                    style={{
                      borderRightStyle: "solid",
                      borderRightWidth: 1,
                      borderRightColor: "#ddd",
                      borderBottomStyle: "solid",
                      borderBottomWidth: 1,
                      borderBottomColor: "#ddd",
                      width: 115.23,
                      paddingTop: 4,
                      paddingRight: 6,
                      paddingBottom: 4,
                      paddingLeft: 6,
                      textAlign: "left",
                      fontWeight: 400,
                    }}
                  >
                    {prop.time_room}
                  </th>
                  <th
                    style={{
                      borderRightStyle: "solid",
                      borderRightWidth: 1,
                      borderRightColor: "#ddd",
                      borderBottomStyle: "solid",
                      borderBottomWidth: 1,
                      borderBottomColor: "#ddd",
                      fontWeight: 600,
                      width: 65.13,
                    }}
                  >
                    {prop.no_supervisor_yn === "Y" ? (
                      <Image
                        src={
                          "https://sugang.korea.ac.kr/resources/img/contents/icon-check.png"
                        }
                        alt="check"
                        width={13}
                        height={9}
                      />
                    ) : null}
                  </th>
                  <th
                    style={{
                      borderBottomStyle: "solid",
                      borderBottomWidth: 1,
                      borderBottomColor: "#ddd",
                      width: 65.13,
                    }}
                  >
                    <Image
                      src={
                        "https://sugang.korea.ac.kr/resources/img/contents/icon-view.png"
                      }
                      alt="note"
                      width={16}
                      height={21}
                    />
                  </th>
                </tr>
              ))}
            </thead>
          </table>
        </div>
        {preferredCourses?.length === 0 ? ( //관심과목 없음
          <div
            onMouseEnter={() => {
              setTableMouseEnter(true);
            }}
            onMouseLeave={() => {
              setTableMouseEnter(false);
            }}
            style={{
              fontSize: 12,
              color: "#666",
              textAlign: "center",
              paddingTop: 57,
              borderBottom: 1,
              borderBottomColor: "#ccc",
              borderBottomStyle: "solid",
              height: 150,
              lineHeight: 2.5,
              backgroundColor: tableMouseEnter ? "#F2F2F2" : "#fff",
            }}
          >
            관심과목 데이터가 없습니다.
          </div>
        ) : null}
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

      <BodyBottomRegister
        registeredCourses={registeredCourses}
        setRegisteredCourses={setRegisteredCourses}
      />
    </div>
  );
}
