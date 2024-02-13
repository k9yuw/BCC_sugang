import React from "react";
import Modal from "react-modal";
interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

const FirstAlert: React.FC<ModalProps> = ({ isOpen, closeModal }) => {
  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0,0,0,0.7)",
    },
    content: {
      backgroundColor: "white",
      width: "500px",
      height: "250px",
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
        isOpen={isOpen}
        onRequestClose={() => closeModal}
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
          <div
            style={{
              margin: "10px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div
              style={{
                fontSize: "18px",
                textAlign: "right",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <span style={{ color: "#a20131", fontWeight: "700" }}>
                모의 수강신청
              </span>{" "}
              시스템
            </div>
          </div>
          <hr
            style={{
              marginTop: "0px",
              width: "95%",
              height: "2px",
              backgroundColor: "rgba(0,0,0,0.05)",
              border: "0",
            }}
          />
          <div
            style={{
              margin: "10px 10px",
              paddingTop: "5px",
              paddingBottom: "100px",
              textAlign: "left",
              fontSize: "16px",
              fontWeight: "500",
              height: "120px",
              paddingLeft: "40px",
              lineHeight: "1.5"
            }}
          >
            본 페이지는{" "}
            <span
              style={{ color: "#a20131", fontWeight: "800", 
              // lineHeight: "2" 
            }}
            >
              모의
            </span>{" "}
            수강신청 시스템입니다.
            <br />
            수강신청 결과에 대한 어떠한 책임도 지지 않습니다.
            <br />
            <strong>닉네임</strong>을 입력하고 <strong>로그인</strong>을 누르세요. 
            <div
            style = {{ fontSize: 12, paddingBottom: "20px"}}
            >
            <br />
            ※ 본 사이트는 개인정보를 수집하지 않습니다. 
            </div>

          </div>
          <hr
            style={{
              marginTop: "0px",
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
              onClick={() => closeModal()}
              style={{
                border: "0",
                fontSize: "18px",
                backgroundColor: "white",
                color: "#a20131",
                cursor: "pointer",
                letterSpacing: "5px",
                textAlign: "center",
                fontWeight: 700,
                paddingLeft: 5,
              }}
            >
              확인
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};
export default FirstAlert;

//<span className="close" onClick={closeModal}>&times;</span>
