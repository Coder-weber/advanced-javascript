const students=[
    {id:23,name:'shamim'},
    {id:33,name:'karim'},
    {id:44,name:'rahima'},
    {id:55, name:'ujol'}
];
const output=[];
for(let i=0; i<students.length;i++){
    let element=students[i];

    //console.log(element.name);
    output.push(element.name);
    // console.log(output[i]);
    // console.log(element.name);
    // output[i]=element.name;
    // console.log(output);
    //  return result.push(element.name);
}

const names=students.map( s => s.name);
const ids=students.map(id => id.id);
const bigger =students.filter(s => s.id>33);
const biggerOne=students.find(s => s.id>33);
console.log(names, ids, bigger, biggerOne);
// const result=output.map(x => x);
// console.log(result);

// for(let i=0; i<students.length;i++){
//     console.log(output[i]);
// }