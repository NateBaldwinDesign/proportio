import React from "react";

const SpacingElement = (props) => {
    const size = props.size;
    const spacerLineHeight = props.spacerLineHeight;

    return (
        <div className="spacingItem" style={{marginBottom: `${(size * spacerLineHeight) - size}px`}}>
            <span className="specs"> {Math.round(size)} </span>
            <div className="spacing" style={{
                width: `${size}px`, 
                height: `${size}px`
            }}>
            </div>
        </div>
    )
}

export default SpacingElement;
