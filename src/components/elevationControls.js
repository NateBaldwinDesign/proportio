import React from 'react';
import { useRecoilState } from 'recoil';
import capitalize from '../utilities/capitalize';
import {
  baseElevationSizeState,
  elevationScaleFactorState,
  elevationSmallQuantityState,
  elevationLargeQuantityState,
  elevationScaleFormulaState,
  elevationOffsetYState,
} from '../states/elevation';
import scaleMethodOptions from '../utilities/scaleFormulas';
import Slider from './slider';

const ElevationControls = (props) => {
  const [baseElevationSize, setBaseElevationSize] = useRecoilState(
    baseElevationSizeState,
  );
  const [elevationScaleFactor, setElevationScaleFactor] = useRecoilState(
    elevationScaleFactorState,
  );
  const [elevationSmallQuantity, setElevationSmallQuantity] = useRecoilState(
    elevationSmallQuantityState,
  );
  const [elevationLargeQuantity, setElevationLargeQuantity] = useRecoilState(
    elevationLargeQuantityState,
  );
  const [elevationScaleFormula, setElevationScaleFormula] = useRecoilState(
    elevationScaleFormulaState,
  );
  const [elevationOffsetY, setElevationOffsetY] = useRecoilState(
    elevationOffsetYState,
  );

  const inputs = scaleMethodOptions.map((method) => {
    return (
      <div className="radioGroup" key={`elevation${method}`}>
        <input
          type="radio"
          id={`Elevation${method}`}
          name="ElevationScale_method"
          value={method}
          onClick={(e) => setElevationScaleFormula(e.target.value)}
          defaultChecked={method === elevationScaleFormula ? true : false}
        />
        <label htmlFor={`Elevation${method}`}>{capitalize(method)}</label>
      </div>
    );
  });

  return (
    <fieldset>
      <legend>Elevation</legend>
      <div className="segmentedControl">{inputs}</div>
      <div className="column">
        <div className="formGroup">
          <label htmlFor="baseElevationSize">Base elevation size</label>
          <input
            id="baseElevationSize"
            type="number"
            onInput={(e) => setBaseElevationSize(Number(e.target.value))}
            step="1"
            min="0"
            defaultValue={baseElevationSize}
          />
        </div>
        <div className="formGroup">
          <label htmlFor="elevationScale">Elevation scale</label>
          <input
            id="elevationScale"
            type="number"
            onInput={(e) => setElevationScaleFactor(Number(e.target.value))}
            step={elevationScaleFormula === 'power' ? '0.1' : '1'}
            min="0"
            defaultValue={elevationScaleFactor}
          />
        </div>
        <div className="formGroup">
          <label htmlFor="smallElevations">Small sizes</label>
          <input
            id="smallElevations"
            type="number"
            onInput={(e) => setElevationSmallQuantity(Number(e.target.value))}
            step="1"
            min="0"
            defaultValue={elevationSmallQuantity}
          />
        </div>

        <div className="formGroup">
          <label htmlFor="largeElevations">Large sizes</label>
          <input
            id="largeElevations"
            type="number"
            onInput={(e) => setElevationLargeQuantity(Number(e.target.value))}
            step="1"
            min="0"
            defaultValue={elevationLargeQuantity}
          />
        </div>
        <div className="formGroup">
          <label htmlFor="shadowDistance">Shadow distance</label>
          <Slider
            id="shadowDistance"
            type="number"
            onInput={setElevationOffsetY}
            step="1"
            min="0"
            max="200"
            unit="%"
            defaultValue={elevationOffsetY}
          />
        </div>
      </div>
    </fieldset>
  );
};

export default ElevationControls;
