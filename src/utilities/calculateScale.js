function calculateScale(baseSize, scale, increment, scaleMethod) {
  baseSize = Number(baseSize);
  scale = Number(scale);

  if (scaleMethod === 'power') return baseSize * Math.pow(scale, increment);
  else if (scaleMethod === 'linear') return baseSize + scale * increment;
  else return scale * baseSize;
}

export default calculateScale;
