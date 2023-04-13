import React from "react";
import { useRecoilState } from 'recoil';
import calculateScale from "../utilities/calculateScale";
import '../styles/elevation.css'
import buildArray from "../utilities/buildArray";
import ElevationElement from "./elevationElement";
import {
    baseElevationSizeState,
    elevationScaleFactorState,
    elevationSmallQuantityState,
    elevationLargeQuantityState,
    elevationScaleFormulaState
} from "../states/elevation"
import tokens from "../utilities/tokens";

const Elevation = (props) => {
    const [baseElevationSize, setBaseElevationSize] = useRecoilState(baseElevationSizeState)
    const [elevationScaleFactor, setElevationScaleFactor] = useRecoilState(elevationScaleFactorState)
    const [elevationSmallQuantity, setElevationSmallQuantity] = useRecoilState(elevationSmallQuantityState)
    const [elevationLargeQuantity, setElevationLargeQuantity] = useRecoilState(elevationLargeQuantityState)
    const [elevationScaleFormula, setElevationScaleFormula] = useRecoilState(elevationScaleFormulaState)

    let sizeArray = buildArray(elevationSmallQuantity, elevationLargeQuantity);
    const sizes = sizeArray.map((i) => {
        return calculateScale(baseElevationSize, elevationScaleFactor, i, elevationScaleFormula);
    })

    const newElevationTokens = []

    const elevationElements = sizes.map((size, i) => {
        const nameX = `elevation-${100 * (i+1)}-offsetY`
        const nameY = `elevation-${100 * (i+1)}-blur`
        const objectX = {
          [nameX]: {
            'value': `${size}px`,
            'type': 'dimension'
          }
        }
        const objectY = {
            [nameY]: {
              'value': `${size}px`,
              'type': 'dimension'
            }
          }
    
        newElevationTokens.push(objectX)
        newElevationTokens.push(objectY)

        return (
            <ElevationElement 
                key={`elevation-${i}}`}
                elevation={size}
            />
        )
    })

    tokens.elevation = newElevationTokens;

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
