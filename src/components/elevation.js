import React from "react";
import calculateScale from "../utilities/calculateScale";
import '../styles/elevation.css'
import buildArray from "../utilities/buildArray";
import ElevationElement from "./elevationElement";

const Elevation = (props) => {
    const baseElevationSize = props.baseElevationSize;
    const elevationScaleFactor = props.elevationScaleFactor;
    const smallerSizes = props.elevationSmallQuantity
    const largerSizes = props.elevationLargeQuantity;
    const elevationScaleMethod = props.elevationScaleMethod;

    let sizeArray = buildArray(smallerSizes, largerSizes);
    const sizes = sizeArray.map((i) => {
        return calculateScale(baseElevationSize, elevationScaleFactor, i, elevationScaleMethod);
    })

    const elevationElements = sizes.map((size, i) => {
        return (
            <ElevationElement 
                key={`elevation-${i}}`}
                elevation={size}
            />
        )
    })

    return (
        <div className="column">
            <h3>Elevation</h3>
            <div id="elevationWrapper">
                {elevationElements}
            </div>
        </div>
    )
}

export default Elevation;
