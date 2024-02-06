"use client"

import styles from './periodTimeTable.module.css'

export default function PeriodTimeTable(){
	return(
	<div>
	<div //수강신청 내역 테이블
		style={{
		margin: "20px 20px 20px 20px auto",
		paddingTop: "18px",
		paddingLeft: "15px",
		width: "97.5%",
		height: "600px",
		}}
	>
		<div
		style={{
		borderTop: "1px solid black",
		margin: "0px",
		width: "100%",
		}}
		></div>
		<table
		style={{
			// borderLeft: "1px solid #ccc",
			borderCollapse: "collapse",
			width: "100%",
			height: "560px",
			boxSizing: "content-box",
			tableLayout: "fixed",
			overflow: "scroll",
			fontSize: "12px",
			textAlign: "center",	
		}}
		>
			<thead style={{ 
				height: "60px",
				backgroundColor: "#f2eee8" }}>
				<tr className={styles.indexTop}>
					<td rowSpan={2} className={styles.indexTop} style={{width: "86.15px",}}>
						교시<br/>
						period
					</td>
					<td colSpan={2} className={styles.indexTop}>정규학기 (Regular Semester)</td>
					<td rowSpan={2} className={styles.indexTop}>계절학기<br/>Summer/Winter<br/>sessions</td>
				</tr>
				<tr className={styles.indexTop}>
					<td className={styles.indexTop}>서울 (Seoul)</td>
					<td className={styles.indexTop}>세종 (Sejong)</td>
				</tr>
			</thead>
		<tbody>
			<tr>
				<th className={styles.inner} style={{backgroundColor: "rgb(249,249,249)", fontWeight: "bold"}}>0</th>
				<th className={styles.inner} >08:00~08:50</th>
				<th className={styles.inner} ></th>
				<th className={styles.inner} ></th>
			</tr>
			<tr>
				<th className={styles.inner} style={{backgroundColor: "rgb(249,249,249)", fontWeight: "bold"}}>1</th>
				<th className={styles.inner} >09:00~10:15</th>
				<th className={styles.inner} >09:00~09:50</th>
				<th className={styles.inner} >09:00~09:50</th>
			</tr>
			<tr>
				<th className={styles.inner} style={{backgroundColor: "rgb(249,249,249)", fontWeight: "bold"}}>2</th>
				<th className={styles.inner} >10:30~11:45</th>
				<th className={styles.inner} >10:00~10:50</th>
				<th className={styles.inner} >10:00~10:50</th>
			</tr>
			<tr>
				<th className={styles.inner} style={{backgroundColor: "rgb(249,249,249)", fontWeight: "bold"}}>3</th>
				<th className={styles.inner} >12:00~13:15</th>
				<th className={styles.inner} >11:00~11:50</th>
				<th className={styles.inner} >11:00~11:50</th>
			</tr>
			<tr>
				<th className={styles.inner} style={{backgroundColor: "rgb(249,249,249)", fontWeight: "bold"}}>4</th>
				<th className={styles.inner} >13:30~14:45</th>
				<th className={styles.inner} >12:00~12:50</th>
				<th className={styles.inner} >12:00~12:50</th>
			</tr>
			<tr>
				<th className={styles.inner} style={{backgroundColor: "rgb(249,249,249)", fontWeight: "bold"}}>5</th>
				<th className={styles.inner} >15:00~16:15</th>
				<th className={styles.inner} >13:00~13:50</th>
				<th className={styles.inner} >13:00~13:50</th>
			</tr>
			<tr>
				<th className={styles.inner} style={{backgroundColor: "rgb(249,249,249)", fontWeight: "bold"}}>6</th>
				<th className={styles.inner} >16:30~17:45</th>
				<th className={styles.inner} >14:00~14:50</th>
				<th className={styles.inner} >14:00~14:50</th>
			</tr>
			<tr>
				<th className={styles.inner} style={{backgroundColor: "rgb(249,249,249)", fontWeight: "bold"}}>7</th>
				<th className={styles.inner} >18:00~18:50</th>
				<th className={styles.inner} >15:00~15:50</th>
				<th className={styles.inner} >15:00~15:50</th>
			</tr>
			<tr>
				<th className={styles.inner} style={{backgroundColor: "rgb(249,249,249)", fontWeight: "bold"}}>8</th>
				<th className={styles.inner} >19:00~19:50</th>
				<th className={styles.inner} >16:00~16:50</th>
				<th className={styles.inner} >16:00~16:50</th>
			</tr>
			<tr>
				<th className={styles.inner} style={{backgroundColor: "rgb(249,249,249)", fontWeight: "bold"}}>9</th>
				<th className={styles.inner} >20:00~20:50</th>
				<th className={styles.inner} >17:00~17:50</th>
				<th className={styles.inner} ></th>
			</tr>
			<tr>
				<th className={styles.inner} style={{backgroundColor: "rgb(249,249,249)", fontWeight: "bold"}}>10</th>
				<th className={styles.inner} >21:00~21:50</th>
				<th className={styles.inner} >18:00~18:50</th>
				<th className={styles.inner} ></th>
			</tr>
			<tr>
				<th className={styles.inner} style={{backgroundColor: "rgb(249,249,249)", fontWeight: "bold"}}>11</th>
				<th className={styles.inner} >22:00~22:50</th>
				<th className={styles.inner} >19:00~19:50</th>
				<th className={styles.inner} ></th>
			</tr>
			<tr>
				<th className={styles.inner} style={{backgroundColor: "rgb(249,249,249)", fontWeight: "bold"}}>12</th>
				<th className={styles.inner} ></th>
				<th className={styles.inner} >20:00~20:50</th>
				<th className={styles.inner} ></th>
			</tr>
			<tr>
				<th className={styles.inner} style={{backgroundColor: "rgb(249,249,249)", fontWeight: "bold"}}>13</th>
				<th className={styles.inner} ></th>
				<th className={styles.inner} >21:00~21:50</th>
				<th className={styles.inner} ></th>
			</tr>
		</tbody>
		</table>
		<div
		style={{
		margin: "10px",
		height: "30px",
		width: "100%",
		}}
		></div>
		</div>
	</div>
	);
}