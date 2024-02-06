import {useState, useEffect} from "react";
import ResultPopUp from "./ResultPopUp";
import WaitingPopUp from "./WatingPopUp";

//신청 버튼
const ClickGame = ({ startTime, clickTime, register }) => {

  const timeTaken = clickTime - startTime
  console.log(`시작 ${startTime}`);
  console.log(`클릭 ${clickTime}`); 
  console.log(timeTaken); 

	return (
		<div>
      <div>
        <button 
          style={{height: 30,
            width: 70,
            fontSize: 12,
            backgroundColor: "#a20131",
            border: 0,
            color: "#fff",
            marginTop: "14.5px",
            marginRight: 3,
            cursor: "pointer",
            paddingTop: "0px",
          }} 
          onClick={register}>
            신청
        </button>
        {/* <button
          style={{
            height: 30,
            width: 70,
            fontSize: 12,
            border: 1,
            backgroundColor: "#f9f9f9",
            borderStyle: "solid",
            borderColor: "#ccc",
            marginTop: "14.5px",
            marginLeft: 1,
            color: "#666",
            cursor: "pointer",  paddingTop: "0px",
          }}
        >
          초기화
        </button> */}
        {/* 타이머시작 버튼 일단 주석처리 */}
        {/* <div>
        <button onClick={startSugang}>{startText}</button>
      </div>
        {(startTime != 0 && clickTime !=0 && timeTaken< 1000) ? <ResultPopUp resultType = "toEarly"/> : null}
        {(startTime != 0 && clickTime !=0 && timeTaken > 1000) ? <WaitingPopUp timeTaken={timeTaken} rand={Math.random()}/> : null} */}
      </div>
      {/* <div>
        <h3>클릭 시간: {(startTime != 0 && clickTime !=0 && timeTaken) >0 ? timeTaken/1000 : 0} 초</h3>
      </div> */}
    </div>
	);
}


export default ClickGame;