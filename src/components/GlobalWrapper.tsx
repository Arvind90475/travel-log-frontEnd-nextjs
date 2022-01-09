import React from "react";
import Nav from "./Nav";

const GlobalWrapper: React.FC<{}> = ({ children }) => {
  return (
    <>
      <Nav />
      {children}
    </>
  );
};
export default GlobalWrapper;
