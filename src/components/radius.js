import React from "react";
import { useRecoilState } from 'recoil';
import calculateScale from "../utilities/calculateScale";
import '../styles/radius.css'
import buildArray from "../utilities/buildArray";
import RadiusElement from "./radiusElement";
import {
    baseRadiusSizeState,
    radiusScaleFactorState,
    radiusSmallQuantityState,
    radiusLargeQuantityState,
    radiusScaleFormulaState
} from "../states/radius"
import tokens from "../utilities/tokens";

const Radius = (props) => {
    const [baseRadiusSize, setBaseRadiusSize] = useRecoilState(baseRadiusSizeState)
    const [radiusScaleFactor, setRadiusScaleFactor] = useRecoilState(radiusScaleFactorState)
    const [radiusSmallQuantity, setRadiusSmallQuantity] = useRecoilState(radiusSmallQuantityState)
    const [radiusLargeQuantity, setRadiusLargeQuantity] = useRecoilState(radiusLargeQuantityState)
    const [radiusScaleFormula, setRadiusScaleFormula] = useRecoilState(radiusScaleFormulaState)

    let sizeArray = buildArray(radiusSmallQuantity, radiusLargeQuantity);
    const sizes = sizeArray.map((i) => {
        return calculateScale(baseRadiusSize, radiusScaleFactor, i, radiusScaleFormula);
    })
    
    const newRadiusTokens = []

    const radiusElements = sizes.map((size, i) => {
        const name = `radius-${100 * (i+1)}`
        const object = {
          [name]: {
            'value': `${size}px`,
            'type': 'dimension'
          }
        }
        newRadiusTokens.push(object)

        return (
            <RadiusElement 
                key={`radius-${i}}`}
                radius={size}
            />
        )
    })

    tokens.radius = newRadiusTokens

    return (
        <div className="column">
            <h3>Radius</h3>
            <div id="radiusWrapper">
                {radiusElements}
            </div>
        </div>
    )
}

export default Radius;
