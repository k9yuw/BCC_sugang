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
      height: "230px",
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
                모의 수강 신청
              </span>{" "}
              시스템
            </div>
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
              margin: "10px 10px",
              paddingTop: "10px",
              textAlign: "left",
              fontSize: "16px",
              fontWeight: "500",
              height: "100px",
              paddingLeft: "40px",
            }}
          >
            본 페이지는{" "}
            <span
              style={{ color: "#a20131", fontWeight: "800", lineHeight: "2" }}
            >
              모의
            </span>{" "}
            수강신청 시스템입니다.
            <br />
            수강 신청 결과에 대한 어떠한 책임도 지지 않습니다.
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
              onClick={() => closeModal()}
              style={{
                border: "0",
                fontSize: "17px",
                backgroundColor: "white",
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
};
export default FirstAlert;

//<span className="close" onClick={closeModal}>&times;</span>
