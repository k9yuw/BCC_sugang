import courseData from "@/app/constant/courseDataInterface";
import Image from "next/image";
import { MouseEvent, useState, useEffect } from "react";
import { useGame } from "../context/GameContext"

export default function RegisterByPreferredCourses() {
  const [searchedData, setSearchedData] = useState<courseData[]>([]);
  const [searched, setSearched] = useState(false);
  const [tableMouseEnter, setTableMouseEnter] = useState(false);
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

  const onRegisterClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  return (
    <div
      style={{
        marginTop: 10,
        borderTop: 0.7,
        borderTopStyle: "solid",
        marginRight: 30,
        marginLeft: 30,
        marginBottom: 32.7,
      }}
    >
      <table
        style={{
          borderCollapse: "collapse",
          width: "100%",
          boxSizing: "content-box",
          tableLayout: "fixed",
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
                fontWeight: 600,
                width: 65.13,
              }}
            >
              수강신청
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
                width: 65.13,
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
                width: 39.08,
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
                width: 77.16,
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
                width: 141.29,
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
                width: 77.16,
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
                width: 77.16,
              }}
            >
              학점 <br /> (시간)
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
                width: 115.23,
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
                width: 65.13,
              }}
            >
              재수강
            </th>
            <th
              style={{
                borderBottomStyle: "solid",
                borderBottomWidth: 1,
                borderBottomColor: "#ccc",
                width: 65.13,
              }}
            >
              마감현황
            </th>
          </tr>
        </thead>
      </table>
      <div
        style={{
          maxHeight: 489,
          overflow: "auto",
          borderBottom: 1,
          borderBottomStyle: "solid",
          borderBottomColor: "#ccc",
        }}
      >
        <table
          style={{
            borderCollapse: "collapse",
            width: "100%",
            boxSizing: "content-box",
            tableLayout: "fixed",
          }}
        >
          <thead style={{}}>
            {preferredCourses.map((prop: courseData, index) => (
              <tr
                style={{
                  fontSize: 12,
                  textAlign: "center",
                  height: 34,
                  borderBottomStyle: "solid",
                  borderBottomWidth: 1,
                  borderBottomColor: "#ddd",
                  color: "#333",
                  backgroundColor: index % 2 == 0 ? "#fff" : "#f9f9f9",
                }}
                key={prop.params + index}
              >
                <th
                  style={{
                    borderRightStyle: "solid",
                    borderRightWidth: 1,
                    borderRightColor: "#ddd",
                    borderBottomStyle: "solid",
                    borderBottomWidth: 1,
                    borderBottomColor: "#ddd",
                    width: 65.13,
                    paddingTop: 4,
                    paddingRight: 6,
                    paddingBottom: 4,
                    paddingLeft: 6,
                    fontFamily: "Segoe UI",
                    fontWeight: 400,
                  }}
                >
                  <button
                    onClick={onRegisterClick}
                    style={{
                      height: 23,
                      width: 45,
                      fontSize: 12,
                      backgroundColor: "#a20131",
                      border: 0,
                      color: "#fff",
                      cursor: "pointer",
                      paddingTop: "0px",
                    }}
                  >
                    신청
                  </button>
                </th>
                <th
                  style={{
                    borderRightStyle: "solid",
                    borderRightWidth: 1,
                    borderRightColor: "#ddd",
                    borderBottomStyle: "solid",
                    borderBottomWidth: 1,
                    borderBottomColor: "#ddd",
                    width: 65.13,
                    paddingTop: 4,
                    paddingRight: 6,
                    paddingBottom: 4,
                    paddingLeft: 6,
                    fontFamily: "Segoe UI",
                    fontWeight: 400,
                  }}
                >
                  {prop.cour_cd}
                </th>
                <th
                  style={{
                    borderRightStyle: "solid",
                    borderRightWidth: 1,
                    borderRightColor: "#ddd",
                    borderBottomStyle: "solid",
                    borderBottomWidth: 1,
                    borderBottomColor: "#ddd",
                    width: 39.08,
                    paddingTop: 4,
                    paddingRight: 6,
                    paddingBottom: 4,
                    paddingLeft: 6,
                    fontFamily: "Segoe UI",
                    fontWeight: 400,
                  }}
                >
                  {prop.cour_cls}
                </th>
                <th
                  style={{
                    borderRightStyle: "solid",
                    borderRightWidth: 1,
                    borderRightColor: "#ddd",
                    borderBottomStyle: "solid",
                    borderBottomWidth: 1,
                    borderBottomColor: "#ddd",
                    width: 77.16,
                    paddingTop: 4,
                    paddingRight: 6,
                    paddingBottom: 4,
                    paddingLeft: 6,
                    fontFamily: "Segoe UI",
                    fontWeight: 400,
                  }}
                >
                  {prop.isu_nm}
                </th>
                <th
                  style={{
                    borderRightStyle: "solid",
                    borderRightWidth: 1,
                    borderRightColor: "#ddd",
                    borderBottomStyle: "solid",
                    borderBottomWidth: 1,
                    borderBottomColor: "#ddd",
                    width: 141.29,
                    textAlign: "left",
                    paddingTop: 4,
                    paddingRight: 6,
                    paddingBottom: 4,
                    paddingLeft: 6,
                    fontFamily: "Segoe UI",
                    fontWeight: 400,
                  }}
                >
                  {prop.cour_nm}
                  <br />
                  {prop.apply_dept}
                </th>
                <th
                  style={{
                    borderRightStyle: "solid",
                    borderRightWidth: 1,
                    borderRightColor: "#ddd",
                    borderBottomStyle: "solid",
                    borderBottomWidth: 1,
                    borderBottomColor: "#ddd",
                    width: 77.16,
                    paddingTop: 4,
                    paddingRight: 6,
                    paddingBottom: 4,
                    paddingLeft: 6,
                    fontFamily: "Segoe UI",
                    fontWeight: 400,
                  }}
                >
                  {prop.prof_nm}
                </th>
                <th
                  style={{
                    borderRightStyle: "solid",
                    borderRightWidth: 1,
                    borderRightColor: "#ddd",
                    borderBottomStyle: "solid",
                    borderBottomWidth: 1,
                    borderBottomColor: "#ddd",
                    width: 77.16,
                    paddingTop: 4,
                    paddingRight: 6,
                    paddingBottom: 4,
                    paddingLeft: 6,
                    fontFamily: "Segoe UI",
                    fontWeight: 400,
                  }}
                >
                  {prop.time}
                </th>
                <th
                  style={{
                    borderRightStyle: "solid",
                    borderRightWidth: 1,
                    borderRightColor: "#ddd",
                    borderBottomStyle: "solid",
                    borderBottomWidth: 1,
                    borderBottomColor: "#ddd",
                    width: 115.23,
                    paddingTop: 4,
                    paddingRight: 6,
                    paddingBottom: 4,
                    paddingLeft: 6,
                    textAlign: "left",
                    fontFamily: "Segoe UI",
                    fontWeight: 400,
                  }}
                >
                  {prop.time_room}
                </th>
                <th
                  style={{
                    borderRightStyle: "solid",
                    borderRightWidth: 1,
                    borderRightColor: "#ddd",
                    borderBottomStyle: "solid",
                    borderBottomWidth: 1,
                    borderBottomColor: "#ddd",
                    fontWeight: 600,
                    width: 65.13,
                  }}
                >
                  {prop.no_supervisor_yn === "Y" ? (
                    <Image
                      src={
                        "https://sugang.korea.ac.kr/resources/img/contents/icon-check.png"
                      }
                      alt="check"
                      width={13}
                      height={9}
                    />
                  ) : null}
                </th>
                <th
                  style={{
                    borderBottomStyle: "solid",
                    borderBottomWidth: 1,
                    borderBottomColor: "#ddd",
                    width: 65.13,
                  }}
                >
                  <Image
                    src={
                      "https://sugang.korea.ac.kr/resources/img/contents/icon-view.png"
                    }
                    alt="note"
                    width={16}
                    height={21}
                  />
                </th>
              </tr>
            ))}
          </thead>
        </table>
      </div>

      {preferredCourses?.length === 0 ? ( //검색 결과 없음
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
            paddingTop: 57,
            borderBottom: 1,
            borderBottomColor: "#ccc",
            borderBottomStyle: "solid",
            height: 150,
            lineHeight: 2.5,
            backgroundColor: tableMouseEnter ? "#F2F2F2" : "#fff",
          }}
        >
          관심과목 데이터가 없습니다.
        </div>
      ) : null}
    </div>
  );
}
