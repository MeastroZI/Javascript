
/*for(let i =0 ; i<100 ; i++)
{
    console.log(i+1);
}
*/

/*let j = 0;
while (j<100) {
    console.log(j)
    j++;
    
}*/



/*do {
    console.log(j+1)
    j++
    
} while (j<10);
*/


/*let arr=[2,3,1,5,6,7]
arr.forEach(function(element){

    console.log(element);

})*/

// this for each is the function which well run for all element of the array




let obj = {
    name:'vinit',
    age:18,
    work : 'studing'

}

for(let key in obj)
// not exaclty clear but in this "in" is some operator and key is variable which means the key in object
{
    console.log(`The ${key} of object is ${obj[key]}`)
}

