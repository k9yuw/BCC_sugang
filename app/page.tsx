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
    router.push("/searchCourses");

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
    <div
      style={{ backgroundColor: "#f5f5f5", fontFamily: "Apple SD Gothic Neo" }}
    >
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
                  style={{ textAlign: "left", marginTop: 15, marginBottom: 17 }}
                >
                  <Image alt="tag" src="/tag.svg" width={162} height={30} />
                  <p
                    style={{
                      position: "absolute",
                      top: 98,
                      paddingLeft: 20,
                      fontSize: 14,
                      fontWeight: 300,
                      letterSpacing: -1,
                      lineHeight: 2.2,
                      color: "#fff",
                    }}
                  >
                    학부 수강신청 일정
                  </p>
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
                <div
                  style={{ textAlign: "left", marginTop: 15, marginBottom: 17 }}
                >
                  <Image alt="tag" src="/tag.svg" width={162} height={30} />
                  <p
                    style={{
                      position: "absolute",
                      top: 98,
                      paddingLeft: 20,
                      fontSize: 14,
                      fontWeight: 300,
                      letterSpacing: -1,
                      lineHeight: 2.2,
                      color: "#fff",
                    }}
                  >
                    과목조회
                  </p>
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
                <div
                  style={{ textAlign: "left", marginTop: 15, marginBottom: 17 }}
                >
                  <Image alt="tag" src="/tag.svg" width={162} height={30} />
                  <p
                    style={{
                      position: "absolute",
                      top: 98,
                      paddingLeft: 20,
                      fontSize: 14,
                      fontWeight: 300,
                      letterSpacing: -1,
                      lineHeight: 2.2,
                      color: "#fff",
                    }}
                  >
                    교육정보
                  </p>
                </div>
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
                <div
                  style={{ textAlign: "left", marginTop: 15, marginBottom: 17 }}
                >
                  <Image alt="tag" src="/tag.svg" width={162} height={30} />
                  <p
                    style={{
                      position: "absolute",
                      top: 98,
                      paddingLeft: 20,
                      fontSize: 14,
                      fontWeight: 300,
                      letterSpacing: -1,
                      lineHeight: 2.2,
                      color: "#fff",
                    }}
                  >
                    비밀번호 변경
                  </p>
                </div>
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
                <div
                  style={{ textAlign: "left", marginTop: 15, marginBottom: 17 }}
                >
                  <Image alt="tag" src="/tag.svg" width={162} height={30} />
                  <p
                    style={{
                      position: "absolute",
                      top: 98,
                      paddingLeft: 20,
                      fontSize: 14,
                      fontWeight: 300,
                      letterSpacing: -1,
                      lineHeight: 2.2,
                      color: "#fff",
                    }}
                  >
                    신입생 학번안내
                  </p>
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
                <div
                  style={{ textAlign: "left", marginTop: 15, marginBottom: 17 }}
                >
                  <Image alt="tag" src="/tag.svg" width={162} height={30} />
                  <p
                    style={{
                      position: "absolute",
                      top: 98,
                      paddingLeft: 20,
                      fontSize: 14,
                      fontWeight: 300,
                      letterSpacing: -1,
                      lineHeight: 2.2,
                      color: "#fff",
                    }}
                  >
                    대학원생 수강신청
                  </p>
                </div>
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
                  <div style={{ paddingTop: 3 }}>
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
              <ul
                style={{
                  listStyle: "none",
                  lineHeight: 2.3,
                  padding: 0,
                  margin: 0,
                }}
              >
                <li
                  style={{
                    backgroundImage:
                      'url("	https://sugang.korea.ac.kr/resources/img/login/bullet.png")',
                    backgroundRepeat: "no-repeat",
                    backgroundPositionY: "center",
                    fontSize: 14,
                    paddingLeft: 12,
                    color: "#528ecc",
                    fontFamily: "Apple SD Gothic Neo",
                  }}
                >
                  수강신청시스템 중복로그인/매크로 제한 기능 도입 안내
                </li>
                <li
                  style={{
                    backgroundImage:
                      'url("	https://sugang.korea.ac.kr/resources/img/login/bullet.png")',
                    backgroundRepeat: "no-repeat",
                    backgroundPositionY: "center",
                    fontSize: 14,
                    paddingLeft: 12,
                    fontFamily: "Apple SD Gothic Neo",
                  }}
                >
                  Microsoft의 Internet Explorer 지원 종료에 따라 Chrome,
                  Firefox, Edge 브라우저를 이용하시기 바랍니다.
                </li>
                <li
                  style={{
                    backgroundImage:
                      'url("	https://sugang.korea.ac.kr/resources/img/login/bullet.png")',
                    backgroundRepeat: "no-repeat",
                    backgroundPositionY: "center",
                    fontSize: 14,
                    paddingLeft: 12,
                    fontFamily: "Apple SD Gothic Neo",
                    color: "#bf0039",
                  }}
                >
                  장애학생 수강신청 - 2. 1(목) 10:00 - 2. 2(금) 09:00
                </li>
                <li
                  style={{
                    backgroundImage:
                      'url("	https://sugang.korea.ac.kr/resources/img/login/bullet.png")',
                    backgroundRepeat: "no-repeat",
                    backgroundPositionY: "center",
                    fontSize: 14,
                    paddingLeft: 12,
                    fontFamily: "Apple SD Gothic Neo",
                    color: "#bf0039",
                  }}
                >
                  수강희망과목 등록기간 - 2. 2(금) 13:00 - 2. 5(월) 12:00
                </li>
                <li
                  style={{
                    backgroundImage:
                      'url("	https://sugang.korea.ac.kr/resources/img/login/bullet.png")',
                    backgroundRepeat: "no-repeat",
                    backgroundPositionY: "center",
                    fontSize: 14,
                    paddingLeft: 12,
                    fontFamily: "Apple SD Gothic Neo",
                    color: "#bf0039",
                  }}
                >
                  신입생 수강신청 기간 - 2. 23(금) 10:00 - 2. 24(토) 12:00
                </li>
                <li
                  style={{
                    backgroundImage:
                      'url("	https://sugang.korea.ac.kr/resources/img/login/bullet.png")',
                    backgroundRepeat: "no-repeat",
                    backgroundPositionY: "center",
                    fontSize: 14,
                    paddingLeft: 12,
                    fontFamily: "Apple SD Gothic Neo",
                    color: "#bf0039",
                  }}
                >
                  수강신청 기간 - 2. 13(화) 10:00부터 시작, 4학년을 시작으로
                  학년별로 수강신청을 진행함.
                </li>
                <li
                  style={{
                    backgroundImage:
                      'url("	https://sugang.korea.ac.kr/resources/img/login/bullet.png")',
                    backgroundRepeat: "no-repeat",
                    backgroundPositionY: "center",
                    fontSize: 14,
                    paddingLeft: 12,
                    fontFamily: "Apple SD Gothic Neo",
                    color: "#bf0039",
                  }}
                >
                  수강신청 정정 기간 - 3. 6(수) 18:30부터 시작, 4학년을 시작으로
                  학년별로 한 시간 간격으로 시작시간을 달리함.
                </li>
                <li
                  style={{
                    backgroundImage:
                      'url("	https://sugang.korea.ac.kr/resources/img/login/bullet.png")',
                    backgroundRepeat: "no-repeat",
                    backgroundPositionY: "center",
                    fontSize: 14,
                    paddingLeft: 12,
                    fontFamily: "Apple SD Gothic Neo",
                    color: "#bf0039",
                  }}
                >
                  수강 및 성적평가 공정성 제고 관련 교육부 권고에 따라, 부모 중
                  1인 이상이 강의를 담당하는 과목의 경우 자녀의 수강이 제한될 수
                  있습니다.
                </li>
                <li
                  style={{
                    backgroundImage:
                      'url("	https://sugang.korea.ac.kr/resources/img/login/bullet.png")',
                    backgroundRepeat: "no-repeat",
                    backgroundPositionY: "center",
                    fontSize: 14,
                    paddingLeft: 12,
                    fontFamily: "Apple SD Gothic Neo",
                  }}
                >
                  학사관련 주요사항 안내는 교육정보 홈페이지를 참조하세요.
                  <span style={{ color: "#528ecc", margin: 0, marginLeft: 3 }}>
                    교육정보 바로가기
                  </span>
                </li>
                <li
                  style={{
                    backgroundImage:
                      'url("	https://sugang.korea.ac.kr/resources/img/login/bullet.png")',
                    backgroundRepeat: "no-repeat",
                    backgroundPositionY: "center",
                    fontSize: 14,
                    paddingLeft: 12,
                    fontFamily: "Apple SD Gothic Neo",
                  }}
                >
                  단과대학별 수강신청 유의사항은 교육정보 홈페이지를 참조하세요.
                  <span style={{ color: "#528ecc", margin: 0, marginLeft: 3 }}>
                    교육정보 바로가기
                  </span>
                </li>
                <li
                  style={{
                    backgroundImage:
                      'url("	https://sugang.korea.ac.kr/resources/img/login/bullet.png")',
                    backgroundRepeat: "no-repeat",
                    backgroundPositionY: 12,
                    fontSize: 14,
                    paddingLeft: 12,
                  }}
                >
                  암호
                  <ul
                    style={{
                      paddingLeft: 0,
                      fontSize: 13,
                      listStyle: "inside",
                      lineHeight: 1.8,
                    }}
                  >
                    <li style={{ fontFamily: "Apple SD Gothic Neo" }}>
                      포털(KUPID)사용자 : 포털비밀번호
                    </li>
                    <li style={{ fontFamily: "Apple SD Gothic Neo" }}>
                      포털(KUPID)미사용자 : '포털미사용자 비밀번호변경'에서
                      설정한 비밀번호(설정전: 주민번호뒷자리)
                    </li>
                    <li style={{ fontFamily: "Apple SD Gothic Neo" }}>
                      (포털사용중인 신입생도 개강전에는 포털미사용자에 해당하는
                      비밀번호 사용)
                    </li>
                  </ul>
                </li>
                <li
                  style={{
                    backgroundImage:
                      'url("	https://sugang.korea.ac.kr/resources/img/login/bullet.png")',
                    backgroundRepeat: "no-repeat",
                    backgroundPositionY: 12,
                    fontSize: 14,
                    paddingLeft: 12,
                    fontFamily: "Apple SD Gothic Neo",
                    marginTop: 5,
                  }}
                >
                  암호 분실시
                  <ul
                    style={{
                      paddingLeft: 0,
                      fontSize: 13,
                      listStyle: "inside",
                      lineHeight: 1.8,
                    }}
                  >
                    <li
                      style={{
                        fontFamily: "Apple SD Gothic Neo",
                      }}
                    >
                      포털 사용자 :
                      <span
                        style={{ color: "#528ecc", margin: 0, marginLeft: 3 }}
                      >
                        포털(http://portal.korea.ac.kr)
                      </span>
                      로그인 화면의{" "}
                      <span style={{ fontWeight: "bold" }}>'비밀번호찾기'</span>
                      에서 비밀번호 재발급
                    </li>
                    <li
                      style={{
                        fontFamily: "Apple SD Gothic Neo",
                        fontSize: 13,
                      }}
                    >
                      포털(KUPID)미사용자 :
                      <span
                        style={{ color: "#528ecc", margin: 0, marginLeft: 3 }}
                      >
                        수강신청(https://sugang.korea.ac.kr)
                      </span>
                      <span style={{ fontWeight: "bold" }}>
                        {" "}
                        '포털미사용자 비밀번호변경'{" "}
                      </span>
                      메뉴에서 비밀번호 재발급
                    </li>
                    <li
                      style={{
                        fontFamily: "Apple SD Gothic Neo",
                        fontSize: 13,
                        color: "#bf0039",
                      }}
                    >
                      포털에서 비밀번호를 변경 또는 재발급 받은 경우는 10분후에
                      로그인 하기 바랍니다.
                    </li>
                  </ul>
                </li>
                <li
                  style={{
                    backgroundImage:
                      'url("	https://sugang.korea.ac.kr/resources/img/login/bullet.png")',
                    backgroundRepeat: "no-repeat",
                    backgroundPositionY: "center",
                    fontSize: 14,
                    paddingLeft: 12,
                    fontFamily: "Apple SD Gothic Neo",
                    color: "#528ecc",
                    marginTop: 6,
                  }}
                >
                  국내 교류 학생의 학번 확인
                </li>
                <li
                  style={{
                    backgroundImage:
                      'url("	https://sugang.korea.ac.kr/resources/img/login/bullet.png")',
                    backgroundRepeat: "no-repeat",
                    backgroundPositionY: "center",
                    fontSize: 14,
                    paddingLeft: 12,
                    fontFamily: "Apple SD Gothic Neo",
                  }}
                >
                  Internet Explorer 10 이상의 버전, 화면 해상도 1920*1080에
                  최적화 되어 있습니다.
                </li>
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
            color: "#b9b9b9",
            lineHeight: 1.5,
          }}
        >
          02841 서울특별시 성북구 안암로 145 / TEL.02.3290.1114. /
          webmaster@korea.ac.kr
          <br />
          Copyright © 2023 BBang Co Co. All Rights Reserved
        </div>
      </div>
    </div>
  );
}
