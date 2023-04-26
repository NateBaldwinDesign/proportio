import { atom } from 'recoil';
import scaleMethodOptions from '../utilities/scaleMethodOptions';

const textIconGapIndexState = atom({
  key: 'textIconGapIndex',
  default: -10,
});
const textIconIconSizeIndexState = atom({
  key: 'textIconIconSizeIndex',
  default: 0,
});
const textIconGapScaleFormulaState = atom({
  key: 'textIconGapScaleFormula',
  default: scaleMethodOptions[0],
});

export {
  textIconGapIndexState,
  textIconIconSizeIndexState,
  textIconGapScaleFormulaState,
};
