console.log('lets learn the callbaks function');

const students = [
    {name:"vinit" , subject: "javscript"},
    {name:"harry" , subject: "Machine learning"},
    {name:"gautam" , subject: "learning"}
]

// function enrollStudent(stud){
//     console.log("enroll student is called")
//     setTimeout(function(){
//         students.push(stud);
        
//         },7000);}
    //this setTimeout mean is that it will run this code for enterd time EX:7sec  so even if this function is comeplete under 7 sec but the value of this function not been pass by this setTimeout function it only pass after 7 sec


    // so in this situation what we if our function actual take time to execeute and we have to run the another function YES so in this situation we use the call back function

    function enrollStudent(stud, callback){
        console.log("enroll student is called")
        setTimeout(function(){
            students.push(stud);
            callback()
            },3000);}

// so this call back is the name of the refernce dunction which been replaced by the other funtion on the time of the call ---> see on code line 46



function getStudent()
{
    console.log("get student is called")
    setTimeout(function(){
        let str = ``;
        students.forEach(function(element){
            str+= `<li> ${element.name} </li>`
        });
        document.getElementById('list').innerHTML=str;
    } , 200)
    
}

let newstudent = {name:"soham" , subject :"diploma" }

enrollStudent(newstudent , getStudent)
