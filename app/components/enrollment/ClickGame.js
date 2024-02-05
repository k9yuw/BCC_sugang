import {useState, useEffect} from "react";
import ResultPopUp from "./ResultPopUp";
import WaitingPopUp from "./WatingPopUp";

//신청 버튼
function ClickGame(){
  // const [clickTime, setClickTime] = useState(0);
  // const onClick = (event) => {
  //   // setClickTime(event.target.
  //   console.log(event);
  // };
  const [startTime, setStartTime] = useState(0);
  const [clickTime, setClickTime] = useState(0);
  const [startText, setStartText] = useState("타이머 시작");
  //시작 클릭 시 타이머(시간측정) 시작
  const startSugang = () => {
    const time = new Date();
    setStartTime(time.getTime());
    setClickTime(0);
    setStartText("다시 시작");
  };
  //신청 클릭 시 시작 시간과의 차(밀리초) 계산
  const onClick = () => {
    const tempTime = new Date();
    setClickTime(tempTime.getTime());

  };
  const timeTaken = clickTime - startTime
  console.log(`시작 ${startTime}`);
  console.log(`클릭 ${clickTime}`);
  console.log(timeTaken);
  //useEffect(() =>{

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
          onClick={onClick}>
            신청
        </button>
        <button
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
        </button>
        <div>
        <button onClick={startSugang}>{startText}</button>
      </div>
        {(startTime != 0 && clickTime !=0 && timeTaken< 1000) ? <ResultPopUp resultType = "toEarly"/> : null}
        {(startTime != 0 && clickTime !=0 && timeTaken > 1000) ? <WaitingPopUp timeTaken={timeTaken} rand={Math.random()}/> : null}
      </div>
      <div>
        <h3>클릭 시간: {(startTime != 0 && clickTime !=0 && timeTaken) >0 ? timeTaken/1000 : 0} 초</h3>
      </div>
    </div>
	);
}




export default ClickGame;