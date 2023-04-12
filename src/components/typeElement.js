import React from "react";
import { useRecoilState } from 'recoil';
import calculateScale from "../utilities/calculateScale";
import '../styles/typography.css'
import {baseSizeState} from '../states/base';

const TypeElement = (props) => {
    const [baseSize, setBaseSize] = useRecoilState(baseSizeState);

    const size = calculateScale(baseSize, props.scale, props.i, props.scaleMethod);
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