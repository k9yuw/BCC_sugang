import styles from './timeTable.module.css'
export default function TimeTable(){
	return(
	<div>
	<div //수강신청 내역 테이블
		style={{
		borderTop: "1px solid black",
		marginTop: "10px",
		width: "200px",
		height: "240px",
		}}
	>
		<table
		style={{
			borderLeft: "1px solid #ccc",
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
				height: "20px",
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
					<th className={styles.indexTop}>
						토
					</th>
				</tr>
			</thead>
		<tbody>
			<tr style={{borderLeft: "1px solid #ccc"}}>
				<th className={styles.inner} style={{backgroundColor: "rgb(249,249,249)"}}>1</th>
				<th className={styles.inner}></th>
				<th className={styles.inner}></th>
				<th className={styles.inner}></th>
				<th className={styles.inner}></th>
				<th className={styles.inner}></th>
				<th className={styles.inner}></th>
			</tr>
			<tr>
				<th className={styles.inner} style={{backgroundColor: "rgb(249,249,249)"}}>2</th>
				<th className={styles.inner}></th>
				<th className={styles.inner}></th>
				<th className={styles.inner}></th>
				<th className={styles.inner}></th>
				<th className={styles.inner}></th>
				<th className={styles.inner}></th>
			</tr>
			<tr>
				<th className={styles.inner} style={{backgroundColor: "rgb(249,249,249)"}}>3</th>
				<th className={styles.inner}></th>
				<th className={styles.inner}></th>
				<th className={styles.inner}></th>
				<th className={styles.inner}></th>
				<th className={styles.inner}></th>
				<th className={styles.inner}></th>
			</tr>
			<tr>
				<th className={styles.inner} style={{backgroundColor: "rgb(249,249,249)"}}>4</th>
				<th className={styles.inner}></th>
				<th className={styles.inner}></th>
				<th className={styles.inner}></th>
				<th className={styles.inner}></th>
				<th className={styles.inner}></th>
				<th className={styles.inner}></th>
			</tr>
			<tr>
				<th className={styles.inner} style={{backgroundColor: "rgb(249,249,249)"}}>5</th>
				<th className={styles.inner}></th>
				<th className={styles.inner}></th>
				<th className={styles.inner}></th>
				<th className={styles.inner}></th>
				<th className={styles.inner}></th>
				<th className={styles.inner}></th>
			</tr>
			<tr>
				<th className={styles.inner} style={{backgroundColor: "rgb(249,249,249)"}}>6</th>
				<th className={styles.inner}></th>
				<th className={styles.inner}></th>
				<th className={styles.inner}></th>
				<th className={styles.inner}></th>
				<th className={styles.inner}></th>
				<th className={styles.inner}></th>
			</tr>
			<tr>
				<th className={styles.inner} style={{backgroundColor: "rgb(249,249,249)"}}>7</th>
				<th className={styles.inner}></th>
				<th className={styles.inner}></th>
				<th className={styles.inner}></th>
				<th className={styles.inner}></th>
				<th className={styles.inner}></th>
				<th className={styles.inner}></th>
			</tr>
			<tr>
				<th className={styles.inner} style={{backgroundColor: "rgb(249,249,249)"}}>8</th>
				<th className={styles.inner}></th>
				<th className={styles.inner}></th>
				<th className={styles.inner}></th>
				<th className={styles.inner}></th>
				<th className={styles.inner}></th>
				<th className={styles.inner}></th>
			</tr>
			<tr>
				<th className={styles.inner} style={{backgroundColor: "rgb(249,249,249)"}}>9</th>
				<th className={styles.inner}></th>
				<th className={styles.inner}></th>
				<th className={styles.inner}></th>
				<th className={styles.inner}></th>
				<th className={styles.inner}></th>
				<th className={styles.inner}></th>
			</tr>
		</tbody>
		</table>
		</div>
	</div>
	);
}