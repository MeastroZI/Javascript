console.log("lets learn about creating , removing and replacing elements")
// creating element
let element = document.createElement('li')
let element2 = document.createElement('li')
let element3 =document.createElement('h2')

// adding class name to the element
element.className='childulJS'
element3.className='header'
element3.id='header'

//same way we can make the id of the element
element.id = 'createdLI' ;

//we can set title like that
element.setAttribute('title' , 'mytitle');

//element.innerText = '<b>This element is created using javascript</b>'

element.innerHTML = '<b>This element is created using javascript</b>'
// when we try to add some html tag by writing in innertext then we can't do(bcz it just write the text as it is) it can be done using innertext we have to use innnerHtml

//we can also enter the text in element like this
let text = document.createTextNode('this text is written by using .creatTextNode')
element2.appendChild(text);



let ul =document.querySelector('ul.this');
ul.appendChild(element);
ul.appendChild(element2) 

// so by this way enter our element in ul by using javascript


// lets see how to replace element



element3.innerHTML='i am come after replacing element 2 by element3'

element2.replaceWith(element3)

ul.replaceChild(element,document.getElementById('ful'))


ul.removeChild(document.getElementById('sul'))


//************************************* */

let pr = element3.getAttribute('class')
pr = element3.getAttribute('id')
//this will print the class or id og the element


pr=element3.hasAttribute('class')
// this will print true if it have any class  else false, same for all attributes  
element3.removeAttribute('id');
// this will remove the id of the element 2
element2.setAttribute('id','icreatid')
//similarly we can set attribut like that

//console.log(element2)



// quick quize

let CWH = document.createElement('a')
CWH.innerHTML='go to the code with harry'
CWH.setAttribute('href','codewithharry.com')
ul.appendChild(CWH)
