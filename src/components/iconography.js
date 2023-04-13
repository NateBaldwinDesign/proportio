import React from "react";
import {
    useRecoilState
  } from 'recoil';
import IconElement from "./iconElement";
import '../styles/iconography.css'
import {baseSizeState} from '../states/base';
import {
    iconScaleState,
    iconSmallQuantityState,
    iconLargeQuantityState,
    iconScaleFormulaState,
    iconPaddingState
} from '../states/iconography'
import calculateScale from "../utilities/calculateScale";
import tokens from "../utilities/tokens";

const Iconography = (props) => {
    const [baseSize, setBaseSize] = useRecoilState(baseSizeState)
    const [iconScale, setIconScale] = useRecoilState(iconScaleState)
    const [iconSmallQuantity, setIconSmallQuantity] = useRecoilState(iconSmallQuantityState)
    const [iconLargeQuantity, setIconLargeQuantity] = useRecoilState(iconLargeQuantityState)
    const [iconScaleFormula, setIconScaleFormula] = useRecoilState(iconScaleFormulaState)
    const [iconPadding, setIconPadding] = useRecoilState(iconPaddingState)

    let smallSizeArray = new Array(iconSmallQuantity).fill(0); 
    let largeSizeArray = new Array(iconLargeQuantity).fill(0);

    const newIconTokens = []

    const smallSizes = smallSizeArray.map((e, i) => {
        const increment = (i+1) * -1
        const size = Math.round(calculateScale(baseSize, iconScale, increment, iconScaleFormula));
        const name = `icon-size-${100 + (increment * 10)}`;

        const object = {
          [name]: {
            'value': `${size}px`,
            'type': 'dimension'
          }
        }
        newIconTokens.push(object)
        
        return <IconElement
            key={`${iconScale}-neg${i}`}
            i={increment}
            size={size}
            showValue 
            />
    })
    const orderedSmallSizes = smallSizes.reverse();

    const largeSizes = largeSizeArray.map((e, i) => {
        const size = Math.round(calculateScale(baseSize, iconScale, i, iconScaleFormula));
        const name = `icon-size-${100 * (i+1)}`
        const object = {
          [name]: {
            'value': `${size}px`,
            'type': 'dimension'
          }
        }
        newIconTokens.push(object)

        return <IconElement
            key={`${iconScale}-${i}`}
            i={i}
            size={size}
            showValue 
            />
    })

    tokens.icons = newIconTokens;

    return (
        <div className="column">
            <h3>Iconography</h3>
            <div>
                {orderedSmallSizes}
                {largeSizes}
            </div>
        </div>
    )
}

export default Iconography;
