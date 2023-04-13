import React from "react";
import TypeElement from "./typeElement";
import "../styles/typography.css";
import { useRecoilState } from 'recoil';
import {
  typeScaleState,
  typeSmallQuantityState,
  typeLargeQuantityState,
  typeScaleFormulaState
} from '../states/typography'
import calculateScale from "../utilities/calculateScale";
import {baseSizeState} from '../states/base';
import tokens from '../utilities/tokens'

const Typography = (props) => {
  const [baseSize, setBaseSize] = useRecoilState(baseSizeState);
  const [typeScale, setTypeScale] = useRecoilState(typeScaleState)
  const [typeSmallQuantity, setTypeSmallQuantity] = useRecoilState(typeSmallQuantityState)
  const [typeLargeQuantity, setTypeLargeQuantity] = useRecoilState(typeLargeQuantityState)
  const [typeScaleFormula, setTypeScaleFormula] = useRecoilState(typeScaleFormulaState)

  const sampleText = props.sampleText;

  let smallSizeArray = new Array(typeSmallQuantity).fill(0);
  let largeSizeArray = new Array(typeLargeQuantity).fill(0);

  const newTypeTokens = []

  const smallSizes = smallSizeArray.map((e, i) => {
    const increment = (i + 1) * -1;
    const size = Math.round(calculateScale(baseSize, typeScale, increment, typeScaleFormula));
    const name = `text-size-${100 + (increment * 10)}`;

    const object = {
      [name]: {
        'value': `${size}px`,
        'type': 'dimension'
      }
    }

    newTypeTokens.push(object)

    return (
      <TypeElement
        key={`${typeScale}-neg${i}`}
        size={size}
        content={sampleText}
        showValue
      />
    );
  });
  const orderedSmallSizes = smallSizes.reverse();

  const largeSizes = largeSizeArray.map((e, i) => {
    const size = Math.round(calculateScale(baseSize, typeScale, i, typeScaleFormula));
    const name = `text-size-${100 * (i+1)}`
    const object = {
      [name]: {
        'value': `${size}px`,
        'type': 'dimension'
      }
    }

    newTypeTokens.push(object)
    return (
      <TypeElement
        key={`${typeScale}-${i}`}
        size={size}
        content={sampleText}
        showValue
      />
    );
  });

  tokens.typography = newTypeTokens;

  return (
    <div className="column">
      <h3>Typography</h3>
      <div id="typography">
        {orderedSmallSizes}
        {largeSizes}
      </div>
    </div>
  );
};

export default Typography;
