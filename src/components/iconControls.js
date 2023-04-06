import React from "react";
import capitalize from "../utilities/capitalize";

const IconControls = (props) => {
  const setIconScale = props.setIconScale;
  const iconScale = props.iconScale;
  const scaleMethods = props.scaleMethods;
  const setIconScaleMethod = props.setIconScaleMethod;
  const setIconLargeQuantity = props.setIconLargeQuantity;
  const setIconSmallQuantity = props.setIconSmallQuantity;
  const iconSmallQuantity = props.iconSmallQuantity;
  const iconLargeQuantity = props.iconLargeQuantity;
  const setIconPadding = props.setIconPadding;
  const iconPadding = props.iconPadding;
  const iconScaleMethod = props.iconScaleMethod;

  const inputs = scaleMethods.map((method) => {
    return (
      <div className="radioGroup" key={`iconography${method}`}>
        <input
          type="radio"
          id={`Icon${method}`}
          name="IconScale_method"
          value={method}
          onClick={(e) => setIconScaleMethod(e.target.value)}
          defaultChecked={method === "power" ? true : false}
        />
        <label htmlFor={`Icon${method}`}>{capitalize(method)}</label>
      </div>
    );
  });

  return (
    <fieldset>
      <legend>Iconography</legend>
      <div className="segmentedControl">{inputs}</div>
      <div className="column">
        <div className="formGroup">
          <label htmlFor="">Scale factor</label>
          <input
            type="number"
            onInput={(e) => setIconScale(Number(e.target.value))}
            step={iconScaleMethod === "power" ? "0.01" : "1"}
            min="0"
            defaultValue={iconScale}
          />
        </div>
        <div className="formGroup">
          <label htmlFor="">Icon padding</label>
          <input
            type="number"
            onInput={(e) => setIconPadding(Number(e.target.value))}
            step="1"
            min="0"
            defaultValue={iconPadding}
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
