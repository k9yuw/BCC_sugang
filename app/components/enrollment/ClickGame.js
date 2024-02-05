import {useState, useEffect} from "react";
// import SuccessOrFail from "./SuccessOrFail";
import ResultPopUp from "./ResultPopUp";
import WaitingPopUp from "./WatingPopUp";
import useClock from '../../hooks/useClock';

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
    const time = new Date(2024, 1, 13, 10, 0, 0);
    setStartTime(time.getTime());
    setClickTime(0);
    setStartText("다시 시작");
  };
  //신청 클릭 시 시작 시간과의 차(밀리초) 계산
  const { date } = useClock(); 
  const tempTime = date;
  const onClick = () => {
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
        <button onClick={startSugang}>{startText}</button>
      </div>
      <div>
        <button onClick={onClick}>신청</button>
        {(clickTime !=0 && timeTaken< 1000) ? <ResultPopUp resultType = "toEarly"/> : null}
        {(clickTime !=0 && timeTaken >= 1000) ? <WaitingPopUp timeTaken={timeTaken} rand={Math.random()}/> : null}
      </div>
      <div>
        <h3>클릭 시간: {timeTaken/1000} 초</h3>
      </div>
    </div>
	);
}


export default ClickGame;