import {
    atom
} from 'recoil';
import scaleFormulas from '../utilities/scaleFormulas';

// Spacing
const spacingScaleFactorState = atom({
    key: 'spacingScaleFactor',
    default: 1.5
});
const spacingSmallQuantityState = atom({
    key: 'spacingSmallQuantity',
    default: 2
});
const spacingLargeQuantityState = atom({
    key: 'spacingLargeQuantity',
    default: 6
});
const spacingFormulaState = atom({
    key: 'spacingFormula',
    default: scaleFormulas[1]
});
// const [spacingSmallQuantity, setSpacingSmallQuantity] = useState(2);
// const [spacingLargeQuantity, setSpacingLargeQuantity] = useState(6);
// const [spacingScaleMethod, setSpacingScaleMethod] = useState(scaleMethods[1]);

export {
    spacingScaleFactorState,
    spacingSmallQuantityState,
    spacingLargeQuantityState,
    spacingFormulaState
}