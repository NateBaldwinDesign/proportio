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
import { baseScaleUnitState, baseSizeState } from "../states/base";
import round from "../utilities/round";

const Radius = (props) => {
    const [baseSize, setBaseSize] = useRecoilState(baseSizeState);
    const [baseRadiusSize, setBaseRadiusSize] = useRecoilState(baseRadiusSizeState)
    const [radiusScaleFactor, setRadiusScaleFactor] = useRecoilState(radiusScaleFactorState)
    const [radiusSmallQuantity, setRadiusSmallQuantity] = useRecoilState(radiusSmallQuantityState)
    const [radiusLargeQuantity, setRadiusLargeQuantity] = useRecoilState(radiusLargeQuantityState)
    const [radiusScaleFormula, setRadiusScaleFormula] = useRecoilState(radiusScaleFormulaState)
    const [baseScaleUnit, setBaseScaleUnit] = useRecoilState(baseScaleUnitState)

    let sizeArray = buildArray(radiusSmallQuantity, radiusLargeQuantity);
    const sizes = sizeArray.map((i) => {
        return calculateScale(baseRadiusSize, radiusScaleFactor, i, radiusScaleFormula);
    })
    
    const newRadiusTokens = []

    const radiusElements = sizes.map((size, i) => {
        const name = `radius-${100 * (i+1)}`
        const value = (baseScaleUnit === 'px') ? size : round(size/baseSize, 3);
        const object = {
          [name]: {
            'value': `${value}${baseScaleUnit}`,
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
