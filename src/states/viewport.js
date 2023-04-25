import {
    atom
} from 'recoil';

/** This set of states is only for the user interface.
 *  The viewport size state here is used in the previews
 *  and for calculating hard-coded pixel values in 
 *  previews and/or possible outputs.
 */
const viewportSizeState = atom({
    key: 'viewportSize',
    default: 320
})

export {
    viewportSizeState
}