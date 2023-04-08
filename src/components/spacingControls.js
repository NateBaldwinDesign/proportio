import React from "react";
import { useRecoilState } from 'recoil';
import capitalize from "../utilities/capitalize";
import calculateScale from "../utilities/calculateScale";
import { spacingScaleFactorState } from "../states/spacing";

const SpacingControls = (props) => {
  // const [baseSize, setBaseSize] = useRecoilState(baseSizeState);
  const [spacingScaleFactor, setSpacingScaleFactor] = useRecoilState(spacingScaleFactorState);

  const scaleMethods = props.scaleMethods;
  const setSpacingScaleMethod = props.setSpacingScaleMethod;
  const setSpacingLargeQuantity = props.setSpacingLargeQuantity;
  const setSpacingSmallQuantity = props.setSpacingSmallQuantity;
  const spacingSmallQuantity = props.spacingSmallQuantity;
  const spacingLargeQuantity = props.spacingLargeQuantity;
  const spacingScaleMethod = props.spacingScaleMethod;
  // const setSpacingPadding = props.setSpacingPadding;
  // const spacingPadding = props.spacingPadding;

  const inputs = scaleMethods.map((method) => {
    return (
      <div className="radioGroup" key={`spacing${method}`}>
        <input
          type="radio"
          id={`Spacing${method}`}
          name="SpacingScale_method"
          value={method}
          onClick={(e) => setSpacingScaleMethod(e.target.value)}
          defaultChecked={method === "power" ? true : false}
        />
        <label htmlFor={`Spacing${method}`}>{capitalize(method)}</label>
      </div>
    );
  });

  return (
    <fieldset>
      <legend>Spacing</legend>
      <div className="segmentedControl">{inputs}</div>
      <div className="column">
        <div className="formGroup">
          <label htmlFor="">Scale factor</label>
          <input
            type="number"
            onInput={(e) => setSpacingScaleFactor(Number(e.target.value))}
            step={spacingScaleMethod === "power" ? "0.01" : "1"}
            min="0"
            defaultValue={spacingScaleFactor}
          />
        </div>
        <div className="formGroup">
          <label htmlFor="">Small sizes</label>
          <input
            type="number"
            onInput={(e) => setSpacingSmallQuantity(Number(e.target.value))}
            step="1"
            min="0"
            defaultValue={spacingSmallQuantity}
          />
        </div>

        <div className="formGroup">
          <label htmlFor="">Large sizes</label>
          <input
            type="number"
            onInput={(e) => setSpacingLargeQuantity(Number(e.target.value))}
            step="1"
            min="0"
            defaultValue={spacingLargeQuantity}
          />
        </div>
      </div>
    </fieldset>
  );
};

export default SpacingControls;
