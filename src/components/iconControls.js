import React from 'react';
import { useRecoilState } from 'recoil';
import capitalize from '../utilities/capitalize';
import scaleMethodOptions from '../utilities/scaleFormulas';
import {
  iconScaleFormulaState,
  iconState,
  iconStrokeState,
} from '../states/iconography';
import Dropdown from 'react-dropdown';
import Slider from './slider';

const feather = require('feather-icons');

const IconControls = (props) => {
  const [iconScaleFormula, setIconScaleFormula] = useRecoilState(
    iconScaleFormulaState,
  );
  const [iconStroke, setIconStroke] = useRecoilState(iconStrokeState);

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
      <legend>
        Iconography
        <cite>
          via{' '}
          <a href="https://feathericons.com/" target="_blank">
            Feather icons
          </a>
        </cite>
      </legend>
      <div className="column">
        <div className="formGroup">
          <label>Icon</label>
          <span className="iconPicker" style={{ width: 'calc(100% - 120px)' }}>
            <Dropdown
              options={availableIcons}
              onChange={(e) => {
                setIcon(e.value);
              }}
              value={icon}
              placeholder={icon}
            />
          </span>
        </div>
        <div className="formGroup">
          <label htmlFor="">Stroke</label>
          <Slider
            type="range"
            onInput={setIconStroke}
            step="0.25"
            min="0.25"
            max="5"
            unit="px"
            defaultValue={iconStroke}
          />
        </div>
      </div>
    </fieldset>
  );
};

export default IconControls;
