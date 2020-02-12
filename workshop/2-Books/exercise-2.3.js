// From 2.1. and 2.2
// Copy over your solutions classes you created in 2.1 and 2.2


// Exercise 2.3
// We need a method in our BookList to make adding books possible.
//  - create an add method to add books to the library.
//      - when you add a book, it should increase the read, or unread count.
//  - use the add method to add in a few books.
//      - you can call new Book without declaring it as variable.
//      - e.g. homeLibrary.add(new Book('The Shining', 'Horror', 'Stephen King'));

// Once you have added a few books, console.log(homeLibrary) to see if all is well.

class Book {
    constructor(title, genre, author, read, startReadDate, endReadDate) {
        this.title = title;
        this.genre = genre || '';
        this.author = author || '';
        
    }
}

class BookList {
    constructor() {
        this.booksread = 0;
        this.booksUnread = 0;
        this.books = [];
        this.lastBook = null;
        this.currentBook = null;
        this.nextBook = null;
    }
    addBook = (bookData) => {
        this.books.push(bookData || '');
        this.booksUnread ++;
    }
}

let homeLibrary = new BookList();

homeLibrary.addBook(new Book('Borkland', 'Horror', 'Paws'));
homeLibrary.addBook(new Book('Meow Bay', 'Autobiography', 'Paws'));
homeLibrary.addBook(new Book('CawTown', 'Comedy', 'Crow'));


console.log(homeLibrary);