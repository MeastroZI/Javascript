console.log("lets make the library")
class library
{
    constructor(bookList){
        this.bookList = bookList;
        this.issuedBooks = {}
    }

    getBookList()
    {
        console.log("This is the list of the avilable books in library")
        this.bookList.forEach(element => {
            console.log(element)
        });
    }

    issueBook(bookName , user)
    {
        let presence = this.issuedBooks.hasOwnProperty(`${bookName}`)
        
        if(presence ==true)
        {
            console.log("Sorry This Book Is Not Available😕😕")
        }
        else{
            this.issuedBooks[bookName] = user
            let index = this.bookList.indexOf(bookName)
            this.bookList.splice(index , 1)
            console.log("sucessfully issued the book   , have a nice day 😊😊😊😊 ")

        }
    }

    returnBook(bookName){
        delete this.issuedBooks[bookName]
        this.bookList.push(bookName)
    }

    getIssuedBooks()
    {
        //console.log(this.issuedBooks)
        Object.keys(this.issuedBooks).forEach(prop =>{
            console.log(prop)
        })
    }
}
