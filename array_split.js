 const  num=[1,2,3,4,5,6,7,8];
//  const result=num.slice(2,5);
//  console.log(result);
const removed=num.splice(2,5,77);
console.log(removed);
const together=num.join(" the number ");
console.log(together);
 console.log(num);