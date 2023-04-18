import React from "react";
import { useRecoilState } from 'recoil';
import calculateScale from "../utilities/calculateScale";
import createSvgIcon from "../utilities/createSvgIcon";
import {baseSizeState} from '../states/base';
import {
    iconPaddingState,
    iconState,
    iconStrokeState
} from '../states/iconography'

const IconElement = (props) => {
    const [iconPadding, setIconPadding] = useRecoilState(iconPaddingState)
    const [icon, setIcon] = useRecoilState(iconState)
    const [iconStroke, setIconStroke] = useRecoilState(iconStrokeState)

    const size = props.size;
    /* Just to align icon examples with typography */
    const iconLineHeight = 1.375;

    const showValue = (props.showValue) ? <span className="specs"> {Math.round(size)}px </span> : '' ;
    const margin = (props.showValue) ? `${(size * iconLineHeight) - size}px` : '0px' ;

    return (
        <div className="iconItem" style={{
                marginBottom: margin
            }}>
            {showValue}
            <div className="icon"style={{
                width: `${size}px`, 
                height: `${size}px`
            }}>
                {createSvgIcon(size, size, iconPadding, `${icon}`, iconStroke)}
            </div>
        </div>
    )
}

export default IconElement;
