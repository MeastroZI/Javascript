let res;
res = 34;
console.log(res ,(typeof res))

// number to string
res= String(34);
console.log(res ,(typeof res))

let boole = true;
console.log(boole , (typeof boole))

// bolean to string
boole = String(true);           
//imp note --> the string keyword's  "s must be in capital" 
console.log(boole , (typeof boole))



let date = new Date()
console.log(date,(typeof date))
date = String(new Date())
//date to string
console.log(date,(typeof date))


let arr= [1,2,3,4,5,6,7,8,9]
console.log(arr,typeof arr)

arr= String([1,2,3,4,5,6,7,8,9]) //if we print the length of dtring then it print th length with also include the commas and all special char becase it is string now but in array it show the no of input in the arrays
console.log(arr,typeof arr)


let stri = Number("3456");
stri = Number("34d5"); // when i try to convert this then it show the NaN DataType because when it try to convert it in number then it not able to convert "d" to number  same with array it show the NaN data type not able to convert it to number 

stri=Number(true);
// but when we try to convert true(boealan) to number then it done(not show the NaN DataType)even if it have character this is the default behaviour u have to learn
console.log(stri , (typeof stri))


//let number='34' ; // it show the string bcs it is under single cort
let number = parseInt('34.021')// this is the float number but bcs of parse int it convert it int and print 34 **

number = parseFloat('34.021') // now it print the float number means 34.021 bcs of parseFloat
console.log(number , typeof number)
console.log(number.toFixed(2) , typeof number)
// this toFixed is for number after decimal Ex: toFixed(4) will print the 4 number after decimal