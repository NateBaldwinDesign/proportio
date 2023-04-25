import React from "react";
import { useRecoilState } from 'recoil';
import { baseScaleUnitState, baseSizeState } from "../states/base";
import round from "../utilities/round";

const RadiusElement = (props) => {
    const radius = props.radius;
    const [baseScaleUnit, setBaseScaleUnit] = useRecoilState(baseScaleUnitState)
    const [baseSize, setBaseSize] = useRecoilState(baseSizeState);
    const value = (baseScaleUnit === 'px') ? round(radius) : round(radius/baseSize, 3);

    return (
        <div className="radiusItem" >
            <span className="specs"> {value}{baseScaleUnit} </span>
            <div 
                className="radius"
                style={{borderTopLeftRadius: `${radius}px`}}
            >
            </div>
        </div>
    )
}

export default RadiusElement;
