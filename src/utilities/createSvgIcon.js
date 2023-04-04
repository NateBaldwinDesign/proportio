const createSvgIcon = (width, height, iconPadding) => {    
    return <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width={width} height={height} aria-hidden="true">
        <circle cx={width/2} cy={height/2} r={width/2 - iconPadding} fill="var(--blueprint500)" />
    </svg>;
}

export default createSvgIcon;