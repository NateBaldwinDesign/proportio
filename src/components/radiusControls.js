import React from 'react';
import { useRecoilState } from 'recoil';
import capitalize from '../utilities/capitalize';
import calculateScale from '../utilities/calculateScale';
import scaleMethodOptions from '../utilities/scaleFormulas';
import {
  baseRadiusSizeState,
  radiusScaleFactorState,
  radiusSmallQuantityState,
  radiusLargeQuantityState,
  radiusScaleFormulaState,
} from '../states/radius';

const RadiusControls = (props) => {
  const [baseRadiusSize, setBaseRadiusSize] =
    useRecoilState(baseRadiusSizeState);
  const [radiusScaleFactor, setRadiusScaleFactor] = useRecoilState(
    radiusScaleFactorState,
  );
  const [radiusSmallQuantity, setRadiusSmallQuantity] = useRecoilState(
    radiusSmallQuantityState,
  );
  const [radiusLargeQuantity, setRadiusLargeQuantity] = useRecoilState(
    radiusLargeQuantityState,
  );
  const [radiusScaleFormula, setRadiusScaleFormula] = useRecoilState(
    radiusScaleFormulaState,
  );

  const inputs = scaleMethodOptions.map((method) => {
    return (
      <div className="radioGroup" key={`radius${method}`}>
        <input
          type="radio"
          id={`Radius${method}`}
          name="RadiusScale_method"
          value={method}
          onClick={(e) => setRadiusScaleFormula(e.target.value)}
          defaultChecked={method === radiusScaleFormula ? true : false}
        />
        <label htmlFor={`Radius${method}`}>{capitalize(method)}</label>
      </div>
    );
  });

  return (
    <fieldset>
      <legend>Radius</legend>
      <div className="segmentedControl">{inputs}</div>
      <div className="column">
        <div className="formGroup">
          <label htmlFor="">Base radius size</label>
          <input
            type="number"
            onInput={(e) => setBaseRadiusSize(Number(e.target.value))}
            step="1"
            min="0"
            defaultValue={baseRadiusSize}
          />
        </div>
        <div className="formGroup">
          <label htmlFor="">Radius scale</label>
          <input
            type="number"
            onInput={(e) => setRadiusScaleFactor(Number(e.target.value))}
            step={radiusScaleFormula === 'power' ? '0.1' : '1'}
            min="0"
            defaultValue={radiusScaleFactor}
          />
        </div>
        <div className="formGroup">
          <label htmlFor="">Small sizes</label>
          <input
            type="number"
            onInput={(e) => setRadiusSmallQuantity(Number(e.target.value))}
            step="1"
            min="0"
            defaultValue={radiusSmallQuantity}
          />
        </div>

        <div className="formGroup">
          <label htmlFor="">Large sizes</label>
          <input
            type="number"
            onInput={(e) => setRadiusLargeQuantity(Number(e.target.value))}
            step="1"
            min="0"
            defaultValue={radiusLargeQuantity}
          />
        </div>
      </div>
    </fieldset>
  );
};

export default RadiusControls;
