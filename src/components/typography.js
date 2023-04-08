import React from "react";
import TypeElement from "./typeElement";
import "../styles/typography.css";
import { useRecoilState } from 'recoil';


const Typography = (props) => {
  const typeScale = props.typeScale;
  const smallerSizes = props.typeSmallQuantity;
  const largerSizes = props.typeLargeQuantity;
  const typeScaleMethod = props.typeScaleMethod;
  const sampleText = props.sampleText;

  let smallSizeArray = new Array(smallerSizes).fill(0);
  let largeSizeArray = new Array(largerSizes).fill(0);

  const smallSizes = smallSizeArray.map((e, i) => {
    return (
      <TypeElement
        key={`${typeScale}-neg${i}`}
        scale={typeScale}
        i={(i + 1) * -1}
        content={sampleText}
        scaleMethod={typeScaleMethod}
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
        scaleMethod={typeScaleMethod}
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
