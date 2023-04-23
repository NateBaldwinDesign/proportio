import {
    atom
} from 'recoil';
import scaleUnits from '../utilities/scaleUnits';

const baseSizeState = atom({
    key: 'baseSize',
    default: 16
});
const baseMaxSizeState = atom({
    key: 'baseMaxSize',
    default: 20
});
const baseMobileScaleFactorState = atom({
    key: 'baseMobileScaleFactor',
    default: 1.25
})
const baseScaleUnitState = atom({
    key: 'baseScaleUnit',
    default: scaleUnits[0]
})
const viewportMinState = atom({
    key: 'viewportMin',
    default: 320
})
const viewportMaxState = atom({
    key: 'viewportMax',
    default: 1920
})

export {
    baseSizeState,
    baseMobileScaleFactorState,
    baseMaxSizeState,
    baseScaleUnitState,
    viewportMinState,
    viewportMaxState
}