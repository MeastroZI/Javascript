console.log("lets learn the Async Await")

async function vinit() //using async keyword we can make the function work aschcronusly and this will return the promise
{
    setTimeout(() => {
        console.log("test4 under the function")
        console.log(a)
    }, 40);
    console.log("we are inside the function")
    const response = await fetch('https://api.github.com/users')//in this await is use to make this process on background
    console.log("before response")
    const user = await response.json()
    console.log("users resolved")
    
    return user;

    // return "vinit"
}
console.log("before calling the function")
let a = vinit()

setTimeout(() => {
    
    console.log("test1")
    console.log(a)
}, 38.2);


a.then(user => console.log(user))  // a.then is run when a is resolve
console.log("after calling the function")

setTimeout(() => {
    console.log("test2")
    console.log(a)
}, 30);

console.log("after the test 2")

setTimeout(() => {
    console.log("test3")
    console.log(a)
}, 300);

console.log("after the test 3")

// Some Notes : in this there no higher or lower priority for function or the main prog (outside the function)  when compiler reach the process which is aschcronus then the process is start on back ground after all the aschcronus is start processing on bvackground then the compiler print(or process) the code which is done first or we can say take less time  (like topper student tell the mam 'I am done mam') even if the aschrounus work is from the function 


//One More Imp thing I note :  if the some background process is done on same time in same presence scope of the complier and the other scope of the compiler than the his 1st priosrity is presence scope