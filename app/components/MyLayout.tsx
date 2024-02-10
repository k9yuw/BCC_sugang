import { GameProvider } from "./context/GameContext";

const MyLayout = ({ children }: { children: React.ReactNode }) => (
  <GameProvider>
    {/* <div
      style={{
        width: "100%",
        height: "100%",
        overflowY: "scroll",
        backgroundColor: "white",
      }}
    > */}
    {children}
    {/* </div> */}
  </GameProvider>
);

export default MyLayout;
