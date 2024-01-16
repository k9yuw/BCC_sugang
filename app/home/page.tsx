"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [language, setLanguage] = useState("kor");

  return (
    <div style={{ display: "flex", alignItems: "stretch" }}>
      <div
        style={{
          display: "inline-flex",
          flexDirection: "column",
          width: 250,
          minWidth: 250,
          minHeight: "100vh",
          borderRight: 1,
          borderRightColor: "#ccc",
          borderRightStyle: "solid",
          backgroundColor: "#e0e0e0",
          WebkitUserSelect: "none",
          MozUserSelect: "none",
          userSelect: "none",
        }}
      >
        <div
          style={{
            paddingTop: 20,
            paddingRight: 20,
            paddingBottom: 5,
            paddingLeft: 20,
            backgroundColor: "#e0e0e0",
          }}
        >
          <span
            style={{
              float: "left",
              width: "50%",
              height: 40,
              backgroundColor: language === "kor" ? "#a20131" : "#b3b3b3",
              fontSize: 13,
              fontWeight: "lighter",
              color: "#fff",
              lineHeight: 3,
              textAlign: "center",
              cursor: language === "kor" ? "default" : "pointer",
            }}
            onClick={() => setLanguage("kor")}
          >
            KOREAN
          </span>
          <span
            style={{
              float: "left",
              width: "50%",
              height: 40,
              backgroundColor: language === "eng" ? "#a20131" : "#b3b3b3",
              fontSize: 13,
              fontWeight: "lighter",
              color: "#fff",
              lineHeight: 3,
              textAlign: "center",
              cursor: language === "eng" ? "default" : "pointer",
            }}
            onClick={() => setLanguage("eng")}
          >
            ENGLISH
          </span>
        </div>
        <div
          style={{
            flexGrow: 1,
            flexShrink: 1,
            flexBasis: "auto",
            paddingRight: 20,
            paddingLeft: 20,
            paddingBottom: 20,
          }}
        >
          <ul
            style={{
              paddingLeft: 0,
              marginTop: 0,
              marginBottom: 0,
            }}
          >
            <li
              style={{
                position: "relative",
                paddingTop: 15,
                paddingBottom: 15,
                borderBottom: 1,
                borderBottomStyle: "solid",
                borderBottomColor: "#ccc",
                listStyle: "none",
              }}
            >
              <span
                style={{
                  fontFamily: "Malgun Gothic",
                  fontSize: 15,
                  cursor: "pointer",
                }}
              >
                수강신청
              </span>
            </li>
            <li
              style={{
                position: "relative",
                paddingTop: 15,
                paddingBottom: 15,
                borderBottom: 1,
                borderBottomStyle: "solid",
                borderBottomColor: "#ccc",
                listStyle: "none",
              }}
            >
              <span
                style={{
                  fontFamily: "Malgun Gothic",
                  fontSize: 15,
                  cursor: "pointer",
                }}
              >
                수강희망/관심과목 등록
              </span>
            </li>
            <li
              style={{
                position: "relative",
                paddingTop: 15,
                paddingBottom: 15,
                borderBottom: 1,
                borderBottomStyle: "solid",
                borderBottomColor: "#ccc",
                listStyle: "none",
              }}
            >
              <span
                style={{
                  fontFamily: "Malgun Gothic",
                  fontSize: 15,
                  cursor: "pointer",
                }}
              >
                과목조회
                <ul style={{ paddingTop: 5, paddingLeft: 0 }}>
                  <li
                    style={{
                      listStyle: "none",
                      paddingTop: 2,
                      paddingBottom: 2,
                      paddingLeft: 15,
                    }}
                  >
                    <span style={{ fontSize: 13, color: "#666" }}>
                      학부 과목조회
                    </span>
                  </li>
                  <li
                    style={{
                      listStyle: "none",
                      paddingTop: 2,
                      paddingBottom: 2,
                      paddingLeft: 15,
                    }}
                  >
                    <span style={{ fontSize: 13, color: "#666" }}>
                      학부 유사과목
                    </span>
                  </li>
                </ul>
              </span>
            </li>
            <li
              style={{
                position: "relative",
                paddingTop: 15,
                paddingBottom: 15,
                borderBottom: 1,
                borderBottomStyle: "solid",
                borderBottomColor: "#ccc",
                listStyle: "none",
              }}
            >
              <span
                style={{
                  fontFamily: "Malgun Gothic",
                  fontSize: 15,
                }}
              >
                <p
                  style={{
                    cursor: "pointer",
                    marginTop: 0,
                    marginBottom: 0,
                    width: "fit-content",
                  }}
                >
                  안내사항
                </p>
                <ul style={{ paddingTop: 5, paddingLeft: 0 }}>
                  <li
                    style={{
                      listStyle: "none",
                      paddingTop: 2,
                      paddingBottom: 2,
                      paddingLeft: 15,
                    }}
                  >
                    <span
                      style={{ fontSize: 13, cursor: "pointer", color: "#666" }}
                    >
                      수강신청 안내
                    </span>
                  </li>
                  <li
                    style={{
                      listStyle: "none",
                      paddingTop: 2,
                      paddingBottom: 2,
                      paddingLeft: 15,
                    }}
                  >
                    <span
                      style={{ fontSize: 13, cursor: "pointer", color: "#666" }}
                    >
                      강의실 안내
                    </span>
                  </li>
                  <li
                    style={{
                      listStyle: "none",
                      paddingTop: 2,
                      paddingBottom: 2,
                      paddingLeft: 15,
                    }}
                  >
                    <span
                      style={{ fontSize: 13, cursor: "pointer", color: "#666" }}
                    >
                      계절수업료납부 안내
                    </span>
                  </li>
                  <li
                    style={{
                      listStyle: "none",
                      paddingTop: 2,
                      paddingBottom: 2,
                      paddingLeft: 15,
                    }}
                  >
                    <span
                      style={{ fontSize: 13, cursor: "pointer", color: "#666" }}
                    >
                      신입생 학번 안내
                    </span>
                  </li>
                </ul>
              </span>
            </li>
            <li
              style={{
                position: "relative",
                paddingTop: 15,
                paddingBottom: 15,
                borderBottom: 1,
                borderBottomStyle: "solid",
                borderBottomColor: "#ccc",
                listStyle: "none",
              }}
            >
              <span
                style={{
                  fontFamily: "Malgun Gothic",
                  fontSize: 15,
                  cursor: "pointer",
                }}
              >
                포털미사용자 비밀번호 변경
              </span>
            </li>
          </ul>
        </div>
        <div style={{ height: 210, padding: 20, backgroundColor: "#262626" }}>
          <div>
            <button
              style={{
                width: "100%",
                height: 40,
                marginBottom: 10,
                paddingTop: 0,
                paddingBottom: 0,
                paddingLeft: 15,
                paddingRight: 15,
                backgroundColor: "#666",
                border: 0,
                color: "#fff",
                textAlign: "left",
                fontSize: 12,
                fontWeight: "lighter",
                fontFamily: "Apple SD Gothic Neo",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span>사용자매뉴얼 (PC)</span>
              <Image
                src={
                  "https://sugang.korea.ac.kr/resources/img/layout/icon-download.png"
                }
                alt="download"
                width={16}
                height={16}
              />
            </button>
            <button
              style={{
                width: "100%",
                height: 40,
                marginBottom: 10,
                paddingTop: 0,
                paddingBottom: 0,
                paddingLeft: 15,
                paddingRight: 15,
                backgroundColor: "#666",
                border: 0,
                color: "#fff",
                textAlign: "left",
                fontSize: 12,
                fontWeight: "lighter",
                fontFamily: "Apple SD Gothic Neo",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span>사용자매뉴얼 (모바일앱)</span>
              <Image
                src={
                  "https://sugang.korea.ac.kr/resources/img/layout/icon-download.png"
                }
                alt="download"
                width={16}
                height={16}
              />
            </button>
            <button
              style={{
                width: "100%",
                height: 40,
                marginBottom: 10,
                paddingTop: 0,
                paddingBottom: 0,
                paddingLeft: 15,
                paddingRight: 15,
                backgroundColor: "#a20131",
                border: 0,
                color: "#fff",
                textAlign: "left",
                fontSize: 12,
                fontWeight: "lighter",
                fontFamily: "Apple SD Gothic Neo",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <span style={{}}>관련사이트</span>
              <p style={{ fontSize: 23, fontWeight: 450 }}>+ </p>
            </button>
            <div
              style={{
                fontSize: 10,
                color: "#999",
                textAlign: "center",
                lineHeight: 1.5,
              }}
            >
              Copyright © 2020 Korea University.
              <br />
              All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          flexGrow: 1,
          flexShrink: 0,
          flexBasis: 0,
          maxWidth: "100%",
          minWidth: 1030,
          minHeight: "100vh",
        }}
      >
        <div
          style={{
            height: 60,
            paddingLeft: 30,
            paddingRight: 30,
            borderBottom: 1,
            borderBottomStyle: "solid",
            borderBottomColor: "#ccc",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Image
            src={"https://sugang.korea.ac.kr/resources/img/layout/logo.png"}
            alt="고려대학교"
            width={120}
            height={37}
          />
          <span
            style={{
              marginLeft: 12,
              paddingLeft: 10,
              borderLeft: 1,
              borderLeftStyle: "solid",
              borderLeftColor: "#ccc",
              fontSize: 20,
              fontWeight: 450,
              letterSpacing: -1,
            }}
          >
            수강신청 연습 시스템
          </span>
        </div>
        <div
          style={{
            paddingTop: 25,
            paddingBottom: 25,
            paddingLeft: 30,
            paddingRight: 30,
          }}
        >
          <div
            style={{
              marginBottom: 15,
              padding: 12,
              border: 1,
              borderStyle: "solid",
              borderColor: "#e6e6e6",
            }}
          >
            <form>
              <table
                style={{
                  width: "100%",
                  tableLayout: "fixed",
                  borderSpacing: 0,
                }}
              >
                <colgroup>
                  <col style={{ width: 60 }}></col>
                  <col style={{ width: 80 }}></col>
                  <col style={{ width: 80 }}></col>
                  <col style={{ width: 80 }}></col>
                  <col style={{ width: 80 }}></col>
                  <col style={{ width: 220 }}></col>
                  <col style={{ width: 80 }}></col>
                  <col style={{ width: 120 }}></col>
                  <col></col>
                </colgroup>
                <tbody>
                  <tr
                    style={{
                      paddingTop: 3,
                      paddingRight: 0,
                      paddingBottom: 3,
                      paddingLeft: 6,
                    }}
                  >
                    <span
                      style={{
                        alignItems: "center",
                        display: "flex",
                        alignContent: "left",
                      }}
                    >
                      <input
                        type="text"
                        value="2023"
                        maxLength={4}
                        style={{
                          width: 64.5,
                          height: 25,
                          paddingTop: 0,
                          paddingRight: 5,
                          paddingBottom: 2,
                          paddingLeft: 5,
                          marginLeft: 5,
                          fontSize: 12,
                          color: "#666",
                        }}
                      />
                      <select
                        style={{
                          width: 64.5,
                          height: 25,
                          paddingTop: 0,
                          paddingRight: 5,
                          paddingBottom: 2,
                          paddingLeft: 5,
                          marginLeft: 5,
                          fontSize: 12,
                          color: "#666",
                          //   backgroundImage: `url("https://sugang.korea.ac.kr/resources/img/contents/bg-select.png)`,
                          //   backgroundPosition: "right",
                          //   appearance: "none",
                        }}
                      >
                        <option>1학기</option>
                      </select>
                    </span>
                  </tr>
                </tbody>
              </table>
            </form>
          </div>
          <div
            style={{
              position: "relative",
              paddingTop: 5,
              paddingRight: 25,
              paddingBottom: 5,
              paddingLeft: 25,
              border: 1,
              borderStyle: "solid",
              borderColor: "#dedede",
              boxSizing: "border-box",
            }}
          >
            <div style={{ display: "block" }}>
              <ul style={{ margin: 0, marker: "#f23d18" }}>
                <li
                  style={{
                    position: "relative",
                    paddingTop: 3,
                    paddingRight: 0,
                    paddingBottom: 3,
                    paddingLeft: 10,
                    fontSize: 13,
                  }}
                >
                  <span style={{ color: "#f23d18" }}>
                    학수번호, 교과목명, 대학원{" "}
                  </span>
                  검색시
                  <span style={{ color: "#0085ca" }}>
                    {" "}
                    이수구분 조건은 무시
                  </span>
                  됩니다.
                </li>
                <li
                  style={{
                    position: "relative",
                    paddingTop: 3,
                    paddingRight: 0,
                    paddingBottom: 3,
                    paddingLeft: 10,
                    fontSize: 13,
                  }}
                >
                  <span style={{ color: "#f23d18" }}>M</span>: MOOC
                  <span style={{ color: "#f23d18" }}>FC</span>: Flipped Class
                  <span style={{ color: "#f23d18" }}>T</span>: Tutorial
                  <span style={{ color: "#f23d18" }}>NM</span>: Signature
                  Class(영강100선)
                  <span style={{ color: "#f23d18" }}>SC</span>: DROP
                  LIMIT(수강포기제한)
                  <span style={{ color: "#f23d18" }}>DL</span>
                  <span style={{ color: "#0085ca" }}>
                    ☜ 과목명에 뒤에 아이콘으로 표기됩니다.
                  </span>
                </li>
                <li
                  style={{
                    position: "relative",
                    paddingTop: 3,
                    paddingRight: 0,
                    paddingBottom: 3,
                    paddingLeft: 10,
                    fontSize: 13,
                  }}
                >
                  학수번호 클릭시 강의계획안 조회가 가능합니다.
                </li>
                <li
                  style={{
                    position: "relative",
                    paddingTop: 3,
                    paddingRight: 0,
                    paddingBottom: 3,
                    paddingLeft: 10,
                    fontSize: 13,
                  }}
                >
                  {
                    "강의계획안 학생의견 작성 안내 : 포털 로그인->수업->수강안내->학부 전공과목/교양교직과목 내에서 해당 과목 학수번호 클릭 후 강의계획서 조회하여 조회되는 강의계획서 하단에 의견 작성 가능"
                  }
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
