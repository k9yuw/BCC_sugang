import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { MouseEvent, useState } from "react";
import CustomPopup from "./popups/CustomPopup";

export default function NavBar() {
  const router = useRouter();
  const pathname = usePathname();
  const [language, setLanguage] = useState("kor");
  const [navMouseEnterOne, setNavMouseEnterOne] = useState(false);
  const [navMouseEnterTwo, setNavMouseEnterTwo] = useState(false);
  const [navMouseEnterThree, setNavMouseEnterThree] = useState(false);
  const [customPopupOpen, setCustomPopupOpen] = useState(false);

  const onClickRegisteration = (e: MouseEvent<HTMLSpanElement>) => {
    e.preventDefault();
    router.push("/courseRegisteration");
  };
  const onClickPreferredCourses = (e: MouseEvent<HTMLSpanElement>) => {
    e.preventDefault();
    router.push("/preferredCourses");
  };
  const onClickSearchCourses = (e: MouseEvent<HTMLSpanElement>) => {
    e.preventDefault();
    router.push("/searchCourses");
  };
  const closeCustomPopup = () => {
    setCustomPopupOpen(false);
  };
  const onClickEnglish =() =>{
    setCustomPopupOpen(true);
    // setLanguage("Eng");
  };

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div //좌측 네비게이션 바
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
        <div //한영 버튼
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
            onClick={onClickEnglish}
          >
            ENGLISH
          </span>
        </div>
        <CustomPopup
          customPopupOpen={customPopupOpen}
          closeCustomPopup={closeCustomPopup}
          textValue={"영어버전은 지원하지 않습니다"}
        />
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
                onMouseEnter={() => {
                  setNavMouseEnterOne(true);
                }}
                onMouseLeave={() => {
                  setNavMouseEnterOne(false);
                }}
                onClick={onClickRegisteration}
                style={{
                  fontFamily: "Malgun Gothic",
                  fontSize: 15,
                  cursor: "pointer",
                  color:
                    pathname === "/courseRegisteration" || navMouseEnterOne
                      ? "#a20131"
                      : "",
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
                onClick={onClickPreferredCourses}
                onMouseEnter={() => {
                  setNavMouseEnterTwo(true);
                }}
                onMouseLeave={() => {
                  setNavMouseEnterTwo(false);
                }}
                style={{
                  fontFamily: "Malgun Gothic",
                  fontSize: 15,
                  cursor: "pointer",
                  color:
                    pathname === "/preferredCourses" || navMouseEnterTwo
                      ? "#a20131"
                      : "",
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
                onClick={onClickSearchCourses}
                onMouseEnter={() => {
                  setNavMouseEnterThree(true);
                }}
                onMouseLeave={() => {
                  setNavMouseEnterThree(false);
                }}
                style={{
                  fontFamily: "Malgun Gothic",
                  fontSize: 15,
                  cursor: "pointer",
                  color:
                    pathname === "/searchCourses" || navMouseEnterThree
                      ? "#a20131"
                      : "",
                }}
              >
                과목조회
                <ul
                  style={{ paddingTop: 5, paddingLeft: 0, cursor: "default" }}
                >
                  <li
                    style={{
                      listStyle: "none",
                      paddingTop: 2,
                      paddingBottom: 2,
                      paddingLeft: 15,
                    }}
                  >
                    <span
                      onClick={onClickSearchCourses}
                      onMouseEnter={() => {
                        setNavMouseEnterThree(true);
                      }}
                      onMouseLeave={() => {
                        setNavMouseEnterThree(false);
                      }}
                      style={{
                        fontSize: 13,
                        cursor: "pointer",
                        color:
                          pathname === "/searchCourses" || navMouseEnterThree
                            ? "#a20131"
                            : "#666",
                      }}
                    >
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
        <div
          style={{
            height: 210,
            padding: 20,
            backgroundColor: "#262626",
          }}
        >
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
              Copyright © 2023 BBang Co Co.
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
          minHeight: "100vh",
          position: "relative",
        }}
      >
        <div //좌측 네비게이션 바 접는 버튼
          style={{
            top: 34,
            position: "absolute",
            zIndex: "auto",
            width: 15,
            height: 51,
            border: 1,
            borderStyle: "solid",
            borderColor: "#e1e1e1",
            borderLeft: 0,
            backgroundColor: "#f9f9f9",
            backgroundImage: `url("https://sugang.korea.ac.kr/resources/img/layout/bg-controller.png")`,
            backgroundRepeat: "no-repeat",
            backgroundPositionX: 3,
            backgroundPositionY: 21,
            cursor: "pointer",
          }}
        ></div>
      </div>
    </div>
  );
}
