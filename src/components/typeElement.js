import React from "react";
import { useRecoilState } from 'recoil';
import '../styles/typography.css'

const TypeElement = (props) => {
    const size = props.size;
    const content = (props.content) ? props.content : 'Ag';
    const showValue = (props.showValue) ? <span className="specs"> {Math.round(size)}px </span> : '';

    const demoLineHeight = 1.125;
    const margin = (props.showValue) ? `${(size * demoLineHeight) - size}px` : '0px' ;

    return (
        <div className="typeItem" style={{
            marginBottom: margin
        }}>
            {showValue}
            <span style={{fontSize: `${size}px`}}> {content} </span>
        </div>
    )
}

export default TypeElement;