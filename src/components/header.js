import React from "react";
import "../styles/header.css";

const Header = (props) => {
  return (
    <header>
      <h4 className="logo">Midas</h4>
      {props.children}
    </header>
  );
};

export default Header;
