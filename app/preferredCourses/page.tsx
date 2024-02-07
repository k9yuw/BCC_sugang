"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { ChangeEvent, MouseEvent, useEffect, useState } from "react";
import Navysm from "../components/clock/navysm";
import PreferredTimeTable from "../components/table/preferredTimeTable/preferredTimeTable";
import NavBar from "../components/NavBar";
import Header from "../components/Header";
import Body from "../components/Body";
import BodyBottom from "../components/BodyBottomPreferred";

export default function Home() {
  return (
    <div style={{ display: "flex" }}>
      <NavBar />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Header />
        <Body />
      </div>
    </div>
  );
}
