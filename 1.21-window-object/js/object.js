console.log(window);
function getPageUrl(){
    let url = window.location.href;
    //debugger;
    console.log(url); 
}
getPageUrl();

function add(){
    let result= 4+8;
    let emp =JSON.stringify({"id":111,"age":33});
    //Data stored in localstorage is available until explictly deleted
    window.localStorage.setItem("result",result);
    window.localStorage.setItem("name","Antony");//data stored inside localstorage is in string format 
    localStorage.setItem("empOne", emp);
    console.log(result);
}
//
function addToSession(){
    let result= 4+8;
    let emp =JSON.stringify({"id":111,"age":33});
    //Data stored in sessionStorage is available until user closes all browser window
    window.sessionStorage.setItem("result",result);
    window.sessionStorage.setItem("name","Antony");//data stored inside localstorage is in string format 
    sessionStorage.setItem("empOne", emp);
    console.log(result);
}
function getStorageDataSession(){
    let name = sessionStorage.getItem("name");
    let result = sessionStorage.getItem ("result");
    let e = sessionStorage.getItem ("empOne");

    console.log(typeof(name)+"name is"+name);
    console.log(typeof(result)+"result is"+result);
    console.log(typeof(e)+"emp is"+e);//here e is string 

    console.log(name);
    console.log(parseInt(result));
    let empObj = JSON.parse(e);//converts the string form of emp object to emp object form
    console.log(typeof(empObj));
    console.log(empObj);

    const{id ,age}=empObj;//object destructuring another features of ES6
    console.log(id);
    console.log(age);   
}
function clearDataSession(){
    sessionStorage.clear();   
}

function getStorageData(){
    let name = localStorage.getItem("name");
    let result = localStorage.getItem ("result");
    let e = localStorage.getItem ("empOne");

    console.log(typeof(name)+"name is"+name);
    console.log(typeof(result)+"result is"+result);
    console.log(typeof(e)+"emp is"+e);//here e is string 

    console.log(name);
    console.log(parseInt(result));
    let empObj = JSON.parse(e);//converts the string form of emp object to emp object form
    console.log(typeof(empObj));
    console.log(empObj);

    const{id ,age}=empObj;//object destructuring another features of ES6
    console.log(id);
    console.log(age);   
}
function clearData(){
    sessionStorage.clear();   
}