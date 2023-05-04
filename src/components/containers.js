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
    
    const [spacingFormula, setSpacingFormula] =
        useRecoilState(spacingFormulaState);
    const [typeScaleFormula, setTypeScaleFormula] = useRecoilState(
        typeScaleFormulaState,
    );
    const [typeScale, setTypeScale] = useRecoilState(typeScaleState);
    const [spacingScaleFactor, setSpacingScaleFactor] = useRecoilState(spacingScaleFactorState)
    const showSpecs = props.showSpecs;
    
    const containerPaddingMethod = (containerPaddingMethodOption === 'typeScale') ? typeScale : spacingScaleFactor;

    let elevationsArray = buildArray(containerSmallSizes, containerLargeSizes);
    const elevations = elevationsArray.map((i) => {
        return calculateScale(baseElevationSize, elevationScaleFactor, i, elevationScaleFormula);
    })
    const offsets = elevations.map((elevation) => {
        return elevation * (elevationOffsetY / 100)
    })
    const radiusArray = buildShiftedArray(containerSmallSizes, containerLargeSizes, containerBaseRadiusIndex, containerRadiusScaleFactor)

    const paddingYIndexArrayArray = buildShiftedArray(
        containerSmallSizes,
        containerLargeSizes,
        containerBasePaddingYIndex
      );
    const paddingXIndexArrayArray = buildShiftedArray(
        containerSmallSizes,
        containerLargeSizes,
        containerBasePaddingXIndex
      );


    const increment = 0;

    const paddingXIndexArray = buildShiftedArray(
        containerSmallSizes,
        containerLargeSizes,
        paddingXIndexArrayArray[increment]
      );
    const paddingYIndexArray = buildShiftedArray(
        containerSmallSizes,
        containerLargeSizes,
        paddingYIndexArrayArray[increment]
        );
    const containerPaddingMethodFormula =
        containerPaddingMethodOption === 'typeScale'
        ? typeScaleFormula
        : containerPaddingMethodOption === 'spacingScale'
        ? spacingFormula
        : undefined;
    const paddingX = calculateScale(
        baseSize,
        containerPaddingMethod,
        paddingXIndexArray[0], // TODO: Update when desity options exist
        containerPaddingMethodFormula
    );
    const paddingY = calculateScale(
        baseSize,
        containerPaddingMethod,
        paddingYIndexArray[0], // TODO: Update when desity options exist
        containerPaddingMethodFormula
    );

    const newContainerTokens = []

    const containerElements = elevations.map((elevation, i) => {
        const nameX = `elevation-${100 * (i+1)}-offsetY`
        const nameY = `elevation-${100 * (i+1)}-blur`
        const valueX = (baseScaleUnit === 'px') ? offsets[i] : round(offsets[i]/baseSize, 3);
        const valueY = (baseScaleUnit === 'px') ? elevation : round(elevation/baseSize, 3);
        const radius = radiusArray[i]

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
                paddingX={paddingX}
                paddingY={paddingY}
                gapSize={baseSize}
                radius={radius}
                spec={showSpecs}
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
