import React from 'react';
import {
  containerSmallSizesState,
  containerLargeSizesState,
  containerBaseRadiusIndexState,
  containerBaseElevationIndexState,
  containerRadiusScaleFactorState,
  containerPaddingScaleFactorState,
  containerPaddingMethodOptionState,
  containerBasePaddingXIndexState,
  containerBasePaddingYIndexState,
} from '../states/containers';
import { useRecoilState } from 'recoil';
import scaleMethodOptions from '../utilities/scaleMethodOptions';
import capitalize from '../utilities/capitalize';

const ContainerControls = (props) => {
  const [containerSmallSizes, setContainerSmallSizes] = useRecoilState(
    containerSmallSizesState,
  );
  const [containerLargeSizes, setContainerLargeSizes] = useRecoilState(
    containerLargeSizesState,
  );
  const [containerBaseRadiusIndex, setContainerBaseRadiusIndex] =
    useRecoilState(containerBaseRadiusIndexState);
  const [containerBaseElevationIndex, setContainerBaseElevationIndex] =
    useRecoilState(containerBaseElevationIndexState);
  const [containerRadiusScaleFactor, setContainerRadiusScaleFactor] =
    useRecoilState(containerRadiusScaleFactorState);
  const [containerBasePaddingXIndex, setContainerBasePaddingXIndex] =
    useRecoilState(containerBasePaddingXIndexState);
  const [containerBasePaddingYIndex, setContainerBasePaddingYIndex] =
    useRecoilState(containerBasePaddingYIndexState);
  const [containerPaddingScaleFactor, setContainerPaddingScaleFactor] =
    useRecoilState(containerPaddingScaleFactorState);
  const [containerPaddingMethodOption, setContainerPaddingMethodOption] =
    useRecoilState(containerPaddingMethodOptionState);

  const containerElevation = props.containerElevation;
  const setContainerElevation = props.setContainerElevation;

  const containerPaddingMethodInputs = scaleMethodOptions.map((method) => {
    return (
      <div className="radioGroup" key={`${method}`}>
        <input
          type="radio"
          id={`containerPadding${method}`}
          name="containerPaddingScale_method"
          defaultValue={method}
          onClick={(e) => setContainerPaddingMethodOption(e.target.value)}
          defaultChecked={
            method === containerPaddingMethodOption ? true : false
          }
        />
        <label htmlFor={`containerPadding${method}`}>
          {`${capitalize(method)}`}
        </label>
      </div>
    );
  });

  return (
    <>
      <fieldset>
        <legend>Sizes</legend>
        <div className="column">
          <div className="formGroup">
            <label htmlFor="containerSmallSizes">Small sizes</label>
            <input
              id="containerSmallSizes"
              type="number"
              onInput={(e) => setContainerSmallSizes(Number(e.target.value))}
              step="1"
              min="0"
              defaultValue={containerSmallSizes}
            />
          </div>
          <div className="formGroup">
            <label htmlFor="containerLargeSizes">Large sizes</label>
            <input
              id="containerLargeSizes"
              type="number"
              onInput={(e) => setContainerLargeSizes(Number(e.target.value))}
              step="1"
              min="0"
              defaultValue={containerLargeSizes}
            />
          </div>
        </div>
      </fieldset>
      <fieldset>
        <legend>Padding</legend>
        <div className="segmentedControl">{containerPaddingMethodInputs}</div>
        <div className="column">
          <div className="formGroup">
            <label htmlFor="containerXPaddingScale">
              Top/bottom padding index
            </label>
            <input
              type="number"
              id="containerXPaddingScale"
              defaultValue={containerBasePaddingYIndex}
              step="1"
              onInput={(e) => {
                setContainerBasePaddingYIndex(e.target.value);
              }}
            />
          </div>
          <div className="formGroup">
            <label htmlFor="containerYPaddingScale">
              Left/right padding index
            </label>
            <input
              type="number"
              id="containerYPaddingScale"
              defaultValue={containerBasePaddingXIndex}
              step="1"
              onInput={(e) => {
                setContainerBasePaddingXIndex(e.target.value);
              }}
            />
          </div>
          <div className="formGroup">
            <label htmlFor="containerScaleFactor">Scale factor</label>
            <input
              id="containerScaleFactor"
              type="number"
              defaultValue={containerPaddingScaleFactor}
              step="1"
              min="1"
              onInput={(e) => {
                setContainerPaddingScaleFactor(e.target.value);
              }}
            />
          </div>
        </div>
      </fieldset>
      <fieldset>
        <legend>Radius</legend>
        <div className="column">
          <div className="formGroup">
            <label htmlFor="baseRadius">Base radius index</label>
            <input
              id="baseRadius"
              type="number"
              onInput={(e) =>
                setContainerBaseRadiusIndex(Number(e.target.value))
              }
              step="1"
              defaultValue={containerBaseRadiusIndex}
            />
          </div>

          <div className="formGroup">
            <label htmlFor="radiusScaleFactor">Radius scale factor</label>
            <input
              id="radiusScaleFactor"
              type="number"
              onInput={(e) =>
                setContainerRadiusScaleFactor(Number(e.target.value))
              }
              step="1"
              min="1"
              defaultValue={containerRadiusScaleFactor}
            />
          </div>
        </div>
      </fieldset>
      <fieldset>
        <legend>Elevation</legend>
        <div className="column">
          <div className="checkboxGroup">
            <input
              type="checkbox"
              name="componentElevation"
              id="componentElevation"
              onClick={(e) => setContainerElevation(e.target.checked)}
              defaultChecked={containerElevation}
            />
            <label htmlFor="componentElevation">Apply elevations</label>
          </div>
          <div className="formGroup">
            <label htmlFor="elevationIndex">Elevation index</label>
            <input
              id="elevationIndex"
              type="number"
              onInput={(e) =>
                setContainerBaseElevationIndex(Number(e.target.value))
              }
              step="1"
              defaultValue={containerBaseElevationIndex}
            />
          </div>
        </div>
      </fieldset>
    </>
  );
};

export default ContainerControls;
