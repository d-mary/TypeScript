// Calculator
interface Calculator {
sum:(firstValue:number, secondValue :number) =>number;
subtract:(firstValue:number, secondValue :number) =>number;
multiply:(firstValue:number, secondValue :number) =>number;
divide:(firstValue:number, secondValue :number) =>number | void
}


const myCalculator:Calculator = {
sum:(firstValue, secondValue) => firstValue+secondValue,
subtract:(firstValue, secondValue) => firstValue-secondValue,
multiply:(firstValue, secondValue) => firstValue*secondValue,
divide:(firstValue, secondValue) => secondValue !== 0 ?
firstValue/secondValue : console.log("error"),
}



function calculate(calculator: Calculator, operation: string, firstValue: number, secondValue: number) :number | void{
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

const result = calculate(myCalculator, 'sum', 10, 3);
console.log(result); 




// BookService

interface IAuthor {
  name: string;
  birthYear: number;
}

interface IBook {
  ISBNCode: string;
  title: string;
  publicationYear: number;
  genre: string;
  language: string;
}

interface IBookService {
  getAuthors(): IAuthor[];
  getAuthorByName(authorName: string): IAuthor | null;
  getAuthorByBirthYear(authorBirthYear: number): IAuthor | null;
  getBooks(): IBook[];
  getBookByISBNCode(bookISBNCode: string): IBook | null;
  getBookByTitle(bookTitle: string): IBook | null;
  getBookByGenre(bookGenre: string): IBook | null;
  getBookByLanguage(bookLanguage: string): IBook | null;
}

class BookService implements IBookService {
  authors: IAuthor[] = [
    { name: 'Rowling', birthYear: 1970 },
    { name: 'King', birthYear: 1955 },
  ];


  getAuthors = (): IAuthor[] => {
    return this.authors;
  }

  getAuthorByName = (authorName: string): IAuthor | null => {
    return this.authors.find(author => author.name === authorName) || null;
  }
  getAuthorByBirthYear(authorBirthYear: number): IAuthor | null {
    return this.authors.find(author => author.birthYear === authorBirthYear) || null;
  }

  books: IBook[] = [
    {ISBNCode: "1Bdc56", title: 'Harry Potter',  publicationYear: 2000 , genre :"fantasy", language:"en"},

    {ISBNCode:"6Bdc46", title: 'The Lord of the Rings', publicationYear: 1960,genre :"fantasy", language:"ua"},
  ];

  getBooks(): IBook[] {
    return this.books;
  }

  getBookByISBNCode(bookISBNCode: string): IBook | null {
    return this.books.find(book => book.ISBNCode === bookISBNCode) ||null;
  }
  getBookByTitle(bookTitle: string): IBook | null {
    return this.books.find(book => book.title === bookTitle) ||null;
  }
    getBookByGenre(bookGenre: string): IBook | null {
    return this.books.find(book => book.genre === bookGenre) ||null;
  }
    getBookByLanguage(bookLanguage: string): IBook | null {
    return this.books.find(book => book.language === bookLanguage) ||null;
  }

}

const myBookService: BookService = new BookService();

const books: IBook[] = myBookService.getBooks();
console.log('Список книг:', books);

const bookISBNCode = "1Bdc56";
const bookByISBNCode: IBook | null = myBookService.getBookByISBNCode(bookISBNCode);
console.log(`Книга зa ISBN ${bookISBNCode}:`, bookByISBNCode);

const authors: IAuthor[] = myBookService.getAuthors();
console.log('Список авторів:', authors);


const authorName = "Rowling";
const authorByName: IAuthor | null = myBookService.getAuthorByName(authorName);
console.log(`Імя автора: ${authorName}:`, authorByName);


const bookGenre = "fantasy";
const bookByGenre: IBook | null = myBookService.getBookByGenre(bookGenre);
console.log(`Книга за  ${bookGenre}`, bookByGenre);


