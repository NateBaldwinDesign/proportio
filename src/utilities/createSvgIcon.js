const parse = require('html-react-parser');
const feather = require('feather-icons')

const createSvgIcon = (width, height, iconPadding = 0, iconName) => { 
    console.log(iconName)
    // return <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width={width} height={height} aria-hidden="true">
    //     <circle cx={width/2} cy={height/2} r={width/2 - iconPadding} fill="var(--blueprint500)" />
    // </svg>;
    const newIcon = feather.icons[iconName].toSvg({
        'stroke-width': 1,
        width: width,
        height: height,
        color: 'var(--blueprint500)'
    })

    return parse(newIcon);
}

export default createSvgIcon;