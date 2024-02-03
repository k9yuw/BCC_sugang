"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { ChangeEvent, MouseEvent, useState } from "react";
import Navysm from "../components/clock/navysm";
import TimeTable from "../components/table/timeTable";

export default function Home() {
  const [language, setLanguage] = useState("kor");
  const [classNum, setClassNum] = useState("");
  const [navMouseEnterOne, setNavMouseEnterOne] = useState(false);
  const [navMouseEnterTwo, setNavMouseEnterTwo] = useState(false);
  const [navMouseEnterThree, setNavMouseEnterThree] = useState(false);
  const [navRegister, setNavRegister] = useState([true, false, false, false]);
  const [tableMouseEnter, setTableMouseEnter] = useState(false);
  const [campus, setCampus] = useState("서울");
  const [collegeSectionType, setCollegeSectionType] = useState("대학");
  const [courseTypeOne, setCourseTypeOne] = useState("");
  const [courseTypeTwo, setCourseTypeTwo] = useState("");
  const [courseTypeThree, setCourseTypeThree] = useState("");
  const [credit, setCredit] = useState();
  const [day, setDay] = useState("");
  const [startTime, setStartTime] = useState();
  const [endTime, setEndTime] = useState();
  const [professor, setProfessor] = useState("");
  const [courseCode, setCourseCode] = useState();
  const [section, setSection] = useState();
  const [courseName, setCourseName] = useState();
  const [selectBoxes, setSelectBoxes] = useState("");
  const [registerdCredit, setRegisteredCredit] = useState(0);
  const router = useRouter();
  const id = localStorage.getItem("username");

  const onClickPreferredCourses = (e: MouseEvent<HTMLSpanElement>) => {
    e.preventDefault();
    router.push("/preferredCourses");
  };
  const onClickSearchCourses = (e: MouseEvent<HTMLSpanElement>) => {
    e.preventDefault();
    router.push("/searchCourses");
  };
  const onChangeCourseTypeOne = (e: ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value == "전공") {
    }
  };

  const NavComp1 = () => (
    <div //유의사항
      style={{
        marginTop: 20,
        marginLeft: 18,
        marginRight: 18,
        border: 1,
        borderStyle: "solid",
        borderColor: "#ccc",
      }}
    >
      <ul>
        <li>게임 설명</li>
        <li>게임 설명</li>
        <li>게임 설명</li>
        <li>게임 설명</li>
        <li>게임 설명</li>
        <li>게임 설명</li>
        <li>게임 설명</li>
        <li>게임 설명</li>
        <li>게임 설명</li>
        <li>게임 설명</li>
        <li>게임 설명</li>
      </ul>
    </div>
  );
  const onRegisterClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  return (
    <div style={{ display: "flex", alignItems: "stretch" }}>
      <div //좌측 네비게이션 바
        style={{
          display: "inline-flex",
          flexDirection: "column",
          width: 250,
          minWidth: 250,
          minHeight: "100vh",
          borderRight: 1,
          borderRightColor: "#ccc",
          borderRightStyle: "solid",
          backgroundColor: "#e0e0e0",
          WebkitUserSelect: "none",
          MozUserSelect: "none",
          userSelect: "none",
        }}
      >
        <div
          style={{
            paddingTop: 20,
            paddingRight: 20,
            paddingBottom: 5,
            paddingLeft: 20,
            backgroundColor: "#e0e0e0",
          }}
        >
          <span
            style={{
              float: "left",
              width: "50%",
              height: 40,
              backgroundColor: language === "kor" ? "#a20131" : "#b3b3b3",
              fontSize: 13,
              fontWeight: "lighter",
              color: "#fff",
              lineHeight: 3,
              textAlign: "center",
              cursor: language === "kor" ? "default" : "pointer",
            }}
            onClick={() => setLanguage("kor")}
          >
            KOREAN
          </span>
          <span
            style={{
              float: "left",
              width: "50%",
              height: 40,
              backgroundColor: language === "eng" ? "#a20131" : "#b3b3b3",
              fontSize: 13,
              fontWeight: "lighter",
              color: "#fff",
              lineHeight: 3,
              textAlign: "center",
              cursor: language === "eng" ? "default" : "pointer",
            }}
            onClick={() => setLanguage("eng")}
          >
            ENGLISH
          </span>
        </div>
        <div
          style={{
            flexGrow: 1,
            flexShrink: 1,
            flexBasis: "auto",
            paddingRight: 20,
            paddingLeft: 20,
            paddingBottom: 20,
          }}
        >
          <ul
            style={{
              paddingLeft: 0,
              marginTop: 0,
              marginBottom: 0,
            }}
          >
            <li
              style={{
                position: "relative",
                paddingTop: 15,
                paddingBottom: 15,
                borderBottom: 1,
                borderBottomStyle: "solid",
                borderBottomColor: "#ccc",
                listStyle: "none",
              }}
            >
              <span
                // onMouseEnter={() => {
                //   setNavMouseEnterOne(true);
                // }}
                // onMouseLeave={() => {
                //   setNavMouseEnterOne(false);
                // }}
                style={{
                  fontFamily: "Malgun Gothic",
                  fontSize: 15,
                  cursor: "pointer",
                  color: "#a20131",
                }}
              >
                수강신청
              </span>
            </li>
            <li
              style={{
                position: "relative",
                paddingTop: 15,
                paddingBottom: 15,
                borderBottom: 1,
                borderBottomStyle: "solid",
                borderBottomColor: "#ccc",
                listStyle: "none",
              }}
            >
              <span
                onClick={onClickPreferredCourses}
                onMouseEnter={() => {
                  setNavMouseEnterTwo(true);
                }}
                onMouseLeave={() => {
                  setNavMouseEnterTwo(false);
                }}
                style={{
                  fontFamily: "Malgun Gothic",
                  fontSize: 15,
                  cursor: "pointer",
                  color: navMouseEnterTwo ? "#a20131" : "",
                }}
              >
                수강희망/관심과목 등록
              </span>
            </li>
            <li
              style={{
                position: "relative",
                paddingTop: 15,
                paddingBottom: 15,
                borderBottom: 1,
                borderBottomStyle: "solid",
                borderBottomColor: "#ccc",
                listStyle: "none",
              }}
            >
              <span
                onClick={onClickSearchCourses}
                style={{
                  fontFamily: "Malgun Gothic",
                  fontSize: 15,
                  cursor: "pointer",
                  color: navMouseEnterThree ? "#a20131" : "",
                }}
              >
                과목조회
                <ul style={{ paddingTop: 5, paddingLeft: 0 }}>
                  <li
                    style={{
                      listStyle: "none",
                      paddingTop: 2,
                      paddingBottom: 2,
                      paddingLeft: 15,
                    }}
                  >
                    <span
                      onMouseEnter={() => {
                        setNavMouseEnterThree(true);
                      }}
                      onMouseLeave={() => {
                        setNavMouseEnterThree(false);
                      }}
                      style={{
                        fontSize: 13,
                        color: navMouseEnterThree ? "#a20131" : "#666",
                      }}
                    >
                      학부 과목조회
                    </span>
                  </li>
                  <li
                    style={{
                      listStyle: "none",
                      paddingTop: 2,
                      paddingBottom: 2,
                      paddingLeft: 15,
                    }}
                  >
                    <span style={{ fontSize: 13, color: "#666" }}>
                      학부 유사과목
                    </span>
                  </li>
                </ul>
              </span>
            </li>
            <li
              style={{
                position: "relative",
                paddingTop: 15,
                paddingBottom: 15,
                borderBottom: 1,
                borderBottomStyle: "solid",
                borderBottomColor: "#ccc",
                listStyle: "none",
              }}
            >
              <span
                style={{
                  fontFamily: "Malgun Gothic",
                  fontSize: 15,
                }}
              >
                <p
                  style={{
                    cursor: "pointer",
                    marginTop: 0,
                    marginBottom: 0,
                    width: "fit-content",
                  }}
                >
                  안내사항
                </p>
                <ul style={{ paddingTop: 5, paddingLeft: 0 }}>
                  <li
                    style={{
                      listStyle: "none",
                      paddingTop: 2,
                      paddingBottom: 2,
                      paddingLeft: 15,
                    }}
                  >
                    <span
                      style={{ fontSize: 13, cursor: "pointer", color: "#666" }}
                    >
                      수강신청 안내
                    </span>
                  </li>
                  <li
                    style={{
                      listStyle: "none",
                      paddingTop: 2,
                      paddingBottom: 2,
                      paddingLeft: 15,
                    }}
                  >
                    <span
                      style={{ fontSize: 13, cursor: "pointer", color: "#666" }}
                    >
                      강의실 안내
                    </span>
                  </li>
                  <li
                    style={{
                      listStyle: "none",
                      paddingTop: 2,
                      paddingBottom: 2,
                      paddingLeft: 15,
                    }}
                  >
                    <span
                      style={{ fontSize: 13, cursor: "pointer", color: "#666" }}
                    >
                      계절수업료납부 안내
                    </span>
                  </li>
                  <li
                    style={{
                      listStyle: "none",
                      paddingTop: 2,
                      paddingBottom: 2,
                      paddingLeft: 15,
                    }}
                  >
                    <span
                      style={{ fontSize: 13, cursor: "pointer", color: "#666" }}
                    >
                      신입생 학번 안내
                    </span>
                  </li>
                </ul>
              </span>
            </li>
            <li
              style={{
                position: "relative",
                paddingTop: 15,
                paddingBottom: 15,
                borderBottom: 1,
                borderBottomStyle: "solid",
                borderBottomColor: "#ccc",
                listStyle: "none",
              }}
            >
              <span
                style={{
                  fontFamily: "Malgun Gothic",
                  fontSize: 15,
                  cursor: "pointer",
                }}
              >
                포털미사용자 비밀번호 변경
              </span>
            </li>
          </ul>
        </div>
        <div style={{ height: 210, padding: 20, backgroundColor: "#262626" }}>
          <div>
            <button
              style={{
                width: "100%",
                height: 40,
                marginBottom: 10,
                paddingTop: 0,
                paddingBottom: 0,
                paddingLeft: 15,
                paddingRight: 15,
                backgroundColor: "#666",
                border: 0,
                color: "#fff",
                textAlign: "left",
                fontSize: 12,
                fontWeight: "lighter",
                fontFamily: "Apple SD Gothic Neo",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span>사용자매뉴얼 (PC)</span>
              <Image
                src={
                  "https://sugang.korea.ac.kr/resources/img/layout/icon-download.png"
                }
                alt="download"
                width={16}
                height={16}
              />
            </button>
            <button
              style={{
                width: "100%",
                height: 40,
                marginBottom: 10,
                paddingTop: 0,
                paddingBottom: 0,
                paddingLeft: 15,
                paddingRight: 15,
                backgroundColor: "#666",
                border: 0,
                color: "#fff",
                textAlign: "left",
                fontSize: 12,
                fontWeight: "lighter",
                fontFamily: "Apple SD Gothic Neo",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span>사용자매뉴얼 (모바일앱)</span>
              <Image
                src={
                  "https://sugang.korea.ac.kr/resources/img/layout/icon-download.png"
                }
                alt="download"
                width={16}
                height={16}
              />
            </button>
            <button
              style={{
                width: "100%",
                height: 40,
                marginBottom: 10,
                paddingTop: 0,
                paddingBottom: 0,
                paddingLeft: 15,
                paddingRight: 15,
                backgroundColor: "#a20131",
                border: 0,
                color: "#fff",
                textAlign: "left",
                fontSize: 12,
                fontWeight: "lighter",
                fontFamily: "Apple SD Gothic Neo",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <span style={{}}>관련사이트</span>
              <p style={{ fontSize: 23, fontWeight: 450 }}>+ </p>
            </button>
            <div
              style={{
                fontSize: 10,
                color: "#999",
                textAlign: "center",
                lineHeight: 1.5,
              }}
            >
              Copyright © 2023 BBang Co Co.
              <br />
              All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          flexGrow: 1,
          flexShrink: 0,
          flexBasis: 0,
          maxWidth: "100%",
          minWidth: 1030,
          minHeight: "100vh",
        }}
      >
        <div //좌측 네비게이션 바 접는 버튼
          style={{
            top: 34,
            position: "absolute",
            zIndex: 2,
            width: 15,
            height: 51,
            border: 1,
            borderStyle: "solid",
            borderColor: "#e1e1e1",
            borderLeft: 0,
            backgroundColor: "#f9f9f9",
            backgroundImage: `url("https://sugang.korea.ac.kr/resources/img/layout/bg-controller.png")`,
            backgroundRepeat: "no-repeat",
            backgroundPositionX: 3,
            backgroundPositionY: 21,
            cursor: "pointer",
          }}
        ></div>
        <div //헤더
          style={{
            height: 60,
            paddingLeft: 30,
            paddingRight: 30,
            borderBottom: 1,
            borderBottomStyle: "solid",
            borderBottomColor: "#ccc",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Image
            src={"https://sugang.korea.ac.kr/resources/img/layout/logo.png"}
            alt="고려대학교"
            width={120}
            height={37}
          />
          <span
            style={{
              marginLeft: 12,
              paddingLeft: 10,
              borderLeft: 1,
              borderLeftStyle: "solid",
              borderLeftColor: "#ccc",
              fontSize: 20,
              fontWeight: 450,
              letterSpacing: -1,
            }}
          >
            수강신청 연습 시스템
          </span>
          <div
            style={{
              height: 60,
              width: 500,
              marginLeft: "auto",
              backgroundImage: `url("https://sugang.korea.ac.kr/resources/img/contents/bg-select.png")`,
              backgroundRepeat: "no-repeat",
              backgroundPositionX: "right",
              backgroundPositionY: "center",
              lineHeight: 3.5,
              textAlign: "right",
              paddingRight: 13,
            }}
          >
            {id}
          </div>
          <button
            onClick={() => {
              router.push("/");
            }}
            style={{
              width: 80,
              height: 35,
              paddingTop: 0,
              paddingRight: 5,
              paddingBottom: 2,
              paddingLeft: 5,
              marginLeft: 15,
              fontSize: 14,
              backgroundColor: "#8C5637",
              color: "#fff",
              borderWidth: "thin",
              borderTopColor: "#76563b",
              borderRightColor: "#76563b",
              borderBottomColor: "#76563b",
              borderLeftColor: "#76563b",
              borderStyle: "solid",
              lineHeight: 2,
              cursor: "pointer",
            }}
          >
            로그아웃
          </button>
        </div>
        <div //상단 바디
          style={{
            paddingBottom: 30,
            borderBottom: 1,
            borderBottomStyle: "solid",
            borderBottomColor: "#ccc",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div //네비게이션
            style={{
              display: "flex",
              justifyContent: "space-between",
              height: 50,
              marginTop: 25,
              marginRight: 18,
              marginLeft: 18,
              border: 1,
              borderStyle: "solid",
              borderColor: "#ccc",
              lineHeight: 3,
              textAlign: "center",
            }}
          >
            <div
              onClick={() => {
                setNavRegister([true, false, false, false]);
              }}
              style={{
                width: "25%",
                borderRight: 1,
                borderRightStyle: "solid",
                borderRightColor: "#ccc",
                color: navRegister[0] ? "#fff" : "#666",
                backgroundColor: navRegister[0] ? "#bf0039" : "#fff",
                cursor: "pointer",
              }}
            >
              유의사항
            </div>
            <div
              onClick={() => {
                setNavRegister([false, true, false, false]);
              }}
              style={{
                width: "25%",
                borderRight: 1,
                borderRightStyle: "solid",
                borderRightColor: "#ccc",
                color: navRegister[1] ? "#fff" : "#666",
                backgroundColor: navRegister[1] ? "#bf0039" : "#fff",
                cursor: "pointer",
              }}
            >
              학수번호 입력하여 신청
            </div>
            <div
              onClick={() => {
                setNavRegister([false, false, true, false]);
              }}
              style={{
                width: "25%",
                borderRight: 1,
                borderRightStyle: "solid",
                borderRightColor: "#ccc",
                color: navRegister[2] ? "#fff" : "#666",
                backgroundColor: navRegister[2] ? "#bf0039" : "#fff",
                cursor: "pointer",
              }}
            >
              내 관심강의에서 신청
            </div>
            <div
              onClick={() => {
                setNavRegister([false, false, false, true]);
              }}
              style={{
                width: "25%",
                color: navRegister[3] ? "#fff" : "#666",
                backgroundColor: navRegister[3] ? "#bf0039" : "#fff",
                cursor: "pointer",
              }}
            >
              개설과목 검색하여 신청
            </div>
          </div>
          {navRegister[0] ? <NavComp1 /> : null}
          {navRegister[1] ? (
            <div //학수번호 입력하여 신청
              style={{
                borderTop: 1.5,
                borderTopStyle: "solid",
                margin: 18,
                lineHeight: 2.5,
                fontSize: 14,
              }}
            >
              <div
                style={{
                  borderBottom: 1,
                  borderBottomStyle: "solid",
                  borderBottomColor: "#ccc",
                  height: 40,
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{
                    width: 230,
                    height: "100%",
                    textAlign: "left",
                    paddingLeft: 20,
                    borderRight: 1,
                    borderRightStyle: "solid",
                    borderRightColor: "#ccc",
                    backgroundColor: "#F2EEEB",
                  }}
                >
                  학수번호
                </div>
                <div style={{ width: "100%" }}>
                  <input
                    style={{
                      margin: 5,
                      height: 30,
                      width: 180,
                      border: 1,
                      borderStyle: "solid",
                      borderColor: "#ccc",
                    }}
                  />
                </div>
              </div>
              <div
                style={{
                  borderBottom: 1,
                  borderBottomStyle: "solid",
                  borderBottomColor: "#ccc",
                  height: 40,
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{
                    width: 230,
                    height: "100%",
                    textAlign: "left",
                    paddingLeft: 20,
                    borderRight: 1,
                    borderRightStyle: "solid",
                    borderRightColor: "#ccc",
                    backgroundColor: "#F2EEEB",
                  }}
                >
                  분반
                </div>
                <div style={{ width: "100%" }}>
                  <input
                    style={{
                      margin: 5,
                      height: 30,
                      width: 180,
                      border: 1,
                      borderStyle: "solid",
                      borderColor: "#ccc",
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
                    backgroundColor: "#bf0039",
                    border: 0,
                    color: "#fff",
                    marginTop: 12,
                    marginRight: 3,
                    cursor: "pointer",
                  }}
                >
                  신청
                </button>
                <button
                  style={{
                    height: 30,
                    width: 70,
                    border: 1,
                    backgroundColor: "#fff",
                    borderStyle: "solid",
                    borderColor: "#ccc",
                    marginTop: 12,
                    marginLeft: 3,
                    color: "#666",
                    cursor: "pointer",
                  }}
                >
                  초기화
                </button>
              </div>
            </div>
          ) : null}
          {navRegister[2] ? <div>내 관심강의에서 신청</div> : null}
          {navRegister[3] ? (
            <div //개설과목 검색하여 신청
              style={{
                marginBottom: 15,
                marginLeft: 18,
                marginRight: 18,
                marginTop: 20,
                padding: 12,
                paddingBottom: 9,
                border: 1,
                borderStyle: "solid",
                borderColor: "#e6e6e6",
              }}
            >
              <form>
                <div
                  style={{
                    width: "100%",
                    tableLayout: "fixed",
                    borderSpacing: 0,
                  }}
                >
                  <div>
                    <div
                      style={{
                        paddingRight: 0,
                        paddingBottom: 3,
                        paddingLeft: 6,
                      }}
                    >
                      <span
                        style={{
                          alignItems: "center",
                          display: "flex",
                          alignContent: "left",
                        }}
                      >
                        <span
                          style={{
                            width: 54,
                            height: 31,
                            textAlign: "right",
                            lineHeight: 2.7,
                            fontSize: 12,
                            fontWeight: "bold",
                            color: "#333",
                          }}
                        >
                          캠퍼스
                        </span>
                        <select
                          style={{
                            width: 74,
                            height: 25,
                            paddingTop: 0,
                            paddingRight: 5,
                            paddingBottom: 2,
                            paddingLeft: 5,
                            marginLeft: 6,
                            fontSize: 12,
                            color: "#666",
                            borderWidth: "thin",
                            borderTopColor: "#ccc",
                            borderRightColor: "#ccc",
                            borderBottomColor: "#ccc",
                            borderLeftColor: "#ccc",
                            borderStyle: "solid",
                            backgroundImage: `url("https://sugang.korea.ac.kr/resources/img/contents/bg-select.png")`,
                            backgroundRepeat: "no-repeat",
                            backgroundPositionX: 57,
                            backgroundPositionY: "center",
                            WebkitAppearance: "none",
                            MozAppearance: "none",
                            appearance: "none",
                          }}
                        >
                          <option>서울</option>
                          {/* <option>세종</option> */}
                        </select>
                        <span
                          style={{
                            width: 81,
                            height: 31,
                            textAlign: "right",
                            lineHeight: 2.7,
                            fontSize: 12,
                            fontWeight: "bold",
                            color: "#333",
                          }}
                        >
                          대학구분
                        </span>
                        <select
                          style={{
                            width: 74,
                            height: 25,
                            paddingTop: 0,
                            paddingRight: 5,
                            paddingBottom: 2,
                            paddingLeft: 5,
                            marginLeft: 5,
                            fontSize: 12,
                            color: "#666",
                            borderWidth: "thin",
                            borderTopColor: "#ccc",
                            borderRightColor: "#ccc",
                            borderBottomColor: "#ccc",
                            borderLeftColor: "#ccc",
                            borderStyle: "solid",
                            backgroundImage: `url("https://sugang.korea.ac.kr/resources/img/contents/bg-select.png")`,
                            backgroundRepeat: "no-repeat",
                            backgroundPositionX: 197,
                            backgroundPositionY: "center",
                            WebkitAppearance: "none",
                            MozAppearance: "none",
                            appearance: "none",
                          }}
                        >
                          <option>대학</option>
                          {/* <option>대학원</option> */}
                        </select>
                        <span
                          style={{
                            width: 81,
                            height: 31,
                            textAlign: "right",
                            lineHeight: 2.7,
                            fontSize: 12,
                            fontWeight: "bold",
                            color: "#333",
                          }}
                        >
                          이수구분
                        </span>
                        <div
                          style={{ width: 414, marginLeft: 5, display: "flex" }}
                        >
                          <select
                            value={courseTypeOne}
                            onChange={onChangeCourseTypeOne}
                            style={{
                              height: 25,
                              paddingTop: 0,
                              paddingRight: 5,
                              paddingBottom: 2,
                              paddingLeft: 5,
                              fontSize: 12,
                              color: "#666",
                              borderWidth: "thin",
                              borderTopColor: "#ccc",
                              borderRightColor: "#ccc",
                              borderBottomColor: "#ccc",
                              borderLeftColor: "#ccc",
                              borderStyle: "solid",
                              backgroundImage: `url("https://sugang.korea.ac.kr/resources/img/contents/bg-select.png")`,
                              backgroundRepeat: "no-repeat",
                              backgroundPositionX: "95.5%",
                              backgroundPositionY: "center",
                              WebkitAppearance: "none",
                              MozAppearance: "none",
                              appearance: "none",
                              flex: 1,
                            }}
                          >
                            <option>전공</option>
                            <option>학문의기초</option>
                            <option>교양</option>
                            <option>교직</option>
                            <option>군사학</option>
                            <option>평생교육사</option>
                          </select>
                          <select
                            style={{
                              height: 25,
                              paddingTop: 0,
                              paddingRight: 5,
                              paddingBottom: 2,
                              paddingLeft: 5,
                              marginLeft: 5,
                              fontSize: 12,
                              color: "#666",
                              borderWidth: "thin",
                              borderTopColor: "#ccc",
                              borderRightColor: "#ccc",
                              borderBottomColor: "#ccc",
                              borderLeftColor: "#ccc",
                              borderStyle: "solid",
                              backgroundImage: `url("https://sugang.korea.ac.kr/resources/img/contents/bg-select.png")`,
                              backgroundRepeat: "no-repeat",
                              backgroundPositionX: "95.5%",
                              backgroundPositionY: "center",
                              WebkitAppearance: "none",
                              MozAppearance: "none",
                              appearance: "none",
                              flex: 1,
                            }}
                          >
                            <option>전공</option>
                          </select>
                          <select
                            style={{
                              height: 25,
                              paddingTop: 0,
                              paddingRight: 5,
                              paddingBottom: 2,
                              paddingLeft: 5,
                              marginLeft: 5,
                              fontSize: 12,
                              color: "#666",
                              borderWidth: "thin",
                              borderTopColor: "#ccc",
                              borderRightColor: "#ccc",
                              borderBottomColor: "#ccc",
                              borderLeftColor: "#ccc",
                              borderStyle: "solid",
                              backgroundImage: `url("https://sugang.korea.ac.kr/resources/img/contents/bg-select.png")`,
                              backgroundRepeat: "no-repeat",
                              backgroundPositionX: "95.5%",
                              backgroundPositionY: "center",
                              WebkitAppearance: "none",
                              MozAppearance: "none",
                              appearance: "none",
                              flex: 1,
                            }}
                          >
                            <option>전공</option>
                          </select>
                        </div>
                      </span>
                      <span
                        style={{
                          alignItems: "center",
                          display: "flex",
                          alignContent: "left",
                        }}
                      >
                        <span
                          style={{
                            width: 54,
                            height: 31,
                            textAlign: "right",
                            lineHeight: 2.7,
                            fontSize: 12,
                            fontWeight: "bold",
                            color: "#333",
                          }}
                        >
                          학점
                        </span>
                        <input
                          type="text"
                          maxLength={3}
                          style={{
                            width: 74,
                            height: 25,
                            paddingTop: 0,
                            paddingRight: 5,
                            paddingBottom: 2,
                            paddingLeft: 5,
                            marginLeft: 6,
                            fontSize: 12,
                            color: "#666",
                            borderWidth: "thin",
                            borderTopColor: "#ccc",
                            borderRightColor: "#ccc",
                            borderBottomColor: "#ccc",
                            borderLeftColor: "#ccc",
                            borderStyle: "solid",
                          }}
                        />
                        <span
                          style={{
                            width: 81,
                            height: 31,
                            textAlign: "right",
                            lineHeight: 2.7,
                            fontSize: 12,
                            fontWeight: "bold",
                            color: "#333",
                          }}
                        >
                          요일
                        </span>
                        <select
                          style={{
                            width: 74,
                            height: 25,
                            paddingTop: 0,
                            paddingRight: 5,
                            paddingBottom: 2,
                            paddingLeft: 5,
                            marginLeft: 5,
                            fontSize: 12,
                            color: "#666",
                            borderWidth: "thin",
                            borderTopColor: "#ccc",
                            borderRightColor: "#ccc",
                            borderBottomColor: "#ccc",
                            borderLeftColor: "#ccc",
                            borderStyle: "solid",
                            backgroundImage: `url("https://sugang.korea.ac.kr/resources/img/contents/bg-select.png")`,
                            backgroundRepeat: "no-repeat",
                            backgroundPositionX: 57,
                            backgroundPositionY: "center",
                            WebkitAppearance: "none",
                            MozAppearance: "none",
                            appearance: "none",
                          }}
                        >
                          <option>전체--</option>
                          <option>월</option>
                          <option>화</option>
                          <option>수</option>
                          <option>목</option>
                          <option>금</option>
                          <option>토</option>
                          <option>일</option>
                        </select>
                        <span
                          style={{
                            width: 81,
                            height: 31,
                            textAlign: "right",
                            lineHeight: 2.7,
                            fontSize: 12,
                            fontWeight: "bold",
                            color: "#333",
                          }}
                        >
                          교시
                        </span>
                        <select
                          style={{
                            width: 57.54,
                            height: 25,
                            paddingTop: 0,
                            paddingRight: 5,
                            paddingBottom: 2,
                            paddingLeft: 5,
                            marginLeft: 5,
                            fontSize: 12,
                            color: "#666",
                            borderWidth: "thin",
                            borderTopColor: "#ccc",
                            borderRightColor: "#ccc",
                            borderBottomColor: "#ccc",
                            borderLeftColor: "#ccc",
                            borderStyle: "solid",
                            backgroundImage: `url("https://sugang.korea.ac.kr/resources/img/contents/bg-select.png")`,
                            backgroundRepeat: "no-repeat",
                            backgroundPositionX: 41,
                            backgroundPositionY: "center",
                            WebkitAppearance: "none",
                            MozAppearance: "none",
                            appearance: "none",
                          }}
                        >
                          <option>전체--</option>
                          <option>-1</option>
                          <option>0</option>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                          <option>6</option>
                          <option>7</option>
                          <option>8</option>
                          <option>9</option>
                          <option>10</option>
                          <option>11</option>
                          <option>12</option>
                          <option>13</option>
                          <option>14</option>
                          <option>15</option>
                        </select>
                        <span
                          style={{
                            width: 23,
                            height: 31,
                            textAlign: "center",
                            lineHeight: 2.7,
                            fontSize: 12,
                            color: "#333",
                          }}
                        >
                          ~
                        </span>
                        <select
                          style={{
                            width: 57.54,
                            height: 25,
                            paddingTop: 0,
                            paddingRight: 5,
                            paddingBottom: 2,
                            paddingLeft: 5,
                            fontSize: 12,
                            color: "#666",
                            borderWidth: "thin",
                            borderTopColor: "#ccc",
                            borderRightColor: "#ccc",
                            borderBottomColor: "#ccc",
                            borderLeftColor: "#ccc",
                            borderStyle: "solid",
                            backgroundImage: `url("https://sugang.korea.ac.kr/resources/img/contents/bg-select.png")`,
                            backgroundRepeat: "no-repeat",
                            backgroundPositionX: 41,
                            backgroundPositionY: "center",
                            WebkitAppearance: "none",
                            MozAppearance: "none",
                            appearance: "none",
                          }}
                        >
                          <option>전체--</option>
                          <option>-1</option>
                          <option>0</option>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                          <option>6</option>
                          <option>7</option>
                          <option>8</option>
                          <option>9</option>
                          <option>10</option>
                          <option>11</option>
                          <option>12</option>
                          <option>13</option>
                          <option>14</option>
                          <option>15</option>
                        </select>
                        <button
                          style={{
                            width: 71,
                            height: 25,
                            paddingTop: 0,
                            paddingRight: 5,
                            paddingBottom: 2,
                            paddingLeft: 5,
                            marginLeft: 5,
                            fontSize: 12,
                            backgroundColor: "#f9f9f9",
                            color: "#666",
                            borderWidth: "thin",
                            borderTopColor: "#ccc",
                            borderRightColor: "#ccc",
                            borderBottomColor: "#ccc",
                            borderLeftColor: "#ccc",
                            borderStyle: "solid",
                          }}
                        >
                          교시확인표
                        </button>
                        <span
                          style={{
                            width: 80,
                            height: 31,
                            textAlign: "right",
                            lineHeight: 2.7,
                            fontSize: 12,
                            fontWeight: "bold",
                            color: "#333",
                          }}
                        >
                          담당교수
                        </span>
                        <input
                          type="text"
                          maxLength={30}
                          style={{
                            width: 114,
                            height: 25,
                            paddingTop: 0,
                            paddingRight: 5,
                            paddingBottom: 2,
                            paddingLeft: 5,
                            marginLeft: 6,
                            fontSize: 12,
                            color: "#666",
                            borderWidth: "thin",
                            borderTopColor: "#ccc",
                            borderRightColor: "#ccc",
                            borderBottomColor: "#ccc",
                            borderLeftColor: "#ccc",
                            borderStyle: "solid",
                          }}
                        />
                      </span>
                      <span
                        style={{
                          alignItems: "center",
                          display: "flex",
                          alignContent: "left",
                        }}
                      >
                        <span
                          style={{
                            width: 54,
                            height: 31,
                            textAlign: "right",
                            lineHeight: 2.7,
                            fontSize: 12,
                            fontWeight: "bold",
                            color: "#333",
                          }}
                        >
                          학수번호
                        </span>
                        <input
                          type="text"
                          maxLength={7}
                          style={{
                            width: 74,
                            height: 25,
                            paddingTop: 0,
                            paddingRight: 5,
                            paddingBottom: 2,
                            paddingLeft: 5,
                            marginLeft: 6,
                            fontSize: 12,
                            color: "#666",
                            borderWidth: "thin",
                            borderTopColor: "#ccc",
                            borderRightColor: "#ccc",
                            borderBottomColor: "#ccc",
                            borderLeftColor: "#ccc",
                            borderStyle: "solid",
                          }}
                          value={classNum}
                          onChange={(e) => setClassNum(e.target.value)}
                        />
                        <span
                          style={{
                            width: 80,
                            height: 31,
                            textAlign: "right",
                            lineHeight: 2.7,
                            fontSize: 12,
                            fontWeight: "bold",
                            color: "#333",
                          }}
                        >
                          분반
                        </span>
                        <input
                          type="text"
                          maxLength={2}
                          style={{
                            width: 74,
                            height: 25,
                            paddingTop: 0,
                            paddingRight: 5,
                            paddingBottom: 2,
                            paddingLeft: 5,
                            marginLeft: 6,
                            fontSize: 12,
                            color: "#666",
                            borderWidth: "thin",
                            borderTopColor: "#ccc",
                            borderRightColor: "#ccc",
                            borderBottomColor: "#ccc",
                            borderLeftColor: "#ccc",
                            borderStyle: "solid",
                          }}
                          disabled={classNum === ""}
                        />
                        <span
                          style={{
                            width: 81,
                            height: 31,
                            textAlign: "right",
                            lineHeight: 2.7,
                            fontSize: 12,
                            fontWeight: "bold",
                            color: "#333",
                          }}
                        >
                          교과목명
                        </span>
                        <input
                          type="text"
                          style={{
                            width: 414,
                            height: 25,
                            paddingTop: 0,
                            paddingRight: 5,
                            paddingBottom: 2,
                            paddingLeft: 5,
                            marginLeft: 5,
                            fontSize: 12,
                            color: "#666",
                            borderWidth: "thin",
                            borderTopColor: "#ccc",
                            borderRightColor: "#ccc",
                            borderBottomColor: "#ccc",
                            borderLeftColor: "#ccc",
                            borderStyle: "solid",
                          }}
                        />
                        <button
                          style={{
                            width: 55,
                            height: 25,
                            paddingTop: 0,
                            paddingRight: 5,
                            paddingBottom: 2,
                            paddingLeft: 5,
                            marginLeft: 15,
                            fontSize: 12,
                            backgroundColor: "#876243",
                            color: "#fff",
                            borderWidth: "thin",
                            borderTopColor: "#76563b",
                            borderRightColor: "#76563b",
                            borderBottomColor: "#76563b",
                            borderLeftColor: "#76563b",
                            borderStyle: "solid",
                          }}
                        >
                          조회
                        </button>
                        <button
                          style={{
                            width: 55,
                            height: 25,
                            paddingTop: 0,
                            paddingRight: 5,
                            paddingBottom: 2,
                            paddingLeft: 5,
                            marginLeft: 3,
                            fontSize: 12,
                            backgroundColor: "#f9f9f9",
                            color: "#666",
                            borderWidth: "thin",
                            borderTopColor: "#ccc",
                            borderRightColor: "#ccc",
                            borderBottomColor: "#ccc",
                            borderLeftColor: "#ccc",
                            borderStyle: "solid",
                          }}
                        >
                          초기화
                        </button>
                      </span>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          ) : null}
          <div
            style={{
              display: "flex",
              position: "relative",
              width: "100%",
              flexDirection: "column",
            }}
          >
            <div //상단 바디 위로 접는 버튼
              style={{
                position: "absolute",
                justifySelf: "flex-end",
                top: 23,
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
        </div>
        <div //하단 바디
          style={{}}
        >
          <div style={{ display: "flex", paddingLeft: 18, height: 37 }}>
            <h3 style={{}}>수강신청 내역</h3>
            <h6
              style={{
                marginLeft: 15,
                fontSize: 13,
                marginTop: 22,
                marginBottom: 0,
              }}
            >
              [ 최소신청학점 :{" "}
              <span style={{ fontSize: 12, color: "#a20131" }}>1</span> 학점 |
              최대신청학점 :{" "}
              <span style={{ fontSize: 12, color: "#a20131" }}>22</span> 학점 |
              신청학점 :{" "}
              <span style={{ fontSize: 12, color: "#a20131" }}>
                {registerdCredit}
              </span>{" "}
              학점 ]
            </h6>
            <div
              style={{ marginLeft: "auto", marginRight: 18, paddingTop: 18 }}
            >
              <button
                style={{
                  width: 75,
                  height: 25,
                  fontSize: 13,
                  backgroundColor: "#f9f9f9",
                  color: "#666",
                  borderWidth: "thin",
                  borderTopColor: "#ccc",
                  borderRightColor: "#ccc",
                  borderBottomColor: "#ccc",
                  borderLeftColor: "#ccc",
                  borderStyle: "solid",
                }}
              >
                교시확인표
              </button>
              <button
                style={{
                  width: 100,
                  height: 25,
                  fontSize: 13,
                  backgroundColor: "#f9f9f9",
                  color: "#666",
                  borderWidth: "thin",
                  borderTopColor: "#ccc",
                  borderRightColor: "#ccc",
                  borderBottomColor: "#ccc",
                  borderLeftColor: "#ccc",
                  borderStyle: "solid",
                }}
              >
                시간표 인쇄
              </button>
            </div>
          </div>
          <div style={{ height: "100%", display: "flex" }}>
            <div //수강신청 내역 테이블
              style={{
                marginTop: 10,
                borderTop: 1,
                borderTopStyle: "solid",
                width: 800,
                marginLeft: 18,
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
            </div>
            <div //시간표, 네이비즘
              style={{
                width: 421,
                marginRight: 18,
                marginTop: 10,
                marginLeft: 10,
              }}
            >
              <div>
                <TimeTable/>              
              </div>
              <Navysm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
