import {
    atom
} from 'recoil';
import scaleFormulas from '../utilities/scaleFormulas';

const iconScaleState = atom({
    key: 'iconScale',
    default: 1.125
})
const iconPaddingState = atom({
    key: 'iconPadding',
    default: 2
})
const iconSmallQuantityState = atom({
    key: 'iconSmallQuantity',
    default: 2
})
const iconLargeQuantityState = atom({
    key: 'iconLargeQuantity',
    default: 10
})
const iconScaleFormlaState = atom({
    key: 'iconScaleFormula',
    default: scaleFormulas[1]
})

export {
    iconScaleState,
    iconSmallQuantityState,
    iconLargeQuantityState,
    iconScaleFormlaState,
    iconPaddingState
}