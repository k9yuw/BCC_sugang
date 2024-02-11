import React, { Dispatch, SetStateAction, useState } from "react";
import Modal from "react-modal";

function ResultPopUp({
  resultType,
  resultOpen,
  setResultOpen,
}: {
  resultType: string;
  resultOpen: boolean;
  setResultOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const [] = useState(true);
  let textValueKR = "지금은 수강신청 기간이 아닙니다.";
  let textValueEN = "It is not the registration period";

  const customStyles = {
    zIndex: 2,
    overlay: {
      backgroundColor: "rgba(0,0,0,0.7)",
    },
    content: {
      backgroundColor: "rgb(228,228,228)",
      width: "500px",
      height: "230px",
      margin: "auto",
      borderRadius: "8px",
      borderColor: "rgba(0,0,0,0.1)",
      boxShadow: "0, 2px 4px rgba(0,0,0,0.1)",
      padding: "8px",
    },
  };
  
  if (resultType === "toEarly") {
    textValueKR = "지금은 수강신청 기간이 아닙니다.";
    textValueEN = "It is not the registration period";
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
        onRequestClose={() => setResultOpen(false)}
        style={customStyles}
        appElement={document.getElementById("root") ?? undefined}
      >
        <div
          style={{
            backgroundColor: "rgb(228,228,228)",
            borderRadius: "8px",
            margin: "0",
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "stretch",
          }}
        >
          <h3 style={{ margin: "10px", textAlign: "left" }}>
            <strong>알림</strong>
          </h3>
          <hr
            style={{
              marginTop: "10px",
              width: "95%",
              height: "2px",
              backgroundColor: "rgba(0,0,0,0.05)",
              border: "0",
            }}
          />
          <div
            style={{
              margin: "20px 10px",
              paddingTop: "0px",
              textAlign: "left",
              fontSize: "14",
            }}
          >
            {textValueKR}
            <br />
            {textValueEN}
          </div>
          <hr
            style={{
              marginTop: "10px",
              width: "95%",
              height: "2px",
              backgroundColor: "rgba(0,0,0,0.05)",
              border: "0",
            }}
          />
          <div
            style={{
              margin: "auto",
            }}
          >
            <button
              onClick={() => setResultOpen(false)}
              style={{
                width: "50px",
                height: "30px",
                border: "0",
                fontSize: "17px",
                backgroundColor: "rgb(228,228,228)",
                color: "#a20131",
                cursor: "pointer",
              }}
            >
              <strong>확인</strong>
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default ResultPopUp;
