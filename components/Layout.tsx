import { ReactNode } from "react";
import NavBar from "./NavBar";

export default function Layout(props: { children: ReactNode }) {
  return (
    <>
      {/* <NavBar /> */}
      <div>{props.children}</div>
    </>
  );
}
