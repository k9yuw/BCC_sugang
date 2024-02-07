import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import BodyBottomPreferred from "../BodyBottomPreferred";
import courseData from "@/app/constant/courseDataInterface";

export default function Notices() {
  const pathname = usePathname();
  const [preferredCourses, setPreferredCourses] = useState<courseData[]>([]);
  const [preferredCredit, setPreferredCredit] = useState<number>(0);

  useEffect(() => {
    const preferredCoursesCached = localStorage.getItem("preferredCourses");
    const data = JSON.parse(preferredCoursesCached ?? "[]") as courseData[];
    setPreferredCourses(data);
    const preferredCreditArray = data.map((prop) => prop.credit);
    setPreferredCredit(preferredCreditArray.reduce((a, b) => a + b, 0));
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
      {pathname === "/preferredCourses" ? (
        <BodyBottomPreferred preferredCourses={preferredCourses} />
      ) : null}
    </div>
  );
}
