const fluidScale = (minViewport, maxViewport, minSize, maxSize) => {
    const factor = 1 / (maxViewport - minViewport) * (maxSize - minSize);
    const value = `${minSize - (minViewport * factor)} + ${100 * factor}vw`;

    return `clamp(${(minSize > maxSize) ? maxSize : minSize},
                ${value},
                ${(minSize > maxSize) ? minSize : maxSize}`
}

export default fluidScale;