import tokens from "./tokens"
function getObjectKey(obj, value) {
    return Object.keys(obj).find((key) => obj[key] === value);
}

const findReferenceToken = (value, method) => {
    // method will be something like 'typeScale'
    // or it will be an existing type of value, such as icons, radius, elevation
    let referenceKey;
    if(method === 'typeScale') referenceKey = 'typography'
    else if(method === 'spacingScale') referenceKey = 'spacing'
    else referenceKey = `${method}`;

    // So we need to search the existing GENERATED tokens (in tokens.js)
    // for a key that matches the value.
    // First, reduce tokens into a more easily filtered format
    let tokensArray = {}
    const tokenNames = tokens[referenceKey].map((tokens) => {
        return Object.keys(tokens)[0]
    })
    tokens[referenceKey].map((token, i) => {
        tokensArray[`${tokenNames[i]}`] = `${token[tokenNames[i]].value}`
    })
    
    return getObjectKey(tokensArray, value)
}

export default findReferenceToken;