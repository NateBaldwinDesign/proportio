import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import capitalize from '../utilities/capitalize';
import calculateScale from '../utilities/calculateScale';
import {
  spacingScaleFactorState,
  spacingSmallQuantityState,
  spacingLargeQuantityState,
  spacingFormulaState,
} from '../states/spacing';
import scaleFormulas from '../utilities/scaleFormulas';
import typeScaleOptions from '../utilities/typeScaleOptions';
import Dropdown from 'react-dropdown';

const SpacingControls = (props) => {
  const [spacingScaleFactor, setSpacingScaleFactor] = useRecoilState(
    spacingScaleFactorState,
  );
  const [spacingSmallQuantity, setSpacingSmallQuantity] = useRecoilState(
    spacingSmallQuantityState,
  );
  const [spacingLargeQuantity, setSpacingLargeQuantity] = useRecoilState(
    spacingLargeQuantityState,
  );
  const [spacingFormula, setSpacingFormula] =
    useRecoilState(spacingFormulaState);

  const [scaleInput, setScaleInput] = useState(spacingScaleFactor);

  // const inputs = scaleFormulas.map((formula) => {
  //   return (
  //     <div className="radioGroup" key={`spacing${formula}`}>
  //       <input
  //         type="radio"
  //         id={`Spacing${formula}`}
  //         name="SpacingScale_formula"
  //         value={formula}
  //         onClick={(e) => setSpacingFormula(e.target.value)}
  //         defaultChecked={formula === spacingFormula ? true : false}
  //       />
  //       <label htmlFor={`Spacing${formula}`}>{capitalize(formula)}</label>
  //     </div>
  //   );
  // });

  return (
    <fieldset>
      <legend>Spacing</legend>
      {/* <div className="segmentedControl">{inputs}</div> */}
      <div className="column">
        {/* <div className="formGroup">
          <label htmlFor="">Scale factor</label>
          <input
            type="number"
            onInput={(e) => setSpacingScaleFactor(Number(e.target.value))}
            step={spacingFormula === 'power' ? '0.01' : '1'}
            min="0"
            defaultValue={spacingScaleFactor}
          />
        </div> */}
        <div className="formGroup">
          <label htmlFor="">Scale</label>

          <Dropdown
            options={typeScaleOptions}
            onChange={(e) => {
              setScaleInput(e.value);
              if (e.value !== spacingScaleFactor) {
                setSpacingScaleFactor(Number(e.value));
              }
            }}
            value={
              !typeScaleOptions.filter(
                (item) => item.value === spacingScaleFactor,
              )[0]
                ? typeScaleOptions.filter((item) => item.value === undefined)[0]
                : typeScaleOptions.filter(
                    (item) => item.value === spacingScaleFactor,
                  )[0]
            }
            placeholder={typeScaleOptions[1].value}
          />

          <input
            key={scaleInput}
            type="number"
            onChange={(e) => {
              // console.log(e.target.value)
              setSpacingScaleFactor(Number(e.target.value));
            }}
            step={spacingFormula === 'power' ? '0.001' : '1'}
            min="0"
            defaultValue={spacingScaleFactor}
          />
        </div>
        <div className="formGroup">
          <label htmlFor="">Small sizes</label>
          <input
            type="number"
            onInput={(e) => setSpacingSmallQuantity(Number(e.target.value))}
            step="1"
            min="0"
            defaultValue={spacingSmallQuantity}
          />
        </div>

        <div className="formGroup">
          <label htmlFor="">Large sizes</label>
          <input
            type="number"
            onInput={(e) => setSpacingLargeQuantity(Number(e.target.value))}
            step="1"
            min="0"
            defaultValue={spacingLargeQuantity}
          />
        </div>
      </div>
    </fieldset>
  );
};

export default SpacingControls;
