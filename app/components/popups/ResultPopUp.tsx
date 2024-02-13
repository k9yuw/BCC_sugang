import React, { Dispatch, SetStateAction, useState } from "react";
import Modal from "react-modal";

function ResultPopUp({
  resultType,
  setResultType,
  resultOpen,
  setResultOpen,
}: {
  resultType: string;
  resultOpen: boolean;
  setResultOpen: Dispatch<SetStateAction<boolean>>;
  setResultType: Dispatch<SetStateAction<string>>;
}) {
  const [] = useState(true);
  let textValueKR = "신청 기간이 아닙니다!";
  let textValueEN = "(Not Period!)";

  const customStyles = {
    zIndex: 2,
    overlay: {
      backgroundColor: "rgba(0,0,0,0.7)",
    },
    content: {
      backgroundColor: "rgb(228,228,228)",
      width: "450px",
      height: "190px",
      margin: "auto",
      borderRadius: "8px",
      borderColor: "rgba(0,0,0,0.1)",
      boxShadow: "0, 2px 4px rgba(0,0,0,0.1)",
      padding: "0px",
    },
  };
  
  if (resultType === "toEarly") {
    textValueKR = "신청 기간이 아닙니다!";
    textValueEN = "(Not Period!)";
  }
  else if (resultType === "success") {
    textValueKR = "신청되었습니다.";
    textValueEN = "The registration has been completed.";
  } 
    else if (resultType === "fail") {
    textValueKR = "제한인원이 마감되었습니다.";
    textValueEN = "Enrollment for the course has been reached.";
  }

  return (
    <div>
      {/* <button onClick={()=> setResultOpen(true)}>Modal Open</button> */}
      <Modal
        isOpen={resultOpen}
        // onRequestClose={() => setResultOpen(false)}
        style={customStyles}
        ariaHideApp={false}
      >
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "8px",
            margin: "0",
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "stretch",
          }}
        >
          <div style={{ fontSize: "17px", fontWeight: "600", marginLeft: "14px", marginTop: "10px", marginBottom: "8px", textAlign: "left" }}>
            알림
          </div>
          <hr
            style={{
              width: "100%",
              height: "1px",
              backgroundColor: "rgba(0,0,0,0.05)",
              border: "0",
            }}
          />
          <div
            style={{
              margin: "5px 10px 20px 10px",
              paddingTop: "5px",
              paddingLeft: "3px",
              textAlign: "left",
              letterSpacing: "-2",
              fontSize: "14px",
            }}
          >
            {textValueKR}
            <br />
            {textValueEN}
          </div>
          <hr
            style={{
              width: "100%",
              height: "1px",
              backgroundColor: "rgba(0,0,0,0.05)",
              border: "0",
            }}
          />
          <div
            style={{
              margin: "auto",
              marginTop: "7px",
            }}
          >
            <button
              onClick={() => setResultOpen(false)}
              style={{
                width: "60px",
                height: "20px",
                border: "0",
                fontSize: "15px",
                backgroundColor: "white",
                color: "#a20131",
                cursor: "pointer",
                letterSpacing: "1px",
                fontWeight: "600",
              }}
            >
              확인
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default ResultPopUp;
