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

  const typeScaleOptions = [
    {
      value: 1.067,
      label: '1.076 [minor second]'
    },
    {
      value: 1.125,
      label: '1.125 [major second]'
    },
    {
      value: 1.2,
      label: '1.2 [minor third]'
    },
    {
      value: 1.25,
      label: '1.25 [major third]'
    },
    {
      value: 1.333,
      label: '1.333 [perfect fourth]'
    },
    {
      value: 1.414,
      label: '1.414 [augmented fourth]'
    },
    {
      value: 1.5,
      label: '1.5 [perfect fifth]'
    },
    {
      value: 1.6,
      label: '1.6 [minor sixth]'
    },
    {
      value: 1.618,
      label: '1.618 [golden ratio]'
    },
    {
      value: 1.667,
      label: '1.667 [major sixth]'
    },
    {
      value: 1.778,
      label: '1.778 [minor seventh]'
    },
    {
      value: 1.875,
      label: '1.875 [major seventh]'
    },
    {
      value: 2,
      label: '2 [octave]'
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
                setTypeScale(e.value); 
                // console.log(e)
              }} 
              value={typeScaleOptions.filter((item) => item.value === typeScale)} 
              placeholder={typeScaleOptions[1]} />

          <input
            type="number"
            onInput={(e) => {
              setTypeScale(Number(e.target.value))
              setIconScale(Number(e.target.value))
            }}
            step={typeScaleFormula === "power" ? "0.001" : "1"}
            min="0"
            defaultValue={typeScale}
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
