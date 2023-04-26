import { atom } from 'recoil';
import scaleFormulas from '../utilities/scaleFormulas';
const feather = require('feather-icons');

const iconScaleState = atom({
  key: 'iconScale',
  default: 1.125,
});
const iconPaddingState = atom({
  key: 'iconPadding',
  default: 2,
});
const iconSmallQuantityState = atom({
  key: 'iconSmallQuantity',
  default: 2,
});
const iconLargeQuantityState = atom({
  key: 'iconLargeQuantity',
  default: 10,
});
const iconScaleFormulaState = atom({
  key: 'iconScaleFormula',
  default: scaleFormulas[1],
});
const iconState = atom({
  key: 'icon',
  default: feather.icons.box.name,
});
const iconStrokeState = atom({
  key: 'iconStroke',
  default: 2,
});
const iconStrokeScaleState = atom({
  key: 'iconStrokeScale',
  default: 1.125,
});

export {
  iconScaleState,
  iconSmallQuantityState,
  iconLargeQuantityState,
  iconScaleFormulaState,
  iconPaddingState,
  iconState,
  iconStrokeState,
  iconStrokeScaleState,
};
