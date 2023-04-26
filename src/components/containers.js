import React from "react";
import { useRecoilState } from 'recoil';
import calculateScale from "../utilities/calculateScale";
import '../styles/elevation.css'
import buildArray from "../utilities/buildArray";
import ContainerElement from "./containerElement";
import {
    baseElevationSizeState,
    elevationScaleFactorState,
    elevationSmallQuantityState,
    elevationLargeQuantityState,
    elevationScaleFormulaState,
    elevationOffsetYState
} from "../states/elevation"
import {
    containerSmallSizesState,
    containerLargeSizesState,
    containerBaseRadiusIndexState,
    containerBaseElevationIndexState,
    containerRadiusScaleFactorState
} from '../states/containers';
import tokens from "../utilities/tokens";
import { baseScaleUnitState, baseSizeState } from "../states/base";
import round from "../utilities/round";
import buildShiftedArray from "../utilities/buildShiftedArray";

const Containers = (props) => {
    const [baseSize, setBaseSize] = useRecoilState(baseSizeState);
    const [baseScaleUnit, setBaseScaleUnit] = useRecoilState(baseScaleUnitState)
    const [baseElevationSize, setBaseElevationSize] = useRecoilState(baseElevationSizeState)
    const [elevationScaleFactor, setElevationScaleFactor] = useRecoilState(elevationScaleFactorState)
    const [elevationSmallQuantity, setElevationSmallQuantity] = useRecoilState(elevationSmallQuantityState)
    const [elevationLargeQuantity, setElevationLargeQuantity] = useRecoilState(elevationLargeQuantityState)
    const [elevationScaleFormula, setElevationScaleFormula] = useRecoilState(elevationScaleFormulaState)
    const [elevationOffsetY, setElevationOffsetY] = useRecoilState(elevationOffsetYState)
    const [containerSmallSizes, setContainerSmallSizes] = useRecoilState(containerSmallSizesState)
    const [containerLargeSizes, setContainerLargeSizes] = useRecoilState(containerLargeSizesState)
    const [containerBaseRadiusIndex, setContainerBaseRadiusIndex] = useRecoilState(containerBaseRadiusIndexState)
    const [containerBaseElevationIndex, setContainerBaseElevationIndex] = useRecoilState(containerBaseElevationIndexState)
    const [containerRadiusScaleFactor, setContainerRadiusScaleFactor] = useRecoilState(containerRadiusScaleFactorState)

    let radius = 4; // TEMPORARY

    let elevationsArray = buildArray(containerSmallSizes, containerLargeSizes);
    const elevations = elevationsArray.map((i) => {
        return calculateScale(baseElevationSize, elevationScaleFactor, i, elevationScaleFormula);
    })
    const offsets = elevations.map((size) => {
        return size * (elevationOffsetY / 100)
    })
    const radiusArray = buildShiftedArray(containerSmallSizes, containerLargeSizes, containerBaseRadiusIndex, containerRadiusScaleFactor)
    

    const newContainerTokens = []

    const containerElements = elevations.map((elevation, i) => {
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
    
        newContainerTokens.push(objectX)
        newContainerTokens.push(objectY)

        return (
            <ContainerElement 
                key={`container-${i}}`}
                offsetY={offsets[i]}
                elevation={elevation}
                radius={radius}
            />
        )
    })

    tokens.containers = newContainerTokens;

    return (
        <div className="column">
            <h3>Containers</h3>
            <div id="containerWrapper">
                {containerElements}
            </div>
        </div>
    )
}

export default Containers;
