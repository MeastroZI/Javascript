console.log("lets learn about the events")

// document.getElementById('heading').addEventListener ('click',function(){
//     console.log('you clicked the heading')
//     location.href='//google.com'})
//now i add href to it so if i click the heading now then it goes to the google.com


// this is the way to add event listner in this 
// addEventListener('action' , function ) action is the way which this listner listen
document.getElementById('heading').
// in this e is the object which point the element
addEventListener ('click',function(e){
    let variable=e.target;//this will target the element at which listener is there
    variable=e.target.className //this will print the class name of the element
    variable=e.target.id;
    variable=e.target.classList 
    variable=e.offsetX //this will print the value of length from zero at which u click same as offsetY
    variable=e.clientX
    console.log(variable);
    console.log('you clicked the heading')
})