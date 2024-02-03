import { useState, useEffect } from 'react';
import Modal from 'react-modal';
import ResultPopUp from './ResultPopUp';

function WaitingPopUp({timeTaken, rand}) {
	const time = Math.ceil(timeTaken*3 /1000);
	const [waitingOpen, setWaitingOpen] = useState(true);
	const [success, setSuccess] = useState(false);
	const [waitingTime, setWaitingTime] = useState(time);
	
	let progress = 0;

	const peopleInfront = Math.ceil(waitingTime*rand*500);;
	const peopleBack = Math.ceil((time - Math.ceil(waitingTime))*rand*600);


	const customStyles={
		overlay: {
			backgroundColor: "rgba(0,0,0,0.1)",
		},
		content:{
			backgroundColor: "rgba(0,0,0,0.05)",
			width:"550px",
			height: "230px",
			margin: "auto",
			borderRadius: "8px",
			borderColor: "rgba(0,0,0,0.1)",
			boxShadow: "0, 2px 4px rgba(0,0,0,0.2)",
			padding: "8px",
		},	
	};
	
	useEffect(()=>{
		let timer = setTimeout(()=>{ 
			setWaitingOpen(false);
			// setWaitingTime(time);
			if(timeTaken < 2000)
				setSuccess(true);
			// else setSuccess(false);
		}, time*1000);
	  
		return ()=>{ clearTimeout(timer) }
	}, [waitingOpen]);

	useEffect(() =>{
		const timer = setInterval(() => {
			setWaitingTime((prev) => (prev>0) ? prev -1 : 0);
		  }, 1000);
		return () => {
			clearInterval(timer);
		};
	}, []);

	progress = (1- (waitingTime/time)) * 100;
	console.log(`progress ${progress}`);
	console.log(waitingTime);
	console.log(time);


  	return (
    <div>
      {/* <button onClick={()=> setWaitingOpen(true)}>Modal Open</button> */}
	  <Modal isOpen={waitingOpen} onRequestClose={() => setWaitingOpen(false)}
		style={customStyles}
		appElement={document.getElementById('root')}
		>
		<div style={{
			backgroundColor:"white", 
			borderRadius: "5px",
			margin: 0,
			width:"550px",
			height: "230px",
			display: "flex",
			flexDirection: "column",
			alignItems: "stretch",
		}}>
			<h3 style={{color: "rgb(23,62,110)",margin: 0, paddingTop: 30, paddingLeft:30}}>
				서비스 접속대기 중입니다.
			</h3>
			<div style={{width: "96%", textAlign:"right"}}>
				예상대기시간 : <u>{waitingTime}초</u>
			</div>
			<div style={{
				margin: "auto",
				width: "90%",
  				height: "22px",
				borderRadius: "10px",
				backgroundColor:"rgb(177,219,253)",
				marginBottom: "0",
			}}>
				<div style={{
					width: `${progress}%`,
					height: "22px",
					borderRadius: "10px",	
					borderTopRightRadius: "0",
					borderBottomRightRadius: "0",
					backgroundColor:"rgb(37,80,161)",
				}}>
				</div>
			</div>
			<div style={{
				backgroundColor:"rgb(237,237,237)", 
				margin: "auto",
				marginTop: "10px",
				width: "90%",
				height: "110px",
				borderRadius: "2px",
				fontSize: "14px",
			}}>
				<div style={{
					margin: "10px",
				}}>
					고객님 앞에 
					<strong>{peopleInfront}</strong>명, 뒤에 
					<strong>{peopleBack}</strong>명의 대기자가 있습니다.<br/>
					현재 접속 사용자가 많아 대기 중이며, 잠시만 기다리시면<br/>
					서비스로 자동 접속됩니다.
				</div>
				<div style={{
					color: "rgb(37,80,161)",
					margin: "5px",
					textAlign: "center"
				}}>
					※재 접속하시면 대기시간이 더 길어집니다. [중지]
				</div>
			</div>
		</div>
      </Modal>
	  {waitingTime <= 0 ? (success ? <ResultPopUp resultType={"success"}/> : <ResultPopUp resultType={"fail"}/>) : null}
    </div>
  )
}

export default WaitingPopUp