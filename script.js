/*
const bookTitle = document.querySelector('#title');
const bookAuthor = document.querySelector('#author');
const bookPages = document.querySelector('#pages');
const submit = document.querySelector('.submit');
const show = document.querySelector('.show');

let myLibrary = [];

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
};

show.addEventListener('click', () => {
    console.table(myLibrary.map(book => book.title));
});

submit.addEventListener('click', () => {
    myLibrary.push(new Book(bookTitle.value, bookAuthor.value, bookPages.value));
    bookTitle.value = "";
    bookAuthor.value = "";
    bookPages.value = "";
});

/*
myLibrary.push(new Book("1984", "George Orwell", 268));
myLibrary.push(new Book("Hung By The Tongue", "Francis Martin", 90));
*/

const read = document.querySelector('.read');

read.addEventListener("click", () => {
    if(read.textContent === "Read") {
        read.textContent = "Unread";
    } else {
        read.textContent = "Read";
    }
});
