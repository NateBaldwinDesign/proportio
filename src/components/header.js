import React from "react";
import "../styles/header.css";

const Header = (props) => {
    return (
        <header>
            {props.children}
        </header>
    )
}

export default Header;