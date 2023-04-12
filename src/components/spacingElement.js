import React from "react";
import { useRecoilState } from 'recoil';

const SpacingElement = (props) => {
    const size = props.size;
    /* Just to align icon examples with typography */
    const spacerLineHeight = 1.375;

    return (
        <div className="spacingItem" style={{marginBottom: `${(size * spacerLineHeight) - size}px`}}>
            <span className="specs"> {Math.round(size)}px </span>
            <div className="spacing" style={{
                width: `${size}px`, 
                height: `${size}px`
            }}>
            </div>
        </div>
    )
}

export default SpacingElement;
