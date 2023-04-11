import React from "react";
import { useRecoilState } from 'recoil';
import capitalize from "../utilities/capitalize";
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
import scaleMethodOptions from "../utilities/scaleFormulas"

const TypeIconPairingControls = (props) => {
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

  const textIconGapScaleMethod = props.textIconGapScaleMethod;
  const setTextIconGapScaleMethod = props.setTextIconGapScaleMethod;

  const inputs = scaleMethodOptions.map((method) => {
    return (
      <div className="radioGroup" key={`typeIconPiar${method}`}>
        <input
          type="radio"
          id={`gap${method}`}
          name="gap_method"
          value={method}
          onClick={(e) => setTextIconGapScaleMethod(e.target.value)}
          defaultChecked={textIconGapScaleMethod === "typeScale" ? true : false}
        />
        <label htmlFor={`gap${method}`}>{capitalize(method)}</label>
      </div>
    );
  });

  const fieldLabel = "Gap index";
  const fieldMax = "500";
  const fieldMin = "-500";

  return (
    <fieldset>
      <legend>Type-icon pairing</legend>
      <div className="segmentedControl">{inputs}</div>
      <div className="column">
        <div className="formGroup">
          <label htmlFor="">{fieldLabel}</label>
          <input
            type="number"
            onInput={(e) => setTextIconGapIndex(Number(e.target.value))}
            step="1"
            min={fieldMin}
            max={fieldMax}
            defaultValue={textIconGapIndex}
          />
        </div>
        <div className="formGroup">
          <label htmlFor="">Icon index</label>
          <input
            type="number"
            onInput={(e) => setTextIconIconSizeIndex(Number(e.target.value))}
            step="1"
            min={fieldMin}
            max={fieldMax}
            defaultValue={textIconIconSizeIndex}
          />
        </div>
      </div>
    </fieldset>
  );
};

export default TypeIconPairingControls;
