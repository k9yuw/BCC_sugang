"use client";

import NavBar from "../components/NavBar";
import Header from "../components/Header";
import Body from "../components/Body";
import { useSpring, animated } from "react-spring";
import { useDrag } from "react-use-gesture";
import Navysm from "../components/clock/navysm";

export default function Home() {
  const logoPos = useSpring({ x: 0, y: 0 });
  const bindLogoPos = useDrag((params) => {
    logoPos.x.set(params.offset[0]);
    logoPos.y.set(params.offset[1]);
  });
  return (
    <div style={{ display: "flex", fontFamily: "Segeo UI" }}>
      <NavBar />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Header />
        <Body />
        <animated.div
          {...bindLogoPos()}
          style={{
            x: logoPos.x,
            y: logoPos.y,
            cursor: "grab",
            marginLeft: 30,
            width: 400,
          }}
        >
          <Navysm />
        </animated.div>
      </div>
    </div>
  );
}
