import React from "react";
import { useRecoilState } from 'recoil';
import TypeElement from "./typeElement";
import IconElement from "./iconElement";
import "../styles/typography.css";
import "../styles/iconography.css";
import "../styles/typeIconPair.css";
import calculateScale from "../utilities/calculateScale";
import {baseSizeState} from '../states/base';
import { spacingScaleFactorState } from "../states/spacing";


const TypeIconPairing = (props) => {
  const [baseSize, setBaseSize] = useRecoilState(baseSizeState);
  const [spacingScaleFactor, setSpacingScaleFactor] = useRecoilState(spacingScaleFactorState);

  const typeScale = props.typeScale;
  const smallerSizes = props.typeSmallQuantity;
  const largerSizes = props.typeLargeQuantity;
  const typeScaleMethod = props.typeScaleMethod;
  const spacingScaleMethod = props.spacingScaleMethod;
  const textIconGapScaleMethod = props.textIconGapScaleMethod;
  const gap = props.textIconGapIndex;
  const textIconIconSizeIndex = props.textIconIconSizeIndex;

  let smallSizeArray = new Array(smallerSizes).fill(0);
  let largeSizeArray = new Array(largerSizes).fill(0);

  const iconScale = props.iconScale;
  const iconScaleMethod = props.iconScaleMethod;
  const iconPadding = props.iconPadding;
  const iconLineHeight = props.iconLineHeight;

  const sampleText = props.sampleText;

  const scale =
    textIconGapScaleMethod === "typeScale"
      ? typeScale
      : textIconGapScaleMethod === "spacingScale"
      ? spacingScaleFactor
      : "none";
  const method =
    textIconGapScaleMethod === "typeScale"
      ? typeScaleMethod
      : textIconGapScaleMethod === "spacingScale"
      ? spacingScaleMethod
      : "none";

  const smallSizes = smallSizeArray.map((e, i) => {
    const increment = (1 + i) * -1 + gap;
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
            iconPadding={iconPadding}
            iconLineHeight={iconLineHeight}
            scaleMethod={iconScaleMethod}
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
            scaleMethod={typeScaleMethod}
          />
        </div>
      </div>
    );
  });
  const orderedSmallSizes = smallSizes.reverse();

  const largeSizes = largeSizeArray.map((e, i) => {
    const increment = i + gap;
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
            iconPadding={iconPadding}
            iconLineHeight={iconLineHeight}
            scaleMethod={iconScaleMethod}
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
            scaleMethod={typeScaleMethod}
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
