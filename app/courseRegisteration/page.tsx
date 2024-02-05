"use client";

import { useEffect, useState } from "react";
import Navysm from "../components/clock/navysm";
import TimeTable from "../components/table/sugangTimeTable/timeTable";
import NavBar from "../components/NavBar";
import Header from "../components/Header";
import BodyTop from "../components/BodyTop";
import { maxHeaderSize } from "http";

export default function Home() {
  const [tableMouseEnter, setTableMouseEnter] = useState(false);
  const [registerdCredit, setRegisteredCredit] = useState(0);
  const [maxCreditLimit, setMaxCreditLimit] = useState<string>("");

  useEffect(() => {
    setMaxCreditLimit(localStorage.getItem("maxCreditLimit") ?? "19");
  }, []);

  return (
    <div style={{ display: "flex", fontFamily: "Segeo UI" }}>
      <NavBar />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Header />
        <BodyTop />
        <div //하단 바디
          style={{
            paddingTop: 20,
            paddingRight: 30,
            paddingBottom: 25,
            paddingLeft: 30,
          }}
        >
          <div style={{ display: "flex", height: 30, paddingBottom: 5 }}>
            <h3 style={{ fontSize: 18, marginBottom: 0, marginTop: 0 }}>
              수강신청 내역
            </h3>
            <h6
              style={{
                fontSize: 13,
                marginBottom: 0,
                marginTop: 0,
                marginLeft: 15,
                lineHeight: 1.8,
              }}
            >
              [ 최소신청학점 :{" "}
              <span style={{ fontSize: 12, color: "#a20131" }}>1</span> 학점 |
              최대신청학점 :{" "}
              <span style={{ fontSize: 12, color: "#a20131" }}>
                {" "}
                <select
                  value={maxCreditLimit ?? "19"}
                  onChange={(e) => {
                    localStorage.setItem("maxCreditLimit", e.target.value);
                    setMaxCreditLimit(e.target.value);
                  }}
                  style={{
                    outline: "none",
                    border: "none",
                    fontSize: 13,
                    color: "#a20131",
                    fontWeight: "bold",
                    width: 18,
                    WebkitAppearance: "none",
                    MozAppearance: "none",
                    appearance: "none",
                    cursor: "pointer",
                  }}
                >
                  <option value={"19"}>19</option>
                  <option value={"22"}>22</option>
                  <option value={"25"}>25</option>
                </select>
              </span>{" "}
              학점 | 신청학점 :{" "}
              <span style={{ fontSize: 12, color: "#a20131" }}>
                {registerdCredit}
              </span>{" "}
              학점 ]
            </h6>
            <div style={{ marginLeft: "auto" }}>
              <button
                style={{
                  width: "79.1px",
                  height: 25,
                  fontSize: 12,
                  backgroundColor: "#f9f9f9",
                  color: "#666",
                  borderWidth: "thin",
                  borderTopColor: "#ccc",
                  borderRightColor: "#ccc",
                  borderBottomColor: "#ccc",
                  borderLeftColor: "#ccc",
                  borderStyle: "solid",
                  padding: "0px",
                }}
              >
                교시확인표
              </button>
              <button
                style={{
                  width: 100,
                  height: 25,
                  fontSize: 12,
                  textAlign: "left",
                  paddingLeft: 10,
                  marginLeft: 5,
                  backgroundColor: "#f9f9f9",
                  color: "#666",
                  borderWidth: "thin",
                  borderTopColor: "#ccc",
                  borderRightColor: "#ccc",
                  borderBottomColor: "#ccc",
                  borderLeftColor: "#ccc",
                  borderStyle: "solid",
                  backgroundImage: `url("https://sugang.korea.ac.kr/resources/img/contents/icon-print.png")`,
                  backgroundRepeat: "no-repeat",
                  backgroundPositionY: 4,
                  backgroundPositionX: 78,
                }}
              >
                시간표 인쇄
              </button>
            </div>
          </div>
          <div style={{ height: "100%", display: "flex" }}>
            <div //수강신청 내역 테이블
              style={{
                borderTop: 1,
                borderTopStyle: "solid",
              }}
            >
              <table
                style={{
                  borderCollapse: "collapse",
                  width: "100%",
                  boxSizing: "content-box",
                  tableLayout: "fixed",
                  overflow: "scroll",
                }}
              >
                <thead style={{ backgroundColor: "#f2eee8" }}>
                  <tr
                    style={{
                      fontSize: 12,
                      textAlign: "center",
                      height: 34,
                    }}
                  >
                    <th
                      style={{
                        borderRightStyle: "solid",
                        borderRightWidth: 1,
                        borderRightColor: "#ccc",
                        borderBottomStyle: "solid",
                        borderBottomWidth: 1,
                        borderBottomColor: "#ccc",
                        width: 71.375,
                        fontWeight: 600,
                      }}
                    >
                      학수번호
                    </th>
                    <th
                      style={{
                        borderRightStyle: "solid",
                        borderRightWidth: 1,
                        borderRightColor: "#ccc",
                        borderBottomStyle: "solid",
                        borderBottomWidth: 1,
                        borderBottomColor: "#ccc",
                        fontWeight: 600,
                        width: 55.375,
                      }}
                    >
                      분반
                    </th>
                    <th
                      style={{
                        borderRightStyle: "solid",
                        borderRightWidth: 1,
                        borderRightColor: "#ccc",
                        borderBottomStyle: "solid",
                        borderBottomWidth: 1,
                        borderBottomColor: "#ccc",
                        fontWeight: 600,
                        width: 71.375,
                      }}
                    >
                      이수구분
                    </th>
                    <th
                      style={{
                        borderRightStyle: "solid",
                        borderRightWidth: 1,
                        borderRightColor: "#ccc",
                        borderBottomStyle: "solid",
                        borderBottomWidth: 1,
                        borderBottomColor: "#ccc",
                        fontWeight: 600,
                        width: 168.375,
                      }}
                    >
                      교과목명
                    </th>
                    <th
                      style={{
                        borderRightStyle: "solid",
                        borderRightWidth: 1,
                        borderRightColor: "#ccc",
                        borderBottomStyle: "solid",
                        borderBottomWidth: 1,
                        borderBottomColor: "#ccc",
                        fontWeight: 600,
                        width: 87.375,
                      }}
                    >
                      담당교수
                    </th>
                    <th
                      style={{
                        borderRightStyle: "solid",
                        borderRightWidth: 1,
                        borderRightColor: "#ccc",
                        borderBottomStyle: "solid",
                        borderBottomWidth: 1,
                        borderBottomColor: "#ccc",
                        fontWeight: 600,
                        width: 87.375,
                      }}
                    >
                      학점
                      <br />
                      (시간)
                    </th>
                    <th
                      style={{
                        borderRightStyle: "solid",
                        borderRightWidth: 1,
                        borderRightColor: "#ccc",
                        borderBottomStyle: "solid",
                        borderBottomWidth: 1,
                        borderBottomColor: "#ccc",
                        fontWeight: 600,
                        width: 71.375,
                      }}
                    >
                      재수강
                    </th>
                    <th
                      style={{
                        borderRightStyle: "solid",
                        borderRightWidth: 1,
                        borderRightColor: "#ccc",
                        borderBottomStyle: "solid",
                        borderBottomWidth: 1,
                        borderBottomColor: "#ccc",
                        fontWeight: 600,
                        width: 55.375,
                      }}
                    >
                      상태
                    </th>
                    <th
                      style={{
                        borderRightStyle: "solid",
                        borderRightWidth: 1,
                        borderRightColor: "#ccc",
                        borderBottomStyle: "solid",
                        borderBottomWidth: 1,
                        borderBottomColor: "#ccc",
                        fontWeight: 600,
                        width: 71.375,
                      }}
                    >
                      삭제
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr></tr>
                </tbody>
              </table>
              <div
                onMouseEnter={() => {
                  setTableMouseEnter(true);
                }}
                onMouseLeave={() => {
                  setTableMouseEnter(false);
                }}
                style={{
                  fontSize: 12,
                  color: "#666",
                  textAlign: "center",
                  lineHeight: 12,
                  borderBottom: 1,
                  borderBottomColor: "#ccc",
                  borderBottomStyle: "solid",
                  height: 150,
                  backgroundColor: tableMouseEnter ? "#F2F2F2" : "#fff",
                }}
              >
                수강신청 데이터가 없습니다.
              </div>
            </div>
            <div //시간표
              style={{
                marginLeft: 10,
              }}
            >
              <div>
                <TimeTable innerColor={new Array(63).fill("white")} />
              </div>
            </div>
          </div>
          <div style={{ position: "fixed", bottom: "20px", right: "20px" }}>
            <Navysm />
          </div>
        </div>
      </div>
    </div>
  );
}
