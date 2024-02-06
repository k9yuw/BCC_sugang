"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { ChangeEvent, MouseEvent, useEffect, useState } from "react";
import Navysm from "../components/clock/navysm";
import PreferredTimeTable from "../components/table/preferredTimeTable/preferredTimeTable";
import NavBar from "../components/NavBar";
import Header from "../components/Header";
import BodyTop from "../components/Body";
import courseData from "../constant/courseDataInterface";
import PreferredCoursesBottom from "../components/Bottom/preferredCoursesBottom";

export default function Home() {
  const [tableMouseEnter, setTableMouseEnter] = useState(false);
  const [maxCreditLimit, setMaxCreditLimit] = useState<string>("");
  const [preferredCourses, setPreferredCourses] = useState<courseData[]>([]);
  const [preferredCredit, setPreferredCredit] = useState<number>(0);

  useEffect(() => {
    const preferredCoursesCached = localStorage.getItem("preferredCourses");
    const data = JSON.parse(preferredCoursesCached ?? "[]") as courseData[];
    setPreferredCourses(data);
    localStorage.setItem("preferredCourses", JSON.stringify(data));
    const preferredCreditArray = data.map((prop) => prop.credit);
    setPreferredCredit(preferredCreditArray.reduce((a, b) => a + b, 0));
  }, []);

  useEffect(() => {
    setMaxCreditLimit(localStorage.getItem("maxCreditLimit") ?? "19");
  }, []);

  return (
    <div style={{ display: "flex" }}>
      <NavBar />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Header />
        <BodyTop />
        <PreferredCoursesBottom />
      </div>
    </div>
  );
}
