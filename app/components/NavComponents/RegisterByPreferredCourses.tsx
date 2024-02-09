import courseData from "@/app/constant/courseDataInterface";
import Image from "next/image";
import { MouseEvent, useState, useEffect } from "react";
import { useGame } from "../context/GameContext";
import BodyBottomRegister from "../BodyBottomRegister";
import WaitingPopUp from "../popups/WatingPopUp";
import ResultPopUp from "../popups/ResultPopUp";
import CustomPopup from "../popups/CustomPopup";

export default function RegisterByPreferredCourses() {
  const [tableMouseEnter, setTableMouseEnter] = useState(false);
  const [preferredCourses, setPreferredCourses] = useState<courseData[]>([]);
  const [registeredCourses, setRegisteredCourses] = useState<courseData[]>([]);
  const [registeredCredit, setRegisteredCredit] = useState<number>(0);
  const { register } = useGame();
  const [timeTaken, setTimeTaken] = useState<number>();
  const [customPopupOpen, setCustomPopupOpen] = useState(false);
  const [textAlert, setTextAlert] = useState("");

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
  }, []);

  useEffect(() => {
    const registeredCoursesCached = localStorage.getItem("registeredCourses");
    if (!registeredCoursesCached) {
      localStorage.setItem("registeredCourses", "[]");
    }
    const data = JSON.parse(registeredCoursesCached ?? "[]") as courseData[];
    setRegisteredCourses(data);
    const registeredCreditArray = data.map((prop) => prop.credit);
    setRegisteredCredit(registeredCreditArray.reduce((a, b) => a + b, 0));
  }, []);

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

    if (courseIdArrayRegistered.includes(courseId)) {
      //중복 신청 filtering
      openCustomPopup();
      setTextAlert("이미 신청된 과목입니다.");
    } else {
      //학점 초과 filtering
      if (registeredCredit + prop.credit > parseInt(maxCreditLimit)) {
        {
          openCustomPopup();
          setTextAlert("신청가능한 학점을 초과했습니다");
        }
      } else {
        const data = [...registeredCourses, prop];
        setRegisteredCourses(data);
        setRegisteredCredit((prep) => prep + prop.credit);

        //여기에 게임 넣으면 됨!
        const result = register();
        if (1000 > result && result > 0) {
          // 조정
          localStorage.setItem("registeredCourses", JSON.stringify(data));
        }
        setTimeTaken(result);
        // alert("신청 되었습니다.");
      }
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
            overflow: "auto",
            borderBottom: 1,
            borderBottomStyle: "solid",
            borderBottomColor: "#ccc",
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
                        height: 23,
                        width: 45,
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
                    <CustomPopup
                      customPopupOpen={customPopupOpen}
                      closeCustomPopup={closeCustomPopup}
                      textValue={textAlert}
                    />
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
      {timeTaken === undefined ? null : timeTaken > 0 ? (
        <WaitingPopUp timeTaken={timeTaken ?? 0} rand={Math.random()} />
      ) : (
        <ResultPopUp resultType="toEarly" />
      )}

      <BodyBottomRegister
        registeredCourses={registeredCourses}
        setRegisteredCourses={setRegisteredCourses}
      />
    </div>
  );
}
