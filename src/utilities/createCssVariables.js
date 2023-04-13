
const createCssVariables = (tokens) => {
    const classifications = Object.keys(tokens)
    let CssTokensArray = []
    classifications.forEach((classifications) => {
        const tokenNames = tokens[classifications].map((tokens) => {
            return Object.keys(tokens)[0]
        })
        const tokenPairs = tokens[classifications].map((token, i) => {
            CssTokensArray.push({ [`--${tokenNames[i]}`]: `${token[tokenNames[i]].value}` })
            return document.documentElement.style
            .setProperty(`--${tokenNames[i]}`, token[tokenNames[i]].value);
        })
        return tokenPairs
    })
    const formattedCssTokens = JSON.stringify(CssTokensArray)
        .replaceAll('[', '')
        .replaceAll(']', '')
        .replaceAll('{', '')
        .replaceAll('},', ';\n')
        .replaceAll('}', '')
        .replaceAll(':', ': ')
        .replaceAll('"', '')

    return formattedCssTokens;
}

export default createCssVariables;