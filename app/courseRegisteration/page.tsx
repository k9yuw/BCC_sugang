"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { ChangeEvent, MouseEvent, useState } from "react";

export default function Home() {
  const [language, setLanguage] = useState("kor");
  const [classNum, setClassNum] = useState("");
  const [navMouseEnterOne, setNavMouseEnterOne] = useState(false);
  const [navMouseEnterTwo, setNavMouseEnterTwo] = useState(false);
  const [navMouseEnterThree, setNavMouseEnterThree] = useState(false);
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
  const [selectBoxes, setSelectBoxes] = useState(``);
  const router = useRouter();
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
        </div>
      </div>
    </div>
  );
}
