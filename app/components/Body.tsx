import { Dispatch, SetStateAction, useState } from "react";
import { usePathname } from "next/navigation";
import PreferredTimeTable from "./table/preferredTimeTable/preferredTimeTable";
import RegisterBySearch from "./NavComponents/RegisterBySearch";
import RegisterByPreferredCourses from "./NavComponents/RegisterByPreferredCourses";
import RegisterByCourseCode from "./NavComponents/RegisterByCourseCode";
import Notices from "./NavComponents/Notices";
import { GameProvider } from "./context/GameContext";
import courseData from "../constant/courseDataInterface";

export default function Body({
  registeredCourses,
  setRegisteredCourses,
}: {
  registeredCourses: courseData[];
  setRegisteredCourses: Dispatch<SetStateAction<courseData[]>>;
}) {
  const pathname = usePathname();
  const [navBar, setNavRegister] = useState([true, false, false, false, false]);

  return (
    <div>
      <div //상단 바디
        style={{
          paddingTop: 25,
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
            borderColor: "#e1e1e1",
            lineHeight: 2.7,
            textAlign: "center",
            fontSize: 13,
            marginRight: 30,
            marginLeft: 30,
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
              borderRightColor: "#e1e1e1",
              color: navBar[0] ? "#fff" : "#666",
              backgroundColor: navBar[0] ? "#a20131" : "#f9f9f9",
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
              borderRightColor: "#e1e1e1",
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
                borderRightColor: "#e1e1e1",
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
                pathname === "/courseRegisteration" ? "" : "#e1e1e1",
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
        {navBar[0] ? <Notices registeredCourses={registeredCourses}
              setRegisteredCourses={setRegisteredCourses}/> : null}
        {navBar[1] ? <RegisterByCourseCode registeredCourses={registeredCourses}
              setRegisteredCourses={setRegisteredCourses}/> : null}
        {navBar[2] ? <RegisterByPreferredCourses registeredCourses={registeredCourses}
              setRegisteredCourses={setRegisteredCourses}/> : null}
        {navBar[3] ? <RegisterBySearch registeredCourses={registeredCourses}
              setRegisteredCourses={setRegisteredCourses}/> : null}
        {navBar[4] ? <PreferredTimeTable /> : null}
      </div>
    </div>
  );
}
