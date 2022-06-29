console.log("lets make the college library website")

function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
}

function diaplay() {


}

//add methods to diaply prototype

let libraryForm = document.getElementById('libraryForm')
libraryForm.addEventListener('submit', libraryFormSubmit)

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
    let book = new Book(name, author, type)
    console.log(book)
}

