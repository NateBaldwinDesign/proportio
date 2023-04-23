const calculateFontSize = (minViewport, maxViewport, minSize, maxSize, viewportWidth) => {
    const factor = 1 / (maxViewport - minViewport) * (maxSize - minSize);
    const value = minSize - (minViewport * factor) + (100 * factor * viewportWidth)

    return value
}

export default calculateFontSize;