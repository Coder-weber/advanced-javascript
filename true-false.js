// falsy condition
// 0 false
// empty string "" false
// undefined false
// null false
// const age =-6;

// truthy condition
// ' ','0' [] {} 
// const name="jssii";// space or any text there is true 
   let name=12;         // when empty string there is false
if(name || name==0){  // condition is -1to .. and 1 to ..
    console.log('the condition is true');
}
else{ // condition is true when is 0
    console.log('the condition is false');
}