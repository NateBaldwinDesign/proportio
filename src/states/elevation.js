import { atom } from 'recoil';
import scaleFormulas from '../utilities/scaleFormulas';

const baseElevationSizeState = atom({
  key: 'baseElevationSize',
  default: 4,
});
const elevationScaleFactorState = atom({
  key: 'elevationScaleFactor',
  default: 2,
});
const elevationSmallQuantityState = atom({
  key: 'elevationSmallQuantity',
  default: 0,
});
const elevationLargeQuantityState = atom({
  key: 'elevationLargeQuantity',
  default: 3,
});
const elevationScaleFormulaState = atom({
  key: 'elevationScaleFormula',
  default: scaleFormulas[1],
});
const elevationOffsetYState = atom({
  key: 'elevationOffsetY',
  default: 100,
});

export {
  baseElevationSizeState,
  elevationScaleFactorState,
  elevationSmallQuantityState,
  elevationLargeQuantityState,
  elevationScaleFormulaState,
  elevationOffsetYState,
};
