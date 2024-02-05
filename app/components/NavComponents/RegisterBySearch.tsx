import { ChangeEvent, MouseEvent, useEffect, useState } from "react";
import { major } from "../../data/major";
import { usePathname } from "next/navigation";
import PreferredTimeTable from "../table/preferredTimeTable/preferredTimeTable";
import Image from "next/image";
import { courseSelectData } from "../../constant/CourseSelectData";
import courseData from "@/app/constant/courseDataInterface";
import { academicFoundations } from "@/app/data/academicFoundations";
import { generalStudies } from "@/app/data/generalStudies";
import { teacherEducation } from "@/app/data/teacherEducatoin";
import { militaryStudies } from "@/app/data/militaryStudies";
import { lifelongEducation } from "@/app/data/lifelongEducation";

export default function RegisterBySearch() {
  const pathname = usePathname();
  const [tableMouseEnter, setTableMouseEnter] = useState(false);
  const [campus, setCampus] = useState("서울"); //캠퍼스
  const [collegeSectionType, setCollegeSectionType] = useState("대학"); //대학구분
  const [courseSelect, setCourseSelect] = useState([true, true]);
  const [selectedIdxOne, setSelectedIdxOne] = useState(0);
  const [selectedIdxTwo, setSelectedIdxTwo] = useState(0);
  const [selectedIdxThree, setSelectedIdxThree] = useState(0);
  const [courseTypeOne, setCourseTypeOne] = useState("전공"); //이수구분
  const [courseTypeTwo, setCourseTypeTwo] = useState("간호대학");
  const [courseTypeThree, setCourseTypeThree] = useState<string>("간호학과");
  const [credit, setCredit] = useState<string>(); //학점
  const [day, setDay] = useState(""); //요일
  const [startTime, setStartTime] = useState<string>(); //교시
  const [endTime, setEndTime] = useState<string>();
  const [professor, setProfessor] = useState(""); //교수
  const [courseCode, setCourseCode] = useState(""); //학수번호
  const [section, setSection] = useState(""); //분반
  const [courseName, setCourseName] = useState(""); //교과목명
  const [searchedData, setSearchedData] = useState<courseData[]>([]);
  const [searched, setSearched] = useState(false);
  const [preferredCourses, setPreferredCourses] = useState<courseData[]>([]);
  const [preferredCredit, setPreferredCredit] = useState<number>(0);

  useEffect(() => {
    const preferredCoursesCached = localStorage.getItem("preferredCourses");

    const data = JSON.parse(preferredCoursesCached ?? "[]") as courseData[];
    setPreferredCourses(data);
    const preferredCreditArray = data.map((prop) => prop.credit);
    setPreferredCredit(preferredCreditArray.reduce((a, b) => a + b, 0));
  }, []);

  const onRegisterClick = (
    e: MouseEvent<HTMLButtonElement>,
    prop: courseData
  ) => {
    e.preventDefault();
    if (pathname === "/courseRegisteration") {
    } else if (pathname === "/preferredCourses") {
      let maxCreditLimit = localStorage.getItem("maxCreditLimit");
      if (maxCreditLimit === null) maxCreditLimit = "19";
      console.log(preferredCourses);
      console.log(maxCreditLimit);
      console.log(preferredCredit);
      if (preferredCredit + prop.credit < parseInt(maxCreditLimit)) {
        setPreferredCourses((prev) => [...prev, prop]);
        setPreferredCredit((prep) => prep + prop.credit);
        localStorage.setItem(
          "preferredCourses",
          JSON.stringify(preferredCourses)
        );
      } else {
        alert("신청가능한 학점을 초과했습니다");
      }
    }
  };
  const onChangeCourseTypeOne = (e: ChangeEvent<HTMLSelectElement>) => {
    setCourseTypeOne(e.target.value);
    setSelectedIdxOne(e.target.selectedIndex);

    if (e.target.selectedIndex < 2) {
      setCourseSelect([true, true]);
    } else if (e.target.selectedIndex < 3) {
      setCourseSelect([true, false]);
    } else {
      setCourseSelect([false, false]);
    }
  };
  const onClickSearch = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setSearched(true);
    if (selectedIdxOne === 0) {
      // let data = major[selectedIdxTwo][selectedIdxThree].filter(
      //   (prop) => prop.credit === credit
      // );
      // data = data.filter((prop) => prop.time_room.includes(day));

      // data = data.filter((prop) => prop.time_room.match("/(*)/"));
      setSearchedData(major[selectedIdxTwo][selectedIdxThree]);
    } else if (selectedIdxOne === 1) {
      setSearchedData(academicFoundations[selectedIdxTwo][selectedIdxThree]);
    } else if (selectedIdxOne === 2) {
      setSearchedData(generalStudies[selectedIdxTwo]);
    } else if (selectedIdxOne === 3) {
      setSearchedData(teacherEducation);
    } else if (selectedIdxOne === 4) {
      setSearchedData(militaryStudies);
    } else if (selectedIdxOne === 5) {
      setSearchedData(lifelongEducation);
    }
  };

  return (
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
                <div
                  style={{
                    alignItems: "center",
                    display: "flex",
                    alignContent: "left",
                  }}
                >
                  <span
                    style={{
                      width: 55,
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
                    defaultValue={campus}
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
                    defaultValue={collegeSectionType}
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
                      width: 418,
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    <div
                      style={{
                        flex: 1,
                        display: "flex",
                        flexDirection: "row",
                        marginLeft: 5,
                        borderWidth: "thin",
                        borderTopColor: "#ccc",
                        borderRightColor: "#ccc",
                        borderBottomColor: "#ccc",
                        borderLeftColor: "#ccc",
                        borderStyle: "solid",
                        paddingRight: 7,
                        alignItems: "center",
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
                          borderColor: "transparent",
                          WebkitAppearance: "none",
                          MozAppearance: "none",
                          appearance: "none",
                          display: "block",
                          overflow: "hidden",
                          whiteSpace: "nowrap",
                          textOverflow: "clip",
                          flex: 1,
                          outline: "none",
                        }}
                      >
                        <option>전공</option>
                        <option>학문의기초</option>
                        <option>교양</option>
                        <option>교직</option>
                        <option>군사학</option>
                        <option>평생교육사</option>
                      </select>
                      <Image
                        src={
                          "https://sugang.korea.ac.kr/resources/img/contents/bg-select.png"
                        }
                        alt="select"
                        width={7}
                        height={4}
                      />
                    </div>
                    {courseSelect[0] ? (
                      <div
                        style={{
                          flex: 1,
                          display: "flex",
                          flexDirection: "row",
                          marginLeft: 5,
                          borderWidth: "thin",
                          borderTopColor: "#ccc",
                          borderRightColor: "#ccc",
                          borderBottomColor: "#ccc",
                          borderLeftColor: "#ccc",
                          borderStyle: "solid",
                          paddingRight: 7,
                          alignItems: "center",
                        }}
                      >
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
                            fontSize: 12,
                            color: "#666",
                            borderColor: "transparent",
                            WebkitAppearance: "none",
                            MozAppearance: "none",
                            appearance: "none",
                            display: "block",
                            overflow: "hidden",
                            whiteSpace: "nowrap",
                            textOverflow: "clip",
                            flex: 1,
                            outline: "none",
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
                        <Image
                          src={
                            "https://sugang.korea.ac.kr/resources/img/contents/bg-select.png"
                          }
                          alt="select"
                          width={7}
                          height={4}
                        />
                      </div>
                    ) : null}
                    {courseSelect[1] ? (
                      <div
                        style={{
                          flex: 1,
                          display: "flex",
                          flexDirection: "row",
                          marginLeft: 5,
                          borderWidth: "thin",
                          borderTopColor: "#ccc",
                          borderRightColor: "#ccc",
                          borderBottomColor: "#ccc",
                          borderLeftColor: "#ccc",
                          borderStyle: "solid",
                          paddingRight: 7,
                          alignItems: "center",
                        }}
                      >
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
                            fontSize: 12,
                            color: "#666",
                            borderColor: "transparent",
                            WebkitAppearance: "none",
                            MozAppearance: "none",
                            appearance: "none",
                            display: "block",
                            overflow: "hidden",
                            whiteSpace: "nowrap",
                            textOverflow: "clip",
                            flex: 1,
                            outline: "none",
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
                        <Image
                          src={
                            "https://sugang.korea.ac.kr/resources/img/contents/bg-select.png"
                          }
                          alt="select"
                          width={7}
                          height={4}
                        />
                      </div>
                    ) : null}
                  </div>
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
                    onInput={(e: any) =>
                      (e.target.value = e.target.value.replace(/[^0-9]/g, ""))
                    }
                    maxLength={3}
                    value={credit}
                    onChange={(e) => {
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
                    onChange={(e) => {
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
                    onChange={(e) => {
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
      <div //검색 결과 테이블
        style={{ marginTop: 10, borderTop: 0.7, borderTopStyle: "solid" }}
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
            <tr //마감현황 포함
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
                {pathname === "/courseRegisteration" ? "수강신청" : "관심등록"}
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
                  width: 65.13,
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
                교과목명
                {pathname === "/courseRegisteration" ? "" : "(강의계획서)"}
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
                  width: 39.08,
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
                  fontWeight: 600,
                  width: 39.08,
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
                  width: 39.08,
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
                  width: 39.08,
                }}
              >
                교환
                <br />
                학생
              </th>
              <th
                style={{
                  borderBottomStyle: "solid",
                  borderBottomWidth: 1,
                  borderBottomColor: "#ccc",
                  width: 38.13,
                }}
              >
                마감
                <br />
                현황
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
            <thead style={{}}>
              {searchedData.map((prop: courseData, index) => (
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
                  key={prop.params}
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
                      fontFamily: "Segoe UI",
                      fontWeight: 400,
                    }}
                  >
                    <button
                      onClick={(e) => onRegisterClick(e, prop)}
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
                      {pathname === "/courseRegisteration" ? "신청" : "등록"}
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
                      fontFamily: "Segoe UI",
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
                      fontFamily: "Segoe UI",
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
                      width: 65.13,
                      paddingTop: 4,
                      paddingRight: 6,
                      paddingBottom: 4,
                      paddingLeft: 6,
                      fontFamily: "Segoe UI",
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
                      fontFamily: "Segoe UI",
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
                      fontFamily: "Segoe UI",
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
                      width: 39.08,
                      paddingTop: 4,
                      paddingRight: 6,
                      paddingBottom: 4,
                      paddingLeft: 6,
                      fontFamily: "Segoe UI",
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
                      fontFamily: "Segoe UI",
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
                      width: 39.08,
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
                      fontWeight: 600,
                      width: 39.08,
                      paddingTop: 4,
                      paddingRight: 6,
                      paddingBottom: 4,
                      paddingLeft: 6,
                    }}
                  >
                    {prop.lmt_yn === "Y" ? (
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
                      fontWeight: 600,
                      width: 39.08,
                      paddingTop: 4,
                      paddingRight: 6,
                      paddingBottom: 4,
                      paddingLeft: 6,
                    }}
                  >
                    {prop.exch_cor_yn === "Y" ? null : (
                      <Image
                        src={
                          "https://sugang.korea.ac.kr/resources/img/contents/icon-check.png"
                        }
                        alt="check"
                        width={13}
                        height={9}
                      />
                    )}
                  </th>
                  {searched ? (
                    <th
                      style={{
                        borderBottomStyle: "solid",
                        borderBottomWidth: 1,
                        borderBottomColor: "#ddd",
                        width: 38.13,
                      }}
                    >
                      <Image
                        src={
                          "	https://sugang.korea.ac.kr/resources/img/contents/icon-view.png"
                        }
                        alt="note"
                        width={16}
                        height={21}
                      />
                    </th>
                  ) : null}
                </tr>
              ))}
            </thead>
          </table>
        </div>

        {searched && searchedData?.length === 0 ? ( //검색 결과 없음
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
              backgroundColor: tableMouseEnter ? "#F2F2F2" : "#fff",
            }}
          >
            검색결과가 존재하지 않습니다.
            <br />
            조회 조건 선택 후 조회 버튼을 클릭하세요.
          </div>
        ) : null}
        {searched ? null : ( //검색 전: '~조회 버튼 클릭하세요'
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
        )}
      </div>
    </div>
  );
}
