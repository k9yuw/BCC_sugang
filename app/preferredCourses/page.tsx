"use client";

import NavBar from "../components/NavBar";
import Header from "../components/Header";
import Body from "../components/Body";
import MyLayout from "../components/MyLayout";

export default function Home() {
  return (
    <MyLayout>
      <div style={{ display: "flex", fontFamily: "Segeo UI" }}>
        <NavBar />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Header />
          <Body />
        </div>
      </div>
    </MyLayout>
  );
}
