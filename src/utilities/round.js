const round = (value, decimals = 0) => {
    const factor = Math.pow(10, decimals);
    const round = Math.round(value * factor);
    return round / factor;
}

export default round;