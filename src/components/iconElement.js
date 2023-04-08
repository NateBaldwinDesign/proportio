import React from "react";
import { useRecoilState } from 'recoil';
import calculateScale from "../utilities/calculateScale";
import createSvgIcon from "../utilities/createSvgIcon";
import {baseSizeState} from '../states/base';

const IconElement = (props) => {
    const [baseSize, setBaseSize] = useRecoilState(baseSizeState);
    
    const size = calculateScale(baseSize, props.scale, props.i, props.scaleMethod);
    const iconLineHeight = props.iconLineHeight;
    const iconPadding = props.iconPadding;
    const showValue = (props.showValue) ? <span className="specs"> {Math.round(size)} </span> : '' ;
    const margin = (props.showValue) ? `${(size * iconLineHeight) - size}px` : '0px' ;

    return (
        <div className="iconItem" style={{marginBottom: margin}}>
            {showValue}
            <div className="icon"style={{
                width: `${size}px`, 
                height: `${size}px`
            }}>
                {createSvgIcon(size, size, iconPadding)}
            </div>
        </div>
    )
}

export default IconElement;
