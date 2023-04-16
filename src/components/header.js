import React from "react";
import { useRecoilState } from 'recoil';
import Logo from "./logo";
import GitHubLogo from '../icons/github.js'

import "../styles/header.css";

const Header = (props) => {
  const showModal = props.showModal
  const setShowModal = props.setShowModal;

  return (
    <header>
      <div className="header--left">
        <div className="logoLockup">
          <Logo color="var(--logoColor)" size="32" strokeWidth="2.5" />
          <h4 className="logo">Proportio</h4>
        </div>
        {props.children}
      </div>
      <div className="header--right">
        <button 
          className="clearButton"
          onClick={() => {
            console.log('Open says-a-me')
            console.log(showModal)
            setShowModal(true)
          }}
        > Export </button>
        <a target="_blank" href="https://github.com/NateBaldwinDesign/proportio" title="Github repository">
          <GitHubLogo size="32" color="var(--textColor"/>
        </a>
      </div>
    </header>
  );
};

export default Header;
