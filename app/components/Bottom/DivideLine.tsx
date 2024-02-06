export default function DivideLine() {
  return (
    <div //상하단 분리선
      style={{
        display: "flex",
        position: "relative",
        width: "100%",
        minWidth: 1030,
        overflow: "visible",
        flexDirection: "column",
      }}
    >
      <div //상단 바디 위로 접는 버튼
        style={{
          position: "absolute",
          justifySelf: "flex-end",
          top: -7.5,
          alignSelf: "center",
          width: 51,
          height: 15,
          border: 1,
          borderStyle: "solid",
          borderColor: "#e1e1e1",
          backgroundColor: "#f9f9f9",
          backgroundImage: `url("https://sugang.korea.ac.kr/resources/img/layout/bg-controller.png")`,
          backgroundRepeat: "no-repeat",
          backgroundPositionX: 21,
          backgroundPositionY: -46,
          cursor: "pointer",
        }}
      ></div>
    </div>
  );
}
