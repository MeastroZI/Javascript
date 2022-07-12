console.log("lets learn the regular_expression_meta_char")


let regex = /^v/; // it show the letter which is start with i

regex = /vinit$/ //it show the letter which is end with i
regex = /vi..t/ //it match any one character one "." means 1 char
regex = /v*t/

regex = /vx?iniY?t/   // in this charcter character befor ? is optional 

const str = "vinit is vinit"

let result = regex.exec(str);
console.log("result is " , result);

if(regex.test(str)){
    console.log(`This string ${str}matches the expression ${regex.source}`)
}
else{
    console.log("this string doest not match")
}







