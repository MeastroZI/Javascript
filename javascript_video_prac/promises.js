console.log("lets learn the promises")

function func1(){

    return new Promise(function(resolve,reject)
    {
        setTimeout(function() {
           let error = false
           if(!error) {
            console.log('function:problem is resolved')
            resolve();
           }
           else{
            console.log('function:problem is not resolve')
            reject()
           }
        },2000)
    })
}

func1().then(function(){console.log('nice u resolve the problem')}).catch(function(){
    console.log("too bad u not able to complete your promises")
})
//in this then(function()) is run when resolve is called and catch(function) is run when reject is called