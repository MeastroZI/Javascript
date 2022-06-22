console.log('lets learn more about the events')
let btn =document.getElementById('btn')
btn.addEventListener('click',func1);


function func1(e){
    console.log("Thanks" , e);
    e.preventDefault();
    // this will prevent from the default behaviour means EX: in when we click submit butten the it submit the form but when we use this method then it not submit the form it prevent it from its default behaviour
}