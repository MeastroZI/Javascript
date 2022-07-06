console.log("lets learn the ajax")

let fetchBtn = document.getElementById('fetchBtn');
fetchBtn.addEventListener('click', buttonClickHandler)

function buttonClickHandler()
{
    console.log("you clicked the button")

    const xhr =  new XMLHttpRequest(); //we make the object of XHR

    // xhr.open('GET' , 'vinit.txt' , true)

    // in this  open the xhr object 
    // syntex --->  object.open('methode'{get,post or etc}  , 'filename' , 'true{for assychronous }' , false{for sychronous})



    //use this for post request
    xhr.open('POST' , 'https://dummy.restapiexample.com/api/v1/create' , true)
    xhr.getResponseHeader('content-type' , 'application/json')

    //tecking the progracse
    xhr.onprogress = function(){
        console.log('on progross')
    }

    //this function is write to print the ready state of the process
    /*   0 for open not csll yet , 
        1  open id cslled
        2  send()(headers and status are avilable)
        3  laoding
        4  done
    
    */
    // xhr.onreadystatechange = function()
    // {
    //     console.log('redy state code is ' ,xhr.readyState)
    // }

    xhr.onload =function (){
        if(this.status == 200)//if the response code is 200(means ok) then only run this code
        {

            console.log(this.responseText)

        }

        else{
            console.log("some error occured")
        }
    }

    //send the request
    params = `{"name":"test35559","salary":"123","age":"23"}`;
    xhr.send(params);
}

let popBtn = document.getElementById('popBtn')
popBtn.addEventListener('click',popHandler)

function popHandler()
{
    console.log("you clicked the pophandler")

    const xhr =  new XMLHttpRequest(); //we make the object of XHR

    xhr.open('GET' , 'https://dummy.restapiexample.com/api/v1/employees' , true)

    // in this  open the xhr object 
    // syntex --->  object.open('methode'{get,post or etc}  , 'filename' , 'true{for assychronous }' , false{for sychronous})



    

    

    //this function is write to print the ready state of the process
    /*   0 for open not csll yet , 
        1  open id cslled
        2  send()(headers and status are avilable)
        3  laoding
        4  done
    
    */
    // xhr.onreadystatechange = function()
    // {
    //     console.log('redy state code is ' ,xhr.readyState)
    // }

    xhr.onload =function (){
        if(this.status == 200)//if the response code is 200(means ok) then only run this code
        {
            let obj = JSON.parse(this.responseText)
            console.log(obj)
            let list = document.getElementById('list')
            str=""

            for(key in obj)
            {
                str += `<li>${obj[key].employee_name}</li>`
            }
            list.innerHTML = str;
        }

        else{
            console.log("some error occured")
        }
    }

    //send the request
    
    xhr.send();
    console.log('we r done')
}