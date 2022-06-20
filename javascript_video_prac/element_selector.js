console.log('we learn about the selectors in javascript')

/*
type of element selector
    1) single element selector
    2) multi element selector
*/


// ******Single element selector**********


let element = document.getElementById('first')
// this will get the element whose id name is first

//element = element.className
// this will print the class name of the element is it have any

//element=element.childNodes
// this will print the nodelist

//element=element.parentNode;
// this will print the parent node of the element

element.style.color = 'red';
// this will change the color to red and we can it means we can change the css using javascript

element.innerText = "now edit this text using javascript"
// we can edit html using javascript

element.innerHTML='<b> i enter some bold line in html using javascript</b>'

let sel = document.querySelector('#heading')
sel=document.querySelector('.child')
sel=document.querySelector('.No')

// this is the selector we can acess any id and class using it if multipal name of class is oresent then it give the first class 
//if we enter any tag  then it give the 1st tag with that name
sel.style.color = 'brown';
console.log(sel);


//********Multi element selector************


let elems=document.getElementsByClassName('child');
elems =document.getElementsByClassName('container')
//console.log(elems[0].getElementsByClassName('child'));
// if we  want only class whose name is child then we can write the getelementbyclassname('child')after the elemes[0] array
elems = document.getElementsByTagName('div');

console.log(elems)
Array.from(elems).forEach(function(element){
    console.log(element)
    element.style.color = 'orange'
})

// we can  also do the same thing using for loop

// for (let index = 0; index < elems.length; index++) {
//     const element = elems[index];
//     console.log(element)
//     element.style.color='orange'
// }




