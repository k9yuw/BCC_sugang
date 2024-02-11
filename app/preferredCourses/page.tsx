"use client";

import NavBar from "../components/NavBar";
import Header from "../components/Header";
import Body from "../components/Body";
import MyLayout from "../components/MyLayout";
import { useState } from "react";
import courseData from "../constant/courseDataInterface";

export default function Home() {
  const [registeredCourses, setRegisteredCourses] = useState<courseData[]>([]);
  const [registeredNum, setRegisteredNum] = useState<number>(0);
  const [resultType, setResultType] = useState<string>("toEarly");
  const plusRegistered = () => {
    setRegisteredNum(prevNumber => prevNumber + 1);
  };

  return (
    <MyLayout>
      <div style={{ display: "flex", fontFamily: "Segeo UI" }}>
        <NavBar />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Header />
          <Body
            registeredCourses={registeredCourses}
            setRegisteredCourses={setRegisteredCourses}
            resultType={resultType}
            setResultType={setResultType}
            registeredNum={registeredNum}
            plusRegistered={plusRegistered}
          />
        </div>
      </div>
    </MyLayout>
  );
}
