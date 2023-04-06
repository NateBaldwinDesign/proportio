import React from "react";
import capitalize from "../utilities/capitalize";
import calculateScale from "../utilities/calculateScale";

const RadiusControls = (props) => {
  const scaleMethods = props.scaleMethods;

  const baseRadiusSize = props.baseRadiusSize;
  const setBaseRadiusSize = props.setBaseRadiusSize;
  const radiusScaleFactor = props.radiusScaleFactor;
  const setRadiusScaleFactor = props.setRadiusScaleFactor;
  const radiusSmallQuantity = props.radiusSmallQuantity;
  const setRadiusSmallQuantity = props.setRadiusSmallQuantity;
  const radiusLargeQuantity = props.radiusLargeQuantity;
  const setRadiusLargeQuantity = props.setRadiusLargeQuantity;
  const radiusScaleMethod = props.radiusScaleMethod;
  const setRadiusScaleMethod = props.setRadiusScaleMethod;

  const inputs = scaleMethods.map((method) => {
    return (
      <div key={`radius${method}`}>
        <input
          type="radio"
          id={`Radius${method}`}
          name="RadiusScale_method"
          value={method}
          onClick={(e) => setRadiusScaleMethod(e.target.value)}
          defaultChecked={method === radiusScaleMethod ? true : false}
        />
        <label htmlFor={`Radius${method}`}>{capitalize(method)}</label>
      </div>
    );
  });

  return (
    <fieldset>
      <legend>Radius</legend>
      <div className="column">{inputs}</div>
      <div className="column">
        <div className="formGroup">
          <label htmlFor="">Base radius size</label>
          <input
            type="number"
            onInput={(e) => setBaseRadiusSize(Number(e.target.value))}
            step="1"
            min="0"
            defaultValue={baseRadiusSize}
          />
        </div>
        <div className="formGroup">
          <label htmlFor="">Radius scale</label>
          <input
            type="number"
            onInput={(e) => setRadiusScaleFactor(Number(e.target.value))}
            step={radiusScaleMethod === "power" ? "0.1" : "1"}
            min="0"
            defaultValue={radiusScaleFactor}
          />
        </div>
        <div className="formGroup">
          <label htmlFor="">Small sizes</label>
          <input
            type="number"
            onInput={(e) => setRadiusSmallQuantity(Number(e.target.value))}
            step="1"
            min="0"
            defaultValue={radiusSmallQuantity}
          />
        </div>

        <div className="formGroup">
          <label htmlFor="">Large sizes</label>
          <input
            type="number"
            onInput={(e) => setRadiusLargeQuantity(Number(e.target.value))}
            step="1"
            min="0"
            defaultValue={radiusLargeQuantity}
          />
        </div>
      </div>
    </fieldset>
  );
};

export default RadiusControls;
