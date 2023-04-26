import {
    atom
} from 'recoil';
import scaleMethodOptions from '../utilities/scaleMethodOptions';

const containerSmallSizesState = atom({
    key: 'containerSmallSizes',
    default: 0
})

const containerLargeSizesState = atom({
    key: 'containerLargeSizes',
    default: 2
})

const containerBaseRadiusXIndexState = atom({
    key: 'containerBaseRadiusXIndex',
    default: 1
})
const containerBaseRadiusYIndexState = atom({
    key: 'containerBaseRadiusYIndex',
    default: 1
})

const containerBaseElevationIndexState = atom({
    key: 'containerBaseElevationIndex',
    default: 1
})
const containerBaseRadiusIndexState = atom({
    key: 'containerBaseRadiusIndex',
    default: 1
})

const containerRadiusScaleFactorState = atom({
    key: 'containerRadiusScaleFactor',
    default: 1
})

const containerBasePaddingIndexState = atom({
    key: 'containerBasePaddingIndex',
    default: 0
})
const containerPaddingScaleFactorState = atom({
    key: 'containerPaddingFactorScale',
    default: 0
})
const containerPaddingMethodOptionState = atom({
    key: 'containerPaddingMethodOption',
    default: scaleMethodOptions[0]
})

export {
    containerSmallSizesState,
    containerLargeSizesState,
    containerBaseRadiusXIndexState,
    containerBaseRadiusYIndexState,
    containerBaseElevationIndexState,
    containerRadiusScaleFactorState,
    containerBasePaddingIndexState,
    containerPaddingScaleFactorState,
    containerBaseRadiusIndexState,
    containerPaddingMethodOptionState
}