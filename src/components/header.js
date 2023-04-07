import React from "react";
import Logo from "./logo";

import "../styles/header.css";

const Header = (props) => {
  return (
    <header>
      <div className="logoLockup">
        <Logo color="var(--logoColor)" size="32" strokeWidth="2.5" />
        <h4 className="logo">Midas</h4>
      </div>
      {props.children}
    </header>
  );
};

export default Header;
