import {
    atom
} from 'recoil';
import scaleFormulas from '../utilities/scaleFormulas';

const textIconGapIndexState = atom({
    key: 'textIconGapIndex',
    default: -10
})
const textIconIconSizeIndexState = atom({
    key: 'textIconIconSizeIndex',
    default: 0
})
const textIconGapPaddingState = atom({
    key: 'textIconGapPadding',
    default: 2
})

const textIconGapScaleFormlaState = atom({
    key: 'textIconGapScaleFormula',
    default: scaleFormulas[0]
})

export {
    textIconGapIndexState,
    textIconIconSizeIndexState,
    textIconGapPaddingState,
    textIconGapScaleFormlaState
}
