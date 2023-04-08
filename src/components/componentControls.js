import React from "react";
import { useRecoilState } from 'recoil';
import capitalize from "../utilities/capitalize";
import {baseSizeState} from '../states/base';
import scaleMethodOptions from "../utilities/scaleMethodOptions";
import {
  baseIconSizeIndexState,
  baseComponentSizeIndexState,
  componentLineHeightState,
  componentSmallQuantityState,
  componentLargeQuantityState,
  componentMinHeightMethodOptionState,
  componentPaddingMethodOptionState,
  baseComponentTextSizeIndexState,
  baseComponentPaddingXIndexState,
  baseComponentPaddingYIndexState,
  scaleComponentRadiusState,
  baseComponentRadiusState
} from "../states/components"

const ComponentControls = (props) => {
  const [baseSize, setBaseSize] = useRecoilState(baseSizeState);

  const [baseIconSizeIndex, setBaseIconSizeIndex] = useRecoilState(baseIconSizeIndexState);
  const [baseComponentSizeIndex, setBaseComponentSizeIndex] = useRecoilState(baseComponentSizeIndexState);
  const [componentLineHeight, setComponentLineHeight] = useRecoilState(componentLineHeightState);
  const [componentSmallQuantity, setComponentSmallQuantity] = useRecoilState(componentSmallQuantityState);
  const [componentLargeQuantity, setComponentLargeQuantity] = useRecoilState(componentLargeQuantityState);
  const [componentMinHeightMethodOption, setComponentMinHeightMethodOption] = useRecoilState(componentMinHeightMethodOptionState);
  const [componentPaddingMethodOption, setComponentPaddingMethodOption] = useRecoilState(componentPaddingMethodOptionState);
  const [baseComponentTextSizeIndex, setBaseComponentTextSizeIndex] = useRecoilState(baseComponentTextSizeIndexState);
  const [baseComponentPaddingXIndex, setBaseComponentPaddingXIndex] = useRecoilState(baseComponentPaddingXIndexState);
  const [baseComponentPaddingYIndex, setBaseComponentPaddingYIndex] = useRecoilState(baseComponentPaddingYIndexState);
  const [scaleComponentRadius, setScaleComponentRadius] = useRecoilState(scaleComponentRadiusState);
  const [baseComponentRadius, setBaseComponentRadius] = useRecoilState(baseComponentRadiusState);

  const componentScalingMethodInputs = scaleMethodOptions.map((method) => {
    return (
      <div className="radioGroup" key={`${method}`}>
        <input
          type="radio"
          id={`component${method}`}
          name="componentScale_method"
          defaultValue={method}
          onClick={(e) => setComponentMinHeightMethodOption(e.target.value)}
          defaultChecked={method === componentMinHeightMethodOption ? true : false}
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
          onClick={(e) => setComponentPaddingMethodOption(e.target.value)}
          defaultChecked={method === componentPaddingMethodOption ? true : false}
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
              defaultValue={baseComponentSizeIndex}
              id="baseComponentSize"
              onInput={(e) => {
                setBaseComponentSizeIndex(e.target.value);
              }}
            />
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
        <legend>Radius</legend>
        <div className="column">
          <div className="formGroup">
            <div className="checkboxGroup" >
              <input
                type="checkbox"
                name="scaleRadius"
                id="scaleRadius"
                onClick={(e) => setScaleComponentRadius(e.target.checked)}
                defaultChecked={scaleComponentRadius}
              />
              <label htmlFor="scaleRadius">
                Scale border radius
              </label>
            </div>
          </div>
          <div className="formGroup">
            <label>Radius index</label>
            <input
              type="number"
              defaultValue={baseComponentRadius}
              id="baseComponentRadius"
              onInput={(e) => {
                setBaseComponentRadius(e.target.value);
              }}
            />
            {/* <span className="computedValue" id="componentComputedSize">
              {baseComponentSize}
            </span> */}
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
              min="0"
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
              min="1"
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
              min="0"
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
              min="1"
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
