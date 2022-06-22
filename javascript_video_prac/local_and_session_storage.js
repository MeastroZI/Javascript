console.log("lets learn about the local and session storage")

let impArray = ['aditya' , 'geeta' , 'gautam'];

//add a key value to the local storage
localStorage.setItem('name', 'vinit')
localStorage.setItem('name2', 'gautam')
localStorage.setItem('someName', JSON.stringify(impArray))


//localStorage.clear()
// to clear the local storage

localStorage.removeItem('name')
// to clear the particular iteam

let naam = localStorage.getItem('name')
naam = JSON.parse(localStorage.getItem('someName'));
console.log(naam)

//session storage is have same function just replace the word local to session

//diff between local and session storage is  that local storage is remains there after closing webiste but session storage is removed