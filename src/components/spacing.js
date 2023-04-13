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
import tokens from '../utilities/tokens';

const Spacing = (props) => {
    const [baseSize, setBaseSize] = useRecoilState(baseSizeState);
    const [spacingScaleFactor, setSpacingScaleFactor] = useRecoilState(spacingScaleFactorState);
    const [spacingSmallQuantity, setSpacingSmallQuantity] = useRecoilState(spacingSmallQuantityState);
    const [spacingLargeQuantity, setSpacingLargeQuantity] = useRecoilState(spacingLargeQuantityState);
    const [spacingFormula, setSpacingFormula] = useRecoilState(spacingFormulaState);

    const spacerLineHeight = props.spacerLineHeight;

    let smallSizeArray = new Array(spacingSmallQuantity).fill(0);
    let largeSizeArray = new Array(spacingLargeQuantity).fill(0);

    let newSpacingTokens = [];

    smallSizeArray = smallSizeArray.map((e, i) => {
        let increment = (i + 1) * -1;
        const size = Math.round(calculateScale(baseSize, spacingScaleFactor, increment, spacingFormula));
        const name = `spacing-${100 + (increment * 10)}`;
    
        const object = {
          [name]: {
            'value': `${size}px`,
            'type': 'dimension'
          }
        }
    
        newSpacingTokens.push(object)
        return size;
    })
    smallSizeArray = smallSizeArray.reverse();
    largeSizeArray = largeSizeArray.map((e, i) => {
        const size = Math.round(calculateScale(baseSize, spacingScaleFactor, i, spacingFormula));
        const name = `spacing-${100 * (i+1)}`;
    
        const object = {
          [name]: {
            'value': `${size}px`,
            'type': 'dimension'
          }
        }
        newSpacingTokens.push(object)
        return calculateScale(baseSize, spacingScaleFactor, i, spacingFormula);
    })
    tokens.spacing = newSpacingTokens;

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
