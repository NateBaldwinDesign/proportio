import React from "react";
import calculateScale from "../utilities/calculateScale";
import '../styles/typography.css'

const TypeElement = (props) => {
    const size = calculateScale(props.baseSize, props.scale, props.i, props.scaleMethod);
    const content = (props.content) ? props.content : 'Ag';
    const showValue = (props.showValue) ? <span className="specs"> {Math.round(size)} </span> : '';

    return (
        <div className="typeItem">
            {showValue}
            <span style={{fontSize: `${size}px`}}> {content} </span>
        </div>
    )
}

export default TypeElement;