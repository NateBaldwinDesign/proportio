import {
    atom
} from 'recoil';

const baseSizeState = atom({
    key: 'baseSize',
    default: 16
});

export {
    baseSizeState
}