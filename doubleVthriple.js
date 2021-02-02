
// // 0 == false   // true
// 0 === false  // false, because they are of a different type
// 1 == "1"     // true, automatic type conversion for value only
// 1 === "1"    // false, because they are of a different type
// null == undefined // true
// null === undefined // false
// '0' == false // true
// '0' === false // false

let  num1=false;
let num2='0';
if(num1==num2){
    console.log('the condition is true');
}
else{
    console.log('the condition is false');
}