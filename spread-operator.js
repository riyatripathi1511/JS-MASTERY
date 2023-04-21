let names =['Ram','Shyam','Ghanshyam'];

//names.push('Sanju');
names =[...names,'Sanju','Priya'];
console.log(names);

let empArr = [
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
console.log(empArr);

empArr=[...empArr,{id:444,name:'Liza',age:19}];
console.log(empArr);