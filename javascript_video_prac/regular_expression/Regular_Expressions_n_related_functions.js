console.log("leats lern Regular_Expressions_n_related_functions")

reg = /vinit/g
//this g is known as the global flag 
// reg = /vinit/i
// i is known as casse insensitivity  use for the serch the value even if it is present in capital or in small


//this is the regular index letral this tell the javasvcript that we gonna use this value for the search

//console.log(reg)
//console.log(reg.source) // print the valur under the index litral


let s = "This is just a string for vinit the serch My name is vinit and i am learning javascript with full of my devotion  ,  This extra text to serch vinit again "



//**************(1)********************//

let result = reg.exec(s); // this will show the index of the enter value in the reg varibale

//console.log(result) 
// if we want to serch the 2nd available value of teh reg vaiable("vinit") from "s" string then we have to write the g after the index litral then we get the another index for the value by redefing the result again

result = reg.exec(s)
//console.log(result)
//we can use result.index and .input




//****************(2)********************//

result = reg.test(s)

// this will check the is value of reg is present in the string "s" if yes than it prints true else false
// console.log(result)




//*****************(3)********************//

//result2 = reg.match(s) //-----> this is wrong
let result2 = s.match(reg) //-----> this is right

//this match function print the all present value of the reg in string in array under the  global flag
// console.log(result2)




//*******************(4)********************//

//result3 = reg.search(s) //-----> this is wrong
let result3 = s.search(reg) //-----> this is right

// this serach function print the index of the first value   if not present then then print -1
// console.log(result3)




//*********************(5)*******************//

let result4 = s.replace(reg , "Vinit Sharma")
// this will replce all the value to the enterd value under the golbal flag
console.log(result4)
