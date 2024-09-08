// exam 1
function Book(name, date, genre, author) {
    this.Name = name,
        this.Date = date,
        this.Genre = genre,
        this.Author = author
}

// exam 2
function Printer(Book) {
    console.log(Book)
}

// exam 3
function EditDate(Book, date) {
    Book.Date = date;
}

// exam 4
function EditName(Book, name) {
    Book.Name = name;
}

// exam 5
function EditGenre(Book, genre) {
    Book.Genre = genre;
}

// exam 6
function EditDate(Book, author) {
    if (author.Age < 15 || author.Age > 80) {
        throw Error('invalid age')
    }
    Book.Author = author;
}

// exam 7
function Library() {
    this.Books = []
}

// exam 8
function AddToLibrary(Book, Library) {
    for (i in Library.Books){
        if (i.Name == Book.Name){
            throw Error('book exist in library')
        }
    }
    Library.Books.Push(Book)
}

// exam 9
function AddAndPrint(Books){
    const bookA = new Book('shai')
}

let book1 = new Book("To Kill a Mockingbird", "1960", "Fiction", "Harper Lee");
console.log(book1)

