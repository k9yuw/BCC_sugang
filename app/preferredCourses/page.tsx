"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { ChangeEvent, MouseEvent, useState } from "react";
import Navysm from "../components/clock/navysm";
import PreferredTimeTable from "../components/table/preferredTimeTable/preferredTimeTable";
import NavBar from "../components/NavBar";
import Header from "../components/Header";
import BodyTop from "../components/BodyTop";

export default function Home() {
  const [tableMouseEnter, setTableMouseEnter] = useState(false);
  const [registerdCredit, setRegisteredCredit] = useState(0);

  return (
    <div style={{ display: "flex" }}>
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
              희망과목 내역
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
              <span style={{ fontSize: 12, color: "#a20131" }}>22</span> 학점 |
              신청학점 :{" "}
              <span style={{ fontSize: 12, color: "#a20131" }}>
                {registerdCredit}
              </span>{" "}
              학점 ]
            </h6>
            <div style={{ marginLeft: "auto" }}>
              <button
                style={{
                  width: 70,
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
                }}
              >
                교시확인표
              </button>
              <button
                style={{
                  width: 96,
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
                  backgroundPositionY: 2,
                  backgroundPositionX: 70,
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
                width: "100%",
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
                        width: 77,
                        fontWeight: 600,
                      }}
                    >
                      정렬순서
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
                        width: 80,
                      }}
                    >
                      삭제
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
                        width: 92,
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
                        width: 62,
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
                        width: 92,
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
                        width: 168,
                      }}
                    >
                      교과목명(강의계획서)
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
                        width: 92.2,
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
                        width: 92.2,
                      }}
                    >
                      학점
                      <br />
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
                        width: 138,
                      }}
                    >
                      강의시간/강의실
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
                        width: 76,
                      }}
                    >
                      재수강
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
                희망과목 데이터가 없습니다.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
