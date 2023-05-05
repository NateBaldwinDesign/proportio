import React from 'react';
import { useRecoilState } from 'recoil';
import capitalize from '../utilities/capitalize';
import { baseSizeState } from '../states/base';
import {
  spacingScaleFactorState,
  spacingFormulaState,
} from '../states/spacing';
import {
  typeScaleState,
  typeSmallQuantityState,
  typeLargeQuantityState,
  typeScaleFormulaState,
} from '../states/typography';
import {
  textIconGapIndexState,
  textIconIconSizeIndexState,
  textIconGapScaleFormulaState,
} from '../states/textIconPair';
import {
  iconScaleState,
  iconSmallQuantityState,
  iconLargeQuantityState,
  iconScaleFormulaState,
  iconPaddingState,
} from '../states/iconography';
import scaleMethodOptions from '../utilities/scaleMethodOptions';

const TypeIconPairingControls = (props) => {
  const [baseSize, setBaseSize] = useRecoilState(baseSizeState);
  const [spacingScaleFactor, setSpacingScaleFactor] = useRecoilState(
    spacingScaleFactorState,
  );
  const [spacingFormula, setSpacingFormula] =
    useRecoilState(spacingFormulaState);

  const [typeScale, setTypeScale] = useRecoilState(typeScaleState);
  const [typeSmallQuantity, setTypeSmallQuantity] = useRecoilState(
    typeSmallQuantityState,
  );
  const [typeLargeQuantity, setTypeLargeQuantity] = useRecoilState(
    typeLargeQuantityState,
  );
  const [typeScaleFormula, setTypeScaleFormula] = useRecoilState(
    typeScaleFormulaState,
  );

  const [textIconGapIndex, setTextIconGapIndex] = useRecoilState(
    textIconGapIndexState,
  );
  const [textIconIconSizeIndex, setTextIconIconSizeIndex] = useRecoilState(
    textIconIconSizeIndexState,
  );
  const [textIconGapScaleFormula, setTextIconGapScaleFormula] = useRecoilState(
    textIconGapScaleFormulaState,
  );

  const [iconScale, setIconScale] = useRecoilState(iconScaleState);
  const [iconScaleFormula, setIconScaleFormula] = useRecoilState(
    iconScaleFormulaState,
  );

  const inputs = scaleMethodOptions.map((method) => {
    return (
      <div className="radioGroup" key={`typeIconPiar${method}`}>
        <input
          type="radio"
          id={`gap${method}`}
          name="gap_method"
          value={method}
          onClick={(e) => setTextIconGapScaleFormula(e.target.value)}
          defaultChecked={method === textIconGapScaleFormula ? true : false}
        />
        <label htmlFor={`gap${method}`}>{capitalize(method)}</label>
      </div>
    );
  });

  const fieldLabel = 'Gap index';
  const fieldMax = '500';
  const fieldMin = '-500';

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
          <label htmlFor="">Icon size index</label>
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
