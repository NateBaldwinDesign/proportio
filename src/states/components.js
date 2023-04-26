import { useRecoilState, atom } from 'recoil';
import scaleMethodOptions from '../utilities/scaleMethodOptions';

const baseComponentSizeIndexState = atom({
  key: 'baseComponentSizeIndex',
  default: 1,
});
const componentLineHeightState = atom({
  key: 'componentLineHeight',
  default: 1.2,
});
const componentSmallQuantityState = atom({
  key: 'componentSmallQuantity',
  default: 0,
});
const componentLargeQuantityState = atom({
  key: 'componentLargeQuantity',
  default: 1,
});
const componentDensitySmallQuantityState = atom({
  key: 'componentDensitySmallQuantity',
  default: 0,
});
const componentDensityLargeQuantityState = atom({
  key: 'componentDensityLargeQuantity',
  default: 1,
});
const componentDensityScaleFactorState = atom({
  key: 'componentDensityScaleFactor',
  default: 1,
});
// was componentScaleMethod
const componentMinHeightMethodOptionState = atom({
  key: 'componentMinHeightMethodOption',
  default: scaleMethodOptions[1],
});
const componentPaddingMethodOptionState = atom({
  key: 'componentPaddingMethodOption',
  default: scaleMethodOptions[0],
});
const baseComponentTextSizeIndexState = atom({
  key: 'baseComponentTextSizeIndex',
  default: 0,
});
const baseComponentPaddingXIndexState = atom({
  key: 'baseComponentPaddingXIndex',
  default: 0,
});
const baseComponentPaddingYIndexState = atom({
  key: 'baseComponentPaddingYIndex',
  default: 0,
});
const scaleComponentRadiusState = atom({
  key: 'scaleComponentRadius',
  default: false,
});
const baseComponentRadiusState = atom({
  key: 'baseComponentRadius',
  default: 0,
});

export {
  baseComponentSizeIndexState,
  componentLineHeightState,
  componentSmallQuantityState,
  componentLargeQuantityState,
  componentMinHeightMethodOptionState,
  componentPaddingMethodOptionState,
  baseComponentTextSizeIndexState,
  baseComponentPaddingXIndexState,
  baseComponentPaddingYIndexState,
  componentDensitySmallQuantityState,
  componentDensityLargeQuantityState,
  componentDensityScaleFactorState,
  scaleComponentRadiusState,
  baseComponentRadiusState,
};
