import buildArray from "./buildArray";

function buildShiftedArray(smallLength, largeLength, index, scaleFactor = 1) {
    let baseArray = buildArray(smallLength, largeLength);
    let scaledArray = baseArray.map((x, i) => {
      return (x * scaleFactor) + Number(index)
    })

    return scaledArray;
}

export default buildShiftedArray;
