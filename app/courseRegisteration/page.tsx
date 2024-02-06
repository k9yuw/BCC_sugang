"use client";

import NavBar from "../components/NavBar";
import Header from "../components/Header";
import BodyTop from "../components/Body";

export default function Home() {
  return (
    <div style={{ display: "flex", fontFamily: "Segeo UI" }}>
      <NavBar />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Header />
        <BodyTop />
      </div>
    </div>
  );
}
