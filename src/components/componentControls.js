import React from 'react';
import { useRecoilState } from 'recoil';
import capitalize from '../utilities/capitalize';
import scaleMethodOptions from '../utilities/scaleMethodOptions';
import {
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
  baseComponentRadiusState,
  componentDensitySmallQuantityState,
  componentDensityLargeQuantityState,
  componentDensityScaleFactorState,
} from '../states/components';

const ComponentControls = (props) => {
  const [baseComponentSizeIndex, setBaseComponentSizeIndex] = useRecoilState(
    baseComponentSizeIndexState,
  );
  const [componentLineHeight, setComponentLineHeight] = useRecoilState(
    componentLineHeightState,
  );
  const [componentSmallQuantity, setComponentSmallQuantity] = useRecoilState(
    componentSmallQuantityState,
  );
  const [componentLargeQuantity, setComponentLargeQuantity] = useRecoilState(
    componentLargeQuantityState,
  );
  const [componentMinHeightMethodOption, setComponentMinHeightMethodOption] =
    useRecoilState(componentMinHeightMethodOptionState);
  const [componentPaddingMethodOption, setComponentPaddingMethodOption] =
    useRecoilState(componentPaddingMethodOptionState);
  const [baseComponentPaddingXIndex, setBaseComponentPaddingXIndex] =
    useRecoilState(baseComponentPaddingXIndexState);
  const [baseComponentPaddingYIndex, setBaseComponentPaddingYIndex] =
    useRecoilState(baseComponentPaddingYIndexState);
  const [scaleComponentRadius, setScaleComponentRadius] = useRecoilState(
    scaleComponentRadiusState,
  );
  const [baseComponentRadius, setBaseComponentRadius] = useRecoilState(
    baseComponentRadiusState,
  );
  const [componentDensitySmallQuantity, setComponentDensitySmallQuantity] =
    useRecoilState(componentDensitySmallQuantityState);
  const [componentDensityLargeQuantity, setComponentDensityLargeQuantity] =
    useRecoilState(componentDensityLargeQuantityState);
  const [componentDensityScaleFactor, setComponentDensityScaleFactor] =
    useRecoilState(componentDensityScaleFactorState);

  const componentScalingMethodInputs = scaleMethodOptions.map((method) => {
    return (
      <div className="radioGroup" key={`${method}`}>
        <input
          type="radio"
          id={`component${method}`}
          name="componentScale_method"
          defaultValue={method}
          onClick={(e) => setComponentMinHeightMethodOption(e.target.value)}
          defaultChecked={
            method === componentMinHeightMethodOption ? true : false
          }
        />
        <label htmlFor={`component${method}`}>{capitalize(method)}</label>
      </div>
    );
  });
  const componentPaddingMethodInputs = scaleMethodOptions.map((method) => {
    return (
      <div className="radioGroup" key={`${method}`}>
        <input
          type="radio"
          id={`componentPadding${method}`}
          name="componentPaddingScale_method"
          defaultValue={method}
          onClick={(e) => setComponentPaddingMethodOption(e.target.value)}
          defaultChecked={
            method === componentPaddingMethodOption ? true : false
          }
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
        <legend>Additional sizes</legend>
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
              min="0"
              onInput={(e) => {
                setComponentLargeQuantity(e.target.value);
              }}
            />
          </div>
        </div>
      </fieldset>

      <fieldset>
        <legend>Default density (padding)</legend>
        <div className="segmentedControl">{componentPaddingMethodInputs}</div>
        <div className="column">
          <div className="formGroup">
            <label>Left/right index</label>
            <input
              type="number"
              id="componentXPaddingScale"
              defaultValue={baseComponentPaddingXIndex}
              step="1"
              onInput={(e) => {
                setBaseComponentPaddingXIndex(e.target.value);
              }}
            />
          </div>
          <div className="formGroup">
            <label>Top/bottom index</label>
            <input
              type="number"
              defaultValue={baseComponentPaddingYIndex}
              step="1"
              onInput={(e) => {
                setBaseComponentPaddingYIndex(e.target.value);
              }}
            />
          </div>
        </div>
      </fieldset>

      <fieldset>
        <legend>Additional densities</legend>
        <div className="column">
          <div className="formGroup">
            <label>Scale factor</label>
            <input
              type="number"
              defaultValue={componentDensityScaleFactor}
              step="1"
              min="1"
              onInput={(e) => {
                setComponentDensityScaleFactor(Number(e.target.value));
              }}
            />
          </div>
          <div className="formGroup">
            <label>Small densities</label>
            <input
              type="number"
              defaultValue={componentDensitySmallQuantity}
              step="1"
              min="0"
              onInput={(e) => {
                setComponentDensitySmallQuantity(e.target.value);
              }}
            />
          </div>
          <div className="formGroup">
            <label>Large densities</label>
            <input
              type="number"
              defaultValue={componentDensityLargeQuantity}
              step="1"
              min="0"
              onInput={(e) => {
                setComponentDensityLargeQuantity(e.target.value);
              }}
            />
          </div>
        </div>
      </fieldset>

      <fieldset>
        <legend>Radius</legend>
        <div className="column">
          <div className="formGroup">
            <div className="checkboxGroup">
              <input
                type="checkbox"
                name="scaleRadius"
                id="scaleRadius"
                onClick={(e) => setScaleComponentRadius(e.target.checked)}
                defaultChecked={scaleComponentRadius}
              />
              <label htmlFor="scaleRadius">Scale border radius</label>
            </div>
          </div>
          <div className="formGroup">
            <label>Radius size index</label>
            <input
              type="number"
              defaultValue={baseComponentRadius}
              id="baseComponentRadius"
              onInput={(e) => {
                setBaseComponentRadius(e.target.value);
              }}
            />
          </div>
        </div>
      </fieldset>
    </>
  );
};

export default ComponentControls;
