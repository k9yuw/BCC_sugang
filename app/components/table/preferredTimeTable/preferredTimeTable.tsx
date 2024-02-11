"use client";

import { Dispatch, SetStateAction, useEffect, useState } from "react";
import BodyBottomPreferred from "../../BodyBottomPreferred";
import styles from "./preferredTimeTable.module.css";
import { usePathname } from "next/navigation";
import courseData from "@/app/constant/courseDataInterface";

export default function PreferredTimeTable({
  preferredCourses,
  setPreferredCourses,
}: {
  preferredCourses: courseData[];
  setPreferredCourses: Dispatch<SetStateAction<courseData[]>>;
}) {
  const pathname = usePathname();
  const [preferredCredit, setPreferredCredit] = useState<number>(0);
  const [tableContents, setTableContents] = useState<string[]>(
    new Array(84).fill("")
  );

  useEffect(() => {
    const preferredCoursesCached = localStorage.getItem("preferredCourses");
    const data = JSON.parse(preferredCoursesCached ?? "[]") as courseData[];
    setPreferredCourses(data);
    const preferredCreditArray = data.map((prop) => prop.credit);
    setPreferredCredit(preferredCreditArray.reduce((a, b) => a + b, 0));
    let tableData = new Array(84).fill("");
    preferredCourses.map((prop) => {
      prop.time_room.forEach((e) => {
        const dayIdx = e.search(/[월화수목금토]/);
        const startIdx = e.indexOf("(") + 1;
        const endIdx = e.indexOf(")") - 1;
        const day = e.substring(dayIdx, dayIdx + 1);
        const startTime = parseInt(e.substring(startIdx, startIdx + 1));
        const endTime = parseInt(e.substring(endIdx, endIdx + 1));
        const room =
          e.substring(endIdx + 2, endIdx + 3) === " "
            ? e.substring(endIdx + 3)
            : e.substring(endIdx + 2);
        const text =
          prop.cour_cd +
          " - " +
          prop.cour_cls +
          "\n" +
          prop.cour_nm +
          "\n" +
          room +
          "\n" +
          prop.prof_nm;
        let time;
        if (day === "월") {
          for (time = startTime; time <= endTime; time++)
            tableData[(time - 1) * 6] = text;
        } else if (day === "화") {
          for (time = startTime; time <= endTime; time++)
            tableData[(time - 1) * 6 + 1] = text;
        } else if (day === "수") {
          for (time = startTime; time <= endTime; time++)
            tableData[(time - 1) * 6 + 2] = text;
        } else if (day === "목") {
          for (time = startTime; time <= endTime; time++)
            tableData[(time - 1) * 6 + 3] = text;
        } else if (day === "금") {
          for (time = startTime; time <= endTime; time++)
            tableData[(time - 1) * 6 + 4] = text;
        } else if (day === "토") {
          for (time = startTime; time <= endTime; time++)
            tableData[(time - 1) * 6 + 5] = text;
        }
      });
    });
    setTableContents(tableData);
  }, [setPreferredCourses, preferredCourses]);

  return (
    <div>
      <div //관심과목 시간표
        style={{
          marginLeft: 30,
          marginRight: 30,
          borderTop: "1px solid black",
          marginTop: "10px",
          paddingBottom: 32.7,
        }}
      >
        <table
          style={{
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
          <tbody
            style={{
              whiteSpace: "break-spaces",
              textAlign: "left",
            }}
          >
            <tr>
              <th
                className={styles.inner}
                style={{
                  backgroundColor: "rgb(249,249,249)",
                  fontSize: 12,
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                0
              </th>
              <th className={styles.inner}>{tableContents[0]}</th>
              <th className={styles.inner}>{tableContents[1]}</th>
              <th className={styles.inner}>{tableContents[2]}</th>
              <th className={styles.inner}>{tableContents[3]}</th>
              <th className={styles.inner}>{tableContents[4]}</th>
              <th className={styles.inner} style={{ borderRight: "0" }}>
                {tableContents[5]}
              </th>
            </tr>
            <tr>
              <th
                className={styles.inner}
                style={{
                  backgroundColor: "rgb(249,249,249)",
                  fontSize: 12,
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                1
              </th>
              <th className={styles.inner}>{tableContents[6]}</th>
              <th className={styles.inner}>{tableContents[7]}</th>
              <th className={styles.inner}>{tableContents[8]}</th>
              <th className={styles.inner}>{tableContents[9]}</th>
              <th className={styles.inner}>{tableContents[10]}</th>
              <th className={styles.inner} style={{ borderRight: "0" }}>
                {tableContents[11]}
              </th>
            </tr>
            <tr>
              <th
                className={styles.inner}
                style={{
                  backgroundColor: "rgb(249,249,249)",
                  fontSize: 12,
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                2
              </th>
              <th className={styles.inner}>{tableContents[12]}</th>
              <th className={styles.inner}>{tableContents[13]}</th>
              <th className={styles.inner}>{tableContents[14]}</th>
              <th className={styles.inner}>{tableContents[15]}</th>
              <th className={styles.inner}>{tableContents[16]}</th>
              <th className={styles.inner} style={{ borderRight: "0" }}>
                {tableContents[17]}
              </th>
            </tr>
            <tr>
              <th
                className={styles.inner}
                style={{
                  backgroundColor: "rgb(249,249,249)",
                  fontSize: 12,
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                3
              </th>
              <th className={styles.inner}>{tableContents[18]}</th>
              <th className={styles.inner}>{tableContents[19]}</th>
              <th className={styles.inner}>{tableContents[20]}</th>
              <th className={styles.inner}>{tableContents[21]}</th>
              <th className={styles.inner}>{tableContents[22]}</th>
              <th className={styles.inner} style={{ borderRight: "0" }}>
                {tableContents[23]}
              </th>
            </tr>
            <tr>
              <th
                className={styles.inner}
                style={{
                  backgroundColor: "rgb(249,249,249)",
                  fontSize: 12,
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                4
              </th>
              <th className={styles.inner}>{tableContents[24]}</th>
              <th className={styles.inner}>{tableContents[25]}</th>
              <th className={styles.inner}>{tableContents[26]}</th>
              <th className={styles.inner}>{tableContents[27]}</th>
              <th className={styles.inner}>{tableContents[28]}</th>
              <th className={styles.inner} style={{ borderRight: "0" }}>
                {tableContents[29]}
              </th>
            </tr>
            <tr>
              <th
                className={styles.inner}
                style={{
                  backgroundColor: "rgb(249,249,249)",
                  fontSize: 12,
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                5
              </th>
              <th className={styles.inner}>{tableContents[30]}</th>
              <th className={styles.inner}>{tableContents[31]}</th>
              <th className={styles.inner}>{tableContents[32]}</th>
              <th className={styles.inner}>{tableContents[33]}</th>
              <th className={styles.inner}>{tableContents[34]}</th>
              <th className={styles.inner} style={{ borderRight: "0" }}>
                {tableContents[35]}
              </th>
            </tr>
            <tr>
              <th
                className={styles.inner}
                style={{
                  backgroundColor: "rgb(249,249,249)",
                  fontSize: 12,
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                6
              </th>
              <th className={styles.inner}>{tableContents[36]}</th>
              <th className={styles.inner}>{tableContents[37]}</th>
              <th className={styles.inner}>{tableContents[38]}</th>
              <th className={styles.inner}>{tableContents[39]}</th>
              <th className={styles.inner}>{tableContents[40]}</th>
              <th className={styles.inner} style={{ borderRight: "0" }}>
                {tableContents[41]}
              </th>
            </tr>
            <tr>
              <th
                className={styles.inner}
                style={{
                  backgroundColor: "rgb(249,249,249)",
                  fontSize: 12,
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                7
              </th>
              <th className={styles.inner}>{tableContents[42]}</th>
              <th className={styles.inner}>{tableContents[43]}</th>
              <th className={styles.inner}>{tableContents[44]}</th>
              <th className={styles.inner}>{tableContents[45]}</th>
              <th className={styles.inner}>{tableContents[46]}</th>
              <th className={styles.inner} style={{ borderRight: "0" }}>
                {tableContents[47]}
              </th>
            </tr>
            <tr>
              <th
                className={styles.inner}
                style={{
                  backgroundColor: "rgb(249,249,249)",
                  fontSize: 12,
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                8
              </th>
              <th className={styles.inner}>{tableContents[48]}</th>
              <th className={styles.inner}>{tableContents[49]}</th>
              <th className={styles.inner}>{tableContents[50]}</th>
              <th className={styles.inner}>{tableContents[51]}</th>
              <th className={styles.inner}>{tableContents[52]}</th>
              <th className={styles.inner} style={{ borderRight: "0" }}>
                {tableContents[53]}
              </th>
            </tr>
            <tr>
              <th
                className={styles.inner}
                style={{
                  backgroundColor: "rgb(249,249,249)",
                  fontSize: 12,
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                9
              </th>
              <th className={styles.inner}>{tableContents[54]}</th>
              <th className={styles.inner}>{tableContents[55]}</th>
              <th className={styles.inner}>{tableContents[56]}</th>
              <th className={styles.inner}>{tableContents[57]}</th>
              <th className={styles.inner}>{tableContents[58]}</th>
              <th className={styles.inner} style={{ borderRight: "0" }}>
                {tableContents[59]}
              </th>
            </tr>
            <tr>
              <th
                className={styles.inner}
                style={{
                  backgroundColor: "rgb(249,249,249)",
                  fontSize: 12,
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                10
              </th>
              <th className={styles.inner}>{tableContents[60]}</th>
              <th className={styles.inner}>{tableContents[61]}</th>
              <th className={styles.inner}>{tableContents[62]}</th>
              <th className={styles.inner}>{tableContents[63]}</th>
              <th className={styles.inner}>{tableContents[64]}</th>
              <th className={styles.inner} style={{ borderRight: "0" }}>
                {tableContents[65]}
              </th>
            </tr>
            <tr>
              <th
                className={styles.inner}
                style={{
                  backgroundColor: "rgb(249,249,249)",
                  fontSize: 12,
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                11
              </th>
              <th className={styles.inner}>{tableContents[66]}</th>
              <th className={styles.inner}>{tableContents[67]}</th>
              <th className={styles.inner}>{tableContents[68]}</th>
              <th className={styles.inner}>{tableContents[69]}</th>
              <th className={styles.inner}>{tableContents[70]}</th>
              <th className={styles.inner} style={{ borderRight: "0" }}>
                {tableContents[71]}
              </th>
            </tr>
            <tr>
              <th
                className={styles.inner}
                style={{
                  backgroundColor: "rgb(249,249,249)",
                  fontSize: 12,
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                12
              </th>
              <th className={styles.inner}>{tableContents[72]}</th>
              <th className={styles.inner}>{tableContents[73]}</th>
              <th className={styles.inner}>{tableContents[74]}</th>
              <th className={styles.inner}>{tableContents[75]}</th>
              <th className={styles.inner}>{tableContents[76]}</th>
              <th className={styles.inner} style={{ borderRight: "0" }}>
                {tableContents[77]}
              </th>
            </tr>
            <tr>
              <th
                className={styles.inner}
                style={{
                  backgroundColor: "rgb(249,249,249)",
                  fontSize: 12,
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                13
              </th>
              <th className={styles.inner}>{tableContents[78]}</th>
              <th className={styles.inner}>{tableContents[79]}</th>
              <th className={styles.inner}>{tableContents[80]}</th>
              <th className={styles.inner}>{tableContents[81]}</th>
              <th className={styles.inner}>{tableContents[82]}</th>
              <th className={styles.inner} style={{ borderRight: "0" }}>
                {tableContents[83]}
              </th>
            </tr>
          </tbody>
        </table>
      </div>
      {pathname === "/preferredCourses" ? (
        <BodyBottomPreferred
          preferredCourses={preferredCourses}
          setPreferredCourses={setPreferredCourses}
        />
      ) : null}
    </div>
  );
}
