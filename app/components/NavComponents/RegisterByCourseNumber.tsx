import { useEffect, useState } from "react";
import { MouseEvent } from "react";
import { usePathname } from "next/navigation";
import BodyBottomPreferred from "../BodyBottomPreferred";
import courseData from "@/app/constant/courseDataInterface";

export default function RegisterByCourseNumber() {
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

  const onRegisterClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
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
      {pathname === "/preferredCourses" ? (
        <BodyBottomPreferred preferredCourses={preferredCourses} />
      ) : null}
    </div>
  );
}
