function buildArray(smallLength, largeLength) {
  const smallSizeArray = Array.from(
    { length: smallLength },
    (x, i) => (i + 1) * -1
  );
  const largeSizeArray = Array.from({ length: largeLength }, (x, i) => i);
  return [...smallSizeArray, ...largeSizeArray];
}

export default buildArray;
