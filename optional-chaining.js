let emp = {
    contact : {
      mobile : 01234567,
      email : 'abc@emp.com'
    },
    address : {
        street :'abc',
        city :'xyz'
    }
}
//console.log(emp?.contact?.mobile); //called object-chaining or optional-chaining
console.log("------------");
console.log(emp.contact.mobile);//program stops if contact object does not exist
console.log(emp?.contact?.mobile);//program continues even if contact object is not present
console.log(emp.address);