"use client";

import styles from "./timeTable.module.css";

// const innerColor = new Array(63).fill('white');
// const colorKind = ["#D63D2F", "#E06616", "#E0A605", "#789C0C", "#1879D3"];

export default function TimeTable(innerColor: string[]) {
  return (
    <div>
      <div //수강신청 내역 테이블
        style={{
          borderTop: "1px solid black",
          width: "200px",
          height: "240px",
        }}
      >
        <table
          style={{
            borderLeft: "1px solid #ccc",
            borderCollapse: "collapse",
            width: "100%",
            height: "100%",
            boxSizing: "content-box",
            tableLayout: "fixed",
            overflow: "scroll",
            fontSize: "12px",
            textAlign: "center",
          }}
        >
          <thead
            style={{
              height: "20px",
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
              <th className={styles.indexTop}>토</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderLeft: "1px solid #ccc" }}>
              <th
                className={styles.inner}
                style={{ backgroundColor: "rgb(249,249,249)" }}
              >
                1
              </th>
              <th
                className={styles.inner}
                style={{ backgroundColor: `${innerColor[0]}` }}
              ></th>
              <th
                className={styles.inner}
                style={{ backgroundColor: `${innerColor[1]}` }}
              ></th>
              <th
                className={styles.inner}
                style={{ backgroundColor: `${innerColor[2]}` }}
              ></th>
              <th
                className={styles.inner}
                style={{ backgroundColor: `${innerColor[3]}` }}
              ></th>
              <th
                className={styles.inner}
                style={{ backgroundColor: `${innerColor[4]}` }}
              ></th>
              <th
                className={styles.inner}
                style={{ backgroundColor: `${innerColor[5]}` }}
              ></th>
            </tr>
            <tr>
              <th
                className={styles.inner}
                style={{ backgroundColor: "rgb(249,249,249)" }}
              >
                2
              </th>
              <th
                className={styles.inner}
                style={{ backgroundColor: `${innerColor[6]}` }}
              ></th>
              <th
                className={styles.inner}
                style={{ backgroundColor: `${innerColor[7]}` }}
              ></th>
              <th
                className={styles.inner}
                style={{ backgroundColor: `${innerColor[8]}` }}
              ></th>
              <th
                className={styles.inner}
                style={{ backgroundColor: `${innerColor[9]}` }}
              ></th>
              <th
                className={styles.inner}
                style={{ backgroundColor: `${innerColor[10]}` }}
              ></th>
              <th
                className={styles.inner}
                style={{ backgroundColor: `${innerColor[11]}` }}
              ></th>
            </tr>
            <tr>
              <th
                className={styles.inner}
                style={{ backgroundColor: "rgb(249,249,249)" }}
              >
                3
              </th>
              <th
                className={styles.inner}
                style={{ backgroundColor: `${innerColor[12]}` }}
              ></th>
              <th
                className={styles.inner}
                style={{ backgroundColor: `${innerColor[13]}` }}
              ></th>
              <th
                className={styles.inner}
                style={{ backgroundColor: `${innerColor[14]}` }}
              ></th>
              <th
                className={styles.inner}
                style={{ backgroundColor: `${innerColor[15]}` }}
              ></th>
              <th
                className={styles.inner}
                style={{ backgroundColor: `${innerColor[16]}` }}
              ></th>
              <th
                className={styles.inner}
                style={{ backgroundColor: `${innerColor[17]}` }}
              ></th>
            </tr>
            <tr>
              <th
                className={styles.inner}
                style={{ backgroundColor: "rgb(249,249,249)" }}
              >
                4
              </th>
              <th
                className={styles.inner}
                style={{ backgroundColor: `${innerColor[18]}` }}
              ></th>
              <th
                className={styles.inner}
                style={{ backgroundColor: `${innerColor[19]}` }}
              ></th>
              <th
                className={styles.inner}
                style={{ backgroundColor: `${innerColor[20]}` }}
              ></th>
              <th
                className={styles.inner}
                style={{ backgroundColor: `${innerColor[21]}` }}
              ></th>
              <th
                className={styles.inner}
                style={{ backgroundColor: `${innerColor[22]}` }}
              ></th>
              <th
                className={styles.inner}
                style={{ backgroundColor: `${innerColor[23]}` }}
              ></th>
            </tr>
            <tr>
              <th
                className={styles.inner}
                style={{ backgroundColor: "rgb(249,249,249)" }}
              >
                5
              </th>
              <th
                className={styles.inner}
                style={{ backgroundColor: `${innerColor[24]}` }}
              ></th>
              <th
                className={styles.inner}
                style={{ backgroundColor: `${innerColor[25]}` }}
              ></th>
              <th
                className={styles.inner}
                style={{ backgroundColor: `${innerColor[26]}` }}
              ></th>
              <th
                className={styles.inner}
                style={{ backgroundColor: `${innerColor[27]}` }}
              ></th>
              <th
                className={styles.inner}
                style={{ backgroundColor: `${innerColor[28]}` }}
              ></th>
              <th
                className={styles.inner}
                style={{ backgroundColor: `${innerColor[29]}` }}
              ></th>
            </tr>
            <tr>
              <th
                className={styles.inner}
                style={{ backgroundColor: "rgb(249,249,249)" }}
              >
                6
              </th>
              <th
                className={styles.inner}
                style={{ backgroundColor: `${innerColor[30]}` }}
              ></th>
              <th
                className={styles.inner}
                style={{ backgroundColor: `${innerColor[31]}` }}
              ></th>
              <th
                className={styles.inner}
                style={{ backgroundColor: `${innerColor[32]}` }}
              ></th>
              <th
                className={styles.inner}
                style={{ backgroundColor: `${innerColor[33]}` }}
              ></th>
              <th
                className={styles.inner}
                style={{ backgroundColor: `${innerColor[34]}` }}
              ></th>
              <th
                className={styles.inner}
                style={{ backgroundColor: `${innerColor[35]}` }}
              ></th>
            </tr>
            <tr>
              <th
                className={styles.inner}
                style={{ backgroundColor: "rgb(249,249,249)" }}
              >
                7
              </th>
              <th
                className={styles.inner}
                style={{ backgroundColor: `${innerColor[36]}` }}
              ></th>
              <th
                className={styles.inner}
                style={{ backgroundColor: `${innerColor[37]}` }}
              ></th>
              <th
                className={styles.inner}
                style={{ backgroundColor: `${innerColor[38]}` }}
              ></th>
              <th
                className={styles.inner}
                style={{ backgroundColor: `${innerColor[39]}` }}
              ></th>
              <th
                className={styles.inner}
                style={{ backgroundColor: `${innerColor[40]}` }}
              ></th>
              <th
                className={styles.inner}
                style={{ backgroundColor: `${innerColor[41]}` }}
              ></th>
            </tr>
            <tr>
              <th
                className={styles.inner}
                style={{ backgroundColor: "rgb(249,249,249)" }}
              >
                8
              </th>
              <th
                className={styles.inner}
                style={{ backgroundColor: `${innerColor[42]}` }}
              ></th>
              <th
                className={styles.inner}
                style={{ backgroundColor: `${innerColor[43]}` }}
              ></th>
              <th
                className={styles.inner}
                style={{ backgroundColor: `${innerColor[44]}` }}
              ></th>
              <th
                className={styles.inner}
                style={{ backgroundColor: `${innerColor[45]}` }}
              ></th>
              <th
                className={styles.inner}
                style={{ backgroundColor: `${innerColor[46]}` }}
              ></th>
              <th
                className={styles.inner}
                style={{ backgroundColor: `${innerColor[47]}` }}
              ></th>
            </tr>
            <tr>
              <th
                className={styles.inner}
                style={{ backgroundColor: "rgb(249,249,249)" }}
              >
                9
              </th>
              <th
                className={styles.inner}
                style={{ backgroundColor: `${innerColor[48]}` }}
              ></th>
              <th
                className={styles.inner}
                style={{ backgroundColor: `${innerColor[49]}` }}
              ></th>
              <th
                className={styles.inner}
                style={{ backgroundColor: `${innerColor[50]}` }}
              ></th>
              <th
                className={styles.inner}
                style={{ backgroundColor: `${innerColor[51]}` }}
              ></th>
              <th
                className={styles.inner}
                style={{ backgroundColor: `${innerColor[52]}` }}
              ></th>
              <th
                className={styles.inner}
                style={{ backgroundColor: `${innerColor[53]}` }}
              ></th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
