console.log("lets make the notes app");
showNotes();
// if user adds a note add it to the local storage
let addbtn = document.getElementById('addBtn');
//let notesObj = Array["hello"];
addbtn.addEventListener("click", function (e) {
    let tytleTxt = document.getElementById('tytleTxt') // we can also do this by using the array of object rather than making another array
    let addtxt = document.getElementById('addTxt');
    let notes = localStorage.getItem("notes");
    let tytle = localStorage.getItem("tytle");
    if (notes == null) { // updating the array after reloding of the website
        notesObj = [];
        tytleObj = []; //second array for tytle

    }
    else {
        notesObj = JSON.parse(notes);
        tytleObj = JSON.parse(tytle);
    }
    notesObj.push(addtxt.value); // pushing the text to the array 
    tytleObj.push(tytleTxt.value);

    localStorage.setItem("notes", JSON.stringify(notesObj)); // adding the value of the note and tytle array into tht local storage
    localStorage.setItem("tytle", JSON.stringify(tytleObj));
    // Very imp ---> if u leave the space before or after the name key (EX:"notes "  like this)of the localstorage then it rewrite the it not add on the previous one 
    addtxt.value = "";
    tytleTxt.value = "";

    showNotes();
})

// code to show the notes on page 


function showNotes() {

    let notes = localStorage.getItem("notes");
    let tytle = localStorage.getItem("tytle");
    if (notes == null) { // updating the array bcs of present in  other scope
        notesObj = [];
        tytleObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
        tytleObj = JSON.parse(tytle);
    }

    let html = "";


    notesObj.forEach(function (element, index) {

        html += `
        <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
            <div class="card-body">
                
                <h5 class="card-title" id="card-tytle">${tytleObj[index]}</h5>
                
                <p class="card-text" id = "card-text" >${element}</p>
                <button id="${index}" onclick= "deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
            </div>
        </div>`;
    });

    let notesElm = document.getElementById('notes');
    if (notesObj.length != 0) {

        notesElm.innerHTML = html;
    }
    else {
        notesElm.innerHTML = `Nothing to show ! 😐😐  use "Add a note " to make note`
    }
}


// function to delete a note

function deleteNote(index) {

    let notes = localStorage.getItem("notes");
    let tytle = localStorage.getItem("tytle");

    if (notes == null) { //ipdating the array bcz it is present in other scope
        notesObj = [];
        tytleObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
        tytleObj = JSON.parse(tytle);
    }

    notesObj.splice(index, 1)
    tytleObj.splice(index, 1)
    localStorage.setItem("notes", JSON.stringify(notesObj)); // now updaing the  localstorage after deleating from the array
    localStorage.setItem("tytle", JSON.stringify(tytleObj));
    showNotes();

}

let search = document.getElementById('searchTxt');
search.addEventListener("input", function () {
    let inputVal = search.value;
    

    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function (element) {
        let cardTxt = element.getElementsByTagName('p')[0].innerText;

        let cardtytle = element.getElementsByTagName('h5')[0].innerText;
        
        if (cardTxt.includes(inputVal)|| cardtytle.includes(inputVal)) {
            element.style.display = 'block';
        }
        else {
            element.style.display = 'none';

        }

    })
})