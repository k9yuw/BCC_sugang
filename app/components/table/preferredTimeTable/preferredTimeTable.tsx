"use client"

import styles from './preferredTimeTable.module.css'

// const innerColor = new Array(63).fill('white');
// const colorKind = ["#D63D2F", "#E06616", "#E0A605", "#789C0C", "#1879D3"];


export default function PreferredTimeTable(){
	
	
	return(
	<div>
	<div //수강신청 내역 테이블
		style={{
		borderTop: "1px solid black",
		marginTop: "10px",
		width: "100%",
		height: "468px",
		}}
	>
		<table
		style={{
			// borderLeft: "1px solid #ccc",
			borderCollapse: "collapse",
			width: "100%",
			height: "100%",
			boxSizing: "content-box",
			tableLayout: "fixed",
			overflow: "scroll",
			fontSize: "12px",
			textAlign: "center",
		}}
		>
			<thead style={{ 
				height: "30px",
				backgroundColor: "#f2eee8" }}>
				<tr>
					<th className={styles.indexTop}>
						교시
					</th>
					<th className={styles.indexTop}>
						월
					</th>
					<th className={styles.indexTop}>
						화
					</th>
					<th className={styles.indexTop}>
						수
					</th>
					<th className={styles.indexTop}>
						목
					</th>
					<th className={styles.indexTop}>
						금
					</th>
					<th className={styles.indexTop} style={{borderRight: "0"}}>
						토
					</th>
				</tr>
			</thead>
		<tbody>
			<tr>
				<th className={styles.inner} style={{backgroundColor: "rgb(249,249,249)"}}>1</th>
				<th className={styles.inner} ></th>
				<th className={styles.inner} ></th>
				<th className={styles.inner} ></th>
				<th className={styles.inner} ></th>
				<th className={styles.inner} ></th>
				<th className={styles.inner} style={{borderRight: "0"}}></th>
			</tr>
			<tr>
				<th className={styles.inner} style={{backgroundColor: "rgb(249,249,249)"}}>2</th>
				<th className={styles.inner} ></th>
				<th className={styles.inner} ></th>
				<th className={styles.inner} ></th>
				<th className={styles.inner} ></th>
				<th className={styles.inner} ></th>
				<th className={styles.inner} style={{borderRight: "0"}}></th>
			</tr>
			<tr>
				<th className={styles.inner} style={{backgroundColor: "rgb(249,249,249)"}}>3</th>
				<th className={styles.inner} ></th>
				<th className={styles.inner} ></th>
				<th className={styles.inner} ></th>
				<th className={styles.inner} ></th>
				<th className={styles.inner} ></th>
				<th className={styles.inner} style={{borderRight: "0"}}></th>
			</tr>
			<tr>
				<th className={styles.inner} style={{backgroundColor: "rgb(249,249,249)"}}>4</th>
				<th className={styles.inner} ></th>
				<th className={styles.inner} ></th>
				<th className={styles.inner} ></th>
				<th className={styles.inner} ></th>
				<th className={styles.inner} ></th>
				<th className={styles.inner} style={{borderRight: "0"}}></th>
			</tr>
			<tr>
				<th className={styles.inner} style={{backgroundColor: "rgb(249,249,249)"}}>5</th>
				<th className={styles.inner} ></th>
				<th className={styles.inner} ></th>
				<th className={styles.inner} ></th>
				<th className={styles.inner} ></th>
				<th className={styles.inner} ></th>
				<th className={styles.inner} style={{borderRight: "0"}}></th>
			</tr>
			<tr>
				<th className={styles.inner} style={{backgroundColor: "rgb(249,249,249)"}}>6</th>
				<th className={styles.inner} ></th>
				<th className={styles.inner} ></th>
				<th className={styles.inner} ></th>
				<th className={styles.inner} ></th>
				<th className={styles.inner} ></th>
				<th className={styles.inner} style={{borderRight: "0"}}></th>
			</tr>
			<tr>
				<th className={styles.inner} style={{backgroundColor: "rgb(249,249,249)"}}>7</th>
				<th className={styles.inner} ></th>
				<th className={styles.inner} ></th>
				<th className={styles.inner} ></th>
				<th className={styles.inner} ></th>
				<th className={styles.inner} ></th>
				<th className={styles.inner} style={{borderRight: "0"}}></th>
			</tr>
			<tr>
				<th className={styles.inner} style={{backgroundColor: "rgb(249,249,249)"}}>8</th>
				<th className={styles.inner} ></th>
				<th className={styles.inner} ></th>
				<th className={styles.inner} ></th>
				<th className={styles.inner} ></th>
				<th className={styles.inner} ></th>
				<th className={styles.inner} style={{borderRight: "0"}}></th>
			</tr>
			<tr>
				<th className={styles.inner} style={{backgroundColor: "rgb(249,249,249)"}}>9</th>
				<th className={styles.inner} ></th>
				<th className={styles.inner} ></th>
				<th className={styles.inner} ></th>
				<th className={styles.inner} ></th>
				<th className={styles.inner} ></th>
				<th className={styles.inner} style={{borderRight: "0"}}></th>
			</tr>
			<tr>
				<th className={styles.inner} style={{backgroundColor: "rgb(249,249,249)"}}>10</th>
				<th className={styles.inner} ></th>
				<th className={styles.inner} ></th>
				<th className={styles.inner} ></th>
				<th className={styles.inner} ></th>
				<th className={styles.inner} ></th>
				<th className={styles.inner} style={{borderRight: "0"}}></th>
			</tr>
			<tr>
				<th className={styles.inner} style={{backgroundColor: "rgb(249,249,249)"}}>11</th>
				<th className={styles.inner} ></th>
				<th className={styles.inner} ></th>
				<th className={styles.inner} ></th>
				<th className={styles.inner} ></th>
				<th className={styles.inner} ></th>
				<th className={styles.inner} style={{borderRight: "0"}}></th>
			</tr>
			<tr>
				<th className={styles.inner} style={{backgroundColor: "rgb(249,249,249)"}}>12</th>
				<th className={styles.inner} ></th>
				<th className={styles.inner} ></th>
				<th className={styles.inner} ></th>
				<th className={styles.inner} ></th>
				<th className={styles.inner} ></th>
				<th className={styles.inner} style={{borderRight: "0"}}></th>
			</tr>
			<tr>
				<th className={styles.inner} style={{backgroundColor: "rgb(249,249,249)"}}>13</th>
				<th className={styles.inner} ></th>
				<th className={styles.inner} ></th>
				<th className={styles.inner} ></th>
				<th className={styles.inner} ></th>
				<th className={styles.inner} ></th>
				<th className={styles.inner} style={{borderRight: "0"}}></th>
			</tr>
		</tbody>
		</table>
		</div>
	</div>
	);
}