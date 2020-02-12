// From 2.3
// Copy over all of the code from 2.3...


// Exercise 2.4
// We need methods in our BookList start reading and finish reading books
//      - startReading accepts a title parameter. (The book should already be in your books array.
//          - set currentlyReading
//          - set the startReadDate in the book object to new Date(Date now());
//      - finishREading accepts a title parameter.
//          - set lastRead to title
//          - update the book's object accordingly.
//          - update the read and unread count accordingly.

// console.log(homeLibrary) when you're done adding, starting and finishing books.
// Make sure that your changes are reflected in the homeLibrary.


class Book {
    constructor(title, genre, author, read, startReadDate, endReadDate) {
        this.title = title;
        this.genre = genre || '';
        this.author = author || '';
        this.read = read || '';
        this.startReadDate = startReadDate || '';
        this.endReadDate = endReadDate || '';
    }
}

class BookList {
    constructor() {
        this.booksRead = 0;
        this.booksUnread = 0;
        this.books = [];
        this.lastBook = null;
        this.currentBook = null;
        this.nextBookIndex = 0;
        this.nextBook = this.books[this.nextBookIndex] || '';
    }
    addBook = (bookData) => {
        this.books.push(bookData || '');
        this.booksUnread ++;
    }
    startReading = (title) => {
        this.currentBook = this.books.find(book => book.title === title );
        this.currentBook.startReadDate = new Date();
        this.currentBook.read = 'No';
    }
    finishReading = (title) => {
        this.currentBook.endReadDate = new Date();
        this.currentBook.read = 'Yes';
        this.lastBook = title;
        this.booksRead = this.booksRead + 1;
        this.booksUnread = this.booksUnread -1 ;
        this.nextBookIndex ++; 
        this.nextBook = this.books[this.nextBookIndex] || '';
        this.currentBook = null;
        
    }
}

//nextBook could be booksToRead[0], books added to booksToRead when added to library
//when book finshed: shift() from booksToRead


let homeLibrary = new BookList();

homeLibrary.addBook(new Book('Borkland', 'Horror', 'Paws'));
homeLibrary.addBook(new Book('Meow Bay', 'Autobiography', 'Paws'));
homeLibrary.addBook(new Book('CawTown', 'Comedy', 'Crow'));

homeLibrary.startReading('CawTown');
homeLibrary.finishReading('CawTown');
homeLibrary.startReading('Borkland');



console.log(homeLibrary);