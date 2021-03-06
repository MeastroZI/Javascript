console.log("lets make the college library website")

function Book(name, author, type) {  // making the constructor for the book
    this.name = name;
    this.author = author;
    this.type = type;
}

function Display() {


}
//add methods to display prototype
Display.prototype.showBook = function (book) {
    //console.log("adding ", book.name)
    tableBody = document.getElementById('tableBody');
    let uiString = `<tr>
        <td>${book.name}</td>
        <td>${book.author}</td>
        <td>${book.type}</td>
        </tr>`;
    tableBody.innerHTML += uiString; //adding books on table after clicking add button

}
//Implementing the clear function 
Display.prototype.clear = function () {
    let libraryForm = document.getElementById('libraryForm')
    libraryForm.reset();

}

//Implementing the validate function 
Display.prototype.validate = function (book) {
    if (book.name.length < 2 || book.author.length < 2) {
        return false
    }
    else {
        return true
    }

}


Display.prototype.show = function (type, dispmessage) { //displaying the message 
    let message = document.getElementById('message')
    message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
    <strong>Messge:</strong> ${dispmessage}
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">×</span>
    </button>
    </div>`

    setTimeout(() => {
        message.innerHTML = ``
    }, 1500);   // seting timeout after which show become close
}

Display.prototype.addingLocalst = function (book) {
    console.log("function addingLocalst is calling", book)
    let library = []
    let lib = localStorage.getItem('lib')
    if (lib == null) {
        library = []
    }
    else {
        library = JSON.parse(lib)
    }
    library.push(book)
    console.log(library)
    localStorage.setItem("lib", JSON.stringify(library))
    // display.showBook();
}

Display.prototype.updatingBook = function () {
    let library = [] //updating the library array
    let lib = localStorage.getItem('lib')
    if (lib == null) {
        library = []
    }
    else if(lib != null) {
        library = JSON.parse(lib)
    }
    else
    {
        library=[]
    }
    
    library.forEach(element => {

        let uiString = `<tr>
        <td>${element.name}</td>
        <td>${element.author}</td>
        <td>${element.type}</td>
        </tr>`;
        tableBody.innerHTML += uiString; //adding books on table after clicking add button
    });
}





let display = new Display();
// display.updatingBook();
let libraryForm = document.getElementById('libraryForm')
libraryForm.addEventListener('submit', libraryFormSubmit) // adding event listner on the form on the event of the add book

function libraryFormSubmit(e) {
    console.log("u submited the library form")
    e.preventDefault();// the default behaviour of the submite button is that it reloade the page after submite so to prevent it from it we can can apply this methode
    let name = document.getElementById('bookName').value
    let author = document.getElementById('Author').value
    let fiction = document.getElementById('Fiction')
    let programming = document.getElementById('Programming')
    let biography = document.getElementById('Biography')
    let type

    if (fiction.checked) {
        type = fiction.value;
    }

    else if (programming.checked) {
        type = programming.value
    }

    else if (biography.checked) {
        type = biography.value

    }
    let book = new Book(name, author, type) // making the book object




    if (display.validate(book)) {
        display.addingLocalst(book)
        display.showBook(book)
        display.clear();
        display.show('success', 'succefully book is added')
    }
    else {
        //show error to the user
        display.show('error')
        display.show('danger', 'sorry your cannot add this book')
    }
    e.preventDefault()

}


let delBtn = document.getElementById('deleteBtn')
delBtn.addEventListener('click' , function(){
    console.log("delbook function is called")
    let lib = localStorage.getItem('lib')
    localStorage.clear()
    let display = new Display();
    
})


