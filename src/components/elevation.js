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
    elevationScaleFormulaState,
    elevationOffsetYState
} from "../states/elevation"
import tokens from "../utilities/tokens";
import { baseScaleUnitState, baseSizeState } from "../states/base";
import round from "../utilities/round";

const Elevation = (props) => {
    const [baseSize, setBaseSize] = useRecoilState(baseSizeState);
    const [baseScaleUnit, setBaseScaleUnit] = useRecoilState(baseScaleUnitState)
    const [baseElevationSize, setBaseElevationSize] = useRecoilState(baseElevationSizeState)
    const [elevationScaleFactor, setElevationScaleFactor] = useRecoilState(elevationScaleFactorState)
    const [elevationSmallQuantity, setElevationSmallQuantity] = useRecoilState(elevationSmallQuantityState)
    const [elevationLargeQuantity, setElevationLargeQuantity] = useRecoilState(elevationLargeQuantityState)
    const [elevationScaleFormula, setElevationScaleFormula] = useRecoilState(elevationScaleFormulaState)
    const [elevationOffsetY, setElevationOffsetY] = useRecoilState(elevationOffsetYState)

    let sizeArray = buildArray(elevationSmallQuantity, elevationLargeQuantity);
    const sizes = sizeArray.map((i) => {
        return calculateScale(baseElevationSize, elevationScaleFactor, i, elevationScaleFormula);
    })
    const offsets = sizes.map((size) => {
        return size * (elevationOffsetY / 100)
    })

    const newElevationTokens = []

    const elevationElements = sizes.map((size, i) => {
        const nameX = `elevation-${100 * (i+1)}-offsetY`
        const nameY = `elevation-${100 * (i+1)}-blur`
        const valueX = (baseScaleUnit === 'px') ? offsets[i] : round(offsets[i]/baseSize, 3);
        const valueY = (baseScaleUnit === 'px') ? size : round(size/baseSize, 3);

        const objectX = {
          [nameX]: {
            'value': `${valueX}px`,
            'type': 'dimension'
          }
        }
        const objectY = {
            [nameY]: {
              'value': `${valueY}px`,
              'type': 'dimension'
            }
          }
    
        newElevationTokens.push(objectX)
        newElevationTokens.push(objectY)

        return (
            <ElevationElement 
                key={`elevation-${i}}`}
                offsetY={offsets[i]}
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
