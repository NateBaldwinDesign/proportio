const createCssVariables = (tokens) => {
  const classifications = Object.keys(tokens);
  let CssTokensArray = [];
  classifications.forEach((classifications) => {
    const tokenNames = tokens[classifications].map((tokens) => {
      return Object.keys(tokens)[0];
    });
    const tokenPairs = tokens[classifications].map((token, i) => {
      const value = token[tokenNames[i]].value.includes('px')
        ? `${token[tokenNames[i]].value}`
        : `var(--${token[tokenNames[i]].value
            .replaceAll('{', '')
            .replaceAll('}', '')
            .replace('typography.', '')
            .replace('icons.', '')
            .replace('spacing.', '')
            .replace('radius.', '')
            .replace('elevation', '')})`;
      CssTokensArray.push({ [`--${tokenNames[i]}`]: value });
      return document.documentElement.style.setProperty(
        `--${tokenNames[i]}`,
        value,
      );
    });
    return tokenPairs;
  });
  const formattedCssTokens = JSON.stringify(CssTokensArray)
    .replaceAll('[', '')
    .replaceAll(']', '')
    .replaceAll('{', '')
    .replaceAll('},', ';\n')
    .replaceAll('}', '')
    .replaceAll(':', ': ')
    .replaceAll('"', '');

  return formattedCssTokens;
};

export default createCssVariables;
