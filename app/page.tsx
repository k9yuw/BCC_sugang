"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [language, setLanguage] = useState<"eng" | "kor">("kor");
  const [id, setId] = useState("");

  const router = useRouter();

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(id);
    router.push("/home");

    // const formData = new FormData(e.currentTarget);
    // console.log(formData);
    // const response = await fetch("/api/login", {
    //   method: "POST",
    //   body: formData,
    // });

    // // Handle response if necessary
    // const data = await response.json();
  };

  return (
    <div style={{ backgroundColor: "#f2f2f2" }}>
      <div //header
        style={{
          minWidth: 1260,
          width: "100%",
          height: 94,
          paddingLeft: 30,
          paddingRight: 30,
          backgroundColor: "#760023",
        }}
      >
        <div
          title="고려대학교 수강신청시스템"
          style={{
            position: "relative",
            width: 1200,
            height: "100%",
            marginLeft: "auto",
            marginRight: "auto",
            backgroundImage: `url("https://sugang.korea.ac.kr/resources/img/login/logo.png")`,
            backgroundRepeat: "no-repeat",
            backgroundPositionY: "50%",
          }}
        ></div>
      </div>
      <div //form
        style={{
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            position: "relative",
            overflow: "hidden",
            height: 530,
            paddingTop: 75,
            borderBottomWidth: 1,
            borderBottomStyle: "solid",
            minWidth: 1260,
            backgroundImage: `url("https://sugang.korea.ac.kr/resources/img/login/img-login.jpg")`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            borderBottomColor: "#d9d9d9",
          }}
        >
          <div style={{ width: 1260, marginLeft: "auto", marginRight: "auto" }}>
            <div
              style={{
                height: 360,
                position: "relative",
                float: "right",
                right: 30,
                width: 400,
                paddingTop: 142,
                paddingLeft: 55,
                paddingRight: 55,
                backgroundColor: "#fff",
                backgroundImage: `url("https://sugang.korea.ac.kr/resources/img/login/bg-login.png")`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundPositionY: 55,
                boxSizing: "border-box",
              }}
            >
              <form method="post" autoComplete="off" onSubmit={onSubmit}>
                <div
                  style={{
                    marginBottom: 30,
                    textAlign: "center",
                  }}
                >
                  <span
                    style={{
                      paddingLeft: 15,
                      paddingRight: 22,
                    }}
                  >
                    <input
                      type="radio"
                      onChange={(e) => {
                        if (e.target.checked) {
                          setLanguage("kor");
                        }
                      }}
                      checked={language === "kor"}
                      style={{
                        width: language === "kor" ? 16 : 16,
                        height: language === "kor" ? 16 : 16,
                        WebkitAppearance: "none",
                        MozAppearance: "none",
                        appearance: "none",
                        borderWidth: language === "kor" ? 4 : 1.1,
                        borderStyle: "solid",
                        borderColor: language === "kor" ? "#fff" : "#ccc",
                        borderRadius: "50%",
                        backgroundColor:
                          language === "kor" ? "#a20131" : undefined,
                        boxShadow: "black",
                      }}
                    />
                    <label
                      style={{
                        position: "relative",
                        bottom: 2.5,
                        left: 5,
                        fontFamily: "Apple SD Gothic Neo",
                        fontSize: 13,
                      }}
                    >
                      KOREAN
                    </label>
                  </span>
                  <span
                    style={{
                      paddingRight: 22,
                    }}
                  >
                    <input
                      type="radio"
                      onChange={(e) => {
                        if (e.target.checked) {
                          setLanguage("eng");
                        }
                      }}
                      checked={language === "eng"}
                      style={{
                        width: language === "eng" ? 16 : 16,
                        height: language === "eng" ? 16 : 16,
                        WebkitAppearance: "none",
                        MozAppearance: "none",
                        appearance: "none",
                        borderWidth: language === "eng" ? 4 : 1.1,
                        borderStyle: "solid",
                        borderColor: language === "eng" ? "#fff" : "#ccc",
                        borderRadius: "50%",
                        backgroundColor:
                          language === "eng" ? "#a20131" : undefined,
                      }}
                    />
                    <label
                      style={{
                        position: "relative",
                        bottom: 2.5,
                        left: 3,
                        fontFamily: "Apple SD Gothic Neo",
                        fontSize: 13,
                      }}
                    >
                      ENGLISH
                    </label>
                  </span>
                </div>
                <div
                  style={{
                    borderWidth: 1,
                    borderColor: "#ccc",
                  }}
                >
                  <input
                    type="text"
                    placeholder="닉네임 ( NickName )"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    style={{
                      backgroundImage: `url("https://sugang.korea.ac.kr/resources/img/login/icon-id.png")`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                      backgroundPositionX: 10,
                      float: "left",
                      width: 195,
                      height: 40,
                      lineHeight: 40,
                      marginBottom: 10,
                      paddingLeft: 36,
                      paddingBottom: 3,
                      fontSize: 12,
                      fontFamily: "Apple SD Gothic Neo",
                      border: 1,
                      borderColor: "#ccc",
                      borderStyle: "solid",
                    }}
                  />
                </div>
                <input
                  type="text"
                  placeholder="닉네임만 입력해주세요."
                  disabled
                  style={{
                    backgroundImage: `url("https://sugang.korea.ac.kr/resources/img/login/icon-pw.png")`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundPositionX: 11,
                    float: "left",
                    width: 195,
                    height: 40,
                    lineHeight: 40,
                    marginBottom: 10,
                    paddingLeft: 36,
                    fontSize: 12,
                    fontFamily: "Apple SD Gothic Neo",
                    borderWidth: 1,
                  }}
                />
                <button
                  style={{
                    width: 85,
                    height: 90,
                    marginLeft: 10,
                    backgroundColor: "#a20131",
                    borderRadius: 6,
                    paddingLeft: 10,
                    paddingRight: 10,
                    paddingBottom: 2,
                    border: 0,
                    fontSize: 17,
                    color: "#fff",
                    textAlign: "center",
                  }}
                >
                  로그인
                  <small style={{ fontWeight: "lighter", fontSize: 12 }}>
                    Login
                  </small>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div //information
        style={{
          width: "100%",
          maxWidth: 1260,
          marginLeft: "auto",
          marginRight: "auto",
          paddingTop: 65,
          paddingBottom: 80,
          boxSizing: "border-box",
          position: "relative",
        }}
      >
        <div>
          <div style={{ marginLeft: 30, marginRight: 30 }}>
            <h1
              style={{
                margin: 0,
                paddingLeft: 2,
                fontSize: 26,
                fontWeight: 400,
                letterSpacing: -2,
              }}
            >
              수강신청 안내
              <small
                style={{
                  fontSize: 15,
                  fontWeight: 200,
                  marginLeft: 10,
                  letterSpacing: "normal",
                }}
              >
                Course Registration Schedule
              </small>
            </h1>
            <div //6tags
              style={{
                height: 122,
                marginBottom: 73,
                alignItems: "stretch",
                display: "flex",
              }}
            >
              <div //1
                style={{
                  width: 162,
                  height: 30,
                  display: "inline-block",
                  minWidth: 162,
                }}
              >
                <div
                  style={{
                    height: 30,
                    backgroundColor: "#bf0039",
                    paddingLeft: 20,
                    paddingRight: 20,
                    marginTop: 15,
                    marginBottom: 20,
                    position: "relative",
                    border: 15,
                    borderColor: "#bf0039",
                    borderStyle: "solid",
                    borderRight: 12,
                    borderRightColor: "#fff",
                    borderRightStyle: "solid",
                    display: "flex",
                    alignItems: "baseline",
                  }}
                >
                  <h2
                    style={{
                      fontSize: 14,
                      fontWeight: 300,
                      letterSpacing: -1,
                      color: "#fff",
                      lineHeight: -10,
                      textAlign: "left",
                      margin: 0,
                    }}
                  >
                    학부 수강신청 일정
                  </h2>
                </div>
                <div
                  style={{
                    borderLeft: 1,
                    borderLeftStyle: "solid",
                    borderLeftColor: "#bf0039",
                    paddingLeft: 20,
                    height: 51,
                  }}
                >
                  <div
                    style={{
                      fontSize: 15,
                      color: "#515151",
                      paddingTop: 3,
                    }}
                  >
                    학부 수강신청 안내
                  </div>
                  <div style={{ paddingTop: 7 }}>
                    <Image
                      alt="more"
                      src={
                        "https://sugang.korea.ac.kr/resources/img/login/btn-more.png"
                      }
                      width={60}
                      height={22}
                    />
                  </div>
                </div>
              </div>
              <div //2
                style={{
                  width: 162,
                  height: 30,
                  display: "inline-block",
                  marginLeft: 45,
                  minWidth: 162,
                }}
              >
                <h2
                  style={{
                    height: 30,
                    backgroundColor: "#bf0039",
                    paddingLeft: 20,
                    paddingRight: 20,
                    marginTop: 15,
                    marginBottom: 20,
                    fontSize: 14,
                    fontWeight: 300,
                    letterSpacing: -1,
                    lineHeight: 2,
                    color: "#fff",
                    position: "relative",
                    borderRight: 12,
                    borderRightStyle: "solid",
                    borderRightColor: "transparent",
                  }}
                >
                  과목조회
                </h2>
                <div
                  style={{
                    borderLeft: 1,
                    borderLeftStyle: "solid",
                    borderLeftColor: "#bf0039",
                    paddingLeft: 20,
                    height: 51,
                  }}
                >
                  <div
                    style={{
                      fontSize: 15,
                      color: "#515151",
                      paddingTop: 3,
                    }}
                  >
                    고려대학교 과목조회
                  </div>
                  <div style={{ paddingTop: 7 }}>
                    <Image
                      alt="more"
                      src={
                        "https://sugang.korea.ac.kr/resources/img/login/btn-more.png"
                      }
                      width={60}
                      height={22}
                    />
                  </div>
                </div>
              </div>
              <div //3
                style={{
                  width: 162,
                  height: 30,
                  display: "inline-block",
                  marginLeft: 45,
                  minWidth: 162,
                }}
              >
                <h2
                  style={{
                    height: 30,
                    backgroundColor: "#bf0039",
                    paddingLeft: 20,
                    paddingRight: 20,
                    marginTop: 15,
                    marginBottom: 20,
                    fontSize: 14,
                    fontWeight: 300,
                    letterSpacing: -1,
                    lineHeight: 2,
                    color: "#fff",
                    position: "relative",
                    borderRight: 12,
                    borderRightStyle: "solid",
                    borderRightColor: "transparent",
                  }}
                >
                  교육정보
                </h2>
                <div
                  style={{
                    borderLeft: 1,
                    borderLeftStyle: "solid",
                    borderLeftColor: "#bf0039",
                    paddingLeft: 20,
                    height: 51,
                    display: "flex",
                    width: 165,
                    lineHeight: 1.5,
                  }}
                >
                  <div
                    style={{
                      fontSize: 15,
                      color: "#515151",
                      display: "inline-block",
                    }}
                  >
                    고려대학교
                    <br />
                    교육정보 확인
                  </div>
                  <div style={{ paddingTop: 20, display: "inline-block" }}>
                    <Image
                      alt="more"
                      src={
                        "https://sugang.korea.ac.kr/resources/img/login/btn-more.png"
                      }
                      width={60}
                      height={22}
                    />
                  </div>
                </div>
              </div>
              <div //4
                style={{
                  width: 162,
                  height: 30,
                  display: "inline-block",
                  marginLeft: 45,
                  minWidth: 162,
                }}
              >
                <h2
                  style={{
                    height: 30,
                    backgroundColor: "#bf0039",
                    paddingLeft: 20,
                    paddingRight: 20,
                    marginTop: 15,
                    marginBottom: 20,
                    fontSize: 14,
                    fontWeight: 300,
                    letterSpacing: -1,
                    lineHeight: 2,
                    color: "#fff",
                    position: "relative",
                    borderRight: 12,
                    borderRightStyle: "solid",
                    borderRightColor: "transparent",
                  }}
                >
                  비밀번호 변경
                </h2>
                <div
                  style={{
                    borderLeft: 1,
                    borderLeftStyle: "solid",
                    borderLeftColor: "#bf0039",
                    paddingLeft: 20,
                    height: 51,
                    display: "flex",
                    width: 165,
                    lineHeight: 1.5,
                  }}
                >
                  <div
                    style={{
                      fontSize: 15,
                      color: "#515151",
                      display: "inline-block",
                    }}
                  >
                    포털 미사용자
                    <br />
                    비밀번호변경
                  </div>
                  <div style={{ paddingTop: 20, display: "inline-block" }}>
                    <Image
                      alt="more"
                      src={
                        "https://sugang.korea.ac.kr/resources/img/login/btn-more.png"
                      }
                      width={60}
                      height={22}
                    />
                  </div>
                </div>
              </div>
              <div //5
                style={{
                  width: 162,
                  height: 30,
                  display: "inline-block",
                  marginLeft: 45,
                  minWidth: 162,
                }}
              >
                <h2
                  style={{
                    height: 30,
                    backgroundColor: "#bf0039",
                    paddingLeft: 20,
                    paddingRight: 20,
                    marginTop: 15,
                    marginBottom: 20,
                    fontSize: 14,
                    fontWeight: 300,
                    letterSpacing: -1,
                    lineHeight: 2,
                    color: "#fff",
                    position: "relative",
                    borderRight: 12,
                    borderRightStyle: "solid",
                    borderRightColor: "transparent",
                  }}
                >
                  신입생학번안내
                </h2>
                <div
                  style={{
                    borderLeft: 1,
                    borderLeftStyle: "solid",
                    borderLeftColor: "#bf0039",
                    paddingLeft: 20,
                    height: 51,
                  }}
                >
                  <div
                    style={{
                      fontSize: 15,
                      color: "#515151",
                      paddingTop: 3,
                    }}
                  >
                    신입생 학번안내
                  </div>
                  <div style={{ paddingTop: 7 }}>
                    <Image
                      alt="more"
                      src={
                        "https://sugang.korea.ac.kr/resources/img/login/btn-more.png"
                      }
                      width={60}
                      height={22}
                    />
                  </div>
                </div>
              </div>
              <div //6
                style={{
                  width: 162,
                  height: 30,
                  display: "inline-block",
                  marginLeft: 45,
                  minWidth: 162,
                }}
              >
                <h2
                  style={{
                    height: 30,
                    backgroundColor: "#bf0039",
                    paddingLeft: 20,
                    paddingRight: 20,
                    marginTop: 15,
                    marginBottom: 20,
                    fontSize: 14,
                    fontWeight: 300,
                    letterSpacing: -1,
                    lineHeight: 2,
                    color: "#fff",
                    position: "relative",
                    borderRight: 12,
                    borderRightStyle: "solid",
                    borderRightColor: "transparent",
                  }}
                >
                  대학원생수강신청
                </h2>
                <div
                  style={{
                    borderLeft: 1,
                    borderLeftStyle: "solid",
                    borderLeftColor: "#bf0039",
                    paddingLeft: 20,
                    height: 71,
                    lineHeight: 1.5,
                  }}
                >
                  <div
                    style={{
                      fontSize: 15,
                      color: "#515151",
                    }}
                  >
                    대학원생 수강신청
                    <br />
                    바로가기
                  </div>
                  <div style={{ paddingTop: 7 }}>
                    <Image
                      alt="more"
                      src={
                        "https://sugang.korea.ac.kr/resources/img/login/btn-more.png"
                      }
                      width={60}
                      height={22}
                    />
                  </div>
                </div>
              </div>
            </div>
            <h1
              style={{
                margin: 0,
                paddingLeft: 2,
                fontSize: 26,
                fontWeight: 400,
                letterSpacing: -2,
              }}
            >
              수강신청 유의사항
              <small
                style={{
                  fontSize: 15,
                  fontWeight: 200,
                  marginLeft: 10,
                  letterSpacing: "normal",
                }}
              >
                Course Registration Notice
              </small>
            </h1>
            <div
              style={{
                marginTop: 20,
                padding: 30,
                border: 1,
                borderStyle: "solid",
                borderColor: "#dedede",
                backgroundColor: "#fff",
              }}
            >
              <ul>
                <li>게임 설명</li>
                <li>게임 설명</li>
                <li>게임 설명</li>
                <li>게임 설명</li>
                <li>게임 설명</li>
                <li>게임 설명</li>
                <li>게임 설명</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div //footer
        style={{
          width: "100%",
          height: 120,
          paddingTop: 30,
          paddingLeft: 30,
          paddingRight: 30,
          backgroundColor: "#262626",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            position: "relative",
            width: 1200,
            marginLeft: "auto",
            marginRight: "auto",
            fontSize: 12,
            fontWeight: "lighter",
            color: "#b9b9b9",
          }}
        >
          02841 서울특별시 성북구 안암로 145 / TEL.02.3290.1114. /
          webmaster@korea.ac.kr
          <br />
          Copyright © 2020 Korea University. All Rights Reserved
        </div>
      </div>
    </div>
  );
}
