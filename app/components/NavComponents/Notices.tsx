import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import BodyBottomPreferred from "../BodyBottomPreferred";
import courseData from "@/app/constant/courseDataInterface";
import BodyBottomRegister from "../BodyBottomRegister";

export default function Notices({
  registeredCourses,
  setRegisteredCourses,
  preferredCourses,
  setPreferredCourses,
}: {
  registeredCourses: courseData[];
  setRegisteredCourses: Dispatch<SetStateAction<courseData[]>>;
  preferredCourses: courseData[];
  setPreferredCourses: Dispatch<SetStateAction<courseData[]>>;
}) {
  const pathname = usePathname();
  const [registeredCredit, setRegisteredCredit] = useState<number>(0);

  useEffect(() => {
    const preferredCoursesCached = localStorage.getItem("preferredCourses");
    if (!preferredCoursesCached) {
      localStorage.setItem("preferredCourses", "[]");
    }
    const data = JSON.parse(preferredCoursesCached ?? "[]") as courseData[];
    setPreferredCourses(data);
    // const preferredCreditArray = data.map((prop) => prop.credit);
    // setPreferredCredit(preferredCreditArray.reduce((a, b) => a + b, 0));
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
  }, [setRegisteredCourses]);

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
          <li>
            본 사이트는{" "}
            <span style={{ color: "#a20131", fontWeight: 600 }}>{"모의"}</span>{" "}
            수강신청 연습 사이트 입니다.
          </li>
          <br />
          <li>
            <span style={{ fontWeight: 600 }}>게임 방법</span>
            <ol style={{ lineHeight: 1.5 }}>
              <br />
              <li>물을 떠다놓고 올클 기도를 올린다. </li>
              <li>
                {`최대 신청 학점의 `}
                <span style={{ color: "#a20131", fontWeight: "bold" }}>19</span>
                {` 를 누르고 본인의 최대 신청 학점에 맞게 선택한다.`}
              </li>
              <li>수강희망/관심과목 등록 탭에서 관심과목을 등록한다.</li>
              <li>준비가 되면 네이비즘 창의 게임 시작 버튼을 누른다.</li>
              <li>내 관심강의에서 신청 탭에서 수강신청을 진행한다. </li>
              <li>
                실패한 경우 좌절하지 말고 학수번호 입력하여 신청 / 개설과목
                검색하여 신청 탭에서 플랜 B를 신청한다.
              </li>
              <li>결과를 보며 다가올 수강신청에 대한 마음의 준비를 한다. </li>
              <br />
            </ol>
          </li>
          <li>
            <span>
              <span title="빵 터지는 코딩 코미디">빵코코</span>가 여러분의 올클을 기원합니다! (ง
              •̀ω•́)ง
            </span>
          </li>
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
