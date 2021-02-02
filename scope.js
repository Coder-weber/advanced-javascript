const bounes=20;
function add(num1,num2){
    const result=num1+num2+bounes;
    if(result >23){
        let mood="happy";
        mood="sadly";
        mood="exciting"
        console.log(mood);
    }
    // console.log(mood);
    return result;
}

console.log(bounes);
console.log(add(23,44));