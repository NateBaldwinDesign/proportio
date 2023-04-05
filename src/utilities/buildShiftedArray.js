function buildShiftedArray(smallLength, largeLength, index) {
  /* Create array of padding indexes */
  let newSmallArray = Array.from(
    { length: smallLength },
    (x, i) => Number(index) - 1 - i
  );
  newSmallArray.reverse();
  let newLargeArray = Array.from(
    { length: largeLength },
    (x, i) => Number(index) + i
  );
  let newArray = [...newSmallArray, ...newLargeArray];
  return newArray;
}

export default buildShiftedArray;
