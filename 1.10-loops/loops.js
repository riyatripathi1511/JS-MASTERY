//print 0 to 4
// console.log("0");
// console.log("1");
// console.log("2");
// console.log("3");
// console.log("4");
//Loops helps us do the same thing again again

for(let count=0;count<5;count++){
    console.log(count);
}
let names=["John","Peter","Jenith","Meow"];
for(let i=0;i<names.length;i++){
    console.log(names[i])
}
//iterate over array using forEach loop
console.log("*********iterate over array using forEach loop **********")
names.forEach(function test(n){
  console.log(n);
});

//iterate over array using for of loop
console.log("********iterate over array using for of loop ***********")
for(n of names){
  console.log(n);
}
//iterate over an object
let student = {
  name:"Peter",
  rollNo:565,  //All attribute are key here
  age:23,
  dept :'Phy'
};
console.log("***********iterate over an object with for in loop *********")
for(key in student){
  console.log("Key is "+key+" and "+" Value is "+ student[key]);
}

//while loop in JS
//1.0 intialization, 2.Condition checking ,3.Body Execution ,4.Updation

console.log("**********iterate with while loop ***********");
let c = 0;
while(c<5){
  console.log(c);
  c++;
}

console.log("**********iterate with do0 while loop ***********");
//let i =10;
let i = 0;
do{
  console.log(i);
  i++;
}while( i<7);