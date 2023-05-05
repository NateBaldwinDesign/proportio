import { atom } from 'recoil';
import scaleMethodOptions from '../utilities/scaleMethodOptions';

const containerSmallSizesState = atom({
  key: 'containerSmallSizes',
  default: 0,
});

const containerLargeSizesState = atom({
  key: 'containerLargeSizes',
  default: 2,
});

const containerBaseElevationIndexState = atom({
  key: 'containerBaseElevationIndex',
  default: 1,
});
const containerBaseRadiusIndexState = atom({
  key: 'containerBaseRadiusIndex',
  default: 1,
});

const containerRadiusScaleFactorState = atom({
  key: 'containerRadiusScaleFactor',
  default: 1,
});

const containerBasePaddingXIndexState = atom({
  key: 'containerBasePaddingXIndex',
  default: 0,
});
const containerBasePaddingYIndexState = atom({
  key: 'containerBasePaddingYIndex',
  default: 0,
});
const containerPaddingScaleFactorState = atom({
  key: 'containerPaddingFactorScale',
  default: 1,
});
const containerPaddingMethodOptionState = atom({
  key: 'containerPaddingMethodOption',
  default: scaleMethodOptions[1],
});

export {
  containerSmallSizesState,
  containerLargeSizesState,
  containerBasePaddingXIndexState,
  containerBasePaddingYIndexState,
  containerBaseElevationIndexState,
  containerRadiusScaleFactorState,
  containerPaddingScaleFactorState,
  containerBaseRadiusIndexState,
  containerPaddingMethodOptionState,
};
