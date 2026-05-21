let colorCode = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f']
let display = document.getElementById("display")
let code = document.getElementById("code")

const changeColor = () => {
    let randColor = "#";

    for (let i = 0; i < 6; i++){
        let randNumber = Math.floor(Math.random()*16)
        randColor += colorCode[randNumber]

    }
    display.style.backgroundColor = randColor
    console.log(randColor);
    code.textContent = randColor
    
}
const copyCode = () => {
    let hexText = code.textContent

    if (hexText === "") {
        alert("Generate a color first!")
        return
    }

    navigator.clipboard.writeText(hexText).then(() => {
        let copyBtn = document.getElementById("copyBtn")
        copyBtn.textContent = "Copied!"
        setTimeout(() => {
            copyBtn.textContent = "Copy Code"
        }, 2000)
    })
}