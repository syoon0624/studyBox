let colorType = "Simple"
const colors = ['AliceBlue', 'AntiqueWhite', 'Aqua', 'Aquamarine', 'Azure', 'Beige', 'Bisque', 'Black', 'BlanchedAlmond', 'Blue', 'BlueViolet', 'Brown', 'BurlyWood', 'CadetBlue', 'Charteuse', 'Chocolate', 'Coral', 'CornflowerBlue', 'Cornsilk', 'Crimson', 'Cyan', 'DarkBlue', 'DarkCyan', 'DarkGoldenRod', 'DarkGray']

const setSimpleMode = () => {
    colorType = "Simple"
    return colorType
}

const setHexMode = () => {
    colorType = "Hex"
    return colorType
}

const setColor = () => {
    let colorRandom
    let rgba =new Array(3).fill().map(
        v => Math.floor(Math.random() * 255))
    
    rgba.push((Math.random() * 1).toFixed(1));
    console.log(rgba);
    
    if(colorType === "Simple") {
        let simpleBox = []
        simpleBox.push(`rgba( ${rgba} )`)
        simpleBox.push(colors[Math.floor(Math.random() * colors.length)])
        simpleBox.push("#" + Math.floor(Math.random() * 0xffffff).toString(16))
        colorRandom = simpleBox[Math.floor(Math.random() * simpleBox.length)]
    } else {
        colorRandom = "#" + Math.floor(Math.random() * 0xffffff).toString(16)
    }
    document.getElementById("color-name").innerHTML=colorRandom
    document.getElementById("back-color").style.backgroundColor = colorRandom
}