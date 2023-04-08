import React from "react";
import { useRecoilState } from 'recoil';
import SpacingElement from "./spacingElement";
import calculateScale from "../utilities/calculateScale";
import '../styles/spacing.css'
import {baseSizeState} from '../states/base';
import { spacingScaleFactorState } from "../states/spacing";

const Spacing = (props) => {
    const [baseSize, setBaseSize] = useRecoilState(baseSizeState);
    const [spacingScaleFactor, setSpacingScaleFactor] = useRecoilState(spacingScaleFactorState);

    const smallerSizes = props.spacingSmallQuantity
    const largerSizes = props.spacingLargeQuantity;
    const spacingScaleMethod = props.spacingScaleMethod;
    const spacerLineHeight = props.spacerLineHeight;

    let smallSizeArray = new Array(smallerSizes).fill(0);
    let largeSizeArray = new Array(largerSizes).fill(0);

    smallSizeArray = smallSizeArray.map((e, i) => {
        let increment = (i + 1) * -1;
        return calculateScale(baseSize, spacingScaleFactor, increment, spacingScaleMethod);
    })
    smallSizeArray = smallSizeArray.reverse();
    largeSizeArray = largeSizeArray.map((e, i) => {
        return calculateScale(baseSize, spacingScaleFactor, i, spacingScaleMethod);
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
