console.log("hello lets learn about function in javascript");

/*function greet( name , wish )
{
    console.log(
        `hello ${name}  ${wish}`
    )
// this how we can make a simple function
}*/


/*function greet(name ,wish)
{
    let msg = `hello ${name}  ${wish}`
    return msg; // this will return the  msg variable to caller variable

}*/

// in this we make the function whos name is greet we can also make the vaariable and assing it a function like this


let greet= function(name,wish){
    let msg = `hello ${name}  ${wish}`
    return msg;
}


let val=greet('vinit' , 'good morning');
// now because of return the value of function greet is store to this val

console.log(val);




let obj ={
    name:"vinit",
    game: function(){
        let warn=`basterd don't play games focus on study 😡😡😡😡`
        return warn;
    }
    // we can also make the function in object
}

console.log(obj.game())





/* imp note  ---->   
let :
    1) let is only can acess in his block 
    2) if let is define in function scope then it is local varible on this function
    3) let can be modified 
    

const:
    1) can't be modified
    2) only can acess in his block 


var:
    1) can be modified
    2) var is the function scope means we can acess it under the scope of function 
    3) if we make any varibale using var under some block(Ex:under if)  then it is act as a global variable
*/