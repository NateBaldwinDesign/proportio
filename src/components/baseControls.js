import React, {useState} from "react";
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
import { typeScaleFormulaState, typeScaleState } from "../states/typography";
import { iconScaleState } from "../states/iconography";
import Dropdown from 'react-dropdown';

const BaseControls = (props) => {
  const [baseSize, setBaseSize] = useRecoilState(baseSizeState);
  const [baseMobileScaleFactor, setBaseMobileScaleFactor] = useRecoilState(baseMobileScaleFactorState)
  const [baseScaleUnit, setBaseScaleUnit] = useRecoilState(baseScaleUnitState)
  const [typeScale, setTypeScale] = useRecoilState(typeScaleState)
  const [typeScaleFormula, setTypeScaleFormula] = useRecoilState(typeScaleFormulaState)
  const [iconScale, setIconScale] = useRecoilState(iconScaleState)
  const [typeScaleInput, setTypeScaleInput] = useState(typeScale);

  const typeScaleOptions = [
    {
      value: 1.067,
      label: 'Minor second'
    },
    {
      value: 1.125,
      label: 'Major second'
    },
    {
      value: 1.2,
      label: 'Minor third'
    },
    {
      value: 1.25,
      label: 'Major third'
    },
    {
      value: 1.333,
      label: 'Perfect fourth'
    },
    {
      value: 1.414,
      label: 'Augmented fourth'
    },
    {
      value: 1.5,
      label: 'Perfect fifth'
    },
    {
      value: 1.6,
      label: 'Minor sixth'
    },
    {
      value: 1.618,
      label: 'Golden ratio'
    },
    {
      value: 1.667,
      label: 'Major sixth'
    },
    {
      value: 1.778,
      label: 'Minor seventh'
    },
    {
      value: 1.875,
      label: 'Major seventh'
    },
    {
      value: 2,
      label: 'Octave'
    }
  ]

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
        <div className="segmentedControl">
          {inputs}
        </div>
        </div>


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

        <div className="formGroup">
          <label htmlFor="">Scale factor</label>

          <Dropdown 
              options={typeScaleOptions} 
              onChange={(e) => {
                // setTypeScaleInput(e.value);
                setTypeScale(Number(e.value))
                setIconScale(Number(e.value)) 
              }} 
              value={typeScaleOptions.filter((item) => item.value === typeScale)[0]} 
              placeholder={typeScaleOptions[1].value} />

          <input
            type="number"
            onInput={(e) => {
              setTypeScale(Number(e.target.value))
              setIconScale(Number(e.target.value))
            }}
            step={typeScaleFormula === "power" ? "0.001" : "1"}
            min="0"
            defaultValue={typeScaleInput}
          />
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
