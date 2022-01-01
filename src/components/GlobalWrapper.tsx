import React from "react";
import { DarkModeSwitch } from "./DarkModeSwitch";
import Navbar from "./Navbar";

const GlobalWrapper: React.FC<{}> = ({ children }) => {
  return (
    <>
      <Navbar />
      <DarkModeSwitch />
      {children}
    </>
  );
};
export default GlobalWrapper;
