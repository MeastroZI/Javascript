/*const name = "vinit"
const greeting = "Good morning"
console.log(greeting + ' '+name,"\n") // we can aff two varibalr string using "+" sign in console log*/

let html;

html = "<h1> this is just a test heading </h1>"+
        "<p> this is just a test para </p>";


/*html=html.concat(" this " ," this is also concate to the string"); // this will concate the enter string to the variable string*/


/*console.log(html,"\n");
console.log(html.length,"\n"); // this will print the length of the string ***/


/*console.log(html.toLowerCase(),"\n") // this will print the string to the lower case but it not change the original string ***/


/*console.log(html.toUpperCase(),"\n") // this will print the string in upper case but it not change the original string ** */


/*console.log("first indexed char of the string :",html[1],"\n") // this will print 1st char of the string  same if index 1 then it print the 2nd char  */


/*console.log("index number of the 'this' is ",html.indexOf('this'),"\n") // this will print index number of enter word in string ,if we enter some word which is not present in the string then it show the -1 as a index and if there is multipal occurence of some word then it only show the index of the first ocuurence*/ 


/*console.log("last index of 'this' is " ,html.lastIndexOf("this"),"\n")
// if u want last index of  some word in string the u can use lastIndexof()*/


/*console.log(html.charAt(5) ,"\n") // this will print the the characater at index 5*/


/*console.log("is the string is ends with the word 'string' :" ,html.endsWith('string'),"\n")
//this will print true if the oriiginal string is ends with the  enter word else print false*/


/*console.log("is 'this' is present in the string: ",html.includes("this"),"\n")
// this will print true if the enter word is present in the original string else print false*/


/*console.log(html.substring(1,7),"\n")
//this will print the string if enterd indexed  means EX: from 1 to 6 */


/*console.log(html.slice(1,8),"\n")
console.log(html.slice(-4),"\n")
// .slice is very similer to the substring but excapt one prop which is if enter the and index in - sign the it print from the back from the string
// if we enter -ve index in .substring func the it print the whole string*/


/*console.log(html.split(' '))
// this will split the string into array from where ahve an space (bcz we enter space in parameter of split)
// if we enter some thing else in parameter than it spite it from that parameter to the array*/


/*console.log(html.replace('this' , 'it'))
// this will reaplce the 1st occurence of the word "this" to "it" from the string */


let fruit = 'apple';
let naam= 'vinit';

let myHtml = `Hello ${naam} <h1> This is heading </h1>` ;

//console.log(myHtml)

document.body.innerHTML = myHtml;
