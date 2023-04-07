import React from "react";
import calculateScale from "../utilities/calculateScale";
import '../styles/radius.css'
import buildArray from "../utilities/buildArray";
import RadiusElement from "./radiusElement";

const Radius = (props) => {
    const baseRadiusSize = props.baseRadiusSize;
    const radiusScaleFactor = props.radiusScaleFactor;
    const smallerSizes = props.radiusSmallQuantity
    const largerSizes = props.radiusLargeQuantity;
    const radiusScaleMethod = props.radiusScaleMethod;

    let sizeArray = buildArray(smallerSizes, largerSizes);
    const sizes = sizeArray.map((i) => {
        return calculateScale(baseRadiusSize, radiusScaleFactor, i, radiusScaleMethod);
    })

    const radiusElements = sizes.map((size, i) => {
        return (
            <RadiusElement 
                key={`radius-${i}}`}
                radius={size}
            />
        )
    })

    return (
        <div className="column">
            <h3>Radius</h3>
            <div id="radiusWrapper">
                {radiusElements}
            </div>
        </div>
    )
}

export default Radius;
