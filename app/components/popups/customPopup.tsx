import React from "react";
import Modal from "react-modal";
interface ModalProps {
  customPopupOpen: boolean;
  closeCustomPopup: () => void;
  textValue: string;
}

const CustomPopup: React.FC<ModalProps> = ({ customPopupOpen, closeCustomPopup, textValue }) => {
  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0,0,0,0.7)",
    },
    content: {
      backgroundColor: "white",
      width: "400px",
      height: "190px",
      margin: "auto",
      borderRadius: "8px",
      borderColor: "rgba(0,0,0,0.1)",
      boxShadow: "0, 2px 4px rgba(0,0,0,0.1)",
      padding: "8px",
    },
  };

  return (
    <div>
      <Modal
        isOpen={customPopupOpen}
        onRequestClose={() => closeCustomPopup}
        style={customStyles}
        ariaHideApp={false}
      >
        <div style={{
			backgroundColor:"white", 
			borderRadius: "8px",
			margin: "0",
			width:"100%",
			height: "100%",
			display: "flex",
			flexDirection: "column",
			alignItems: "stretch",
		}}>
			<div style={{margin: "4px 6px 4px 6px", textAlign:"left", fontSize: "17px", fontWeight:"600"}}>
				알림
			</div>
			<hr style={{marginTop: "8px", width: "95%", height: "1px", backgroundColor: "rgba(0,0,0,0.05)", border: "0",}}/>
			<div style={{
				height: "30px",
				margin: "20px 10px",
				paddingTop: "0px",
				textAlign: "left",
				fontSize: "14",
			}}>
				{textValue}
			</div>
			<hr style={{marginTop: "10px", width: "95%", height: "1px", backgroundColor: "rgba(0,0,0,0.05)", border: "0",}}/>
			<div style={{
				margin: "auto"
			}}>
				<button onClick={() => closeCustomPopup()}
					style={{
					border:"0",
					fontSize: "16px",
					backgroundColor: "white",
					color: "#a20131",
					cursor: "pointer",
				}}><strong>확인</strong>
				</button>
			</div>
		</div>
      </Modal>
    </div>
  );
};
export default CustomPopup;

//<span className="close" onClick={closeCustomPopup}>&times;</span>
