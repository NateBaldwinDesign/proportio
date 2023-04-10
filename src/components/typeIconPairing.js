import React from "react";
import { useRecoilState } from 'recoil';
import TypeElement from "./typeElement";
import IconElement from "./iconElement";
import "../styles/typography.css";
import "../styles/iconography.css";
import "../styles/typeIconPair.css";
import calculateScale from "../utilities/calculateScale";
import {baseSizeState} from '../states/base';
import { 
  spacingScaleFactorState,
  spacingFormulaState
 } from "../states/spacing";
 import {
  typeScaleState,
  typeSmallQuantityState,
  typeLargeQuantityState,
  typeScaleFormlaState
} from '../states/typography'
import {
  textIconGapIndexState,
  textIconIconSizeIndexState,
  textIconGapPaddingState,
  textIconGapScaleFormlaState
} from "../states/textIconPair"
import {
  iconScaleState,
  iconSmallQuantityState,
  iconLargeQuantityState,
  iconScaleFormlaState,
  iconPaddingState
} from '../states/iconography'

const TypeIconPairing = (props) => {
  const [baseSize, setBaseSize] = useRecoilState(baseSizeState);
  const [spacingScaleFactor, setSpacingScaleFactor] = useRecoilState(spacingScaleFactorState);
  const [spacingFormula, setSpacingFormula] = useRecoilState(spacingFormulaState);

  const [typeScale, setTypeScale] = useRecoilState(typeScaleState)
  const [typeSmallQuantity, setTypeSmallQuantity] = useRecoilState(typeSmallQuantityState)
  const [typeLargeQuantity, setTypeLargeQuantity] = useRecoilState(typeLargeQuantityState)
  const [typeScaleFormla, setTypeScaleFormla] = useRecoilState(typeScaleFormlaState)

  const [textIconGapIndex, setTextIconGapIndex] = useRecoilState(textIconGapIndexState)
  const [textIconIconSizeIndex, setTextIconIconSizeIndex] = useRecoilState(textIconIconSizeIndexState)
  const [textIconGapPadding, setTextIconGapPadding] = useRecoilState(textIconGapPaddingState)
  const [textIconGapScaleFormla, setTextIconGapScaleFormla] = useRecoilState(textIconGapScaleFormlaState)

  const [iconScale, setIconScale] = useRecoilState(iconScaleState)
  const [iconScaleFormla, setIconScaleFormla] = useRecoilState(iconScaleFormlaState)

  let smallSizeArray = new Array(typeSmallQuantity).fill(0);
  let largeSizeArray = new Array(typeLargeQuantity).fill(0);

  const sampleText = props.sampleText;

  const scale =
    textIconGapScaleFormla === "typeScale"
      ? typeScale
      : textIconGapScaleFormla === "spacingScale"
      ? spacingScaleFactor
      : "none";
  const method =
    textIconGapScaleFormla === "typeScale"
      ? typeScaleFormla
      : textIconGapScaleFormla === "spacingScale"
      ? spacingFormula
      : "none";

  const smallSizes = smallSizeArray.map((e, i) => {
    const increment = (1 + i) * -1 + textIconGapIndex;
    const iconIncrement = i - textIconIconSizeIndex;
    const gapSize = Math.round(
      calculateScale(baseSize, scale, increment, method)
    );

    return (
      <div className="textIconItem" key={`typeIconPair-${iconScale}-neg${i}`}>
        <span className="specs"> {gapSize} </span>
        <div className="typeIconPair" key={`typeIcon-neg${i}`}>
          <IconElement
            key={`typeIcon-icon-${iconScale}-neg${i}`}
            baseSize={baseSize}
            scale={iconScale}
            i={(iconIncrement + 1) * -1}
            scaleMethod={iconScaleFormla}
          />
          <span
            style={{
              display: "block",
              margin: 0,
              padding: 0,
              width: `${gapSize}px`,
            }}
          ></span>
          <TypeElement
            key={`typeIcon-text-${typeScale}-neg${i}`}
            baseSize={baseSize}
            scale={typeScale}
            i={(i + 1) * -1}
            content={sampleText}
            scaleMethod={typeScaleFormla}
          />
        </div>
      </div>
    );
  });
  const orderedSmallSizes = smallSizes.reverse();

  const largeSizes = largeSizeArray.map((e, i) => {
    const increment = i + textIconGapIndex;
    const iconIncrement = i + textIconIconSizeIndex;
    const gapSize = Math.round(
      calculateScale(baseSize, scale, increment, method)
    );

    return (
      <div className="textIconItem" key={`typeIconPair-${iconScale}-${i}`}>
        <span className="specs"> {gapSize} </span>
        <div className="typeIconPair" key={`typeIcon-${i}`}>
          <IconElement
            key={`typeIcon-icon-${iconScale}-${i}`}
            baseSize={baseSize}
            scale={iconScale}
            i={iconIncrement}
            scaleMethod={iconScaleFormla}
          />
          <span
            style={{
              display: "block",
              margin: 0,
              padding: 0,
              width: `${gapSize}px`,
            }}
          ></span>
          <TypeElement
            key={`typeIcon-text-${typeScale}-${i}`}
            baseSize={baseSize}
            scale={typeScale}
            i={i}
            content={sampleText}
            scaleMethod={typeScaleFormla}
          />
        </div>
      </div>
    );
  });

  return (
    <div className="column">
      <h3>Type-icon pairing</h3>
      <div id="typeIconPairing">
        {orderedSmallSizes}
        {largeSizes}
      </div>
    </div>
  );
};

export default TypeIconPairing;
