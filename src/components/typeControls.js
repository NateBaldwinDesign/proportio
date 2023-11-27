import React from 'react';
import { useRecoilState } from 'recoil';
import { typeFontFamilyState, typeFontWeightState } from '../states/typography';
import FontPicker from 'font-picker-react';

const TypeControls = (props) => {
  const [activeFontFamily, setActiveFontFamily] =
    useRecoilState(typeFontFamilyState);
  const [typeFontWeight, setTypeFontWeight] =
    useRecoilState(typeFontWeightState);

  const setSampleText = props.setSampleText;
  const sampleText = props.sampleText;

  return (
    <fieldset>
      <legend>
        Typography
        <cite>
          via{' '}
          <a href="https://fonts.google.com/" target="_blank">
            Google fonts
          </a>
        </cite>
      </legend>

      <div className="column">
        <div className="formGroup">
          <label id="fontFamilyLabel">Font</label>
          <span
            className="apply-font-main"
            style={{ width: 'calc(100% - 120px)' }}
          >
            <FontPicker
              ariaLabelledBy="fontFamilyLabel"
              pickerId="main"
              apiKey="AIzaSyC4_gemFBE-Ep1knNI5zgWnz7ZirQrqOnw"
              limit={500}
              activeFontFamily={activeFontFamily}
              onChange={(nextFont) => setActiveFontFamily(nextFont.family)}
            />
          </span>
        </div>
        <div className="formGroup">
          <label htmlFor="fontWeight">Font weight</label>
          <input
            id="fontWeight"
            type="number"
            onInput={(e) => {
              setTypeFontWeight(Number(e.target.value));
              document.documentElement.style.setProperty(
                `--demoFontWeight`,
                e.target.value,
              );
            }}
            step="100"
            min="100"
            max="900"
            defaultValue={typeFontWeight}
          />
        </div>

        <div className="formGroup">
          <label htmlFor="sampleText">Sample text</label>
          <input
            id="sampleText"
            type="text"
            style={{ width: '140px' }}
            onInput={(e) => setSampleText(e.target.value)}
            defaultValue={sampleText}
          />
        </div>
      </div>
    </fieldset>
  );
};

export default TypeControls;
