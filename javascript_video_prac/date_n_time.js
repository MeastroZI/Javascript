console.log('lets larn about date and time function in javascript')

let today = new Date() // type of date is object

// we can set the date like that
// let otherDate = new Date('8-4-2004 04:54:08');
// let otherDate = new Date('june 13 1976');
let otherDate = new Date('12/30/1976');
// formate is (MM/DD/YYYY)

let a;
//a = otherDate.getDay(); // getDay() is the function to print the day of the the date in number same as getMinutes(), getSeconds() and getMonth() functions are also available


//a = otherDate.getTime(); // this will peint the seconds which is calculated from the jan 1997
//console.log(a)  

// we can update the time which we set (Ex:we set the date in variable otherDate)
otherDate.setDate(15);
otherDate.setMonth(0)
otherDate.setFullYear(2020)// this will set the year

// same as setMinutes(),setSecond(),and setHours() als a function we can use

console.log(otherDate)