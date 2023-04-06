import React from "react";
import capitalize from "../utilities/capitalize";

const ComponentControls = (props) => {
  const baseSize = props.baseSize;
  const setBaseSize = props.setBaseSize;
  const baseIconSizeIndex = props.baseIconSizeIndex;
  const setBaseIconSizeIndex = props.setBaseIconSizeIndex;
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
      <div key={`${method}`}>
        <input
          type="radio"
          id={`component${method}`}
          name="componentScale_method"
          value={method}
          onClick={(e) => setComponentScaleMethod(e.target.value)}
          defaultChecked={method === componentScaleMethod ? true : false}
        />
        <label htmlFor={`component${method}`}>{capitalize(method)}</label>
      </div>
    );
  });
  const componentPaddingMethodInputs = spacingMethods.map((method) => {
    return (
      <div key={`${method}`}>
        <input
          type="radio"
          id={`componentPadding${method}`}
          name="componentPaddingScale_method"
          value={method}
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
      <fieldset className="row">
        <legend>Component scale</legend>
        <div className="column">
          <h4>Default sizes</h4>
          <section className="column">
            {componentScalingMethodInputs}
            <div>
              <label>Min-height index</label>
              <input
                type="number"
                value={baseComponentSize}
                id="baseComponentSize"
                onInput={(e) => {
                  setBaseComponentSize(e.target.value);
                }}
              />
              <span class="computedValue" id="componentComputedSize"></span>
            </div>
            <div>
              <label>Icon size index</label>
              <input
                type="number"
                value={baseIconSizeIndex}
                step="1"
                onInput={(e) => {
                  setBaseIconSizeIndex(e.target.value);
                }}
              />
              <span class="computedValue" id="componentComputedIconSize"></span>
            </div>
            <div>
              <label>Font-size index</label>
              <input
                type="number"
                value={baseComponentTextSizeIndex}
                step="1"
                onInput={(e) => {
                  setBaseComponentTextSizeIndex(e.target.value);
                }}
              />
              <span class="computedValue" id="componentComputedTypeSize"></span>
            </div>
            <div>
              <label>Line height</label>
              <input
                type="number"
                id="componentLineHeight"
                value={componentLineHeight}
                step="0.1"
                onInput={(e) => {
                  setComponentLineHeight(e.target.value);
                }}
              />
            </div>
          </section>
        </div>

        <div className="column">
          <h4>Padding</h4>
          <section className="column">
            {componentPaddingMethodInputs}

            <div>
              <label>X padding index</label>
              <input
                type="number"
                id="componentXPaddingScale"
                value={baseComponentPaddingXIndex}
                step="1"
                onInput={(e) => {
                  setBaseComponentPaddingXIndex(e.target.value);
                }}
              />
              <span
                class="computedValue"
                id="componentXPaddingComputedSize"
              ></span>
            </div>
            <div>
              <label>Y padding index</label>
              <input
                type="number"
                value={baseComponentPaddingYIndex}
                step="1"
                onInput={(e) => {
                  setBaseComponentPaddingYIndex(e.target.value);
                }}
              />
              <span
                class="computedValue"
                id="componentYPaddingComputedSize"
              ></span>
            </div>
          </section>
        </div>

        <div className="column">
          <h4>Number of sizes</h4>
          <section className="column">
            <div>
              <label>Small sizes</label>
              <input
                type="number"
                value={componentSmallQuantity}
                step="1"
                onInput={(e) => {
                  setComponentSmallQuantity(e.target.value);
                }}
              />
            </div>
            <div>
              <label>Large sizes</label>
              <input
                type="number"
                value={componentLargeQuantity}
                step="1"
                onInput={(e) => {
                  setComponentLargeQuantity(e.target.value);
                }}
              />
            </div>
          </section>
        </div>
      </fieldset>
    </>
  );
};

export default ComponentControls;
