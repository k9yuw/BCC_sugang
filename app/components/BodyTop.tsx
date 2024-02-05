import { ChangeEvent, MouseEvent, useState } from "react";
import { major } from "../data/major";
import ClickGame from "./enrollment/ClickGame.js";
import { usePathname } from "next/navigation";
import PreferredTimeTable from "./table/preferredTimeTable/preferredTimeTable";

export default function BodyTop() {
  const pathname = usePathname();
  const [navBar, setNavRegister] = useState([true, false, false, false, false]);
  const [campus, setCampus] = useState("서울"); //캠퍼스
  const [collegeSectionType, setCollegeSectionType] = useState("대학"); //대학구분
  const [courseSelect, setCourseSelect] = useState([true, true]);
  const [selectedIdxOne, setSelectedIdxOne] = useState(0);
  const [selectedIdxTwo, setSelectedIdxTwo] = useState(0);
  const [selectedIdxThree, setSelectedIdxThree] = useState(0);
  const [courseTypeOne, setCourseTypeOne] = useState("전공"); //이수구분
  const [courseTypeTwo, setCourseTypeTwo] = useState("간호대학");
  const [courseTypeThree, setCourseTypeThree] = useState<string>("간호학과");
  const [credit, setCredit] = useState(); //학점
  const [day, setDay] = useState(""); //요일
  const [startTime, setStartTime] = useState(); //교시
  const [endTime, setEndTime] = useState();
  const [professor, setProfessor] = useState(""); //교수
  const [courseCode, setCourseCode] = useState(""); //학수번호
  const [section, setSection] = useState(""); //분반
  const [courseName, setCourseName] = useState(""); //교과목명
  const [searchedData, setSearchedData] = useState<courseData[]>([]);
  const [searched, setSearched] = useState(false);

  const onRegisterClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };
  const onChangeCourseTypeOne = (e: ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value == "전공") {
    }
  };
  const onClickSearch = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setSearched(true);
    if (selectedIdxOne === 0) {
      let data = major[selectedIdxTwo][selectedIdxThree].filter(
        (prop) => prop.credit === credit
      );
      data = data.filter((prop) => prop.time_room.includes(day));

      data = data.filter((prop) => prop.time_room.match("/(*)/"));
      setSearchedData(major[selectedIdxTwo][selectedIdxThree]);
    }
  };

  interface courseData {
    lmt_yn: string;
    nemo_yn: string;
    eng100: string;
    year: string;
    tutorial_yn: string;
    mooc_yn: string;
    isu_nm: string;
    courgrad_cd: string;
    cour_cd: string;
    rowid: number;
    enable: string;
    cour_div: string;
    term: string;
    credit: number;
    department: string;
    flexible_school_yn: string;
    attend_free_yn: string;
    flexible_term: number;
    flipped_class_yn: string;
    absolute_yn: string;
    time_room: string;
    campus: string;
    flexible_to_dt: string;
    flexible_fr_dt: string;
    prof_nm: string;
    waiting_yn: string;
    params: string;
    cour_nm: string;
    dept_cd: string;
    cour_cls: string;
    drop_lmt_yn: string;
    time: string;
    apply_dept: string;
    exch_cor_yn: string;
    no_supervisor_yn: string;
    col_cd: string;
  }

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

  //NavBar Components
  const Notices = () => (
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
  const RegisterByCourseNumber = () => (
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
{/*         
        <button>
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
            cursor: "pointer", paddingTop: "0px",
          }}
        >
        신청
        </button> */}
        <ClickGame/>
        {/* <button
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
            color: "#666",
            cursor: "pointer",  paddingTop: "0px",
          }}
        >
          초기화
        </button> */}
      </div>
    </div>
  );
  const RegisterBySearch = () => (
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
                    value={campus}
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
                    value={collegeSectionType}
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
                      width: 76,
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
                      width: 419,
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
                        display: "block",
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                        textOverflow: "clip",
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
                          setSelectedIdxTwo(e.target.selectedIndex);
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
                          display: "block",
                          overflow: "hidden",
                          whiteSpace: "nowrap",
                          textOverflow: "clip",
                        }}
                      >
                        {selectedIdxOne < 2
                          ? Object.keys(courseSelectData[selectedIdxOne]).map(
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
                          setSelectedIdxThree(e.target.selectedIndex);
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
                          display: "block",
                          // overflow: "hidden",
                          whiteSpace: "nowrap",
                          textOverflow: "clip",
                        }}
                      >
                        {selectedIdxOne < 2
                          ? courseSelectData[selectedIdxOne][
                              courseTypeTwo
                            ]?.map((prop: string) => (
                              <option key={prop}>{prop}</option>
                            ))
                          : null}
                      </select>
                    ) : null}
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
                    onInput={(e: any) =>
                      (e.target.value = e.target.value.replace(/[^0-9]/g, ""))
                    }
                    maxLength={3}
                    value={credit}
                    onChange={(e: any) => {
                      setCredit(e.target.value);
                    }}
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
                    value={day}
                    onChange={(e) => {
                      setDay(e.target.value);
                    }}
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
                    value={startTime}
                    onChange={(e: any) => {
                      setStartTime(e.target.value);
                    }}
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
                    value={endTime}
                    onChange={(e: any) => {
                      setEndTime(e.target.value);
                    }}
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
                    onClick={(e) => e.preventDefault()}
                    style={{
                      width: 71,
                      height: 25,
                      paddingTop: 0,
                      paddingRight: 0,
                      paddingBottom: 2,
                      paddingLeft: 0,
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
                    value={professor}
                    onChange={(e) => setProfessor(e.target.value)}
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
                    onInput={(e: any) => {
                      e.target.value = e.target.value.replace(
                        /[^a-zA-Z0-9]/g,
                        ""
                      );
                      const x = e.target.value;
                      e.target.value = x.toUpperCase();
                    }}
                    value={courseCode}
                    onChange={(e) => setCourseCode(e.target.value)}
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
                    onInput={(e: any) => {
                      e.target.value = e.target.value.replace(
                        /[^a-zA-Z0-9]/g,
                        ""
                      );
                      const x = e.target.value;
                      e.target.value = x.toUpperCase();
                    }}
                    value={section}
                    onChange={(e) => setSection(e.target.value)}
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
                    disabled={courseCode === ""}
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
                    value={courseName}
                    onChange={(e) => setCourseName(e.target.value)}
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
                    onClick={onClickSearch}
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
                      cursor: "pointer",
                    }}
                  >
                    조회
                  </button>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setCourseTypeOne("전공");
                      setCourseTypeTwo("간호대학");
                      setCourseTypeThree("간호학과");
                      setCredit("");
                      setDay("전체--");
                      setStartTime("전체--");
                      setEndTime("전체--");
                      setProfessor("");
                      setCourseCode("");
                      setSection("");
                      setCourseName("");
                    }}
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
                      cursor: "pointer",
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
          marginTop: 15,
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
                fontFamily: "sans-serif",
              }}
            >
              학수번호 클릭시 강의계획안 조회가 가능합니다.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
  const RegisterByPreferredCourses = () => <div>내 관심과목에서 신청</div>;

  return (
    <div>
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
        <div //NavBar
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
          <div //Nav 유의사항
            onClick={() => {
              setNavRegister([true, false, false, false, false]);
            }}
            style={{
              width: "25%",
              borderRight: 1,
              borderRightStyle: "solid",
              borderRightColor: "#ccc",
              color: navBar[0] ? "#fff" : "#666",
              backgroundColor: navBar[0] ? "#a20131" : "#fff",
              cursor: "pointer",
            }}
          >
            유의사항
          </div>
          <div //Nav 학수번호 입력하여 신청
            onClick={() => {
              setNavRegister([false, true, false, false, false]);
            }}
            style={{
              width: "25%",
              borderRight: 1,
              borderRightStyle: "solid",
              borderRightColor: "#ccc",
              color: navBar[1] ? "#fff" : "#666",
              backgroundColor: navBar[1] ? "#a20131" : "#f9f9f9",
              cursor: "pointer",
            }}
          >
            학수번호 입력하여 신청
          </div>
          {pathname === "/courseRegisteration" ? ( //Nav 내 관심강의에서 신청
            <div
              onClick={() => {
                setNavRegister([false, false, true, false, false]);
              }}
              style={{
                width: "25%",
                borderRight: 1,
                borderRightStyle: "solid",
                borderRightColor: "#ccc",
                color: navBar[2] ? "#fff" : "#666",
                backgroundColor: navBar[2] ? "#a20131" : "#f9f9f9",
                cursor: "pointer",
              }}
            >
              내 관심강의에서 신청
            </div>
          ) : null}
          <div //Nav 개설과목 검색하여 신청
            onClick={() => {
              setNavRegister([false, false, false, true, false]);
            }}
            style={{
              width: "25%",
              borderRight: pathname === "/courseRegisteration" ? "" : 1,
              borderRightStyle:
                pathname === "/courseRegisteration" ? "none" : "solid",
              borderRightColor:
                pathname === "/courseRegisteration" ? "" : "#ccc",
              color: navBar[3] ? "#fff" : "#666",
              backgroundColor: navBar[3] ? "#a20131" : "#f9f9f9",
              cursor: "pointer",
            }}
          >
            개설과목 검색하여 신청
          </div>
          {pathname === "/preferredCourses" ? ( //Nav 시간표
            <div
              onClick={() => {
                setNavRegister([false, false, false, false, true]);
              }}
              style={{
                width: "25%",
                color: navBar[4] ? "#fff" : "#666",
                backgroundColor: navBar[4] ? "#a20131" : "#f9f9f9",
                cursor: "pointer",
              }}
            >
              시간표
            </div>
          ) : null}
        </div>
        {navBar[0] ? <Notices /> : null}
        {navBar[1] ? <RegisterByCourseNumber /> : null}
        {navBar[2] ? <RegisterByPreferredCourses /> : null}
        {navBar[3] ? <RegisterBySearch /> : null}
        {navBar[4] ? <PreferredTimeTable /> : null}
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
    </div>
  );
}
