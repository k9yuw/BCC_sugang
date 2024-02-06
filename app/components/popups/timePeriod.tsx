import React, {useState, PropsWithChildren } from "react";
import Image from "next/image";
import closeImage from "./closeIcon.png";
import Modal from 'react-modal';
import PeriodTimeTable from "../table/periodTimeTable/preiodTimeTable";

interface ModalDefaultType {
	onClickToggleModal: () => void;
}

export default function TimePeriod({onClickToggleModal, children,}: PropsWithChildren<ModalDefaultType>){
	const [open, setOpen] = useState(true);
	const customStyles={
		overlay: {
			backgroundColor: "rgba(0,0,0,0.7)",
		},
		content:{
			backgroundColor: "white",
			width:"650px",	
			height: "655px",
			margin: "auto",
			borderRadius: "8px",
			borderColor: "rgba(0,0,0,0.1)",
			boxShadow: "0, 2px 4px rgba(0,0,0,0.1)",
			padding: "0px",
		},
		
	};

	return (
    <div>
	  <Modal isOpen={true} onRequestClose={() => 
	  {
		if (onClickToggleModal) {
            onClickToggleModal();
	  }}}
		style={customStyles}>
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
			<div style={{margin: "13px 0px 13px 14px", textAlign:"left", fontSize: "17px", fontWeight: "200"}}>
			<span style={{marginRight: "350px"}}>
				<strong>교시확인표(Course Time table)</strong>
			</span>
			<span style={{margin:"0px", padding: "0px"}} onClick={() => {if (onClickToggleModal) onClickToggleModal();}}>
				<Image
                      src={closeImage}
                      alt="check"
                      width={20}
                      height={20}
                    />
			</span>
			</div>
			<div style={{marginBottom: "0px",}}>
			<hr style={{marginTop: "0px", marginBottom: "0px", width: "100%", height: "1px", backgroundColor: "rgba(0,0,0,0.1)", border: "0",}}/>
			</div>
			<div>
				<PeriodTimeTable/>
			</div>
		</div>
      </Modal>
    </div>
  )
}

