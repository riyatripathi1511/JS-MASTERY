
let empArr2= [
    {
    id : 111,
    name:'John',
    age:34
    },
    {
        id : 222,
        name:'Peter',
        age:40
    },
    {
        id : 333,
        name:'John',
        age:50
    }
];
for(i=0;i<empArr2.length;i++){
    console.log(empArr2[i]);    
}
console.log(" ------------- ");
empArr2.forEach((emp,index,empArr2)=>{
    console.log(empArr2);
   console.log(`${index} - ${JSON.stringify(emp)}`)
}); 