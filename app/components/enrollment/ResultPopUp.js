import React, { useState } from 'react';
import Modal from 'react-modal';

function ResultPopUp({resultType}) {
	const [resultOpen, setResultOpen] = useState(true);
	let textValueKR = "지금은 수강신청 기간이 아닙니다.";
	let textValueEN = "It is not the registration period";

	const customStyles={
		overlay: {
			backgroundColor: "rgba(0,0,0,0.7)",
		},
		content:{
			backgroundColor: "rgb(228,228,228)",
			width:"550px",	
			height: "230px",
			margin: "auto",
			borderRadius: "8px",
			borderColor: "rgba(0,0,0,0.1)",
			boxShadow: "0, 2px 4px rgba(0,0,0,0.1)",
			padding: "8px",
		},
		
	};
	if (resultType === "success")
	{
		textValueKR = "신청되었습니다.";
		textValueEN = "The registration has been completed.";
	}
	else if (resultType === "fail")
	{
		textValueKR = "제한인원이 마감되었습니다.";
		textValueEN = "Enrollment for the course has been reached.";
	}

  return (
    <div>
      {/* <button onClick={()=> setResultOpen(true)}>Modal Open</button> */}
	  <Modal isOpen={resultOpen} onRequestClose={() => setResultOpen(false)}
		style={customStyles}
		appElement={document.getElementById('root')}>
		<div style={{
			backgroundColor:"rgb(228,228,228)", 
			borderRadius: "8px",
			margin: "0",
			width:"550px",
			height: "230px",
			display: "flex",
			flexDirection: "column",
			alignItems: "stretch",
		}}>
			<h3 style={{margin: "10px", textAlign:"left"}}>
				<strong>알림</strong>
			</h3>
			<hr style={{marginTop: "15px", width: "95%", height: "2px", backgroundColor: "rgba(0,0,0,0.05)", border: "0",}}/>
			<div style={{
				margin: "20px 10px",
				paddingTop: "5px",
				textAlign: "left",
				fontSize: "14",
			}}>
				{textValueKR}<br/>
				{textValueEN}
			</div>
			<hr style={{marginTop: "25px", marginBottom: "10px", width: "95%", height: "2px", backgroundColor: "rgba(0,0,0,0.05)", border: "0",}}/>
			<div style={{
				margin: "auto"
			}}>
				<button onClick={() => setResultOpen(false)}
					type="text" style={{
					width: "50px",
					height: "30px",
					border:"0",
					fontSize: "17px",
					backgroundColor: "rgb(228,228,228)",
					color: "#a20131",
				}}><strong>확인</strong>
				</button>
			</div>
		</div>
      </Modal>
    </div>
  )
}

export default ResultPopUp