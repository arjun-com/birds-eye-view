const root = document.getElementById("root")
const definedWidth = 2000

function setScale() {
    let width = window.innerWidth - 18

    let change = (width - definedWidth) / definedWidth
    let scale = 1 + change

    if(scale < 0.5) scale = 0.5

    root.style.transform = `scale(${scale})`

    console.log("set scale to: ", scale)
}

setScale()

window.addEventListener("resize", setScale)
