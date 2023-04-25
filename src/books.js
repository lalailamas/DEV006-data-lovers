import data from './data/harrypotter/data.js';
import { formatBooks, createImage, sortBooks } from './data.js'


// muestra la tarjeta con la informacion del libro
const booksInfo = document.getElementById('cardBook');
const formattedBooks = formatBooks(data.books);
formattedBooks.forEach((item) => {
  const divBook = document.createElement('div');
  divBook.innerHTML =
        ` ${createImage(item.image)}<br> 
          <div id="mostaratras" style="display:none">${item.description} </div>
          ${item.title} <br>
          ${item.releaseDay}`;
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
          ` ${createImage(item.image)} <br>
            ${item.title} <br>
            ${item.releaseDay}`;
    booksInfo.appendChild(divBook);
  });
}