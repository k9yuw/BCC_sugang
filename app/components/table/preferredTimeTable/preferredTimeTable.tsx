"use client";

import { useEffect, useState } from "react";
import BodyBottomPreferred from "../../BodyBottomPreferred";
import styles from "./preferredTimeTable.module.css";
import { usePathname } from "next/navigation";
import courseData from "@/app/constant/courseDataInterface";

// const innerColor = new Array(63).fill('white');
// const colorKind = ["#D63D2F", "#E06616", "#E0A605", "#789C0C", "#1879D3"];

export default function PreferredTimeTable() {
  const pathname = usePathname();
  const [preferredCourses, setPreferredCourses] = useState<courseData[]>([]);
  const [preferredCredit, setPreferredCredit] = useState<number>(0);

  useEffect(() => {
    const preferredCoursesCached = localStorage.getItem("preferredCourses");
    const data = JSON.parse(preferredCoursesCached ?? "[]") as courseData[];
    setPreferredCourses(data);
    const preferredCreditArray = data.map((prop) => prop.credit);
    setPreferredCredit(preferredCreditArray.reduce((a, b) => a + b, 0));
    console.log("useEffect");
  }, []);

  return (
    <div>
      <div //수강신청 내역 테이블
        style={{
          marginLeft: 30,
          marginRight: 30,
          borderTop: "1px solid black",
          marginTop: "10px",
          height: "468px",
          paddingBottom: 32.7,
        }}
      >
        <table
          style={{
            // borderLeft: "1px solid #ccc",
            borderCollapse: "collapse",
            width: "100%",
            height: "100%",
            boxSizing: "content-box",
            tableLayout: "fixed",
            fontSize: "12px",
            textAlign: "center",
          }}
        >
          <thead
            style={{
              height: "30px",
              backgroundColor: "#f2eee8",
            }}
          >
            <tr>
              <th className={styles.indexTop}>교시</th>
              <th className={styles.indexTop}>월</th>
              <th className={styles.indexTop}>화</th>
              <th className={styles.indexTop}>수</th>
              <th className={styles.indexTop}>목</th>
              <th className={styles.indexTop}>금</th>
              <th className={styles.indexTop} style={{ borderRight: "0" }}>
                토
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th
                className={styles.inner}
                style={{ backgroundColor: "rgb(249,249,249)" }}
              >
                1
              </th>
              <th className={styles.inner}></th>
              <th className={styles.inner}></th>
              <th className={styles.inner}></th>
              <th className={styles.inner}></th>
              <th className={styles.inner}></th>
              <th className={styles.inner} style={{ borderRight: "0" }}></th>
            </tr>
            <tr>
              <th
                className={styles.inner}
                style={{ backgroundColor: "rgb(249,249,249)" }}
              >
                2
              </th>
              <th className={styles.inner}></th>
              <th className={styles.inner}></th>
              <th className={styles.inner}></th>
              <th className={styles.inner}></th>
              <th className={styles.inner}></th>
              <th className={styles.inner} style={{ borderRight: "0" }}></th>
            </tr>
            <tr>
              <th
                className={styles.inner}
                style={{ backgroundColor: "rgb(249,249,249)" }}
              >
                3
              </th>
              <th className={styles.inner}></th>
              <th className={styles.inner}></th>
              <th className={styles.inner}></th>
              <th className={styles.inner}></th>
              <th className={styles.inner}></th>
              <th className={styles.inner} style={{ borderRight: "0" }}></th>
            </tr>
            <tr>
              <th
                className={styles.inner}
                style={{ backgroundColor: "rgb(249,249,249)" }}
              >
                4
              </th>
              <th className={styles.inner}></th>
              <th className={styles.inner}></th>
              <th className={styles.inner}></th>
              <th className={styles.inner}></th>
              <th className={styles.inner}></th>
              <th className={styles.inner} style={{ borderRight: "0" }}></th>
            </tr>
            <tr>
              <th
                className={styles.inner}
                style={{ backgroundColor: "rgb(249,249,249)" }}
              >
                5
              </th>
              <th className={styles.inner}></th>
              <th className={styles.inner}></th>
              <th className={styles.inner}></th>
              <th className={styles.inner}></th>
              <th className={styles.inner}></th>
              <th className={styles.inner} style={{ borderRight: "0" }}></th>
            </tr>
            <tr>
              <th
                className={styles.inner}
                style={{ backgroundColor: "rgb(249,249,249)" }}
              >
                6
              </th>
              <th className={styles.inner}></th>
              <th className={styles.inner}></th>
              <th className={styles.inner}></th>
              <th className={styles.inner}></th>
              <th className={styles.inner}></th>
              <th className={styles.inner} style={{ borderRight: "0" }}></th>
            </tr>
            <tr>
              <th
                className={styles.inner}
                style={{ backgroundColor: "rgb(249,249,249)" }}
              >
                7
              </th>
              <th className={styles.inner}></th>
              <th className={styles.inner}></th>
              <th className={styles.inner}></th>
              <th className={styles.inner}></th>
              <th className={styles.inner}></th>
              <th className={styles.inner} style={{ borderRight: "0" }}></th>
            </tr>
            <tr>
              <th
                className={styles.inner}
                style={{ backgroundColor: "rgb(249,249,249)" }}
              >
                8
              </th>
              <th className={styles.inner}></th>
              <th className={styles.inner}></th>
              <th className={styles.inner}></th>
              <th className={styles.inner}></th>
              <th className={styles.inner}></th>
              <th className={styles.inner} style={{ borderRight: "0" }}></th>
            </tr>
            <tr>
              <th
                className={styles.inner}
                style={{ backgroundColor: "rgb(249,249,249)" }}
              >
                9
              </th>
              <th className={styles.inner}></th>
              <th className={styles.inner}></th>
              <th className={styles.inner}></th>
              <th className={styles.inner}></th>
              <th className={styles.inner}></th>
              <th className={styles.inner} style={{ borderRight: "0" }}></th>
            </tr>
            <tr>
              <th
                className={styles.inner}
                style={{ backgroundColor: "rgb(249,249,249)" }}
              >
                10
              </th>
              <th className={styles.inner}></th>
              <th className={styles.inner}></th>
              <th className={styles.inner}></th>
              <th className={styles.inner}></th>
              <th className={styles.inner}></th>
              <th className={styles.inner} style={{ borderRight: "0" }}></th>
            </tr>
            <tr>
              <th
                className={styles.inner}
                style={{ backgroundColor: "rgb(249,249,249)" }}
              >
                11
              </th>
              <th className={styles.inner}></th>
              <th className={styles.inner}></th>
              <th className={styles.inner}></th>
              <th className={styles.inner}></th>
              <th className={styles.inner}></th>
              <th className={styles.inner} style={{ borderRight: "0" }}></th>
            </tr>
            <tr>
              <th
                className={styles.inner}
                style={{ backgroundColor: "rgb(249,249,249)" }}
              >
                12
              </th>
              <th className={styles.inner}></th>
              <th className={styles.inner}></th>
              <th className={styles.inner}></th>
              <th className={styles.inner}></th>
              <th className={styles.inner}></th>
              <th className={styles.inner} style={{ borderRight: "0" }}></th>
            </tr>
            <tr>
              <th
                className={styles.inner}
                style={{ backgroundColor: "rgb(249,249,249)" }}
              >
                13
              </th>
              <th className={styles.inner}></th>
              <th className={styles.inner}></th>
              <th className={styles.inner}></th>
              <th className={styles.inner}></th>
              <th className={styles.inner}></th>
              <th className={styles.inner} style={{ borderRight: "0" }}></th>
            </tr>
          </tbody>
        </table>
      </div>
      {pathname === "/preferredCourses" ? (
        <BodyBottomPreferred preferredCourses={preferredCourses} />
      ) : null}
    </div>
  );
}
