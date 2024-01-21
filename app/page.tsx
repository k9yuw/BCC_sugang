"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";

export default function Home() {
  const [language, setLanguage] = useState<"eng" | "kor">("kor");
  const [id, setId] = useState("");
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(id);
  };

  return (
    <div>
      <div
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
      <div
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
              <form method="post" autoComplete="off" onSubmit={handleSubmit}>
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
                        // box-shadow: 0 0 0 1px blue;
                        // border: 4px solid green;
                        // background-color: red;
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
                  <small style={{ fontWeight: "lighter", fontSize: 12 }}>Login</small>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div
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
          <h1>
            수강신청 안내{" "}
            <small style={{ fontSize: 15, fontWeight: "lighter" }}>
              Course Registration Schedule
            </small>
          </h1>
          <div style={{ marginTop: 5, marginBottom: 60 }}>
            <div>
              <h2>학부 수강신청 일정</h2>
              <div>
                <p>
                  <span>학부 수강신청 안내</span>
                  <Image
                    alt="more"
                    src={
                      "https://sugang.korea.ac.kr/resources/img/login/btn-more.png"
                    }
                    width={60}
                    height={22}
                  />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
