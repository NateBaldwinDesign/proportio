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

const Typography = (props) => {
  const [typeScale, setTypeScale] = useRecoilState(typeScaleState)
  const [typeSmallQuantity, setTypeSmallQuantity] = useRecoilState(typeSmallQuantityState)
  const [typeLargeQuantity, setTypeLargeQuantity] = useRecoilState(typeLargeQuantityState)
  const [typeScaleFormula, setTypeScaleFormula] = useRecoilState(typeScaleFormulaState)

  const sampleText = props.sampleText;

  let smallSizeArray = new Array(typeSmallQuantity).fill(0);
  let largeSizeArray = new Array(typeLargeQuantity).fill(0);

  const smallSizes = smallSizeArray.map((e, i) => {
    return (
      <TypeElement
        key={`${typeScale}-neg${i}`}
        scale={typeScale}
        i={(i + 1) * -1}
        content={sampleText}
        scaleMethod={typeScaleFormula}
        showValue
      />
    );
  });
  const orderedSmallSizes = smallSizes.reverse();

  const largeSizes = largeSizeArray.map((e, i) => {
    return (
      <TypeElement
        key={`${typeScale}-${i}`}
        scale={typeScale}
        i={i}
        content={sampleText}
        scaleMethod={typeScaleFormula}
        showValue
      />
    );
  });

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
