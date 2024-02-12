"use client";

import NavBar from "../components/NavBar";
import Header from "../components/Header";
import Body from "../components/Body";
import MyLayout from "../components/MyLayout";
import { useEffect, useState } from "react";
import courseData from "../constant/courseDataInterface";

export default function Home() {
  const [registeredCourses, setRegisteredCourses] = useState<courseData[]>([]);
  const [registeredNum, setRegisteredNum] = useState<number>(0);
  const [preferredCourses, setPreferredCourses] = useState<courseData[]>([]);
  const [resultType, setResultType] = useState<string>("toEarly");
  const plusRegistered = () => {
    setRegisteredNum(prevNumber => prevNumber + 1);
  };

  useEffect(() => {
    const preferredCoursesCached = localStorage.getItem("preferredCourses");
    if (!preferredCoursesCached) {
      localStorage.setItem("preferredCourses", "[]");
    }
    const data = JSON.parse(preferredCoursesCached ?? "[]") as courseData[];
    setPreferredCourses(data);
  }, [setPreferredCourses]);

  useEffect(() => {
    const registeredCoursesCached = localStorage.getItem("registeredCourses");
    if (!registeredCoursesCached) {
      localStorage.setItem("registeredCourses", "[]");
    }
    const data = JSON.parse(registeredCoursesCached ?? "[]") as courseData[];
    setRegisteredCourses(data);
  }, []);

  return (
    <MyLayout>
      <div style={{ display: "flex", fontFamily: "Segeo UI" }}>
        <NavBar />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Header />
          <Body
            registeredCourses={registeredCourses}
            setRegisteredCourses={setRegisteredCourses}
            preferredCourses={preferredCourses}
            setPreferredCourses={setPreferredCourses}
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
