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
    let colorRandom;
    if(colorType === "Simple") {
        let simpleBox = []
        simpleBox.push(`rgba(${
            new Array(4).fill().map(
                v => Math.floor(
                    Math.random() * 255)
                    )
                })`)
        simpleBox.push(colors[Math.floor(Math.random() * colors.length)])
        simpleBox.push("#" + Math.round(Math.random() * 0xffffff).toString(16))
        colorRandom = simpleBox[Math.floor(Math.random() * simpleBox.length)]
    } else {
        colorRandom = "#" + Math.round(Math.random() * 0xffffff).toString(16)
    }
    document.getElementById("colorName").innerHTML=colorRandom
    document.getElementById("backgroundColor").style.backgroundColor = colorRandom
}

console.log(document.styleSheets);