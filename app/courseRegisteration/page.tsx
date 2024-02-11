"use client";

import NavBar from "../components/NavBar";
import Header from "../components/Header";
import Body from "../components/Body";
import { useSpring, animated } from "react-spring";
import { useDrag } from "react-use-gesture";
import Navysm from "../components/clock/navysm";
import MyLayout from "../components/MyLayout";
import courseData from "../constant/courseDataInterface";
import { useEffect, useState } from "react";

export default function Home() {
  const [registeredCourses, setRegisteredCourses] = useState<courseData[]>([]);
  const [registeredCredit, setRegisteredCredit] = useState<number>(0);
  const logoPos = useSpring({ x: 0, y: 0 });
  const [resultType, setResultType] = useState<string>("toEarly");
  const bindLogoPos = useDrag((params) => {
    logoPos.x.set(params.offset[0]);
    logoPos.y.set(params.offset[1]);
  });

  useEffect(() => {
    const registeredCoursesCached = localStorage.getItem("registeredCourses");
    if (!registeredCoursesCached) {
      localStorage.setItem("registeredCourses", "[]");
    }
    const data = JSON.parse(registeredCoursesCached ?? "[]") as courseData[];
    setRegisteredCourses(data);
    const registeredCreditArray = data.map((prop) => prop.credit);
    setRegisteredCredit(registeredCreditArray.reduce((a, b) => a + b, 0));
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
            resultType={resultType} 
            setResultType={setResultType}
          />
          <animated.div
            {...bindLogoPos()}
            style={{
              x: logoPos.x,
              y: logoPos.y,
              cursor: "grab",
              marginLeft: "auto",
              marginRight: 30,
              marginTop: -10,
              width: 400,
              transform: logoPos.y.interpolate((y) => `translateY(-375px)`),
            }}
          >
            <Navysm
              registeredCourses={registeredCourses}
              setRegisteredCourses={setRegisteredCourses}
              resultType={resultType} 
              setResultType={setResultType}
            />
          </animated.div>
        </div>
      </div>
    </MyLayout>
  );
}
