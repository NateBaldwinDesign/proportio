import React from 'react';
import {
    containerSmallSizesState,
    containerLargeSizesState,
    containerBaseRadiusIndexState,
    containerBaseElevationIndexState,
    containerRadiusScaleFactorState
} from '../states/containers';
import {
    baseElevationSizeState,
    elevationScaleFactorState,
    elevationSmallQuantityState,
    elevationLargeQuantityState,
    elevationScaleFormulaState,
    elevationOffsetYState
} from "../states/elevation"
import tokens from "../utilities/tokens";
import { useRecoilState } from 'recoil';
import { baseScaleUnitState, baseSizeState } from "../states/base";
import round from "../utilities/round";
import "../styles/container.css";

const ContainerElement = (props) => {
  const elevation = props.elevation;
  const radius = props.radius;
  const offsetY = props.offsetY;
  const [baseScaleUnit, setBaseScaleUnit] = useRecoilState(baseScaleUnitState)
  const [baseSize, setBaseSize] = useRecoilState(baseSizeState);
  const [containerBaseRadiusIndex, setContainerBaseRadiusIndex] = useRecoilState(containerBaseRadiusIndexState)
  const [containerRadiusScaleFactor, setContainerRadiusScaleFactor] = useRecoilState(containerRadiusScaleFactorState)

  const value = (baseScaleUnit === 'px') ? round(elevation) : round(elevation/baseSize, 3);

  const margin = elevation > 0 ? elevation : 4;
  return (
    <div className="containerItem">
      <span className="specs"> {value}{baseScaleUnit} </span>
      <div
        className="containerElement"
        style={{
          boxShadow: `0 ${offsetY}px ${elevation}px var(--elevationDemoShadowColor)`,
          marginBottom: `${margin}px`,
          borderRadius: `${radius}px`
        }}
      ></div>
    </div>
  );
};

export default ContainerElement;
