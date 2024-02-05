import { ChangeEvent, MouseEvent, useState } from "react";
import { major } from "../data/major";
import { usePathname } from "next/navigation";
import PreferredTimeTable from "./table/preferredTimeTable/preferredTimeTable";
import RegisterBySearch from "./NavComponents/RegisterBySearch";
import Image from "next/image";
import courseData from "../constant/courseDataInterface";
import RegisterByPreferredCourses from "./NavComponents/RegisterByPreferredCourses";
import RegisterByCourseNumber from "./NavComponents/RegisterByCourseNumber";

export default function BodyTop() {
  const pathname = usePathname();
  const [navBar, setNavRegister] = useState([true, false, false, false, false]);
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
