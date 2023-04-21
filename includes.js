//when enter a name the particular array will tell us we use loop if
//we get it then we say found else not found
let names2 =['Ram','Shyam','Ghanshyam'];

const findName = (name)=>{
    if((names2.includes(name))){
        console.log("The employee exists");
    }else{
        console.log("The employee does not exists");
    }
}
findName('Ravi');