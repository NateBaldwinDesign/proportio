const createCssVariables = (tokens) => {
    // const typography = tokens.typography;
    
    // const typeNames = typography.map((type) => {
    //     return Object.keys(type)[0]
    // })
    // const typeValues = typography.map((type, i) => {
    //     return type[typeNames[i]].value
    // }) 
    
    const classifications = Object.keys(tokens)
    return classifications.forEach((classification) => {
        return tokens
        // const tokenNames = tokens[classification].map((type) => {
        //     return type
        //     // return Object.keys(type)
        // })
        // return tokenNames;
    })
    // classifications.map((classification) => {
    //     const tokenNames = classification.map((type) => {
    //         return Object.keys(type)[0]
    //     })
    //     const tokenValues = classification.map((type, i) => {
    //         return type[tokenNames[i]].value
    //     })
    // })
    
    // return classifications
}

export default createCssVariables;