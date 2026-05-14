// var num = 125;
// for (var i = 0; i < 5; i++){
//     console.log(i)
// }

// function isprime(num){
//     if (num < 1) return false;
//     for (var i = 2; i <= Math.sqrt(num); i++){
//         if (num % i == 0){
//             return false;
//         }
//     }
//     return true;

// }

// console.log(isprime(7));
// console.log(isprime(2))


function is_prime(n){
    if (n < 2)  {
        return false;
    }
    for (var i = 2; i<= Math.sqrt(n); i++){
        if (n % i == 0){
            return false;
        }
    }
    return true;
}
var num = 121;
if (is_prime(num)){
    console.log(num + " is prime number")
}
else{
    console.log(num+ " Is not a prime number")
}


function is_palindrome(num){
    var rev = 0;
    var temp = num;
    while(temp > 0){
        r = temp % 10;
        rev = rev * 10 + r;
        temp = Math.floor(temp/10);
    }
    if (num == rev){
        return true;
    }else{
        return false;
    }
}

if(is_palindrome(num)){
    console.log(num + ' '+"is a palindrome number");
}else{
    console.log(num+ ''+"Is not a palindrome number")
}