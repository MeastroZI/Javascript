


console.log('lets learn fetch api')
let myBtn = document.getElementById("myBtn")
let content = document.getElementById("content")

// function getData()
// {
// url = "vinit.txt"
//      fetch(url).then((response)=>{
//         return response.text();

//     }).then((data)=>{
//         console.log(data);
//     })
// }
// getData()



// function getData()
// {   
//     url = "https://api.github.com/users"
//     fetch(url).then((response)=>{
//         return response.json();

//     }).then((data)=>{
//         console.log(data);
//     })
// }
// getData()


function postData() {
    url = "https://www.postman.com/technical-observer-7308806/workspace/myworkspace1/request/20218404-d697d115-5947-4784-889d-47f7dfe49d74"
    data = `{
        "name":"gur",
        "location":"ayawada",
        "courses":["python","node-js","ui5"],
        "phonenumber":"99229962"
    }`
    params = {
        method: "post",
        // headers:{
        //     'Content-Type' :  'application/json'
        // },

        body:JSON.stringify(data)
    }
    fetch(url, params).then(response => response.json())
        .then(data => console.log(data)
        )
}

postData()