// var n = 7;
//  var count = 0;
// if (n < 1){
//     console.log("is not valid")
// }
// else{
// for (let i = 1;i <= 10;i++){
//     if((n % i==0)){
//         count ++;
//     }
// }
// }
// if(count == 2){
//     console.log(n,"Is a prime");
// }
// else{
//     console.log(n,"is not prime")
// }
// var n = 10;
// a=[];
//  var first = 0;
//  var second = 1;

// for (var i = 0; i <= 10;i++){
// a.push(first);
// var next = first + second;
//     first = second;
//     second = next;
// }
// console.log(a);
var str = "Malayalam";
var rev = "";

for(var i = str.length - 1; i >= 0;i--){
    rev =  rev + str[i];
    
    
}
if(str === rev){
    console.log(rev, "is a palindrome");
}
else{
    console.log(rev,"is not a palindrome");
}