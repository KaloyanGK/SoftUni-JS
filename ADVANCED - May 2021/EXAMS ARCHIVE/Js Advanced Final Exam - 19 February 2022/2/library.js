class LibraryCollection {

    constructor(capacity) {
        this.capacity = capacity;
        this.books = [];
    }
    addBook(bookName, bookAuthor) {
        if (this.capacity <= this.books.length) {
            throw new Error('Not enough space in the collection.');
        }

        this.books.push({ bookName, bookAuthor, payed: false });
        return `The ${bookName}, with an author ${bookAuthor}, collect.`;
    }
    payBook(bookName) {
        let book = this.books.find(e => e.bookName == bookName);
        if (book == undefined) {
            throw new Error(`${bookName} is not in the collection.`);
        }
        if (book.payed == true) {
            throw new Error(`${bookName} has already been paid.`);
        } else {
            book.payed = true;
            return `${bookName} has been successfully paid.`
        }
    }
    removeBook(bookName) {
        let book = this.books.find(e => e.bookName == bookName);
        if (book == undefined) {
            throw new Error(`The book, you're looking for, is not found.`);
        }
        if (book.payed == false) {
            throw new Error(`${bookName} need to be paid before removing from the collection.`);
        }
        let index = this.books.indexOf(book);
        this.books.slice(index, 1);
        return `${bookName} remove from the collection.`
    }
    getStatistics(bookAuthor) {
        if (bookAuthor == undefined) {
            let freeSpace = this.capacity - this.books.length;
            let result = [`The book collection has ${freeSpace} empty spots left.`]
            result.push(this.books.sort((a, b) => a.bookName.localeCompare(b.bookName)).map(e => `${e.bookName} == ${e.bookAuthor} - ${e.payed == true ? 'Has Paid.' : 'Not Paid.'}`).join('\n'));
            return result.join('\n');
        } else {
            let targetBook = this.books.find(e => e.bookAuthor == bookAuthor);
            if (targetBook != undefined) {
                return `${targetBook.bookName} == ${targetBook.bookAuthor} - ${targetBook.payed == true ? 'Has Paid.' : 'Not Paid.'}`;
            } else {
                throw new Error(`${bookAuthor} is not in the collection.`);
            }
        }

    }
}




const library = new LibraryCollection(5)
library.addBook('Don Quixote', 'Miguel de Cervantes');
library.payBook('Don Quixote');
library.addBook('In Search of Lost Time', 'Marcel Proust');
library.addBook('Ulysses', 'James Joyce');
console.log(library.getStatistics());





