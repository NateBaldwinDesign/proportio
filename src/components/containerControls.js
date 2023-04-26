import React from 'react';
import {
    containerSmallSizesState,
    containerLargeSizesState,
    containerBaseRadiusIndexState,
    containerBaseElevationIndexState,
    containerRadiusScaleFactorState
} from '../states/containers';
import { useRecoilState } from 'recoil';

const ContainerControls = (props) => {
    const [containerSmallSizes, setContainerSmallSizes] = useRecoilState(containerSmallSizesState)
    const [containerLargeSizes, setContainerLargeSizes] = useRecoilState(containerLargeSizesState)
    const [containerBaseRadiusIndex, setContainerBaseRadiusIndex] = useRecoilState(containerBaseRadiusIndexState)
    const [containerBaseElevationIndex, setContainerBaseElevationIndex] = useRecoilState(containerBaseElevationIndexState)
    const [containerRadiusScaleFactor, setContainerRadiusScaleFactor] = useRecoilState(containerRadiusScaleFactorState)
    
    return (
        <>
        <fieldset>
          <legend>Container sizes</legend>
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