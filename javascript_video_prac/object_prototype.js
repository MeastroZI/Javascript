console.log("lets learn abput object  prototype")

let obj = {
    name:"vinit",
    channel :"Code with harry",
    address : "pluto"
}

function objt(givenName)
{
    this.name = givenName;
}

// obj.prototype.getName = function(){
//     return this.name;
// }
// we can't change the or maket the prototype of the object like this, we can only make  or change the prototype of the constructor like this


// but we can change the prototype of the object like this 

// Object.prototype.getName = function(){
//     return this.name;
// }

// BUT BUT BUT ! this not recommendable because  this will make the prototype for all the object we creat


objt.prototype.getName = function(){
    return this.name;
}

objt.prototype.setName = function(newName){
    this.name =newName;
    // this is the make the prototype of this function by using which we can change the name of the function
}
let obj2 = new objt("Gautam")
console.log(obj2)