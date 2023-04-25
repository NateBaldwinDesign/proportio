import React from "react";
import { useRecoilState } from 'recoil';
import capitalize from "../utilities/capitalize";
import {
  typeScaleState,
  typeSmallQuantityState,
  typeLargeQuantityState,
  typeScaleFormulaState,
  typeFontFamilyState,
  typeFontWeightState
} from '../states/typography'
import scaleMethodOptions from "../utilities/scaleFormulas"
import FontPicker from "font-picker-react"
import { iconScaleState } from "../states/iconography";

const TypeControls = (props) => {
  const [typeScale, setTypeScale] = useRecoilState(typeScaleState)
  const [typeSmallQuantity, setTypeSmallQuantity] = useRecoilState(typeSmallQuantityState)
  const [typeLargeQuantity, setTypeLargeQuantity] = useRecoilState(typeLargeQuantityState)
  const [typeScaleFormula, setTypeScaleFormula] = useRecoilState(typeScaleFormulaState)
  const [activeFontFamily, setActiveFontFamily] = useRecoilState(typeFontFamilyState)
  const [typeFontWeight, setTypeFontWeight] = useRecoilState(typeFontWeightState)
  const [iconScale, setIconScale] = useRecoilState(iconScaleState)

  const setSampleText = props.setSampleText;
  const sampleText = props.sampleText;

  const inputs = scaleMethodOptions.map((method) => {
    return (
      <div className="radioGroup" key={`${method}`}>
        <input
          type="radio"
          id={`type${method}`}
          name="typeScale_method"
          value={method}
          onClick={(e) => setTypeScaleFormula(e.target.value)}
          defaultChecked={method === typeScaleFormula ? true : false}
        />
        <label htmlFor={`type${method}`}>{capitalize(method)}</label>
      </div>
    );
  });

  return (
    <fieldset>
      <legend>
        Typography 
        <cite>via <a href="https://fonts.google.com/" target="_blank">Google fonts</a></cite>
      </legend>
      {/* <div className="segmentedControl">{inputs}</div> */}

      <div className="column">
        <div className="formGroup">
          <label htmlFor="">
            Font
          </label>
          <span className="apply-font-main" style={{width: 'calc(100% - 120px)'}}>
            <FontPicker
              pickerId="main"
              apiKey="AIzaSyC4_gemFBE-Ep1knNI5zgWnz7ZirQrqOnw"
              limit={500}
              activeFontFamily={activeFontFamily}
              onChange={(nextFont) => 
                setActiveFontFamily(nextFont.family)
              }
            />
          </span>
          
        </div>
        <div className="formGroup">
          <label htmlFor="">Font weight</label>
          <input
            type="number"
            onInput={(e) => {
              setTypeFontWeight(Number(e.target.value))
              document.documentElement.style
                .setProperty(`--demoFontWeight`, e.target.value);
            }}
            step="100"
            min="100"
            max="900"
            defaultValue={typeFontWeight}
          />
        </div>
        {/* <div className="formGroup">
          <label htmlFor="">Scale factor</label>
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
        </div> */}
        {/* <div className="formGroup">
          <label htmlFor="">Small sizes</label>
          <input
            type="number"
            onInput={(e) => setTypeSmallQuantity(Number(e.target.value))}
            step="1"
            min="0"
            defaultValue={typeSmallQuantity}
          />
        </div>

        <div className="formGroup">
          <label htmlFor="">Large sizes</label>
          <input
            type="number"
            onInput={(e) => setTypeLargeQuantity(Number(e.target.value))}
            step="1"
            min="0"
            defaultValue={typeLargeQuantity}
          />
        </div> */}
      {/* </div> */}
      {/* <div className="row">
        <div className="column"> */}
          <div className="formGroup">
            <label htmlFor="">Sample text</label>
            <input
              type="text"
              style={{ width: "126px" }}
              onInput={(e) => setSampleText(e.target.value)}
              defaultValue={sampleText}
            />
          </div>
        {/* </div> */}
      </div>
    </fieldset>
  );
};

export default TypeControls;
