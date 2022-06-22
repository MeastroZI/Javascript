console.log("lets start this ecercise")
let container= document.createElement('div')
let naam = document.createElement('div')
let contain =document.getElementById('contain')

naam.innerText = 'enter your note'



naam.className='info'
naam.style.fontSize='30px';
naam.style.border='3px solid blue'
naam.style.background='yellow'
naam.style.display='inline'
container.className='container'

// container.addEventListener('click',function(){
    //     console.log("event listner is working")
    //     let word=document.getElementsByClassName('info');
    // })
    
    container.appendChild(naam)
    contain.appendChild(container)

container.addEventListener('click',func1)

function func1(){
    console.log("event listner is working")
    let word=document.getElementsByClassName('info');
    
    Array.from(word).forEach(
        function(element){
            element.setAttribute('contenteditable' , 'True')
        }
    )
}

naam.addEventListener('blur',function(){
    console.log("blur is working")
    localStorage.setItem("name " , naam.innerText );
    /*localStorage.setItem("age " , age.innerText );
    localStorage.setItem("comment " , comment.innerText );*/
})




