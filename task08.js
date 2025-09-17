// function hai(a,b){
//     product = a * b;
//     return product;
// }
// mul = hai(10,30);
// console.log(mul);
// function jack(a,b,c){
//     if((a > b) && (a  > c)){
//         console.log(a, "is the largest");
    

//     }
//     else if(b > c){
//         console.log(b, "is thelargest");
//     }
//     else {
//         console.log(c,"is the largest");
//     }

// }
// function jack(arr){
//     let max = arr[0]
//     for(i = 0;i<arr.length;i++){
//         if(arr[i]>max){
//             max = arr[i];
            
          
//         }
//     }
//        return max;
    
// }

//     res = jack([10,20,30]);
//     console.log(res);
// function vow(name){
//     let count = 0;
    
//     for(let i = 0; i < name.length - 1;i++){
//         let char = name[i];
//     if(char==='e' || char == 'i'|| char == "u" || char == "o"|| char =="a"){
//         count ++;
//     }
// }

//    if(count > 0){
//         return count;
//     }
// }
// let add = vow("Parvathy");
// console.log(add);
// function remove(arr){
//    let  re=[]
//     for(var i = 0; i < arr.length;i++){
//         if(!(re.includes(arr[i])))
//             {
//             re.push(arr[i]);
        
//         }
//     }
//     console.log(re);

// }
// remove([10,10,34,35,37,10]);
// function str(name){
//    var ha="";
//     for(var i = name.length -1 ;i>=0;i--){
//         ha= ha + name[i];
//     }
//     console.log(ha);
// }
// str("PARVATHY");
// function ret(name){
//     max=0;
//     maxchar=0;
   
//     for(var i = 0;i<name.length;i++){
//         let char = name[i];
//          let count = 0;
       
//         for(var j = 0; j < name.length;j++){

       
//         if(char == name[j]){
//             count ++;
//         }
//     }
        
            
        
        
//         if(count > max){
//             max = count;
//             maxchar = char;

//         }
//     }
//     return maxchar;
// }
// console.log(ret("prograaaaaaamming"));
  function sor(arr){
    for(var i = 0; i < arr.length;i++){
        for(var j = i + 1; j < arr.length;j++)
        {
            if(arr[i]>arr[j]){
                temp = arr[i];
                arr[i]= arr[j];
                arr[j] = temp;
            }
        }

        
    }
    console.log(arr);
    console.log(arr[arr.length-2]);
    console.log(arr[1])

  }
  sor([10,20,30,5,8]);
// function val(name){
//     for(var i = 0 ;i < name.length;i++){
//         var char = name[i];
//         var count =0;
//         for(var j = 0 ;j < name.length;j++){
//             if(char == name[j]){
//                 count ++;
//             }
            
//             }
//              console.log(char + "=" + count);
//         }
       

//     }

    

// val("PARVATHY");
