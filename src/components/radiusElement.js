import React from "react";
import { useRecoilState } from 'recoil';

const RadiusElement = (props) => {
    const radius = props.radius;

    return (
        <div className="radiusItem" >
            <span className="specs"> {Math.round(radius)}px </span>
            <div 
                className="radius"
                style={{borderRadius: `${radius}px`}}
            >
            </div>
        </div>
    )
}

export default RadiusElement;
