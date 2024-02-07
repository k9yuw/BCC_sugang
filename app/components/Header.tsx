"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Header() {
  const router = useRouter();
  const [id, setId] = useState("");
  useEffect(() => {
    setId(localStorage.getItem("username") ?? "");
  }, []);

  return (
    <div //헤더
      style={{
        width: "100%",
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
          fontSize: "20px",
          fontWeight: "500",
          letterSpacing: -1,
        }}
      >
        모의 수강신청 시스템
      </span>
      <div
        style={{
          height: 60,
          width: 500,
          marginLeft: "auto",
          backgroundImage: `url("https://sugang.korea.ac.kr/resources/img/contents/bg-select.png")`,
          backgroundRepeat: "no-repeat",
          backgroundPositionX: "right",
          backgroundPositionY: "center",
          lineHeight: 3.5,
          textAlign: "right",
          paddingRight: 13,
        }}
      >
        {id}
      </div>
      <button
        onClick={() => {
          router.push("/");
        }}
        style={{
          width: "80px",
          height: 30,
          paddingTop: 0,
          paddingRight: 5,
          paddingBottom: 2,
          paddingLeft: 5,
          marginLeft: 15,
          fontSize: "12px",
          backgroundColor: "#876243",
          color: "#fff",
          borderWidth: "thin",
          borderTopColor: "#876243",
          borderRightColor: "#876243",
          borderBottomColor: "#876243",
          borderLeftColor: "#876243",
          borderStyle: "solid",
          lineHeight: 2,
          cursor: "pointer",
        }}
      >
        로그아웃
      </button>
    </div>
  );
}
