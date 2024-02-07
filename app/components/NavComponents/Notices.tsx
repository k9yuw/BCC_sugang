import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import BodyBottomPreferred from "../BodyBottomPreferred";
import courseData from "@/app/constant/courseDataInterface";
import BodyBottomRegister from "../BodyBottomRegister";

export default function Notices() {
  const pathname = usePathname();
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

  return (
    <div>
      <div //유의사항
        style={{
          marginRight: 30,
          marginLeft: 30,
          marginBottom: 32.7,
          marginTop: 10,
          border: 1,
          borderStyle: "solid",
          borderColor: "#ccc",
        }}
      >
      <ul>
        <li>본 사이트는 <span style={{ fontSize: 30, color:'red' }}>★☆★☆모의☆★☆★</span> 수강신청 연습 사이트 입니다.
          <dl>
            수강신청인줄 알고 잘못 했다가 우리 탓 하지 마셈 .. ㄱ-
          </dl>
        </li>
        <br></br>

        <li>
          <span style={{ fontSize: 25, color:'green' }}>
          ♣ 게임 방법 ~ ㅇㅅㅇ ♣
          </span>
          <ol>
            <br></br>
            <li>물 떠다놓고 올클 기도를 올린다. </li>
            <li>최대 신청 학점의 '19'를 누르고 본인의 최대 신청 학점에 맞게 선택한다. </li>
            <li>수강희망/관심과목 등록 탭에서 관심과목을 등록한다.</li>
            <li>준비가 되면 시계 밑 게임 시작 버튼을 누른다.</li>
            <li>내 관심강의에서 신청 탭에서 수강신청을 진행한다. </li>
            <li>실패한 경우 좌절하지 말고 학수번호 입력하여 신청 / 개설과목 검색하여 신청 탭에서 플랜 B를 신청한다.</li>
            <li>결과를 보며 다가올 수강신청에 대한 마음의 준비를 한다. </li> 
            <br></br>
            <br></br>
          </ol>
        </li>

        <li><span style={{ fontSize: 20 }}>다들 올클하세염. (ง •̀ω•́)ง</span></li>

      </ul>

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
