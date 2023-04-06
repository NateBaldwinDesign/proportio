import React from "react";
import capitalize from "../utilities/capitalize";
import calculateScale from "../utilities/calculateScale";

const ElevationControls = (props) => {
  const scaleMethods = props.scaleMethods;

  const baseElevationSize = props.baseElevationSize;
  const setBaseElevationSize = props.setBaseElevationSize;
  const elevationScaleFactor = props.elevationScaleFactor;
  const setElevationScaleFactor = props.setElevationScaleFactor;
  const elevationSmallQuantity = props.elevationSmallQuantity;
  const setElevationSmallQuantity = props.setElevationSmallQuantity;
  const elevationLargeQuantity = props.elevationLargeQuantity;
  const setElevationLargeQuantity = props.setElevationLargeQuantity;
  const elevationScaleMethod = props.elevationScaleMethod;
  const setElevationScaleMethod = props.setElevationScaleMethod;

  const inputs = scaleMethods.map((method) => {
    return (
      <div className="radioGroup" key={`elevation${method}`}>
        <input
          type="radio"
          id={`Elevation${method}`}
          name="ElevationScale_method"
          value={method}
          onClick={(e) => setElevationScaleMethod(e.target.value)}
          defaultChecked={method === elevationScaleMethod ? true : false}
        />
        <label htmlFor={`Elevation${method}`}>{capitalize(method)}</label>
      </div>
    );
  });

  return (
    <fieldset>
      <legend>Elevation</legend>
      <div className="segmentedControl">{inputs}</div>
      <div className="column">
        <div className="formGroup">
          <label htmlFor="">Base elevation size</label>
          <input
            type="number"
            onInput={(e) => setBaseElevationSize(Number(e.target.value))}
            step="1"
            min="0"
            defaultValue={baseElevationSize}
          />
        </div>
        <div className="formGroup">
          <label htmlFor="">Elevation scale</label>
          <input
            type="number"
            onInput={(e) => setElevationScaleFactor(Number(e.target.value))}
            step={elevationScaleMethod === "power" ? "0.1" : "1"}
            min="0"
            defaultValue={elevationScaleFactor}
          />
        </div>
        <div className="formGroup">
          <label htmlFor="">Small sizes</label>
          <input
            type="number"
            onInput={(e) => setElevationSmallQuantity(Number(e.target.value))}
            step="1"
            min="0"
            defaultValue={elevationSmallQuantity}
          />
        </div>

        <div className="formGroup">
          <label htmlFor="">Large sizes</label>
          <input
            type="number"
            onInput={(e) => setElevationLargeQuantity(Number(e.target.value))}
            step="1"
            min="0"
            defaultValue={elevationLargeQuantity}
          />
        </div>
      </div>
    </fieldset>
  );
};

export default ElevationControls;
