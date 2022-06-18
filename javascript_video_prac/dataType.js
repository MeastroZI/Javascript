/*javascript is able to read data type by own there are two type of data type 
1) primitive data type
        |
        |
        V
Ex: number(integer) , string , bollean, null, symbol,undefined


2) reference data type

        |
        |
        V

EX: object literals , function , arrays and datas
            
*/



// *********Primitive**********

let number = 18;        // number type

console.log(" my age is " +number ,"this is the data type = " +(typeof number))  // this typeof number show the data type  **


let name  = "vinit";     // string type

console.log(" my name is " +name ,"this is the data type = " +(typeof name))  // this typeof number show the data type of variable  **


let male = true;        // bollean type

console.log(" my is " +male ,"this is the data type = " +(typeof male))  // this typeof number show the data type 

let undefined;          // undefined type

console.log(" my is " +undefined ,"this is the data type =  " +(typeof undefined))  // this typeof number show the data type 



//************Reference*************

let arr=[1,2,3,4,5,6,7,8,9] //array
console.log("the data type of array is = " +(typeof arr)); //array is also the one type of the object 


let marks =    // object
{
    vinit:100, // this is the property of the object
    vishal:20,
    gautam:50
}
console.log("the data type is = " +(typeof marks))


function sum()
{
    let a=5;
    let b=6;
    console.log("addition of the a and b is " +(a+b))
}
console.log("the data type of the function is " +(typeof sum))



let date =new Date();
console.log(typeof date)
