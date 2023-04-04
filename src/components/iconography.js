import React from "react";
import IconElement from "./iconElement";
import '../styles/iconography.css'

const Iconography = (props) => {
    const baseSize = props.baseSize;
    const iconScale = props.iconScale;
    const smallerSizes = props.iconSmallQuantity
    const largerSizes = props.iconLargeQuantity;
    const iconScaleMethod = props.iconScaleMethod;
    const iconPadding = props.iconPadding;
    const iconLineHeight = props.iconLineHeight;

    let smallSizeArray = new Array(smallerSizes).fill(0);
    let largeSizeArray = new Array(largerSizes).fill(0);

    const smallSizes = smallSizeArray.map((e, i) => {
        return <IconElement
            key={`${iconScale}-neg${i}`}
            baseSize={baseSize}
            scale={iconScale}
            i={(i+1) * -1}
            iconPadding={iconPadding}
            iconLineHeight = {iconLineHeight}
            scaleMethod={iconScaleMethod} 
            showValue 
            />
    })
    const orderedSmallSizes = smallSizes.reverse();

    const largeSizes = largeSizeArray.map((e, i) => {
        return <IconElement
            key={`${iconScale}-${i}`}
            baseSize={baseSize}
            scale={iconScale}
            i={i}
            iconPadding={iconPadding}
            iconLineHeight = {iconLineHeight}
            scaleMethod={iconScaleMethod} 
            showValue 
            />
    })

    return (
        <div className="column">
            <h3>Iconography</h3>
            <div>
                {orderedSmallSizes}
                {largeSizes}
            </div>
        </div>
    )
}

export default Iconography;
