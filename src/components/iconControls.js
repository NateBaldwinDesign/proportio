import React from "react";
import { useRecoilState } from 'recoil';
import capitalize from "../utilities/capitalize";
import scaleMethodOptions from "../utilities/scaleFormulas"
import {
  iconScaleState,
  iconSmallQuantityState,
  iconLargeQuantityState,
  iconScaleFormulaState,
  iconPaddingState,
  iconState,
  iconStrokeState
} from "../states/iconography"
import Dropdown from 'react-dropdown';
// import 'react-dropdown/style.css';

const feather = require('feather-icons');


const IconControls = (props) => {
  const [iconScale, setIconScale] = useRecoilState(iconScaleState)
  const [iconSmallQuantity, setIconSmallQuantity] = useRecoilState(iconSmallQuantityState)
  const [iconLargeQuantity, setIconLargeQuantity] = useRecoilState(iconLargeQuantityState)
  const [iconScaleFormula, setIconScaleFormula] = useRecoilState(iconScaleFormulaState)
  const [iconPadding, setIconPadding] = useRecoilState(iconPaddingState)
  const [iconStroke, setIconStroke] = useRecoilState(iconStrokeState)

  const availableIcons = Object.keys(feather.icons);
  const [icon, setIcon] = useRecoilState(iconState);

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
          <Dropdown 
            options={availableIcons} 
            onChange={(e) => {
              setIcon(e.value); 
              // console.log(e)
            }} 
            value={icon} 
            placeholder={icon} />
        </div>
        <div className="formGroup">
          <label htmlFor="">Scale factor</label>
          <input
            type="number"
            onInput={(e) => setIconScale(Number(e.target.value))}
            step={iconScaleFormula === "power" ? "0.001" : "1"}
            min="0"
            defaultValue={iconScale}
          />
        </div>
        <div className="formGroup">
          <label htmlFor="">Stroke</label>
          <input
            type="number"
            onInput={(e) => setIconStroke(Number(e.target.value))}
            step="0.1"
            min="0.1"
            max="5"
            defaultValue={iconStroke}
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
