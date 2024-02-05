import courseData from "@/app/constant/courseDataInterface";
import Image from "next/image";
import { useState } from "react";

export default function RegisterByPreferredCourses() {
  const [searchedData, setSearchedData] = useState<courseData[]>([]);
  const [searched, setSearched] = useState(false);
  const [tableMouseEnter, setTableMouseEnter] = useState(false);

  return (
    <div //검색 결과 테이블
      style={{ marginTop: 10, borderTop: 0.7, borderTopStyle: "solid" }}
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
          {!searched ? (
            <tr //마감현황 포함 X
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
                  width: 54,
                  fontWeight: 600,
                }}
              >
                캠퍼스
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
                  width: 67,
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
                  width: 41,
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
                  width: 67,
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
                  width: 81,
                }}
              >
                개설학과
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
                  width: 147,
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
                  width: 81,
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
                  width: 41,
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
                  width: 121,
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
                  width: 41,
                }}
              >
                상대
                <br />
                평가
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
                  width: 41,
                }}
              >
                인원
                <br />
                제한
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
                  width: 41,
                }}
              >
                교환
                <br />
                학생
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
                  width: 54,
                }}
              >
                출석확인
                <br />
                자율화
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
                  width: 54,
                }}
              >
                무감독
                <br />
                시험
              </th>
              <th
                style={{
                  borderRightStyle: "solid",
                  borderRightWidth: 1,
                  borderRightColor: "#ccc",
                  borderBottomStyle: "solid",
                  borderBottomWidth: 1,
                  borderBottomColor: "#ccc",
                  width: 40,
                }}
              >
                유연
                <br />
                학기
              </th>
            </tr>
          ) : (
            <tr //마감현황 포함
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
                  width: 52.1,
                }}
              >
                캠퍼스
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
                  width: 65.13,
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
                  width: 77.16,
                }}
              >
                개설학과
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
                  width: 39.08,
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
                  fontWeight: 600,
                  width: 39.08,
                }}
              >
                상대
                <br />
                평가
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
                인원
                <br />
                제한
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
                교환
                <br />
                학생
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
                  width: 52.1,
                }}
              >
                출석확인
                <br />
                자율화
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
                  width: 52.1,
                }}
              >
                무감독
                <br />
                시험
              </th>
              <th
                style={{
                  borderRightStyle: "solid",
                  borderRightWidth: 1,
                  borderRightColor: "#ccc",
                  borderBottomStyle: "solid",
                  borderBottomWidth: 1,
                  borderBottomColor: "#ccc",
                  width: 39.08,
                }}
              >
                유연
                <br />
                학기
              </th>
              {searched ? (
                <th
                  style={{
                    borderBottomStyle: "solid",
                    borderBottomWidth: 1,
                    borderBottomColor: "#ccc",
                    width: 38.13,
                  }}
                >
                  마감
                  <br />
                  현황
                </th>
              ) : null}
            </tr>
          )}
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
            {searchedData.map((prop: courseData, index) => (
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
                key={prop.params}
              >
                <th
                  style={{
                    borderRightStyle: "solid",
                    borderRightWidth: 1,
                    borderRightColor: "#ddd",
                    borderBottomStyle: "solid",
                    borderBottomWidth: 1,
                    borderBottomColor: "#ddd",
                    width: 52.1,
                    paddingTop: 4,
                    paddingRight: 6,
                    paddingBottom: 4,
                    paddingLeft: 6,
                    fontFamily: "Segoe UI",
                    fontWeight: 400,
                  }}
                >
                  {prop.campus}
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
                    width: 65.13,
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
                    width: 77.16,
                    paddingTop: 4,
                    paddingRight: 6,
                    paddingBottom: 4,
                    paddingLeft: 6,
                    fontFamily: "Segoe UI",
                    fontWeight: 400,
                  }}
                >
                  {prop.department}
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
                    width: 39.08,
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
                    width: 39.08,
                    paddingTop: 4,
                    paddingRight: 6,
                    paddingBottom: 4,
                    paddingLeft: 6,
                  }}
                >
                  {prop.absolute_yn === "Y" ? (
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
                    borderRightStyle: "solid",
                    borderRightWidth: 1,
                    borderRightColor: "#ddd",
                    borderBottomStyle: "solid",
                    borderBottomWidth: 1,
                    borderBottomColor: "#ddd",
                    fontWeight: 600,
                    width: 39.08,
                    paddingTop: 4,
                    paddingRight: 6,
                    paddingBottom: 4,
                    paddingLeft: 6,
                  }}
                >
                  {prop.lmt_yn === "Y" ? (
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
                    borderRightStyle: "solid",
                    borderRightWidth: 1,
                    borderRightColor: "#ddd",
                    borderBottomStyle: "solid",
                    borderBottomWidth: 1,
                    borderBottomColor: "#ddd",
                    fontWeight: 600,
                    width: 39.08,
                    paddingTop: 4,
                    paddingRight: 6,
                    paddingBottom: 4,
                    paddingLeft: 6,
                  }}
                >
                  {prop.exch_cor_yn === "Y" ? null : (
                    <Image
                      src={
                        "https://sugang.korea.ac.kr/resources/img/contents/icon-check.png"
                      }
                      alt="check"
                      width={13}
                      height={9}
                    />
                  )}
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
                    width: 52.1,
                    paddingTop: 4,
                    paddingRight: 6,
                    paddingBottom: 4,
                    paddingLeft: 6,
                  }}
                >
                  {prop.attend_free_yn === "Y" ? (
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
                    borderRightStyle: "solid",
                    borderRightWidth: 1,
                    borderRightColor: "#ddd",
                    borderBottomStyle: "solid",
                    borderBottomWidth: 1,
                    borderBottomColor: "#ddd",
                    fontWeight: 600,
                    width: 52.1,
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
                    borderRightStyle: "solid",
                    borderRightWidth: 1,
                    borderRightColor: "#ddd",
                    borderBottomStyle: "solid",
                    borderBottomWidth: 1,
                    borderBottomColor: "#ddd",
                    width: 39.08,
                  }}
                >
                  {prop.flexible_school_yn === "Y" ? (
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
                {searched ? (
                  <th
                    style={{
                      borderBottomStyle: "solid",
                      borderBottomWidth: 1,
                      borderBottomColor: "#ddd",
                      width: 38.13,
                    }}
                  >
                    <Image
                      src={
                        "	https://sugang.korea.ac.kr/resources/img/contents/icon-view.png"
                      }
                      alt="note"
                      width={16}
                      height={21}
                    />
                  </th>
                ) : null}
              </tr>
            ))}
          </thead>
        </table>
      </div>

      {searched && searchedData?.length === 0 ? ( //검색 결과 없음
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
            backgroundColor: tableMouseEnter ? "#F2F2F2" : "#fff",
          }}
        >
          검색결과가 존재하지 않습니다.
          <br />
          조회 조건 선택 후 조회 버튼을 클릭하세요.
        </div>
      ) : null}
      {searched ? null : ( //검색 전: '~조회 버튼 클릭하세요'
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
          조회 조건 선택 후 조회 버튼을 클릭하세요.
        </div>
      )}
    </div>
  );
}
