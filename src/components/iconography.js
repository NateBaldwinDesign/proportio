import React from "react";
import {
    useRecoilState
  } from 'recoil';
import IconElement from "./iconElement";
import '../styles/iconography.css'
import {
    iconScaleState,
    iconSmallQuantityState,
    iconLargeQuantityState,
    iconScaleFormulaState,
    iconPaddingState
} from '../states/iconography'

const Iconography = (props) => {
    const [iconScale, setIconScale] = useRecoilState(iconScaleState)
    const [iconSmallQuantity, setIconSmallQuantity] = useRecoilState(iconSmallQuantityState)
    const [iconLargeQuantity, setIconLargeQuantity] = useRecoilState(iconLargeQuantityState)
    const [iconScaleFormula, setIconScaleFormula] = useRecoilState(iconScaleFormulaState)
    const [iconPadding, setIconPadding] = useRecoilState(iconPaddingState)

    let smallSizeArray = new Array(iconSmallQuantity).fill(0); 
    let largeSizeArray = new Array(iconLargeQuantity).fill(0);

    const smallSizes = smallSizeArray.map((e, i) => {
        return <IconElement
            key={`${iconScale}-neg${i}`}
            i={(i+1) * -1}
            showValue 
            />
    })
    const orderedSmallSizes = smallSizes.reverse();

    const largeSizes = largeSizeArray.map((e, i) => {
        return <IconElement
            key={`${iconScale}-${i}`}
            i={i}
            showValue 
            />
    })

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
