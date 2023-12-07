var myCalculator = {
    sum: function (firstValue, secondValue) { return firstValue + secondValue; },
    subtract: function (firstValue, secondValue) { return firstValue - secondValue; },
    multiply: function (firstValue, secondValue) { return firstValue * secondValue; },
    divide: function (firstValue, secondValue) { return secondValue !== 0 ?
        firstValue / secondValue : console.log("error"); },
};
function calculate(calculator, operation, firstValue, secondValue) {
    switch (operation) {
        case 'sum':
            return calculator.sum(firstValue, secondValue);
        case 'subtract':
            return calculator.subtract(firstValue, secondValue);
        case 'multiply':
            return calculator.multiply(firstValue, secondValue);
        case 'divide':
            return calculator.divide(firstValue, secondValue);
        default:
            console.log('Unknown operation');
    }
}
var result = calculate(myCalculator, 'sum', 10, 3);
console.log(result);
var BookService = /** @class */ (function () {
    function BookService() {
        var _this = this;
        this.authors = [
            { name: 'Rowling', birthYear: 1970 },
            { name: 'King', birthYear: 1955 },
        ];
        this.getAuthors = function () {
            return _this.authors;
        };
        this.getAuthorByName = function (authorName) {
            return _this.authors.find(function (author) { return author.name === authorName; }) || null;
        };
        this.books = [
            { ISBNCode: "1Bdc56", title: 'Harry Potter', publicationYear: 2000, genre: "fantasy", language: "en" },
            { ISBNCode: "6Bdc46", title: 'The Lord of the Rings', publicationYear: 1960, genre: "fantasy", language: "ua" },
        ];
    }
    BookService.prototype.getAuthorByBirthYear = function (authorBirthYear) {
        return this.authors.find(function (author) { return author.birthYear === authorBirthYear; }) || null;
    };
    BookService.prototype.getBooks = function () {
        return this.books;
    };
    BookService.prototype.getBookByISBNCode = function (bookISBNCode) {
        return this.books.find(function (book) { return book.ISBNCode === bookISBNCode; }) || null;
    };
    BookService.prototype.getBookByTitle = function (bookTitle) {
        return this.books.find(function (book) { return book.title === bookTitle; }) || null;
    };
    BookService.prototype.getBookByGenre = function (bookGenre) {
        return this.books.find(function (book) { return book.genre === bookGenre; }) || null;
    };
    BookService.prototype.getBookByLanguage = function (bookLanguage) {
        return this.books.find(function (book) { return book.language === bookLanguage; }) || null;
    };
    return BookService;
}());
// Використання інтерфейсів для отримання інформації про книги та авторів
var myBookService = new BookService();
var books = myBookService.getBooks();
console.log('Список книг:', books);
var bookISBNCode = "1Bdc56";
var bookByISBNCode = myBookService.getBookByISBNCode(bookISBNCode);
console.log("\u041A\u043D\u0438\u0433\u0430 \u0437a ISBN ".concat(bookISBNCode, ":"), bookByISBNCode);
var authors = myBookService.getAuthors();
console.log('Список авторів:', authors);
var authorName = "Rowling";
var authorByName = myBookService.getAuthorByName(authorName);
console.log("\u0406\u043C\u044F \u0430\u0432\u0442\u043E\u0440\u0430: ".concat(authorName, ":"), authorByName);
var bookGenre = "fantasy";
var bookByGenre = myBookService.getBookByGenre(bookGenre);
console.log("\u041A\u043D\u0438\u0433\u0430 \u0437\u0430  ".concat(bookGenre), bookByGenre);
