console.log('we are going to learn about traversing')
/*let cont=document.querySelector('.No')
cont=document.querySelector('.container')
let Name = cont.childNodes[1].nodeName


//in this cont is element which store the element of container and .childnodes give the nodes and .Nodename is the key which give the name of the element

let type = cont.childNodes[2].nodeType;
console.log(type)*/
/* this will print the type of nodes in number 
         |
         |
         V

 nodetype

1) element      =1
2) attribute    =2
3) Text node    =3
4) comment      =8
5) document     =9
6) doc Type     =10
*/


// console.log(cont.childNodes);
// console.log(cont.children);
// this childNodes is give us a newline as a text , commient and many other unwanted things so if u want to see only elements rather than unwanted things then u can use .children


let container  = document.querySelector('div.container')

//console.log(container.children[1].children[0].children)

// we can also get the children of the the children

//console.log(container.firstChild)
// this will print the first child of the container

// console.log(container.firstElementChild)

// this will print the first element of the container

// same as lastChild and lastElementChild
// console.log(container.lastChild)
// console.log(container.lastElementChild)

console.log(container.firstElementChild.parentNode)
// this will print the parent of the first child node

console.log(container.firstElementChild.nextElementSibling)
// in this this .nextElementSibling will print the element which come after that child element

console.log(container.childElementCount)
// this will print the no of child present in container