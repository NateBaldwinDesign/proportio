import React from "react";
import { useRecoilState } from 'recoil';
import capitalize from "../utilities/capitalize";

const TypeControls = (props) => {
  const setTypeScale = props.setTypeScale;
  const typeScale = props.typeScale;
  const scaleMethods = props.scaleMethods;
  const setTypeScaleMethod = props.setTypeScaleMethod;
  const setTypeLargeQuantity = props.setTypeLargeQuantity;
  const setTypeSmallQuantity = props.setTypeSmallQuantity;
  const typeSmallQuantity = props.typeSmallQuantity;
  const typeLargeQuantity = props.typeLargeQuantity;
  const setSampleText = props.setSampleText;
  const sampleText = props.sampleText;
  const typeScaleMethod = props.typeScaleMethod;

  const inputs = scaleMethods.map((method) => {
    return (
      <div className="radioGroup" key={`${method}`}>
        <input
          type="radio"
          id={`type${method}`}
          name="typeScale_method"
          value={method}
          onClick={(e) => setTypeScaleMethod(e.target.value)}
          defaultChecked={method === "power" ? true : false}
        />
        <label htmlFor={`type${method}`}>{capitalize(method)}</label>
      </div>
    );
  });

  return (
    <fieldset>
      <legend>Typography</legend>
      <div className="segmentedControl">{inputs}</div>

      <div className="column">
        <div className="formGroup">
          <label htmlFor="">Scale factor</label>
          <input
            type="number"
            onInput={(e) => setTypeScale(Number(e.target.value))}
            step={typeScaleMethod === "power" ? "0.01" : "1"}
            min="0"
            defaultValue={typeScale}
          />
        </div>
        <div className="formGroup">
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
        </div>
      </div>
      <div className="row">
        <div className="column">
          <div className="formGroup">
            <label htmlFor="">Sample text</label>
            <input
              type="text"
              style={{ width: "134px" }}
              onInput={(e) => setSampleText(e.target.value)}
              defaultValue={sampleText}
            />
          </div>
        </div>
      </div>
    </fieldset>
  );
};

export default TypeControls;
