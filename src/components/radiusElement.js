import React from "react";

const RadiusElement = (props) => {
    const radius = props.radius;

    return (
        <div className="radiusItem" >
            <span className="specs"> {Math.round(radius)} </span>
            <div 
                className="radius"
                style={{borderRadius: `${radius}px`}}
            >
            </div>
        </div>
    )
}

export default RadiusElement;
