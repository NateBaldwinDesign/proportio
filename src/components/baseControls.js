import React from "react";
import {
  useRecoilState
} from 'recoil';
import {
  baseSizeState,
  baseMobileScaleFactorState,
  baseScaleUnitState,
  baseMaxSizeState,
  viewportMinState,
  viewportMaxState
} from '../states/base';
import scaleUnits from "../utilities/scaleUnits";
import capitalize from "../utilities/capitalize";
import fluidScale from "../utilities/fluidScale";

const BaseControls = (props) => {
  const [baseSize, setBaseSize] = useRecoilState(baseSizeState);
  const [baseMobileScaleFactor, setBaseMobileScaleFactor] = useRecoilState(baseMobileScaleFactorState)
  const [baseScaleUnit, setBaseScaleUnit] = useRecoilState(baseScaleUnitState)
  const [baseMaxSize, setBaseMaxSize] = useRecoilState(baseMaxSizeState)
  const [viewportMin, setViewportMin] = useRecoilState(viewportMinState)
  const [viewportMax, setViewportMax] = useRecoilState(viewportMaxState)

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
    <>
    <fieldset style={{marginBottom: '0'}}>
      <legend>Base values</legend>
      <div className="column">
        <div className="formGroup">
          <div className="segmentedControl">
            {inputs}
          </div>        
        </div>
        <div className="formGroup">
          <label htmlFor="">Minimum size</label>
          <input
            type="number"
            onInput={(e) => setBaseSize(Number(e.target.value))}
            step="1"
            min="0"
            defaultValue={baseSize}
          />
        </div>
        <div className="formGroup">
          <label htmlFor="">Maximum size</label>
          <input
            type="number"
            onInput={(e) => setBaseMaxSize(Number(e.target.value))}
            step="1"
            min="0"
            defaultValue={baseMaxSize}
          />
        </div>
      </div>
    </fieldset>

    <fieldset style={{marginBottom: '0'}}>
        <legend>Viewport</legend>
        <div className="column">
          <div className="formGroup">
            <label htmlFor="">Minimum size</label>
            <input
              type="number"
              onInput={(e) => setViewportMin(Number(e.target.value))}
              step="1"
              min="0"
              defaultValue={viewportMin}
            />
          </div>
          <div className="formGroup">
            <label htmlFor="">Maximum size</label>
            <input
              type="number"
              onInput={(e) => setViewportMax(Number(e.target.value))}
              step="1"
              min="0"
              defaultValue={viewportMax}
            />
          </div>
        </div>
    </fieldset>
    </>
  );
};

export default BaseControls;
