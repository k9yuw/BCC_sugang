"use client";

import { useEffect, useState, useCallback } from "react";
import Navysm from "../components/clock/navysm";
import TimeTable from "../components/table/sugangTimeTable/timeTable";
import NavBar from "../components/NavBar";
import Header from "../components/Header";
import Body from "../components/Body";
import TimePeriod from "../components/popups/timePeriod";
import { GameProvider } from '../components/context/GameContext'

export default function Home() {
  return (
    <div style={{ display: "flex", fontFamily: "Segeo UI" }}>
      <NavBar />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Header />
        <Body />
      </div>
    </div>
  );
}
