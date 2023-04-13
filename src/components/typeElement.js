import React from "react";
import { useRecoilState } from 'recoil';
import '../styles/typography.css'

const TypeElement = (props) => {
    const size = props.size;
    const content = (props.content) ? props.content : 'Ag';
    const showValue = (props.showValue) ? <span className="specs"> {Math.round(size)}px </span> : '';

    return (
        <div className="typeItem">
            {showValue}
            <span style={{fontSize: `${size}px`}}> {content} </span>
        </div>
    )
}

export default TypeElement;