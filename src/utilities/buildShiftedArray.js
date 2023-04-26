function buildShiftedArray(smallLength, largeLength, index, scaleFactor = 1) {
  /* Create array of padding indexes */
  let newSmallArray = Array.from(
    { length: smallLength },
    (x, i) => (Number(index) - 1 - i) * scaleFactor,
  );
  newSmallArray.reverse();
  let newLargeArray = Array.from({ length: largeLength }, (x, i) =>
    i === 0 ? Number(index) + i : (Number(index) + i) * scaleFactor,
  );
  let newArray = [...newSmallArray, ...newLargeArray];
  return newArray;
}

export default buildShiftedArray;
