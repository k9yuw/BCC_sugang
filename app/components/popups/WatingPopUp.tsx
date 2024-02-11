import { useState, useEffect, Dispatch, SetStateAction } from "react";
import Modal from "react-modal";
import ResultPopUp from "./ResultPopUp";


function WaitingPopUp({
  timeTaken,
  rand,
  waitingOpen,
  setWaitingOpen,
  resultType,
  setResultType,
}: {
  timeTaken: number;
  rand: number;
  waitingOpen: boolean;
  setWaitingOpen: Dispatch<SetStateAction<boolean>>;
  resultType: string;
  setResultType: Dispatch<SetStateAction<string>>;
}) {
  const timePassed = Math.ceil((timeTaken * 3) / 1000);
  const time = (timePassed >= 7 ? Math.ceil(4 + timeTaken % 3) : timePassed);
  const [waitingTime, setWaitingTime] = useState(time);
  const [resultPopupOpen, setResultPopupOpen] = useState(waitingOpen);
  // const [resultType, setResultType] = useState<"success" | "fail">("success");

  useEffect(() => {
    console.log("RENDERED!");
  }, []);

  let progress = 0;

  const peopleInfront = Math.ceil(waitingTime * rand/7 * 4600);
  const peopleBack = Math.ceil((time - Math.ceil(waitingTime)) * rand/7 * 6000);

  const customStyles = {
    zIndex: 2,
    overlay: {
      backgroundColor: "rgba(0,0,0,0.1)",
    },
    content: {
      backgroundColor: "#EBF0EF",
      width: "500px",
      height: "230px",
      margin: "auto",
      borderRadius: "7px",
      borderColor: "rgba(0,0,0,0.1)",
      boxShadow: "0, 2px 4px rgba(0,0,0,0.2)",
      padding: "8px",
    },
  };



  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (waitingOpen) {
      timer = setTimeout(() => {
        setWaitingOpen(false);
      }, time * 1000);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [waitingOpen, setWaitingOpen, time, timeTaken]);

  useEffect(() => {
    const timer = setInterval(() => {
      setWaitingTime((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  progress = (1 - waitingTime / time) * 100;
  // console.log(`progress ${progress}`);
  // console.log(waitingTime);
  // console.log(time);

  return (
    <div>
      {/* <button onClick={()=> setWaitingOpen(true)}>Modal Open</button> */}
      <Modal
        isOpen={waitingOpen}
        // onRequestClose={() => setWaitingOpen(false)}
        style={customStyles}
        ariaHideApp={false}
      >
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "5px",
            margin: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "stretch",
            letterSpacing: "1px",
            wordSpacing: "1px",
          }}
        >
          <h3
            style={{
              color: "rgb(23,62,110)",
              margin: 0,
              paddingTop: 30,
              paddingLeft: 30,
            }}
          >
            서비스 접속대기 중입니다.
          </h3>
          <div style={{ width: "96%", textAlign: "right" }}>
            예상대기시간 : <u>{waitingTime}초</u>
          </div>
          <div
            style={{
              margin: "auto",
              width: "90%",
              height: "22px",
              borderRadius: "10px",
              backgroundColor: "rgb(177,219,253)",
              marginBottom: "0",
            }}
          >
            <div
              style={{
                width: `${progress}%`,
                height: "22px",
                borderRadius: "10px",
                borderTopRightRadius: "0",
                borderBottomRightRadius: "0",
                backgroundColor: "rgb(37,80,161)",
              }}
            ></div>
          </div>
          <div
            style={{
              backgroundColor: "rgb(237,237,237)",
              margin: "auto",
              marginTop: "10px",
              width: "90%",
              height: "95px",
              borderRadius: "2px",
              fontSize: "13px",
            }}
          >
            <div
              style={{
                margin: "10px",
              }}
            >
              고객님 앞에 <strong>{peopleInfront}</strong>명, 뒤에{" "}
              <strong>{peopleBack}</strong>명의 대기자가 있습니다.
              <br />
              현재 접속 사용자가 많아 대기 중이며, 잠시만 기다리시면
              <br />
              서비스로 자동 접속 됩니다.
            </div>
            <div
              style={{
                color: "rgb(37,80,161)",
                margin: "5px",
                textAlign: "center",
              }}
            >
              ※재 접속하시면 대기시간이 더 길어집니다. [중지]
            </div>
          </div>
        </div>
      </Modal>
      {waitingTime >= 0 && !waitingOpen && resultPopupOpen && (
        <ResultPopUp
          resultType={resultType}
          setResultType={setResultType}
          resultOpen={resultPopupOpen}
          setResultOpen={setResultPopupOpen}
        />
      ) }
    </div>
  );
}

export default WaitingPopUp;
