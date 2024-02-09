import React from "react";
import "./globals.css";
import Clock from "./clock";

const Navysm = ({}) => {
  return (
    <>
      <div className="shadow">
        <div className="browser-frame chrome">
          <div className="frame-bar">
            <div className="tab-holder">
              <div className="tab">
                <div className="inner"></div>
                <span>네이비즘 서버시간</span>
              </div>
            </div>
          </div>
          <div className="top-bar">
            <div className="icon-container">
              {/* <FontAwesomeIcon
                icon={faArrowLeft}
                className="left-bt"
                size="2xs"
              /> */}
              {/* <FontAwesomeIcon
                icon={faArrowRight}
                className="left-bt"
                size="2xs"
              /> */}
              {/* <FontAwesomeIcon
                icon={faRefresh}
                className="left-bt"
                size="2xs"
              /> */}
              <div style={{ display: "flex" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  style={{
                    width: 23,
                    height: 23,
                    color: "#808080",
                    marginRight: 4,
                  }}
                >
                  <path
                    fillRule="evenodd"
                    d="M14 8a.75.75 0 0 1-.75.75H4.56l3.22 3.22a.75.75 0 1 1-1.06 1.06l-4.5-4.5a.75.75 0 0 1 0-1.06l4.5-4.5a.75.75 0 0 1 1.06 1.06L4.56 7.25h8.69A.75.75 0 0 1 14 8Z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  style={{
                    width: 23,
                    height: 23,
                    color: "#808080",
                    marginRight: 5,
                  }}
                >
                  <path
                    fillRule="evenodd"
                    d="M2 8a.75.75 0 0 1 .75-.75h8.69L8.22 4.03a.75.75 0 0 1 1.06-1.06l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06-1.06l3.22-3.22H2.75A.75.75 0 0 1 2 8Z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  style={{ width: 23, height: 23, color: "#808080" }}
                >
                  <path
                    fillRule="evenodd"
                    d="M13.836 2.477a.75.75 0 0 1 .75.75v3.182a.75.75 0 0 1-.75.75h-3.182a.75.75 0 0 1 0-1.5h1.37l-.84-.841a4.5 4.5 0 0 0-7.08.932.75.75 0 0 1-1.3-.75 6 6 0 0 1 9.44-1.242l.842.84V3.227a.75.75 0 0 1 .75-.75Zm-.911 7.5A.75.75 0 0 1 13.199 11a6 6 0 0 1-9.44 1.241l-.84-.84v1.371a.75.75 0 0 1-1.5 0V9.591a.75.75 0 0 1 .75-.75H5.35a.75.75 0 0 1 0 1.5H3.98l.841.841a4.5 4.5 0 0 0 7.08-.932.75.75 0 0 1 1.025-.273Z"
                    clipRule="evenodd"
                  />
                </svg>
                <div className="address-field fa fa-star-o">
                  <span className="tab-title">https://time.navyism.com/</span>
                </div>
                <div className="menu-bt">
                  <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <main>
          <div className="clock-container" style={{ backgroundColor: "white" }}>
            <Clock />
          </div>
        </main>
      </div>
    </>
  );
};

export default Navysm;
