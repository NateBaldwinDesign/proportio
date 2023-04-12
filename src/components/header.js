import React from "react";
import { useRecoilState } from 'recoil';
import Logo from "./logo";

import "../styles/header.css";

const Header = (props) => {
  return (
    <header>
      <div className="logoLockup">
        <Logo color="var(--logoColor)" size="32" strokeWidth="2.5" />
        <h4 className="logo">Proportio</h4>
      </div>
      {props.children}
    </header>
  );
};

export default Header;
