import data from './data/harrypotter/data.js';
import { formatBooks, createImage, sortBooks } from './data.js'


// muestra la tarjeta con la informacion del libro
const booksInfo = document.getElementById('cardBook');
const formattedBooks = formatBooks(data.books);
formattedBooks.forEach((item) => {
  const divBook = document.createElement('div');
  divBook.innerHTML = `
    <div class="flip-card-book">
        <div class="flip-card-inner-book">
            <div class="flip-card-front-book">
                ${createImage(item.image)}
                <p>${item.title}</p>
                <p>${item.releaseDay}</p>
            </div>
            <div class="flip-card-back-book">
                <h1>Description</h1> 
                <p>${item.description} </p> 
            </div>   
        </div>
    </div>
  `
  booksInfo.appendChild(divBook);
});


//muestra los libros ordenados A-Z y Z-A
const selectSortBooks = document.getElementById("selectSortBooks");
selectSortBooks.addEventListener("change", () => {
  const orderByValue = event.target.value;
  const sortedBooks = sortBooks(data.books, orderByValue);
  renderBooks(sortedBooks);
});

function renderBooks(books) {
  document.getElementById("cardBook").innerHTML = "";
  books.forEach((item) => {
    const divBook = document.createElement('div');
    divBook.innerHTML =
    `
    <div class="flip-card-book">
        <div class="flip-card-inner-book">
            <div class="flip-card-front-book">
                ${createImage(item.image)}
                <p>${item.title}</p>
                <p>${item.releaseDay}</p>
            </div>
            <div class="flip-card-back-book">
                <h1>Description</h1> 
                <p>${item.description} </p> 
            </div>   
        </div>
    </div>
  `;
    booksInfo.appendChild(divBook);
  });
}
