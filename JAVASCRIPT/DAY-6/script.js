// const change = () =>{
//     let display = document.getElementById("display")
//     display.innerHTML = "World"
//     display.style.color = "Red"
//     display.style.backgroundColor = "green"
// }


let addition = document.getElementById("addition")
let count = 0
const add = () =>{
    count++
    if (count >= 11) {
        return
    }
    addition.innerHTML = count
}
