"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { ChangeEvent, MouseEvent, useState } from "react";
import Navysm from "../components/clock/navysm";
import PreferredTimeTable from "../components/table/preferredTimeTable/preferredTimeTable";

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
  const onClickRegisteration = (e: MouseEvent<HTMLSpanElement>) => {
    e.preventDefault();
    router.push("/courseRegisteration");
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
        marginTop: 10,
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
                onClick={onClickRegisteration}
                onMouseEnter={() => {
                  setNavMouseEnterOne(true);
                }}
                onMouseLeave={() => {
                  setNavMouseEnterOne(false);
                }}
                style={{
                  fontFamily: "Malgun Gothic",
                  fontSize: 15,
                  cursor: "pointer",
                  color: navMouseEnterOne ? "#a20131" : "",
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
                style={{
                  fontFamily: "Malgun Gothic",
                  fontSize: 15,
                  cursor: "pointer",
                  color: "#a20131",
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
              paddingRight: 15,
            }}
          >
            {id}
          </div>
          <button
            onClick={() => {
              router.push("/");
            }}
            style={{
              width: 70.7,
              height: 30,
              paddingTop: 0,
              paddingRight: 5,
              paddingBottom: 2,
              paddingLeft: 5,
              marginLeft: 20,
              fontSize: 12,
              backgroundColor: "#876243",
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
            paddingTop: 25,
            paddingRight: 30,
            paddingBottom: 32.7,
            paddingLeft: 30,
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
              height: 40,
              border: 1,
              borderStyle: "solid",
              borderColor: "#ccc",
              lineHeight: 2.7,
              textAlign: "center",
              fontSize: 13,
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
                backgroundColor: navRegister[0] ? "#a20131" : "#fff",
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
                backgroundColor: navRegister[1] ? "#a20131" : "#f9f9f9",
                cursor: "pointer",
              }}
            >
              학수번호 입력하여 신청
            </div>

            <div
              onClick={() => {
                setNavRegister([false, false, false, true]);
              }}
              style={{
                width: "25%",
                color: navRegister[3] ? "#fff" : "#666",
                backgroundColor: navRegister[3] ? "#a20131" : "#f9f9f9",
                cursor: "pointer",
              }}
            >
              개설과목 검색하여 신청
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
                backgroundColor: navRegister[2] ? "#a20131" : "#f9f9f9",
                cursor: "pointer",
              }}
            >
              시간표
            </div>
          </div>
          {navRegister[0] ? <NavComp1 /> : null}
          {navRegister[1] ? (
            <div //학수번호 입력하여 신청
              style={{
                borderTop: 1,
                borderTopStyle: "solid",
                marginTop: 10,
                lineHeight: 2.5,
                fontSize: 14,
              }}
            >
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
                    style={{
                      margin: 5,
                      height: 25,
                      width: 150,
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
                    style={{
                      margin: 5,
                      height: 25,
                      width: 150,
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
                    fontSize: 12,
                    backgroundColor: "#a20131",
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
                    fontSize: 12,
                    border: 1,
                    backgroundColor: "#f9f9f9",
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
          {navRegister[3] ? (
            <div>
              <div //개설과목 검색하여 신청
                style={{
                  marginTop: 10,
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
                            style={{
                              width: 414,
                              marginLeft: 5,
                              display: "flex",
                            }}
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
              <div //안내사항 블럭
                style={{
                  position: "relative",
                  paddingTop: 5,
                  paddingRight: 25,
                  paddingBottom: 5,
                  paddingLeft: 25,
                  marginTop: 15,
                  border: 1,
                  borderStyle: "solid",
                  borderColor: "#dedede",
                  boxSizing: "border-box",
                }}
              >
                <div style={{ display: "block" }}>
                  <ul
                    style={{
                      margin: 0,
                      marker: "#f23d18",
                      paddingLeft: 13,
                      lineHeight: 1.5,
                      fontWeight: 400,
                    }}
                  >
                    <li
                      style={{
                        position: "relative",
                        paddingTop: 3,
                        paddingRight: 0,
                        paddingBottom: 3,
                        fontSize: 13,
                      }}
                    >
                      <span style={{ color: "#f23d18" }}>
                        학수번호, 교과목명, 대학원{" "}
                      </span>
                      검색시
                      <span style={{ color: "#0085ca" }}>
                        이수구분 조건은 무시
                      </span>
                      됩니다.
                    </li>
                    <li
                      style={{
                        position: "relative",
                        paddingTop: 3,
                        paddingRight: 0,
                        paddingBottom: 3,
                        fontSize: 13,
                        fontFamily: "sans-serif",
                      }}
                    >
                      학수번호 클릭시 강의계획안 조회가 가능합니다.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ) : null}
          {navRegister[2] ? <PreferredTimeTable /> : null}
          {/* 수강희망 시간표 */}
        </div>
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
              top: -7.5,
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
        <div //하단 바디
          style={{
            paddingTop: 20,
            paddingRight: 30,
            paddingBottom: 25,
            paddingLeft: 30,
          }}
        >
          <div style={{ display: "flex", height: 30, paddingBottom: 5 }}>
            <h3 style={{ fontSize: 18, marginBottom: 0, marginTop: 0 }}>
              희망과목 내역
            </h3>
            <h6
              style={{
                fontSize: 13,
                marginBottom: 0,
                marginTop: 0,
                marginLeft: 15,
                lineHeight: 1.8,
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
            <div style={{ marginLeft: "auto" }}>
              <button
                style={{
                  width: 70,
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
                }}
              >
                교시확인표
              </button>
              <button
                style={{
                  width: 96,
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
                  backgroundPositionY: 2,
                  backgroundPositionX: 70,
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
