console.log("lets learn regular_expression_character_set")

// let regex =/^V/i




//************character set***************
let regex =/v[a-z]nit/ //serach for the expression which have v[a-z](means any word from this cna be possible here )nit
//we can also use the numbers


regex = /v[aiop]nit/ //serach for the expression which have v[aiop](means any word from a,i,o,p be possible here )nit

regex = /v[^potr]nit/
////serach for the expression which have v[^potr](means all word can possible here accept p,o,t,r )nit




//*************Quantifiers******************
regex = /vine{2}t/ //it means that serch for the word in which 'e' can be of 2 times

regex = /vine{0,2}t/ // it means that "e" can be of 0 to 2 times Ex:can be 0,1 or 2 time

//we can apply miltipal characterstic property in regex




//***************Grouping*********************
regex=/(vi){2}/ // this means "vi" can be 2 time in expresion

const str = "vivinet is vinit";
let result = regex.exec(str);
console.log("result is " , result);

if(regex.test(str)){
    console.log(`This string ${str} matches the expression ${regex.source}`)
}
else{
    console.log("this string doest not match")
}
