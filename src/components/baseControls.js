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
import { 
  typeScaleFormulaState, 
  typeScaleState,
  typeSmallQuantityState,
  typeLargeQuantityState
} from "../states/typography";
import { 
  iconScaleState,
  iconSmallQuantityState,
  iconLargeQuantityState
} from "../states/iconography";
import Dropdown from 'react-dropdown';

const BaseControls = (props) => {
  const [baseSize, setBaseSize] = useRecoilState(baseSizeState);
  const [baseMobileScaleFactor, setBaseMobileScaleFactor] = useRecoilState(baseMobileScaleFactorState)
  const [baseScaleUnit, setBaseScaleUnit] = useRecoilState(baseScaleUnitState)
  const [typeScale, setTypeScale] = useRecoilState(typeScaleState)
  const [typeScaleFormula, setTypeScaleFormula] = useRecoilState(typeScaleFormulaState)
  const [iconScale, setIconScale] = useRecoilState(iconScaleState)
  const [typeSmallQuantity, setTypeSmallQuantity] = useRecoilState(typeSmallQuantityState)
  const [typeLargeQuantity, setTypeLargeQuantity] = useRecoilState(typeLargeQuantityState)
  const [iconSmallQuantity, setIconSmallQuantity] = useRecoilState(iconSmallQuantityState)
  const [iconLargeQuantity, setIconLargeQuantity] = useRecoilState(iconLargeQuantityState)
  const [scaleInput, setScaleInput] = useState(typeScale)

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
      value: undefined,
      label: 'Custom'
    },
    // {
    //   value: 1.414,
    //   label: 'Augmented fourth'
    // },
    // {
    //   value: 1.5,
    //   label: 'Perfect fifth'
    // },
    // {
    //   value: 1.6,
    //   label: 'Minor sixth'
    // },
    // {
    //   value: 1.618,
    //   label: 'Golden ratio'
    // },
    // {
    //   value: 1.667,
    //   label: 'Major sixth'
    // },
    // {
    //   value: 1.778,
    //   label: 'Minor seventh'
    // },
    // {
    //   value: 1.875,
    //   label: 'Major seventh'
    // },
    // {
    //   value: 2,
    //   label: 'Octave'
    // }
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
    <fieldset >
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
          <label htmlFor="">Factor</label>

          <Dropdown 
              options={typeScaleOptions} 
              onChange={(e) => {
                setScaleInput(e.value)
                if(e.value !== typeScale) {
                  setTypeScale(Number(e.value))
                  setIconScale(Number(e.value))
                }
              }} 
              value={
                (!typeScaleOptions.filter((item) => item.value === typeScale)[0])
                ? typeScaleOptions.filter((item) => item.value === undefined)[0]
                : typeScaleOptions.filter((item) => item.value === typeScale)[0]
              } 
              placeholder={typeScaleOptions[1].value} />

          <input
            key={scaleInput}
            type="number"
            onChange={(e) => {
              // console.log(e.target.value)
              setTypeScale(Number(e.target.value))
              setIconScale(Number(e.target.value))
            }}
            step={typeScaleFormula === "power" ? "0.001" : "1"}
            min="0"
            defaultValue={scaleInput}
          />
        </div>
        <div className="formGroup">
          <label htmlFor="">Small sizes</label>
          <input
            type="number"
            onInput={(e) => {
              setTypeSmallQuantity(Number(e.target.value))
              setIconSmallQuantity(Number(e.target.value))
            }}
            step="1"
            min="0"
            defaultValue={typeSmallQuantity}
          />
        </div>

        <div className="formGroup">
          <label htmlFor="">Large sizes</label>
          <input
            type="number"
            onInput={(e) => {
              setTypeLargeQuantity(Number(e.target.value))
              setIconLargeQuantity(Number(e.target.value))
            }}
            step="1"
            min="0"
            defaultValue={typeLargeQuantity}
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
