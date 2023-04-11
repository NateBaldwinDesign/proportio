import {
    atom
} from 'recoil';

const baseSizeState = atom({
    key: 'baseSize',
    default: 16
});
const baseMobileScaleFactorState = atom({
    key: 'baseMobileScaleFactor',
    default: 1.25
})

export {
    baseSizeState,
    baseMobileScaleFactorState
}