import React from "react";
import { useRecoilState } from 'recoil';
import capitalize from "../utilities/capitalize";
import scaleMethodOptions from "../utilities/scaleFormulas"
import {
  iconScaleState,
  iconSmallQuantityState,
  iconLargeQuantityState,
  iconScaleFormulaState,
  iconPaddingState
} from "../states/iconography"

const IconControls = (props) => {
  const [iconScale, setIconScale] = useRecoilState(iconScaleState)
  const [iconSmallQuantity, setIconSmallQuantity] = useRecoilState(iconSmallQuantityState)
  const [iconLargeQuantity, setIconLargeQuantity] = useRecoilState(iconLargeQuantityState)
  const [iconScaleFormula, setIconScaleFormula] = useRecoilState(iconScaleFormulaState)
  const [iconPadding, setIconPadding] = useRecoilState(iconPaddingState)

  const inputs = scaleMethodOptions.map((method) => {
    return (
      <div className="radioGroup" key={`iconography${method}`}>
        <input
          type="radio"
          id={`Icon${method}`}
          name="IconScale_method"
          value={method}
          onClick={(e) => setIconScaleFormula(e.target.value)}
          defaultChecked={method === iconScaleFormula ? true : false}
        />
        <label htmlFor={`Icon${method}`}>{capitalize(method)}</label>
      </div>
    );
  });

  return (
    <fieldset>
      <legend>Iconography</legend>
      {/* <div className="segmentedControl">{inputs}</div> */}
      <div className="column">
        <div className="formGroup">
          <label htmlFor="">Scale factor</label>
          <input
            type="number"
            onInput={(e) => setIconScale(Number(e.target.value))}
            step={iconScaleFormula === "power" ? "0.01" : "1"}
            min="0"
            defaultValue={iconScale}
          />
        </div>
        <div className="formGroup">
          <label htmlFor="">Icon padding</label>
          <input
            type="number"
            onInput={(e) => setIconPadding(Number(e.target.value))}
            step="1"
            min="0"
            defaultValue={iconPadding}
          />
        </div>
        <div className="formGroup">
          <label htmlFor="">Small sizes</label>
          <input
            type="number"
            onInput={(e) => setIconSmallQuantity(Number(e.target.value))}
            step="1"
            min="0"
            defaultValue={iconSmallQuantity}
          />
        </div>

        <div className="formGroup">
          <label htmlFor="">Large sizes</label>
          <input
            type="number"
            onInput={(e) => setIconLargeQuantity(Number(e.target.value))}
            step="1"
            min="0"
            defaultValue={iconLargeQuantity}
          />
        </div>
      </div>
    </fieldset>
  );
};

export default IconControls;
