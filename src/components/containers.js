import React from "react";
import { useRecoilState } from 'recoil';
import calculateScale from "../utilities/calculateScale";
import '../styles/elevation.css'
import buildArray from "../utilities/buildArray";
import ContainerElement from "./containerElement";
import {
    spacingFormulaState, spacingScaleFactorState
} from '../states/spacing';
import {
    sizeNamesIncrement,
    sizeNamesDecrement,
    densityNamesIncrement,
    densityNamesDecrement,
  } from '../utilities/names';
import {
    typeScaleFormulaState,
    typeScaleState
} from "../states/typography"
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
    containerRadiusScaleFactorState,
    containerPaddingMethodOptionState,
    containerBasePaddingXIndexState,
    containerBasePaddingYIndexState,
    containerPaddingScaleFactorState
} from '../states/containers';
import tokens from "../utilities/tokens";
import { baseScaleUnitState, baseSizeState } from "../states/base";
import round from "../utilities/round";
import buildShiftedArray from "../utilities/buildShiftedArray";
import { baseRadiusSizeState, radiusScaleFactorState, radiusScaleFormulaState } from "../states/radius";

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
    const [containerPaddingMethodOption, setContainerPaddingMethodOption] = useRecoilState(containerPaddingMethodOptionState);
    const [containerBasePaddingXIndex, setContainerBasePaddingXIndexState] = useRecoilState(containerBasePaddingXIndexState)
    const [containerBasePaddingYIndex, setContainerBasePaddingYIndexState] = useRecoilState(containerBasePaddingYIndexState)
    const [containerPaddingScaleFactor, setContainerPaddingScaleFactor] = useRecoilState(containerPaddingScaleFactorState);
    const [baseRadiusSize, setBaseRadiusSize] = useRecoilState(baseRadiusSizeState);
    const [radiusScaleFactor, setRadiusScaleFactor] = useRecoilState(radiusScaleFactorState);
    const [radiusScaleFormula, setRadiusScaleFormula] = useRecoilState(radiusScaleFormulaState);
    const [spacingFormula, setSpacingFormula] = useRecoilState(spacingFormulaState);
    const [typeScaleFormula, setTypeScaleFormula] = useRecoilState(typeScaleFormulaState);
    const [typeScale, setTypeScale] = useRecoilState(typeScaleState);
    const [spacingScaleFactor, setSpacingScaleFactor] = useRecoilState(spacingScaleFactorState)
    const showSpecs = props.showSpecs;
    const containerElevation = props.containerElevation
    
    const containerPaddingMethod = (containerPaddingMethodOption === 'typeScale') ? typeScale : spacingScaleFactor;
    let sizeArray = buildArray(containerSmallSizes, containerLargeSizes);
    let elevationsArray = buildShiftedArray(containerSmallSizes, containerLargeSizes, containerBaseElevationIndex);
    // const elevations = elevationsArray.map((i) => {
    //     return calculateScale(baseElevationSize, elevationScaleFactor, i, elevationScaleFormula);
    // })
    // const offsets = elevations.map((elevation) => {
    //     return elevation * (elevationOffsetY / 100)
    // })
    const radiusArray = buildShiftedArray(containerSmallSizes, containerLargeSizes, containerBaseRadiusIndex, containerRadiusScaleFactor)

    const paddingYIndexArray = buildShiftedArray(
        containerSmallSizes,
        containerLargeSizes,
        containerBasePaddingYIndex,
        containerPaddingScaleFactor
      );
    const paddingXIndexArray = buildShiftedArray(
        containerSmallSizes,
        containerLargeSizes,
        containerBasePaddingXIndex,
        containerPaddingScaleFactor
      );

    const containerPaddingMethodFormula =
        containerPaddingMethodOption === 'typeScale'
        ? typeScaleFormula
        : containerPaddingMethodOption === 'spacingScale'
        ? spacingFormula
        : undefined;
    
    const newContainerTokens = []

    // console.log(containerBasePaddingXIndex, containerPaddingScaleFactor, paddingXIndexArray)
    // console.log(radiusArray)
    const containerElements = sizeArray.map((size, i) => {
        const decrementIndex = size * -1 - 1;
        const sizeName =
          size < 0 ? sizeNamesDecrement[decrementIndex] : sizeNamesIncrement[size];
        if (sizeName === undefined) sizeName = 'undefined';
        const elevation = (containerElevation) ? calculateScale(baseElevationSize, elevationScaleFactor, elevationsArray[i], elevationScaleFormula) : undefined;
        const offset = elevation * (elevationOffsetY / 100);

        const nameX = `elevation-${100 * (i+1)}-offsetY`
        const nameY = `elevation-${100 * (i+1)}-blur`
        const valueX = (baseScaleUnit === 'px') ? offset : round(offset/baseSize, 3);
        const valueY = (baseScaleUnit === 'px') ? elevation : round(elevation/baseSize, 3);
        const paddingXvalue = calculateScale(
            baseSize,
            containerPaddingMethod,
            paddingXIndexArray[i], 
            containerPaddingMethodFormula
        );
        const paddingYvalue = calculateScale(
            baseSize,
            containerPaddingMethod,
            paddingYIndexArray[i],
            containerPaddingMethodFormula
        );
        const radiusValue = calculateScale(
            baseRadiusSize,
            radiusScaleFactor,
            radiusArray[i],
            radiusScaleFormula,
          );
        const paddingX = (baseScaleUnit === 'px') ? paddingXvalue : round(paddingXvalue/baseSize, 3);
        const paddingY = (baseScaleUnit === 'px') ? paddingYvalue : round(paddingYvalue/baseSize, 3);
        const radius = (baseScaleUnit === 'px') ? radiusValue : round(radiusValue/baseSize, 3);
        

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

        // console.log(i, paddingX)
        // console.log(radiusArray, radius)

        return (
            <ContainerElement 
                key={`container-${i}}`}
                offsetY={offset}
                elevation={elevation}
                paddingX={paddingX}
                paddingY={paddingY}
                gapSize={baseSize}
                radius={radius}
                spec={showSpecs}
                sizeName={sizeName}
            />
        )
    })

    tokens.containers = newContainerTokens;

    return (
        <div className="column" style={{flexGrow: '1'}}>
            {/* <h3>Containers</h3> */}
            <div id="containerWrapper">
                {containerElements}
            </div>
        </div>
    )
}

export default Containers;
