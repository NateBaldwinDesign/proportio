import React from "react";
import { useRecoilState } from 'recoil';
import calculateScale from "../utilities/calculateScale";
import createSvgIcon from "../utilities/createSvgIcon";
import {baseSizeState} from '../states/base';
import {
    iconPaddingState
} from '../states/iconography'

const IconElement = (props) => {
    const [baseSize, setBaseSize] = useRecoilState(baseSizeState);
    const [iconPadding, setIconPadding] = useRecoilState(iconPaddingState)

    const size = calculateScale(baseSize, props.scale, props.i, props.scaleMethod);
    /* Just to align icon examples with typography */
    const iconLineHeight = 1.375;

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
