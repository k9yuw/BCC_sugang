import {
  useEffect,
  useState,
  MouseEvent,
  useCallback,
  Dispatch,
  SetStateAction,
} from "react";
import TimePeriod from "./popups/TimePeriod";
import TimeTable from "./table/sugangTimeTable/timeTable";
import courseData from "../constant/courseDataInterface";
import Image from "next/image";
import { timeTableColor } from "../constant/timeTableColor";
import CustomPopup from "./popups/CustomPopup";

export default function BodyBottomRegister({
  registeredCourses,
  setRegisteredCourses,
}: {
  registeredCourses: courseData[];
  setRegisteredCourses: Dispatch<SetStateAction<courseData[]>>;
}) {
  const [tableMouseEnter, setTableMouseEnter] = useState<boolean>(false);
  const [maxCreditLimit, setMaxCreditLimit] = useState<string>("");
  const [registerdCredit, setRegisteredCredit] = useState<number>(0);
  const [isOpenModal, setOpenModal] = useState<boolean>(false);
  const [customPopupOpen, setCustomPopupOpen] = useState(false);
  const [textAlert, setTextAlert] = useState("");
  const [colorArray, setColorArray] = useState<string[]>(
    new Array(54).fill("#fff")
  );
  const [resultType, setResultType] = useState<string>("toEarly");

  const openCustomPopup = () => {
    setCustomPopupOpen(true);
  };
  const closeCustomPopup = () => {
    setCustomPopupOpen(false);
  };

  const onClickToggleModal = useCallback(() => {
    setOpenModal(!isOpenModal);
  }, [isOpenModal]);

  useEffect(() => {
    setMaxCreditLimit(localStorage.getItem("maxCreditLimit") ?? "19");
    const registeredCreditArray = registeredCourses.map((prop) => prop.credit);
    setRegisteredCredit(registeredCreditArray.reduce((a, b) => a + b, 0));
    let colors = new Array(54).fill("#fff");
    registeredCourses.map((prop, index) => {
      prop.time_room.forEach((e) => {
        const dayIdx = e.search(/[월화수목금토]/);
        const startIdx = e.indexOf("(") + 1;
        const endIdx = e.indexOf(")") - 1;
        const day = e.substring(dayIdx, dayIdx + 1);
        const startTime = parseInt(e.substring(startIdx, startIdx + 1));
        const endTime = parseInt(e.substring(endIdx, endIdx + 1));
        let time;
        if (day === "월") {
          for (time = startTime; time <= endTime; time++)
            colors[(time - 1) * 6] = timeTableColor[index];
        } else if (day === "화") {
          for (time = startTime; time <= endTime; time++)
            colors[(time - 1) * 6 + 1] = timeTableColor[index];
        } else if (day === "수") {
          for (time = startTime; time <= endTime; time++)
            colors[(time - 1) * 6 + 2] = timeTableColor[index];
        } else if (day === "목") {
          for (time = startTime; time <= endTime; time++)
            colors[(time - 1) * 6 + 3] = timeTableColor[index];
        } else if (day === "금") {
          for (time = startTime; time <= endTime; time++)
            colors[(time - 1) * 6 + 4] = timeTableColor[index];
        } else if (day === "토") {
          for (time = startTime; time <= endTime; time++)
            colors[(time - 1) * 6 + 5] = timeTableColor[index];
        }
      });
    });
    setColorArray(colors);
  }, [registeredCourses]);

  const deleteCourse = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
    prop: courseData
  ) => {
    const courseToDelete = registeredCourses.find(
      (item) => item.params === prop.params
    );
    if (!courseToDelete) {
      return;
    }
    const idx = registeredCourses.indexOf(courseToDelete);
    if (idx > -1) {
      const data = [...registeredCourses];
      data.splice(idx, 1);
      setRegisteredCourses(data);
      localStorage.setItem("registeredCourses", JSON.stringify(data));
      openCustomPopup();
      setTextAlert("삭제되었습니다.");
    }
  };

  return (
    <div //하단 바디
      style={{
        paddingTop: 20,
        paddingRight: 30,
        paddingBottom: 25,
        paddingLeft: 30,
        borderTop: 1,
        borderTopStyle: "solid",
        borderTopColor: "#ccc",
      }}
    >
      <div //상하단 분리선
        style={{
          display: "flex",
          position: "relative",
          width: "100%",
          minWidth: 1030,
          overflow: "visible",
          flexDirection: "column",
        }}
      >
        <div //상단 바디 위로 접는 버튼
          style={{
            position: "absolute",
            justifySelf: "flex-end",
            top: -28,
            alignSelf: "center",
            width: 51,
            height: 15,
            border: 1,
            borderStyle: "solid",
            borderColor: "#e1e1e1",
            backgroundColor: "#f9f9f9",
            backgroundImage: `url("https://sugang.korea.ac.kr/resources/img/layout/bg-controller.png")`,
            backgroundRepeat: "no-repeat",
            backgroundPositionX: 21,
            backgroundPositionY: -46,
            cursor: "pointer",
          }}
        ></div>
      </div>
      <div style={{ display: "flex", height: 30, paddingBottom: 5 }}>
        <h3
          style={{
            fontSize: 18,
            marginBottom: 0,
            marginTop: 0,
            color: "#0d0d0d",
          }}
        >
          수강신청 내역
        </h3>
        <h6
          style={{
            fontSize: 13,
            marginBottom: 0,
            marginTop: 0,
            marginLeft: 15,
            lineHeight: 1.8,
            color: "#333",
          }}
        >
          [ 최소신청학점 :{" "}
          <span style={{ fontSize: 12, color: "#a20131" }}>1</span> 학점 |
          최대신청학점 :{" "}
          <span style={{ fontSize: 12, color: "#a20131" }}>
            {" "}
            <select
              value={maxCreditLimit ?? "19"}
              onChange={(e) => {
                localStorage.setItem("maxCreditLimit", e.target.value);
                setMaxCreditLimit(e.target.value);
              }}
              style={{
                outline: "none",
                border: "none",
                fontSize: 13,
                color: "#a20131",
                fontWeight: "bold",
                width: 18,
                WebkitAppearance: "none",
                MozAppearance: "none",
                appearance: "none",
                cursor: "pointer",
              }}
            >
              <option value={"19"}>19</option>
              <option value={"22"}>22</option>
              <option value={"25"}>25</option>
            </select>
          </span>{" "}
          학점 | 신청학점 :{" "}
          <span style={{ fontSize: 12, color: "#a20131" }}>
            {registerdCredit}
          </span>{" "}
          학점 ]
        </h6>
        <div style={{ marginLeft: "auto" }}>
          {isOpenModal && (
            <TimePeriod onClickToggleModal={onClickToggleModal}></TimePeriod>
          )}
          <button
            onClick={(e) => {
              e.preventDefault();
              onClickToggleModal();
            }}
            style={{
              width: "79.1px",
              height: 25,
              fontSize: 12,
              backgroundColor: "#f9f9f9",
              color: "#666",
              borderWidth: "thin",
              borderTopColor: "#ccc",
              borderRightColor: "#ccc",
              borderBottomColor: "#ccc",
              borderLeftColor: "#ccc",
              borderStyle: "solid",
              padding: "0px",
              cursor: "pointer",
            }}
          >
            교시확인표
          </button>
          <button
            style={{
              width: 100,
              height: 25,
              fontSize: 12,
              textAlign: "left",
              paddingLeft: 10,
              marginLeft: 5,
              backgroundColor: "#f9f9f9",
              color: "#666",
              borderWidth: "thin",
              borderTopColor: "#ccc",
              borderRightColor: "#ccc",
              borderBottomColor: "#ccc",
              borderLeftColor: "#ccc",
              borderStyle: "solid",
              backgroundImage: `url("https://sugang.korea.ac.kr/resources/img/contents/icon-print.png")`,
              backgroundRepeat: "no-repeat",
              backgroundPositionY: 4,
              backgroundPositionX: 78,
            }}
          >
            시간표 인쇄
          </button>
        </div>
      </div>
      <div style={{ height: "100%", display: "flex" }}>
        <div //수강신청 내역 테이블
          style={{
            borderTop: 1,
            borderTopStyle: "solid",
          }}
        >
          <table
            style={{
              borderCollapse: "collapse",
              width: "100%",
              boxSizing: "content-box",
              tableLayout: "fixed",
              overflow: "scroll",
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
                    width: 71.375,
                    fontWeight: 600,
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
                    width: 55.375,
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
                    width: 71.375,
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
                    width: 168.375,
                  }}
                >
                  교과목명
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
                    width: 87.375,
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
                    width: 87.375,
                  }}
                >
                  학점
                  <br />
                  (시간)
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
                    width: 71.375,
                  }}
                >
                  재수강
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
                    width: 55.375,
                  }}
                >
                  상태
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
                    width: 71.375,
                  }}
                >
                  삭제
                </th>
              </tr>
            </thead>
            <tbody>
              <tr></tr>
            </tbody>
          </table>
          <div
            style={{
              maxHeight: 489,
              borderBottom: 1,
              borderBottomStyle: "solid",
              borderBottomColor: "#ccc",
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
              <thead>
                {registeredCourses.map((prop: courseData, index) => (
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
                        width: 71.375,
                        paddingTop: 4,
                        paddingRight: 6,
                        paddingBottom: 4,
                        paddingLeft: 6,
                        fontWeight: 400,
                      }}
                    >
                      <div
                        style={{
                          width: 65,
                          height: 25,
                          backgroundColor: timeTableColor[index],
                          borderRadius: 3,
                          color: "#fff",
                          marginLeft: "auto",
                          marginRight: "auto",
                          lineHeight: 2.2,
                          fontWeight: 800,
                        }}
                      >
                        {prop.cour_cd}
                      </div>
                    </th>
                    <th
                      style={{
                        borderRightStyle: "solid",
                        borderRightWidth: 1,
                        borderRightColor: "#ddd",
                        borderBottomStyle: "solid",
                        borderBottomWidth: 1,
                        borderBottomColor: "#ddd",
                        width: 55.375,
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
                        width: 71.375,
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
                        width: 168.375,
                        textAlign: "left",
                        paddingTop: 4,
                        paddingRight: 6,
                        paddingBottom: 4,
                        paddingLeft: 6,
                        fontWeight: 400,
                      }}
                    >
                      {prop.cour_nm}
                    </th>
                    <th
                      style={{
                        borderRightStyle: "solid",
                        borderRightWidth: 1,
                        borderRightColor: "#ddd",
                        borderBottomStyle: "solid",
                        borderBottomWidth: 1,
                        borderBottomColor: "#ddd",
                        width: 87.375,
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
                        width: 87.375,
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
                        width: 71.375,
                        paddingTop: 4,
                        paddingRight: 6,
                        paddingBottom: 4,
                        paddingLeft: 6,
                      }}
                    >
                      {prop.absolute_yn === "Y" ? (
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
                        borderRightStyle: "solid",
                        borderRightWidth: 1,
                        borderRightColor: "#ddd",
                        borderBottomStyle: "solid",
                        borderBottomWidth: 1,
                        borderBottomColor: "#ddd",
                        width: 55.375,
                        paddingTop: 4,
                        paddingRight: 6,
                        paddingBottom: 4,
                        paddingLeft: 6,
                        fontWeight: 400,
                      }}
                    >
                      신청
                    </th>
                    <th
                      style={{
                        borderRightStyle: "solid",
                        borderRightWidth: 1,
                        borderRightColor: "#ddd",
                        borderBottomStyle: "solid",
                        borderBottomWidth: 1,
                        borderBottomColor: "#ddd",
                        width: 71.375,
                        paddingTop: 4,
                        paddingRight: 6,
                        paddingBottom: 4,
                        paddingLeft: 6,
                        fontWeight: 400,
                      }}
                    >
                      <button
                        onClick={(e) => {
                          deleteCourse(e, prop);
                        }}
                        style={{
                          width: 40,
                          height: 22,
                          paddingTop: 0,
                          paddingRight: 5,
                          paddingBottom: 2,
                          paddingLeft: 5,
                          fontSize: 12,
                          lineHeight: 1,
                          backgroundColor: "#876243",
                          color: "#fff",
                          borderWidth: "thin",
                          borderTopColor: "#76563b",
                          borderRightColor: "#76563b",
                          borderBottomColor: "#76563b",
                          borderLeftColor: "#76563b",
                          borderStyle: "solid",
                          cursor: "pointer",
                        }}
                      >
                        삭제
                      </button>
                    </th>
                  </tr>
                ))}
              </thead>
            </table>
          </div>
          {registeredCourses.length === 0 ? (
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
                lineHeight: 12,
                borderBottom: 1,
                borderBottomColor: "#ccc",
                borderBottomStyle: "solid",
                height: 150,
                backgroundColor: tableMouseEnter ? "#F2F2F2" : "#fff",
              }}
            >
              수강신청 데이터가 없습니다.
            </div>
          ) : null}
        </div>
        <div //시간표
          style={{
            marginLeft: 10,
          }}
        >
          <div>
            <TimeTable innerColor={colorArray} />
          </div>
        </div>
      </div>
    </div>
  );
}
