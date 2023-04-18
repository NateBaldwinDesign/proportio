import React from "react";
import {
  useRecoilState
} from 'recoil';
import {
  baseSizeState,
  baseMobileScaleFactorState,
  baseScaleUnitState
} from '../states/base';
import scaleUnits from "../utilities/scaleUnits";
import capitalize from "../utilities/capitalize";

const BaseControls = (props) => {
  const [baseSize, setBaseSize] = useRecoilState(baseSizeState);
  const [baseMobileScaleFactor, setBaseMobileScaleFactor] = useRecoilState(baseMobileScaleFactorState)
  const [baseScaleUnit, setBaseScaleUnit] = useRecoilState(baseScaleUnitState)

  const inputs = scaleUnits.map((unit) => {
    return (
      <div className="radioGroup" key={`${unit}`}>
        <input
          type="radio"
          id={`scale${unit}`}
          name="scale_unit"
          value={unit}
          onClick={(e) => setBaseScaleUnit(e.target.value)}
          defaultChecked={unit === baseScaleUnit ? true : false}
        />
        <label htmlFor={`scale${unit}`}>{capitalize(unit)}</label>
      </div>
    );
  });

  return (
    <fieldset style={{marginBottom: '0'}}>
      <legend>Base values</legend>
      <div className="column">
        <div className="formGroup">
          <label htmlFor="">Unit size</label>
          <input
            type="number"
            onInput={(e) => setBaseSize(Number(e.target.value))}
            step="1"
            min="0"
            defaultValue={baseSize}
          />
        </div>
        <div className="segmentedControl">
          {inputs}
        </div>
        {/* <div className="formGroup">
          <label htmlFor="">Touch scale factor</label>
          <input
            type="number"
            onInput={(e) => setBaseMobileScaleFactor(Number(e.target.value))}
            step="0.01"
            min="1"
            defaultValue={baseMobileScaleFactor}
          />
        </div> */}
      </div>
    </fieldset>
  );
};

export default BaseControls;
