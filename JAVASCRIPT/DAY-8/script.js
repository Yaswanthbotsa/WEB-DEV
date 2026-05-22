// try{
//     console.log(y);
// } catch (err){
//     console.log(err.name);
    
// }
// console.log("Yaswanth")






// function myFun(){
//     console.log(-1);
    
// }
// setTimeout(myFun,3000)
// setInterval(myFun,5000)



let display = document.getElementById("display")
const changeImage = async ()=> {
    try{
    const res = await fetch("https://dog.ceo/api/breeds/image/random")
    const data = await res.json()
    display.style.backgroundImage = `url(${data.message})`
} catch (err){
    console.log(err);
    
}
}
