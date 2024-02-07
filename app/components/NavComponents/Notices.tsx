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
