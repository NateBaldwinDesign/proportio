import React from "react";
import { useRecoilState } from 'recoil';
import { baseScaleUnitState, baseSizeState } from "../states/base";
import round from "../utilities/round";

const SpacingElement = (props) => {
    const size = props.size;
    /* Just to align icon examples with typography */
    const spacerLineHeight = 1.375;
    const [baseScaleUnit, setBaseScaleUnit] = useRecoilState(baseScaleUnitState)
    const [baseSize, setBaseSize] = useRecoilState(baseSizeState);
    const value = (baseScaleUnit === 'px') ? round(size) : round(size/baseSize, 3);

    return (
        <div className="spacingItem" 
            // style={{marginBottom: `${(size * spacerLineHeight) - size}px`}}
        >
            <span className="specs"> {value}{baseScaleUnit} </span>
            <div className="spacing" style={{
                width: `${size}px`, 
                height: `${size}px`
            }}>
            </div>
        </div>
    )
}

export default SpacingElement;
