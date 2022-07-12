console.log("lets learn regular_expression_shorthand_character_class")



let regex =/\w\wni/        //  \w is single word character
regex = /\w+uiop/          // \w+ is multipal word character
regex=/\Wis/               // \W is Non word character
regex=/\W+test/            // |W+ is multipal Non word character
regex=/\d999/              // \d means any digit 
regex=/\d+999/             // \d+ means multipal digit 
regex=/\D999/              // \D means Non digit 
regex=/\D+999/             // \D means multipal Non digit 
regex=/\s999/              // \s means WhteSpace
regex=/\s+999/             // \s means multipal WhiteSpace
regex=/\S999/              // \S means Non WhiteSpace 
regex=/\S+999/             // \s means multipal Non WhiteSpace               
regex=/test\b/             // \b means word boundry



//**************Assertion*******************
regex = /v(?=i)/;          // (?=i) means word after v is must be i

regex= /v(?!u)/            // // (?=i) means word after v is must not be u
const str = "vinit is vinit lsmoffrtyuiop $$$$$%%test  888569999   9999"

let result = regex.exec(str);
console.log("result is " , result);

if(regex.test(str)){
    console.log(`This string ${str} matches the expression ${regex.source}`)
}
else{
    console.log("this string doest not match")
}