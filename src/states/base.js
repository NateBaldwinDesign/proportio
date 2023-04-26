import { atom } from 'recoil';
import scaleUnits from '../utilities/scaleUnits';

const baseSizeState = atom({
  key: 'baseSize',
  default: 16,
});
const baseMobileScaleFactorState = atom({
  key: 'baseMobileScaleFactor',
  default: 1.25,
});
const baseScaleUnitState = atom({
  key: 'baseScaleUnit',
  default: scaleUnits[0],
});

export { baseSizeState, baseMobileScaleFactorState, baseScaleUnitState };
