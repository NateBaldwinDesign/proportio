import React from "react";
import "../styles/panel.css";

const Panel = (props) => {
    return (
        <div className={`${props.direction} panel`}>
            {props.children}
        </div>
    )
}

export default Panel;