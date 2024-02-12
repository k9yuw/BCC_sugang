import {
  ChangeEvent,
  MouseEvent,
  useEffect,
  useState,
  useCallback,
  Dispatch,
  SetStateAction,
} from "react";
import { major } from "../../data/major";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { courseSelectData } from "../../constant/CourseSelectData";
import courseData from "@/app/constant/courseDataInterface";
import { academicFoundations } from "@/app/data/academicFoundations";
import { generalStudies } from "@/app/data/generalStudies";
import { teacherEducation } from "@/app/data/teacherEducatoin";
import { militaryStudies } from "@/app/data/militaryStudies";
import { lifelongEducation } from "@/app/data/lifelongEducation";
import TimePeriod from "../popups/TimePeriod";
import BodyBottomPreferred from "../BodyBottomPreferred";
import { all } from "@/app/data/all";
import BodyBottomRegister from "../BodyBottomRegister";
import { useGame } from "../context/GameContext";
import WaitingPopUp from "../popups/WatingPopUp";
import ResultPopUp from "../popups/ResultPopUp";
import CustomPopup from "../popups/CustomPopup";

const rand = Math.random();

export default function RegisterBySearch({
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
  const pathname = usePathname();
  const [tableMouseEnter, setTableMouseEnter] = useState(false);
  const [campus, setCampus] = useState("서울"); //캠퍼스
  const [collegeSectionType, setCollegeSectionType] = useState("대학"); //대학구분
  const [courseSelect, setCourseSelect] = useState([true, true]);
  const [selectedIdxOne, setSelectedIdxOne] = useState<0 | 1 | 2>(0);
  const [selectedIdxTwo, setSelectedIdxTwo] = useState(0);
  const [selectedIdxThree, setSelectedIdxThree] = useState(0);
  const [courseTypeOne, setCourseTypeOne] = useState("전공"); //이수구분
  const [courseTypeTwo, setCourseTypeTwo] = useState("간호대학");
  const [courseTypeThree, setCourseTypeThree] = useState<string>("간호학과");
  const [credit, setCredit] = useState<string>(""); //학점
  const [day, setDay] = useState("전체--"); //요일
  const [startTime, setStartTime] = useState<string>("전체--"); //교시
  const [endTime, setEndTime] = useState<string>("전체--");
  const [professor, setProfessor] = useState(""); //교수
  const [courseCode, setCourseCode] = useState(""); //학수번호
  const [section, setSection] = useState(""); //분반
  const [courseName, setCourseName] = useState(""); //교과목명
  const [searchedData, setSearchedData] = useState<courseData[]>([]);
  const [searched, setSearched] = useState(false);
  const [preferredCredit, setPreferredCredit] = useState<number>(0);
  const [registeredCredit, setRegisteredCredit] = useState<number>(0);
  const [isOpenModal, setOpenModal] = useState<boolean>(false);
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

  const onClickToggleModal = useCallback(() => {
    setOpenModal(!isOpenModal);
  }, [isOpenModal]);

  useEffect(() => {
    const preferredCoursesCached = localStorage.getItem("preferredCourses");
    if (!preferredCoursesCached) {
      localStorage.setItem("preferredCourses", "[]");
    }
    const data = JSON.parse(preferredCoursesCached ?? "[]") as courseData[];
    setPreferredCourses(data);
    const preferredCreditArray = data.map((prop) => prop.credit);
    setPreferredCredit(preferredCreditArray.reduce((a, b) => a + b, 0));
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
    let preferredTimes: number[] = [];
    preferredCourses.forEach((prop) => {
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
              preferredTimes.push((time - 1) * 6);
          } else if (day === "화") {
            for (time = startTime; time <= endTime; time++)
              preferredTimes.push((time - 1) * 6 + 1);
          } else if (day === "수") {
            for (time = startTime; time <= endTime; time++)
              preferredTimes.push((time - 1) * 6 + 2);
          } else if (day === "목") {
            for (time = startTime; time <= endTime; time++)
              preferredTimes.push((time - 1) * 6 + 3);
          } else if (day === "금") {
            for (time = startTime; time <= endTime; time++)
              preferredTimes.push((time - 1) * 6 + 4);
          } else if (day === "토") {
            for (time = startTime; time <= endTime; time++)
              preferredTimes.push((time - 1) * 6 + 5);
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
    const preferredSet = new Set([...preferredTimes, ...searchedTimes]);
    //수강신청
    if (pathname === "/courseRegisteration") {
      const courseIdArrayRegistered = registeredCourses.map(
        (prop) => prop.rowid + prop.params
      );
      if (courseIdArrayRegistered.includes(courseId)) {
        //중복 신청 filtering
        openCustomPopup();
        setTextAlert("이미 신청된 과목입니다.");
      } else if (
        registeredTimes.length + searchedTimes.length >=
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
      }  else {
          //여기에 게임 넣으면 됨!
          console.log("click game!");
          const result = register();
          const timePassed = Math.ceil((result * 3) / 1000);
          const time = (timePassed >= 4 ? Math.ceil(4 + result % 3) : timePassed);
          if (result < 0) {
            setResultPopupOpen(true);
            // return;
            // console.log("waitingOpen:", waitingOpen);
          } else {
            if (registeredNum === 0) {
              // 게임 시작 후 첫 수강 신청
              if (result < 700) {
                setWaitingOpen(true);
                setResultType("success");
                setResultPopupOpen(true);
                plusRegistered();
                setTimeout(
                  () => {
                    const data = [...registeredCourses, prop];
                    setRegisteredCourses(data);
                    setRegisteredCredit((prep) => prep + prop.credit);
                    localStorage.setItem("registeredCourses", JSON.stringify(data));
                  }, time*1000);
              } else {
                setWaitingOpen(true);
                setResultType("fail");
                setResultPopupOpen(true);
              }
            } else {
              if (result < 5000 + (registeredNum - 1) * 6700) {
                setWaitingOpen(true);
                setResultType("success");
                setResultPopupOpen(true);
                plusRegistered();
                setTimeout(
                  () => {
                    const data = [...registeredCourses, prop];
                    setRegisteredCourses(data);
                    setRegisteredCredit((prep) => prep + prop.credit);
                    localStorage.setItem("registeredCourses", JSON.stringify(data));
                  }, time*1000);
              } else {
                setWaitingOpen(true);
                setResultType("fail");
                setResultPopupOpen(true);
              }
            }
          }
        }
        setTimeTaken(result);
        // setTimeout(() => setTimeTaken(undefined), 500);
      }
    }
    //관심과목 등록
    else if (pathname === "/preferredCourses") {
      const courseIdArrayPreferred = preferredCourses.map(
        (prop) => prop.rowid + prop.params
      );
      if (courseIdArrayPreferred.includes(courseId)) {
        //중복 신청 filtering
        openCustomPopup();
        setTextAlert("이미 신청된 과목입니다.");
      } else if (
        preferredTimes.length + searchedTimes.length >=
        preferredSet.size
      ) {
        //강의시간 중복 filtering
        openCustomPopup();
        setTextAlert(`관심과목의 강의날짜와 강의시간이 중복되었습니다.`);
      } else if (
        preferredCredit + prop.credit >
        parseInt(maxCreditLimit)
      ) {
        //학점 초과 filtering
        openCustomPopup();
        setTextAlert("신청가능한 학점을 초과했습니다");
      } else {
        const data = [...preferredCourses, prop];
        setPreferredCourses(data);
        setPreferredCredit((prep) => prep + prop.credit);
        localStorage.setItem("preferredCourses", JSON.stringify(data));
        openCustomPopup();
        setTextAlert("관심과목 등록 되었습니다.");
      }
    }
  };

  const onChangeCourseTypeOne = (e: ChangeEvent<HTMLSelectElement>) => {
    setCourseTypeOne(e.target.value);
    setSelectedIdxOne(e.target.selectedIndex as 0 | 1 | 2);

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
    let data: courseData[] = [];
    if (courseCode !== "") {
      //학수번호 (+분반)
      if (courseName !== "") {
        openCustomPopup();
        setTextAlert("학수번호 입력시 교과목명을 입력 할 수 없습니다.");
        return;
      }
      data = all.filter((prop) => prop.cour_cd === courseCode);
      if (section !== "") {
        data = data.filter((prop) => prop.cour_cls === section);
      }
    } else if (courseName !== "") {
      //교과목명
      data = all.filter((prop) => prop.cour_nm === courseName);
    } else {
      //이수구분
      if (selectedIdxOne === 0) {
        data = major[selectedIdxTwo][selectedIdxThree];
      } else if (selectedIdxOne === 1) {
        data = academicFoundations[selectedIdxTwo][selectedIdxThree];
      } else if (selectedIdxOne === 2) {
        data = generalStudies[selectedIdxTwo];
      } else if (selectedIdxOne === 3) {
        data = teacherEducation;
      } else if (selectedIdxOne === 4) {
        data = militaryStudies;
      } else if (selectedIdxOne === 5) {
        data = lifelongEducation;
      }
      if (credit !== "") {
        //학점
        data = data.filter((prop) => prop.credit === parseInt(credit));
      }
      if (day !== "전체--") {
        //요일
        data = data.filter((prop) => prop.time_room.includes(day));
      }
      if (professor !== "") {
        //교수
        data = data.filter((prop) => prop.prof_nm === professor);
      }
      if (startTime !== "전체--") {
        //시작교시
        
      }
      if (endTime !== "전체--") {
        //종료교시
      }

      setSearchedData(data);
    }
  };

  return (
    <div>
      <div //개설과목 검색하여 신청
        style={{
          marginRight: 30,
          marginLeft: 30,
          marginTop: 10,
          padding: 12,
          paddingBottom: 9,
          border: 1,
          borderStyle: "solid",
          borderColor: "#e6e6e6",
        }}
      >
        <CustomPopup
          customPopupOpen={customPopupOpen}
          closeCustomPopup={closeCustomPopup}
          textValue={textAlert}
        />
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
                      outline: "none",
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
                      outline: "none",
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
                          width: "100%",
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
                            width: "100%",
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
                            width: "100%",
                            outline: "none",
                          }}
                        >
                          {selectedIdxOne < 2
                            ? courseSelectData[selectedIdxOne as 0 | 1][
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
                    maxLength={3}
                    value={credit}
                    onChange={(e) => {
                      setCredit(e.target.value.replace(/[^0-9]/g, ""));
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
                      outline: "none",
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
                      outline: "none",
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
                      outline: "none",
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
                  <span>
                    {isOpenModal && (
                      <TimePeriod
                        onClickToggleModal={onClickToggleModal}
                      ></TimePeriod>
                    )}
                    <button
                      type="button"
                      onClick={onClickToggleModal}
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
                        cursor: "pointer",
                      }}
                    >
                      교시확인표
                    </button>
                  </span>
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
                    value={courseCode}
                    onChange={(e) =>
                      setCourseCode(
                        e.target.value
                          .replace(/[^a-zA-Z0-9]/g, "")
                          .toUpperCase()
                      )
                    }
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
                    value={section}
                    onChange={(e) =>
                      setSection(
                        e.target.value
                          .replace(/[^a-zA-Z0-9]/g, "")
                          .toUpperCase()
                      )
                    }
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
          marginRight: 30,
          marginLeft: 30,
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
              }}
            >
              학수번호 클릭시 강의계획안 조회가 가능합니다.
            </li>
          </ul>
        </div>
      </div>
      <div //검색 결과 테이블
        style={{
          marginTop: 10,
          marginBottom: 32.7,
          borderTop: 0.7,
          borderTopStyle: "solid",
          marginRight: 30,
          marginLeft: 30,
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
                      width: 65.13,
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
                      width: 39.08,
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
                      whiteSpace: "break-spaces",
                    }}
                  >
                    {prop.time_room.join("\n")}
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

      {/* 대기 및 결과 팝업 */}

      {waitingOpen ? (
        <WaitingPopUp
          timeTaken={timeTaken ?? 0}
          rand={rand}
          waitingOpen={waitingOpen}
          setWaitingOpen={setWaitingOpen}
          resultType={resultType}
          setResultType={setResultType}
        />
      ) : null}

      <ResultPopUp
        resultType={resultType}
        setResultType={setResultType}
        resultOpen={resultPopupOpen}
        setResultOpen={setResultPopupOpen}
      />

      {pathname === "/courseRegisteration" ? (
        <BodyBottomRegister
          registeredCourses={registeredCourses}
          setRegisteredCourses={setRegisteredCourses}
        />
      ) : null}
      {pathname === "/preferredCourses" ? (
        <BodyBottomPreferred
          preferredCourses={preferredCourses}
          setPreferredCourses={setPreferredCourses}
        />
      ) : null}
    </div>
  );
}
