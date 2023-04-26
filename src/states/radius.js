import { atom } from 'recoil';
import scaleFormulas from '../utilities/scaleFormulas';

const baseRadiusSizeState = atom({
  key: 'baseRadiusSize',
  default: 4,
});
const radiusScaleFactorState = atom({
  key: 'radiusScaleFactor',
  default: 2,
});
const radiusSmallQuantityState = atom({
  key: 'radiusSmallQuantity',
  default: 1,
});
const radiusLargeQuantityState = atom({
  key: 'radiusLargeQuantity',
  default: 3,
});
const radiusScaleFormulaState = atom({
  key: 'radiusScaleFormula',
  default: scaleFormulas[0],
});

export {
  baseRadiusSizeState,
  radiusScaleFactorState,
  radiusSmallQuantityState,
  radiusLargeQuantityState,
  radiusScaleFormulaState,
};
