import {
    atom
} from 'recoil';

const containerSmallSizesState = atom({
    key: 'containerSmallSizes',
    default: 0
})

const containerLargeSizesState = atom({
    key: 'containerLargeSizes',
    default: 0
})

const containerBaseRadiusIndexState = atom({
    key: 'containerBaseRadiusIndex',
    default: 1
})

const containerBaseElevationIndexState = atom({
    key: 'containerBaseElevationIndex',
    default: 1
})

const containerRadiusScaleFactorState = atom({
    key: 'containerRadiusScaleFactor',
    default: 1
})

export {
    containerSmallSizesState,
    containerLargeSizesState,
    containerBaseRadiusIndexState,
    containerBaseElevationIndexState,
    containerRadiusScaleFactorState
}