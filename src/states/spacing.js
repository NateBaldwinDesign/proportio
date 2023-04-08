import {
    atom
} from 'recoil';

// Spacing
const spacingScaleFactorState = atom({
    key: 'spacingScaleFactor',
    default: 1.5
});
// const [spacingSmallQuantity, setSpacingSmallQuantity] = useState(2);
// const [spacingLargeQuantity, setSpacingLargeQuantity] = useState(6);
// const [spacingScaleMethod, setSpacingScaleMethod] = useState(scaleMethods[1]);

export {
    spacingScaleFactorState
}