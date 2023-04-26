import { atom } from 'recoil';
import scaleFormulas from '../utilities/scaleFormulas';

const typeScaleState = atom({
  key: 'typeScale',
  default: 1.125,
});
const typeSmallQuantityState = atom({
  key: 'typeSmallQuantity',
  default: 2,
});
const typeLargeQuantityState = atom({
  key: 'typeLargeQuantity',
  default: 10,
});
const typeScaleFormulaState = atom({
  key: 'typeScaleFormula',
  default: scaleFormulas[1],
});
const typeFontFamilyState = atom({
  key: 'typeFontFamily',
  default: 'Outfit',
});
const typeFontWeightState = atom({
  key: 'typeFontWeight',
  default: 400,
});

export {
  typeScaleState,
  typeSmallQuantityState,
  typeLargeQuantityState,
  typeScaleFormulaState,
  typeFontFamilyState,
  typeFontWeightState,
};
