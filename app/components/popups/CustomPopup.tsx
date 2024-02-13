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
		width: "450px",
		height: "190px",
		margin: "auto",
		borderRadius: "8px",
		borderColor: "rgba(0,0,0,0.1)",
		boxShadow: "0, 2px 4px rgba(0,0,0,0.1)",
		padding: "0px",
    },
  };
  return (
    <div>
      <Modal
        isOpen={customPopupOpen}
        // onRequestClose={() => closeCustomPopup}
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
			<div style={{
				margin: "5px 10px 20px 10px",
				paddingTop: "5px",
				paddingLeft: "3px",
				textAlign: "left",
				letterSpacing: "-2",
				fontSize: "14px",
				height:"43px",
			}}>
				{textValue}
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
				<button onClick={() => closeCustomPopup()}
					style={{
					border:"0",
					fontSize: "15px",
					backgroundColor: "white",
					color: "#a20131",
					cursor: "pointer",
					letterSpacing: "1px",
                	fontWeight: "600",
				}}><strong>확인</strong>
				</button>
			</div>
		</div>
      </Modal>
    </div>
  );
};
export default CustomPopup;
