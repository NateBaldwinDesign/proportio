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
  typeScaleFormulaState
} from '../states/typography'
import {
  textIconGapIndexState,
  textIconIconSizeIndexState,
  textIconGapScaleFormulaState
} from "../states/textIconPair"
import {
  iconScaleState,
  iconSmallQuantityState,
  iconLargeQuantityState,
  iconScaleFormulaState,
  iconPaddingState
} from '../states/iconography'

const TypeIconPairing = (props) => {
  const [baseSize, setBaseSize] = useRecoilState(baseSizeState);
  const [spacingScaleFactor, setSpacingScaleFactor] = useRecoilState(spacingScaleFactorState);
  const [spacingFormula, setSpacingFormula] = useRecoilState(spacingFormulaState);

  const [typeScale, setTypeScale] = useRecoilState(typeScaleState)
  const [typeSmallQuantity, setTypeSmallQuantity] = useRecoilState(typeSmallQuantityState)
  const [typeLargeQuantity, setTypeLargeQuantity] = useRecoilState(typeLargeQuantityState)
  const [typeScaleFormula, setTypeScaleFormula] = useRecoilState(typeScaleFormulaState)

  const [textIconGapIndex, setTextIconGapIndex] = useRecoilState(textIconGapIndexState)
  const [textIconIconSizeIndex, setTextIconIconSizeIndex] = useRecoilState(textIconIconSizeIndexState)
  const [textIconGapScaleFormula, setTextIconGapScaleFormula] = useRecoilState(textIconGapScaleFormulaState)

  const [iconScale, setIconScale] = useRecoilState(iconScaleState)
  const [iconScaleFormula, setIconScaleFormula] = useRecoilState(iconScaleFormulaState)

  let smallSizeArray = new Array(typeSmallQuantity).fill(0);
  let largeSizeArray = new Array(typeLargeQuantity).fill(0);

  const sampleText = props.sampleText;

  const scale =
    textIconGapScaleFormula === "typeScale"
      ? typeScale
      : textIconGapScaleFormula === "spacingScale"
      ? spacingScaleFactor
      : "none";
  const method =
    textIconGapScaleFormula === "typeScale"
      ? typeScaleFormula
      : textIconGapScaleFormula === "spacingScale"
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
            i={(iconIncrement + 1) * -1}
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
            i={(i + 1) * -1}
            content={sampleText}
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
            scaleMethod={iconScaleFormula}
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
            scaleMethod={typeScaleFormula}
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
