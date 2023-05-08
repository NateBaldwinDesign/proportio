import React from 'react';
import { useRecoilState } from 'recoil';
import calculateScale from '../utilities/calculateScale';
import '../styles/elevation.css';
import buildArray from '../utilities/buildArray';
import ElevationElement from './elevationElement';
import {
  baseElevationSizeState,
  elevationScaleFactorState,
  elevationSmallQuantityState,
  elevationLargeQuantityState,
  elevationScaleFormulaState,
  elevationOffsetYState,
} from '../states/elevation';
import { baseScaleUnitState, baseSizeState } from '../states/base';
import round from '../utilities/round';

const Elevation = (props) => {
  const [baseSize, setBaseSize] = useRecoilState(baseSizeState);
  const [baseScaleUnit, setBaseScaleUnit] = useRecoilState(baseScaleUnitState);
  const [baseElevationSize, setBaseElevationSize] = useRecoilState(
    baseElevationSizeState,
  );
  const [elevationScaleFactor, setElevationScaleFactor] = useRecoilState(
    elevationScaleFactorState,
  );
  const [elevationSmallQuantity, setElevationSmallQuantity] = useRecoilState(
    elevationSmallQuantityState,
  );
  const [elevationLargeQuantity, setElevationLargeQuantity] = useRecoilState(
    elevationLargeQuantityState,
  );
  const [elevationScaleFormula, setElevationScaleFormula] = useRecoilState(
    elevationScaleFormulaState,
  );
  const [elevationOffsetY, setElevationOffsetY] = useRecoilState(
    elevationOffsetYState,
  );

  let sizeArray = buildArray(elevationSmallQuantity, elevationLargeQuantity);
  const sizes = sizeArray.map((i) => {
    return calculateScale(
      baseElevationSize,
      elevationScaleFactor,
      i,
      elevationScaleFormula,
    );
  });
  const offsets = sizes.map((size) => {
    return size * (elevationOffsetY / 100);
  });

  const elevationElements = sizes.map((size, i) => {
    return (
      <ElevationElement
        key={`elevation-${i}}`}
        offsetY={offsets[i]}
        elevation={size}
      />
    );
  });

  return (
    <div className="column">
      <h3>Elevation</h3>
      <div id="elevationWrapper">{elevationElements}</div>
    </div>
  );
};

export default Elevation;
