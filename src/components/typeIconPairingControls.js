import React from "react";
import capitalize from "../utilities/capitalize";

const TypeIconPairingControls = (props) => {
  const scaleMethods = props.scaleMethods;

  const textIconGapScaleMethod = props.textIconGapScaleMethod;
  const setTextIconGapScaleMethod = props.setTextIconGapScaleMethod;
  const textIconGapIndex = props.textIconGapIndex;
  const setTextIconGapIndex = props.setTextIconGapIndex;
  const textIconIconSizeIndex = props.textIconIconSizeIndex;
  const setTextIconIconSizeIndex = props.setTextIconIconSizeIndex;

  console.log(textIconGapScaleMethod);
  const inputs = scaleMethods.map((method) => {
    return (
      <div key={`typeIconPiar${method}`}>
        <input
          type="radio"
          id={`gap${method}`}
          name="gap_method"
          value={method}
          onClick={(e) => setTextIconGapScaleMethod(e.target.value)}
          defaultChecked={textIconGapScaleMethod === "typeScale" ? true : false}
        />
        <label htmlFor={`gap${method}`}>{capitalize(method)}</label>
      </div>
    );
  });

  const fieldLabel = "Gap index";
  const fieldMax = "500";
  const fieldMin = "-500";

  return (
    <fieldset>
      <legend>Type-icon pairing</legend>
      <div className="column">{inputs}</div>
      <div className="column">
        <div className="formGroup">
          <label htmlFor="">{fieldLabel}</label>
          <input
            type="number"
            onInput={(e) => setTextIconGapIndex(Number(e.target.value))}
            step="1"
            min={fieldMin}
            max={fieldMax}
            defaultValue={textIconGapIndex}
          />
        </div>
        <div className="formGroup">
          <label htmlFor="">Icon index</label>
          <input
            type="number"
            onInput={(e) => setTextIconIconSizeIndex(Number(e.target.value))}
            step="1"
            min={fieldMin}
            max={fieldMax}
            defaultValue={textIconIconSizeIndex}
          />
        </div>
      </div>
    </fieldset>
  );
};

export default TypeIconPairingControls;
