console.log("lets learn the arrow function")


//********ARROW FUNCTION********* */

// const harry = function ()
// {
//     console.log("this is the content under the function")
// }
// const harry = ()=>{
//     console.log("this is the content under the function but function is make using the arrow function  ")
// }
// harry()



// fucntion returing sometings
// const greet = function()
// {
//     return "Good eveining"
// }


// const greet =()=>{
//     return "Good Morning"
// }
//we can also do this same thing like this if there is only one line to return
/*          |
            |
            |
            V
*/
// const greet =()=> "Good morning"

//if we want to return the object using one liner code then u have to apply bracket after curly braces

// const greet = ()=> ({name:"vinit"})

// for parameters
//if u have only one parameters then u can write  it without apply brackets

// const greet = name=>"Good eveining "+name;


//but if u have 2 parameters then u have to apply the brackets

const greet = (name,wish)=> "Good eveining "+ name+wish ;

console.log(greet('vinit ' , ',How are you?'))