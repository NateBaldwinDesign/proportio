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
    containerBaseGapIndexState
} from '../states/containers';
import { useRecoilState } from 'recoil';
import scaleMethodOptions from '../utilities/scaleMethodOptions';
import capitalize from '../utilities/capitalize';

const ContainerControls = (props) => {
    const [containerSmallSizes, setContainerSmallSizes] = useRecoilState(containerSmallSizesState)
    const [containerLargeSizes, setContainerLargeSizes] = useRecoilState(containerLargeSizesState)
    const [containerBaseRadiusIndex, setContainerBaseRadiusIndex] = useRecoilState(containerBaseRadiusIndexState)
    const [containerBaseElevationIndex, setContainerBaseElevationIndex] = useRecoilState(containerBaseElevationIndexState)
    const [containerRadiusScaleFactor, setContainerRadiusScaleFactor] = useRecoilState(containerRadiusScaleFactorState)
    const [containerBasePaddingXIndex, setContainerBasePaddingXIndex] = useRecoilState(containerBasePaddingXIndexState)
    const [containerBasePaddingYIndex, setContainerBasePaddingYIndex] = useRecoilState(containerBasePaddingYIndexState)
    const [containerPaddingScaleFactor, setContainerPaddingScaleFactor] = useRecoilState(containerPaddingScaleFactorState)
    const [containerPaddingMethodOption, setContainerPaddingMethodOption] = useRecoilState(containerPaddingMethodOptionState)
    const [containerBaseGapIndex, setContainerBaseGapIndex] = useRecoilState(containerBaseGapIndexState)

    const containerPaddingMethodInputs = scaleMethodOptions.map((method) => {
        return (
          <div className="radioGroup" key={`${method}`}>
            <input
              type="radio"
              id={`containerPadding${method}`}
              name="containerPaddingScale_method"
              defaultValue={method}
              onClick={(e) => setContainerPaddingMethodOption(e.target.value)}
              defaultChecked={method === containerPaddingMethodOption ? true : false}
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
          {/* <div className="segmentedControl">{inputs}</div> */}
          <div className='column'>
            <div className="formGroup">
              <label htmlFor="">Small sizes</label>
              <input
                type="number"
                onInput={(e) => setContainerSmallSizes(Number(e.target.value))}
                step="1"
                min="0"
                defaultValue={containerSmallSizes}
              />
            </div>
            <div className="formGroup">
              <label htmlFor="">Large sizes</label>
              <input
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
                <label>Top/bottom padding index</label>
                <input
                  type="number"
                  id="containerXPaddingScale"
                  defaultValue={containerBasePaddingXIndex}
                  step="1"
                  onInput={(e) => {
                    setContainerBasePaddingXIndex(e.target.value);
                  }}
                />
              </div>
              <div className="formGroup">
                <label>Left/right padding index</label>
                <input
                  type="number"
                  id="containerYPaddingScale"
                  defaultValue={containerBasePaddingYIndex}
                  step="1"
                  onInput={(e) => {
                    setContainerBasePaddingYIndex(e.target.value);
                  }}
                />
              </div>
              <div className="formGroup">
                <label>Gap index</label>
                <input
                  type="number"
                  id="containerGap"
                  defaultValue={containerBaseGapIndex}
                  step="1"
                  onInput={(e) => {
                    setContainerBaseGapIndex(e.target.value);
                  }}
                />
              </div>
              <div className="formGroup">
                <label>Scale factor</label>
                <input
                  type="number"
                  defaultValue={containerPaddingScaleFactor}
                  step="1"
                  onInput={(e) => {
                    setContainerPaddingScaleFactor(e.target.value);
                  }}
                />
              </div>
            </div>
          </fieldset>
        <fieldset>
            <legend>Radius</legend>
            <div className='column'>
            <div className="formGroup">
              <label htmlFor="">Base radius index</label>
              <input
                type="number"
                onInput={(e) => setContainerBaseRadiusIndex(Number(e.target.value))}
                step="1"
                min="0"
                defaultValue={containerBaseRadiusIndex}
              />
            </div>

            <div className="formGroup">
              <label htmlFor="">Radius scale factor</label>
              <input
                type="number"
                onInput={(e) => setContainerRadiusScaleFactor(Number(e.target.value))}
                step="1"
                min="0"
                defaultValue={containerRadiusScaleFactor}
              />
            </div>
            </div>
        </fieldset>
        <fieldset>
            <legend>Elevation</legend>
            <div className='column'>
            <div className="formGroup">
              <label htmlFor="">Elevation index</label>
              <input
                type="number"
                onInput={(e) => setContainerBaseElevationIndex(Number(e.target.value))}
                step="1"
                min="0"
                defaultValue={containerBaseElevationIndex}
              />
            </div>
            </div>
        </fieldset>
        </>
      );
}

export default ContainerControls