import React from "react";
import { useRecoilState } from 'recoil';
import SpacingElement from "./spacingElement";
import calculateScale from "../utilities/calculateScale";
import '../styles/spacing.css'
import {baseSizeState} from '../states/base';
import { 
    spacingScaleFactorState,
    spacingSmallQuantityState,
    spacingLargeQuantityState,
    spacingFormulaState
} from "../states/spacing";
import scaleFormulas from "../utilities/scaleFormulas";

const Spacing = (props) => {
    const [baseSize, setBaseSize] = useRecoilState(baseSizeState);
    const [spacingScaleFactor, setSpacingScaleFactor] = useRecoilState(spacingScaleFactorState);
    const [spacingSmallQuantity, setSpacingSmallQuantity] = useRecoilState(spacingSmallQuantityState);
    const [spacingLargeQuantity, setSpacingLargeQuantity] = useRecoilState(spacingLargeQuantityState);
    const [spacingFormula, setSpacingFormula] = useRecoilState(spacingFormulaState);

    const spacerLineHeight = props.spacerLineHeight;

    let smallSizeArray = new Array(spacingSmallQuantity).fill(0);
    let largeSizeArray = new Array(spacingLargeQuantity).fill(0);

    smallSizeArray = smallSizeArray.map((e, i) => {
        let increment = (i + 1) * -1;
        return calculateScale(baseSize, spacingScaleFactor, increment, spacingFormula);
    })
    smallSizeArray = smallSizeArray.reverse();
    largeSizeArray = largeSizeArray.map((e, i) => {
        return calculateScale(baseSize, spacingScaleFactor, i, spacingFormula);
    })

    const spacingSizes = smallSizeArray.concat(largeSizeArray);

    const spacingElements = spacingSizes.map((size, i) => {
        return (
            <SpacingElement key={`spacing-${size}-${i}`} size={size} spacerLineHeight={spacerLineHeight} />
        )
    })

    return (
        <div className="column">
            <h3>Spacing</h3>
            <div id="spacingWrapper">
                {spacingElements}
            </div>
        </div>
    )
}

export default Spacing;
