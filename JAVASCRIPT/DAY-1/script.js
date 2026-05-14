console.log("Hello world");
var num1 =2019 ;
var num2 = 20;

//1.Greater than two
if (num1 > num2){
    console.log(num1+ "is greater than"+ num2);
}else{
    console.log(num2+" is greater than "+ num1);
}

//2.Even or Odd
if (num1 % 2 ==0){
    console.log(num1+" Even Number ");
}else{
    console.log(num1+" Odd Number")
}

//3.Leap Year
// if (num1 % 4 == 0){
//     console.log(num1+" Is a Leap Year");
// }else{
//     console.log(num1+" Not a Leap Year");
// }
if (num1 % 4 == 0) {
    if (num1 % 100 == 0) {
        if (num1 % 400 == 0) {
            console.log(num1 + " Is a Leap Year");
        } else {
            console.log(num1 + " Not a Leap Year");
        }
    } else {
        console.log(num1 + " Is a Leap Year");
    }
} else {
    console.log(num1 + " Not a Leap Year"); 
}