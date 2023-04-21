
let empArr3= [
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

let empsAgeGt40 = empArr3.filter((emp)=> {
  return emp.age>40;
});

console.log(empsAgeGt40);