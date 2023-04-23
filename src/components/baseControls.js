import React from "react";
import {
  useRecoilState
} from 'recoil';
import {
  baseSizeState,
  baseMinSizeState,
  baseMobileScaleFactorState,
  baseScaleUnitState,
  baseMaxSizeState,
  viewportMinState,
  viewportMaxState
} from '../states/base';
import scaleUnits from "../utilities/scaleUnits";
import capitalize from "../utilities/capitalize";
import fluidScale from "../utilities/fluidScale";
import { viewportSizeState } from "../states/viewport";
import calculateFontSize from "../utilities/calculateFontSize";

const BaseControls = (props) => {
  const [baseSize, setBaseSize] = useRecoilState(baseSizeState);
  const [baseMinSize, setBaseMinSize] = useRecoilState(baseMinSizeState);
  const [baseMobileScaleFactor, setBaseMobileScaleFactor] = useRecoilState(baseMobileScaleFactorState)
  const [baseScaleUnit, setBaseScaleUnit] = useRecoilState(baseScaleUnitState)
  const [baseMaxSize, setBaseMaxSize] = useRecoilState(baseMaxSizeState)
  const [viewportMin, setViewportMin] = useRecoilState(viewportMinState)
  const [viewportMax, setViewportMax] = useRecoilState(viewportMaxState)
  const [viewportSize, setViewportSize] = useRecoilState(viewportSizeState)

  const updateBaseSizeByMin = (v) => {
    const size = calculateFontSize(viewportMin, viewportMax, v, baseMaxSize, viewportSize)
    console.log(size)
    return setBaseSize(size)
  }
  const updateBaseSizeByMax = (v) => {
    const size = calculateFontSize(viewportMin, viewportMax, v, baseMaxSize, viewportSize)
    console.log(size)
    return setBaseSize(size)
  }

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
            onInput={(e) => {
              setBaseMinSize(Number(e.target.value))
              updateBaseSizeByMin(Number(e.target.value))
            }}
            step="1"
            min="0"
            defaultValue={baseMinSize}
          />
        </div>
        <div className="formGroup">
          <label htmlFor="">Maximum size</label>
          <input
            type="number"
            onInput={(e) => {
              setBaseMaxSize(Number(e.target.value))
              updateBaseSizeByMax(Number(e.target.value))
            }}
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
