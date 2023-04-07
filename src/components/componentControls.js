import React from "react";
import capitalize from "../utilities/capitalize";

const ComponentControls = (props) => {
  const baseSize = props.baseSize;
  const setBaseSize = props.setBaseSize;
  //   const baseIconSizeIndex = props.baseIconSizeIndex;
  //   const setBaseIconSizeIndex = props.setBaseIconSizeIndex;
  const baseComponentSize = props.baseComponentSize;
  const setBaseComponentSize = props.setBaseComponentSize;
  const componentLineHeight = props.componentLineHeight;
  const setComponentLineHeight = props.setComponentLineHeight;
  const componentSmallQuantity = props.componentSmallQuantity;
  const setComponentSmallQuantity = props.setComponentSmallQuantity;
  const componentLargeQuantity = props.componentLargeQuantity;
  const setComponentLargeQuantity = props.setComponentLargeQuantity;
  const componentScaleMethod = props.componentScaleMethod;
  const setComponentScaleMethod = props.setComponentScaleMethod;

  const baseComponentTextSizeIndex = props.baseComponentTextSizeIndex;
  const setBaseComponentTextSizeIndex = props.setBaseComponentTextSizeIndex;

  const setComponentPaddingMethod = props.setComponentPaddingMethod;
  const componentPaddingMethod = props.componentPaddingMethod;
  const baseComponentPaddingXIndex = props.baseComponentPaddingXIndex;
  const setBaseComponentPaddingXIndex = props.setBaseComponentPaddingXIndex;
  const baseComponentPaddingYIndex = props.baseComponentPaddingYIndex;
  const setBaseComponentPaddingYIndex = props.setBaseComponentPaddingYIndex;

  const spacingMethods = props.spacingMethods;

  const componentScalingMethodInputs = spacingMethods.map((method) => {
    return (
      <div className="radioGroup" key={`${method}`}>
        <input
          type="radio"
          id={`component${method}`}
          name="componentScale_method"
          defaultValue={method}
          onClick={(e) => setComponentScaleMethod(e.target.value)}
          defaultChecked={method === componentScaleMethod ? true : false}
        />
        <label htmlFor={`component${method}`}>{capitalize(method)}</label>
      </div>
    );
  });
  const componentPaddingMethodInputs = spacingMethods.map((method) => {
    return (
      <div className="radioGroup" key={`${method}`}>
        <input
          type="radio"
          id={`componentPadding${method}`}
          name="componentPaddingScale_method"
          defaultValue={method}
          onClick={(e) => setComponentPaddingMethod(e.target.value)}
          defaultChecked={method === componentPaddingMethod ? true : false}
        />
        <label htmlFor={`componentPadding${method}`}>
          {`${capitalize(method)}`}
        </label>
      </div>
    );
  });

  return (
    <>
      <fieldset>
        <legend>Default size</legend>
        <div className="segmentedControl">{componentScalingMethodInputs}</div>
        <div className="column">
          <div className="formGroup">
            <label>Min-height index</label>
            <input
              type="number"
              defaultValue={baseComponentSize}
              id="baseComponentSize"
              onInput={(e) => {
                setBaseComponentSize(e.target.value);
              }}
            />
            {/* <span className="computedValue" id="componentComputedSize">
              {baseComponentSize}
            </span> */}
          </div>
          <div className="formGroup">
            <label>Text-icon pair index</label>
            <input
              type="number"
              defaultValue="1"
              step="1"
              onInput={(e) => {
                console.log(
                  `Don't forget to make this update a state: ${e.target.value}`
                );
              }}
            />
            {/* <span className="computedValue" id="componentComputedIconSize"></span> */}
          </div>
          <div className="formGroup">
            <label>Line height</label>
            <input
              type="number"
              id="componentLineHeight"
              defaultValue={componentLineHeight}
              step="0.1"
              onInput={(e) => {
                setComponentLineHeight(e.target.value);
              }}
            />
          </div>
        </div>
      </fieldset>
      <fieldset>
        <legend>Default padding</legend>
        <div className="segmentedControl">{componentPaddingMethodInputs}</div>
        <div className="column">
          <div className="formGroup">
            <label>X padding index</label>
            <input
              type="number"
              id="componentXPaddingScale"
              defaultValue={baseComponentPaddingXIndex}
              step="1"
              onInput={(e) => {
                setBaseComponentPaddingXIndex(e.target.value);
              }}
            />
            {/* <span
              className="computedValue"
              id="componentXPaddingComputedSize"
            ></span> */}
          </div>
          <div className="formGroup">
            <label>Y padding index</label>
            <input
              type="number"
              defaultValue={baseComponentPaddingYIndex}
              step="1"
              onInput={(e) => {
                setBaseComponentPaddingYIndex(e.target.value);
              }}
            />
            {/* <span
              className="computedValue"
              id="componentYPaddingComputedSize"
            ></span> */}
          </div>
        </div>
      </fieldset>
      <fieldset>
        <legend>Component sizes</legend>
        <div className="column">
          <div className="formGroup">
            <label>Small sizes</label>
            <input
              type="number"
              defaultValue={componentSmallQuantity}
              step="1"
              onInput={(e) => {
                setComponentSmallQuantity(e.target.value);
              }}
            />
          </div>
          <div className="formGroup">
            <label>Large sizes</label>
            <input
              type="number"
              defaultValue={componentLargeQuantity}
              step="1"
              onInput={(e) => {
                setComponentLargeQuantity(e.target.value);
              }}
            />
          </div>
        </div>
      </fieldset>

      <fieldset>
        <legend>Densities</legend>
        {/* {componentPaddingMethodInputs} */}
        <div className="column">
          <div className="formGroup">
            <label>Scale factor</label>
            <input
              type="number"
              defaultValue={componentSmallQuantity}
              step="1"
              onInput={(e) => {
                console.log(e.target.value);
              }}
            />
          </div>
          <div className="formGroup">
            <label>Small sizes</label>
            <input
              type="number"
              defaultValue={componentSmallQuantity}
              step="1"
              // onInput={(e) => {
              //   setComponentSmallQuantity(e.target.value);
              // }}
            />
          </div>
          <div className="formGroup">
            <label>Large sizes</label>
            <input
              type="number"
              defaultValue={componentLargeQuantity}
              step="1"
              onInput={(e) => {
                console.log(e.target.value);
              }}
            />
          </div>
        </div>
      </fieldset>
    </>
  );
};

export default ComponentControls;
