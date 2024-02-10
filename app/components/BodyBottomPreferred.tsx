"use client";

import {
  useEffect,
  useState,
  MouseEvent,
  useCallback,
  SetStateAction,
  Dispatch,
} from "react";
import Image from "next/image";
import courseData from "../constant/courseDataInterface";
import TimePeriod from "./popups/TimePeriod";
import CustomPopup from "./popups/CustomPopup";

export default function BodyBottomPreferred({
  preferredCourses,
  setPreferredCourses,
}: {
  preferredCourses: courseData[];
  setPreferredCourses: Dispatch<SetStateAction<courseData[]>>;
}) {
  const [tableMouseEnter, setTableMouseEnter] = useState<boolean>(false);
  const [maxCreditLimit, setMaxCreditLimit] = useState<string>("");
  const [preferredCredit, setPreferredCredit] = useState<number>(0);
  const [isOpenModal, setOpenModal] = useState<boolean>(false);
  const [customPopupOpen, setCustomPopupOpen] = useState(false);
  const [textAlert, setTextAlert] = useState("");

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
    const preferredCreditArray = preferredCourses.map((prop) => prop.credit);
    setPreferredCredit(preferredCreditArray.reduce((a, b) => a + b, 0));
  }, [preferredCourses]);

  const deleteCourse = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
    prop: courseData
  ) => {
    console.log(preferredCourses);
    const courseToDelete = preferredCourses.find(
      (item) => item.params === prop.params
    );
    if (!courseToDelete) {
      console.log("Failed to delete the course");
      return;
    }
    const idx = preferredCourses.indexOf(courseToDelete);
    if (idx > -1) {
      const data = [...preferredCourses];
      data.splice(idx, 1);
      setPreferredCourses(data);
      localStorage.setItem("preferredCourses", JSON.stringify(data));
      openCustomPopup();
      setTextAlert("삭제되었습니다.");
    }
    console.log(preferredCourses);
  };

  return (
    <div //하단 바디
      style={{
        borderTop: 1,
        borderTopStyle: "solid",
        borderTopColor: "#ccc",
        paddingTop: 20,
        paddingRight: 30,
        paddingBottom: 25,
        paddingLeft: 30,
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
          희망과목 내역
        </h3>
        <h6
          style={{
            fontSize: 13,
            marginBottom: 0,
            marginTop: 0,
            marginLeft: 15,
            lineHeight: 1.5,
            color: "#333",
          }}
        >
          [ 최소신청학점 :{" "}
          <span style={{ fontSize: 12, color: "#a20131" }}>1</span> 학점 |
          최대신청학점 :{" "}
          <span style={{ fontSize: 15, color: "#a20131" }}>
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
            {preferredCredit}
          </span>{" "}
          학점 ]
        </h6>
        <div style={{ marginLeft: "auto" }}>
          {isOpenModal && (
            <TimePeriod onClickToggleModal={onClickToggleModal}></TimePeriod>
          )}
          <button
            onClick={onClickToggleModal}
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
        <div //관심과목 내역 테이블
          style={{
            borderTop: 1,
            borderTopStyle: "solid",
            width: "100%",
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
                    width: 77,
                    fontWeight: 600,
                  }}
                >
                  정렬순서
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
                    width: 80,
                  }}
                >
                  삭제
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
                    width: 92,
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
                    width: 62,
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
                    width: 92,
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
                    width: 168,
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
                    width: 92.2,
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
                    width: 92.2,
                  }}
                >
                  학점
                  <br />
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
                    width: 138,
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
                    fontWeight: 600,
                    width: 76,
                  }}
                >
                  재수강
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
                        width: 77,
                        paddingTop: 4,
                        paddingRight: 6,
                        paddingBottom: 4,
                        paddingLeft: 6,
                        fontWeight: 400,
                      }}
                    >
                      정렬순서
                    </th>
                    <th
                      style={{
                        borderRightStyle: "solid",
                        borderRightWidth: 1,
                        borderRightColor: "#ddd",
                        borderBottomStyle: "solid",
                        borderBottomWidth: 1,
                        borderBottomColor: "#ddd",
                        width: 80,
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
                        width: 92,
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
                        width: 62,
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
                        width: 92,
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
                        width: 168,
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
                        width: 92.2,
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
                        width: 92.2,
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
                        width: 138,
                        paddingTop: 4,
                        paddingRight: 6,
                        paddingBottom: 4,
                        paddingLeft: 6,
                        textAlign: "left",
                        fontWeight: 400,
                        whiteSpace: "pre",
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
                        width: 76,
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
                  </tr>
                ))}
              </thead>
            </table>
          </div>
          {preferredCourses.length === 0 ? ( //희망과목 없음
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
              희망과목 데이터가 없습니다.
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
