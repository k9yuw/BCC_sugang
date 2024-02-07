import { useEffect, useState } from "react";
import { MouseEvent } from "react";
import { usePathname } from "next/navigation";
import BodyBottomPreferred from "../BodyBottomPreferred";
import courseData from "@/app/constant/courseDataInterface";
import { all } from "@/app/data/all";
import BodyBottomRegister from "../BodyBottomRegister";

export default function RegisterByCourseCode() {
  const pathname = usePathname();
  const [courseCode, setCourseCode] = useState<string>("");
  const [section, setSection] = useState<string>("");
  const [preferredCourses, setPreferredCourses] = useState<courseData[]>([]);
  const [preferredCredit, setPreferredCredit] = useState<number>(0);
  const [registeredCourses, setRegisteredCourses] = useState<courseData[]>([]);
  const [registeredCredit, setRegisteredCredit] = useState<number>(0);

  useEffect(() => {
    const preferredCoursesCached = localStorage.getItem("preferredCourses");
    if (!preferredCoursesCached) {
      localStorage.setItem("preferredCourses", "[]");
    }
    const data = JSON.parse(preferredCoursesCached ?? "[]") as courseData[];
    setPreferredCourses(data);
    const preferredCreditArray = data.map((prop) => prop.credit);
    setPreferredCredit(preferredCreditArray.reduce((a, b) => a + b, 0));
  }, []);

  useEffect(() => {
    const registeredCoursesCached = localStorage.getItem("registeredCourses");
    if (!registeredCoursesCached) {
      localStorage.setItem("registeredCourses", "[]");
    }
    const data = JSON.parse(registeredCoursesCached ?? "[]") as courseData[];
    setRegisteredCourses(data);
    const registeredCreditArray = data.map((prop) => prop.credit);
    setRegisteredCredit(registeredCreditArray.reduce((a, b) => a + b, 0));
  }, []);

  const onRegisterClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (courseCode.length !== 7) {
      alert("학수번호를 올바르게 입력해주세요.");
      return;
    }
    if (section.length !== 2) {
      alert("분반을 올바르게 입력해주세요.");
      return;
    }
    const params = courseCode + "@" + section;
    const data = all.filter((prop) => prop.cour_cd === courseCode);
    if (!data) {
      alert("해당하는 과목이 없습니다. 다시 한 번 입력해주세요.");
      return;
    }
    const searchedData = data.find((prop) => prop.params === params);
    if (!searchedData) {
      alert("해당하는 과목이 없습니다. 다시 한 번 입력해주세요.");
      return;
    }
    const courseId = searchedData.rowid + searchedData.params;
    const courseIdArray = preferredCourses.map(
      (prop) => prop.rowid + prop.params
    );
    if (courseIdArray.includes(courseId)) {
      //중복 신청 filtering
      alert("이미 신청한 과목입니다.");
    } else {
      let maxCreditLimit = localStorage.getItem("maxCreditLimit");
      if (maxCreditLimit === null) {
        maxCreditLimit = "19";
        localStorage.setItem("maxCreditLimit", "19");
      }
      if (pathname === "/courseRegisteration") {
        //수강신청
        if (registeredCredit + searchedData.credit > parseInt(maxCreditLimit)) {
          alert("신청가능한 학점을 초과했습니다");
        } else {
          const data = [...registeredCourses, searchedData];
          setRegisteredCourses(data);
          setRegisteredCredit((prep) => prep + searchedData.credit);
          localStorage.setItem("registeredCourses", JSON.stringify(data));
          //여기에 게임 넣으면 됨!
          alert("신청 되었습니다.");
        }
      } else if (pathname === "/preferredCourses") {
        //관심과목 등록
        if (preferredCredit + searchedData.credit > parseInt(maxCreditLimit)) {
          alert("신청가능한 학점을 초과했습니다");
        } else {
          const data = [...preferredCourses, searchedData];
          setPreferredCourses(data);
          setPreferredCredit((prep) => prep + searchedData.credit);
          localStorage.setItem("preferredCourses", JSON.stringify(data));
          alert("관심과목 등록 되었습니다.");
        }
      }
    }
  };

  return (
    <div>
      <div //학수번호 입력하여 신청
        style={{
          marginRight: 30,
          marginLeft: 30,
          marginBottom: 32.7,
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
              type="text"
              maxLength={7}
              onInput={(e: any) => {
                e.target.value = e.target.value.replace(/[^a-zA-Z0-9]/g, "");
                const x = e.target.value;
                e.target.value = x.toUpperCase();
              }}
              value={courseCode}
              onChange={(e) => {
                setCourseCode(e.target.value);
              }}
              style={{
                margin: 5,
                height: 25,
                width: 150,
                border: 1,
                borderStyle: "solid",
                borderColor: "#ccc",
                paddingLeft: 5,
                fontSize: 12,
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
              type="text"
              maxLength={2}
              onInput={(e: any) => {
                e.target.value = e.target.value.replace(/[^a-zA-Z0-9]/g, "");
                const x = e.target.value;
                e.target.value = x.toUpperCase();
              }}
              value={section}
              onChange={(e) => {
                setSection(e.target.value);
              }}
              style={{
                margin: 5,
                height: 25,
                width: 150,
                border: 1,
                borderStyle: "solid",
                borderColor: "#ccc",
                paddingLeft: 5,
                fontSize: 12,
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
              marginTop: "14.5px",
              marginRight: 3,
              cursor: "pointer",
              paddingTop: "0px",
            }}
          >
            신청
          </button>
          <button
            onClick={() => {
              setCourseCode("");
              setSection("");
            }}
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
              cursor: "pointer",
              paddingTop: "0px",
            }}
          >
            초기화
          </button>
        </div>
      </div>
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
