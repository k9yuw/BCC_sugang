"use client";

import Image from "next/image";
import { ChangeEvent, MouseEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [language, setLanguage] = useState("kor");
  const [classNum, setClassNum] = useState("");
  const [navMouseEnterOne, setNavMouseEnterOne] = useState(false);
  const [navMouseEnterTwo, setNavMouseEnterTwo] = useState(false);
  const [navMouseEnterThree, setNavMouseEnterThree] = useState(false);
  const [tableMouseEnter, setTableMouseEnter] = useState(false);
  const [campus, setCampus] = useState("서울");
  const [collegeSectionType, setCollegeSectionType] = useState("대학");
  const [courseSelect, setCourseSelect] = useState([true, true]);
  const [courseTypeOne, setCourseTypeOne] = useState("");
  const [selectedIdx, setSelectedIdx] = useState(0);
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
  const id = localStorage.getItem("username");

  const router = useRouter();
  const onClickPreferredCourses = (e: MouseEvent<HTMLSpanElement>) => {
    e.preventDefault();
    router.push("/preferredCourses");
  };
  const onClickRegisteration = (e: MouseEvent<HTMLSpanElement>) => {
    e.preventDefault();
    router.push("/courseRegisteration");
  };
  const onChangeCourseTypeOne = (e: ChangeEvent<HTMLSelectElement>) => {
    setCourseTypeOne(e.target.value);
    setSelectedIdx(e.target.selectedIndex);

    if (e.target.selectedIndex < 2) {
      setCourseSelect([true, true]);
    } else if (e.target.selectedIndex < 3) {
      setCourseSelect([true, false]);
    } else {
      setCourseSelect([false, false]);
    }
  };

  type objType = {
    [index: number]: any;
    0: object;
    1: object;
  };

  const courseSelectData: objType = {
    0: {
      간호대학: ["간호학과"],
      경영대학: ["경영학과"],
      공과대학: [
        "공과대학",
        "기계공학부",
        "산업경영공학부",
        "신소재공학부",
        "전기전자공학부",
        "건축사회환경공학부",
        "건축학과",
        "기술창업융합전공",
        "반도체공학과",
        "에너지신산업융합전공",
        "에코스마트시티융합전공",
        "융합에너지공학과",
        "차세대통신학과",
        "화공생명공학과",
      ],
      국제대학: ["국제학부", "글로벌한국융합학부", "GKS 융합전공"],
      디자인조형학부: ["디자인조형학부"],
      문과대학: [
        "문과대학",
        "EML융합전공",
        "GLEAC융합전공",
        "LB&C융합전공",
        "국어국문학과",
        "노어노문학과",
        "독어독문학과",
        "불어불문학과",
        "사학과",
        "사회학과",
        "서어서문학과",
        "언어학과",
        "영어영문학과",
        "의료인문학융합전공",
        "인문사회디지털융합전공",
        "인문학과문화산업융합전공",
        "인문학과정의융합전공",
        "일어일문학과",
        "중어중문학과",
        "철학과",
        "통일과국제평화융합전공",
        "한국사학과",
        "한문학과",
      ],
      미디어학부: ["미디어학부"],
      보건과학대학: [
        "바이오시스템의과학부",
        "바이오의공학부",
        "보건정책관리학부",
        "보건환경융합과학부",
      ],
      사범대학: [
        "가정교육과",
        "교육학과",
        "국어교육과",
        "다문화한국어교육융합전공",
        "수학교육과",
        "역사교육과",
        "영어교육과",
        "지리교육과",
        "체육교육과",
        "패션디자인및머천다이징융합전공",
      ],
      생명과학대학: [
        "생명공학부",
        "생명과학대학",
        "생명과학부",
        "환경생태공학부",
        "생태조경융합전공",
        "식품공학과",
        "식품자원경제학과",
      ],
      스마트모빌리티학부: ["스마트모빌리티학부"],
      스마트보안학부: [
        "개인정보보호융합전공",
        "사이버국방학과",
        "스마트보안학부",
      ],
      심리학부: ["심리학부"],
      의과대학: ["의예과", "의학과"],
      이과대학: ["이과대학", "물리학과", "수학과", "지구환경과학과", "화학과"],
      정경대학: [
        "정경대학",
        "경제학과",
        "금융공학융합전공",
        "정치외교학과",
        "통계학과",
        "행정학과",
      ],
      정보대학: [
        "뇌인지과학융합전공",
        "데이터과학과",
        "소프트웨어벤처융합전공",
        "정보보호 융합전공",
        "컴퓨터학과",
      ],
      "KU-KIST융학대학원(관)": ["메디컬융합공학융합전공"],
      "법학전문대학원(관)": ["법학전문대학원"],
      "현장실습지원센터(관)": ["현장실습지원센터"],
    },
    1: {
      간호대학: ["간호학과"],
      경영대학: ["경영학과"],
      공과대학: ["공과대학"],
      디자인조형학부: ["디자인조형학부"],
      문과대학: [
        "문과대학",
        "노어노문학과",
        "독어독문학과",
        "불어불문학과",
        "서어서문학과",
        "영어영문학과",
        "일어일문학과",
        "중어중문학과",
      ],
      보건과학대학: ["보건정책관리학부"],
      생명과학대학: ["식품자원경제학과"],
      스마트보안학부: ["스마트보안학부"],
      이과대학: ["수학과"],
      정경대학: ["통계학과", "행정학과"],
      정보대학: ["컴퓨터학과"],
    },
    2: [
      "1학년세미나",
      "ACADEMIC ENGLISH",
      "DS/AI",
      "GLOBAL ENGLISH",
      "과학과기술",
      "교양 선택",
      "교양 필수",
      "교양선택(기초과학)",
      "교양선택(외국어)",
      "군사학",
      "글쓰기",
      "디지털혁신과인간 문학과예술 사회의이해 선택교양",
      "선택교양 (기초과학)",
      "세계의문화 역사의탐구 윤리와사상",
      "전공관련교양 정량적사고 학문세계의탐구 I",
      "학문세계의탐구 II",
    ],
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
                onMouseEnter={() => {
                  setNavMouseEnterOne(true);
                }}
                onMouseLeave={() => {
                  setNavMouseEnterOne(false);
                }}
                onClick={onClickRegisteration}
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
                style={{
                  fontFamily: "Malgun Gothic",
                  fontSize: 15,
                  cursor: "pointer",
                  color: "#a20131",
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
                      style={{
                        fontSize: 13,
                        color: "#a20131",
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
          <div style={{ height: 60, width: 50, marginLeft: "auto" }}>{id}</div>
          <button
            style={{
              width: 80,
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
            로그아웃
          </button>
        </div>
        <div //바디
          style={{
            paddingTop: 25,
            paddingBottom: 25,
            paddingLeft: 30,
            paddingRight: 30,
          }}
        >
          <div //과목 검색 블럭
            style={{
              marginBottom: 15,
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
                    <div
                      style={{
                        alignItems: "center",
                        display: "flex",
                        alignContent: "left",
                      }}
                    >
                      <input
                        type="text"
                        value="2024"
                        disabled
                        maxLength={4}
                        style={{
                          width: 64.5,
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
                          backgroundColor: "#fff",
                        }}
                      />
                      <select
                        style={{
                          width: 64.5,
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
                          backgroundPositionX: 50,
                          backgroundPositionY: "center",
                          WebkitAppearance: "none",
                          MozAppearance: "none",
                          appearance: "none",
                        }}
                      >
                        <option>1학기</option>
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
                          width: 214,
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
                      <select
                        value={courseTypeOne}
                        onChange={onChangeCourseTypeOne}
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
                        <option>학문의기초</option>
                        <option>교양</option>
                        <option>교직</option>
                        <option>군사학</option>
                        <option>평생교육사</option>
                      </select>
                      {courseSelect[0] ? (
                        <select
                          value={courseTypeTwo}
                          onChange={(e) => {
                            setCourseTypeTwo(e.target.value);
                          }}
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
                          {selectedIdx < 2
                            ? Object.keys(courseSelectData[selectedIdx]).map(
                                (prop) => <option key={prop}>{prop}</option>
                              )
                            : courseSelectData[2].map((prop: string) => (
                                <option key={prop}>{prop}</option>
                              ))}
                        </select>
                      ) : null}
                      {courseSelect[1] ? (
                        <select
                          value={courseTypeThree}
                          onChange={(e) => {
                            setCourseTypeThree(e.target.value);
                          }}
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
                          {selectedIdx < 2
                            ? courseSelectData[selectedIdx][courseTypeTwo]?.map(
                                (prop: string) => (
                                  <option key={prop}>{prop}</option>
                                )
                              )
                            : null}
                        </select>
                      ) : null}
                    </div>
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
                  <span style={{ color: "#0085ca" }}>이수구분 조건은 무시</span>
                  됩니다.
                </li>
                <li
                  style={{
                    position: "relative",
                    paddingTop: 3,
                    paddingRight: 0,
                    paddingBottom: 3,
                    fontSize: 13,
                    whiteSpace: "break-spaces",
                    fontFamily: "Malgun Gothic",
                  }}
                >
                  <span style={{ color: "#f23d18" }}>M</span>: MOOC
                  <span style={{ color: "#f23d18", marginLeft: 15 }}>FC</span>:
                  Flipped Class
                  <span style={{ color: "#f23d18", marginLeft: 15 }}>T</span>:
                  Tutorial
                  <span style={{ color: "#f23d18", marginLeft: 15 }}>NM</span>:
                  NeMo Class
                  <span style={{ color: "#f23d18", marginLeft: 15 }}>SC</span>:
                  Signature Class(영강100선)
                  <span style={{ color: "#f23d18", marginLeft: 15 }}>DL</span>:
                  DROP LIMIT(수강포기제한)
                  <span style={{ color: "#0085ca", marginLeft: 8 }}>
                    ☜ 과목명에 뒤에 아이콘으로 표기됩니다.
                  </span>
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
                <li
                  style={{
                    position: "relative",
                    paddingTop: 3,
                    paddingRight: 0,
                    paddingBottom: 3,
                    fontSize: 13,
                  }}
                >
                  {
                    "강의계획안 학생의견 작성 안내 : 포털 로그인->수업->수강안내->학부 전공과목/교양교직과목 내에서 해당 과목 학수번호 클릭 후 강의계획서 조회하여 조회되는 강의계획서 하단에 의견 작성 가능"
                  }
                </li>
              </ul>
            </div>
          </div>
          <div //검색 결과 테이블
            style={{ marginTop: 10, borderTop: 0.7, borderTopStyle: "solid" }}
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
                      width: 55.375,
                      fontWeight: 600,
                    }}
                  >
                    캠퍼스
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
                      width: 38.375,
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
                      width: 87.375,
                    }}
                  >
                    개설학과
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
                      width: 38.375,
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
                      width: 135.375,
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
                      width: 38.375,
                    }}
                  >
                    상대
                    <br />
                    평가
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
                      width: 38.375,
                    }}
                  >
                    인원
                    <br />
                    제한
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
                      width: 38.375,
                    }}
                  >
                    교환
                    <br />
                    학생
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
                    출석확인
                    <br />
                    자율화
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
                    무감독
                    <br />
                    시험
                  </th>
                  <th
                    style={{
                      borderBottomStyle: "solid",
                      borderBottomWidth: 1,
                      borderBottomColor: "#ccc",
                      width: 38,
                    }}
                  >
                    유연
                    <br />
                    학기
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
              조회 조건 선택 후 조회 버튼을 클릭하세요.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
