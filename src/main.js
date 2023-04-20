
import data from './data/harrypotter/data.js';
import { maleFilter, femaleFilter, formatCharacters, sortCharacters, filterByName } from './data.js';

//Manipulación del DOM

//Mostrar la data
const characterInfo = document.getElementById('charactersPage');
const formattedCharacters = formatCharacters(data.characters);
formattedCharacters.forEach((item) => {
  const div = document.createElement('div');
  div.innerHTML =
    `Name: ${item.name}
   Birthday: ${item.birth} 
   Gender: ${item.gender}`;
  characterInfo.appendChild(div);
});


//Declaramos nueva variable de data para unificar funciones
let newData;

//Función filtrado
const selectGender = document.getElementById("selectGender");
selectGender.addEventListener("change", () => {
  let charactersFiltered = [];

  if (selectGender.value === "Female") {
    charactersFiltered = data.characters.filter(femaleFilter);
    const counterFemale = charactersFiltered.length
    document.getElementById("counter").innerHTML = "Characters females are  " + counterFemale;
  } else {
    charactersFiltered = data.characters.filter(maleFilter);
    const counterMale = charactersFiltered.length
    document.getElementById("counter").innerHTML = "Characters males are  " + counterMale;
  }

  newData = charactersFiltered;

  //Limpiando el div que contiene la info de los personajes
  document.getElementById("charactersPage").innerHTML = "";
  // Mostrar los personajes filtrados
  charactersFiltered.forEach((item) => {
    const div = document.createElement('div');
    div.innerHTML =
      `Name: ${item.name}
    Birthday: ${item.birth}
    Gender: ${item.gender}`;
    characterInfo.appendChild(div);
  });
});

/*---------------------------------------------------------------*/
//Función de buscar
// Controlador de eventos para el elemento de búsqueda
const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("input", (event) => {
  const searchText = event.target.value;
  searchCharactersAndShowResults(searchText, data.characters);
});

function searchCharactersAndShowResults(searchText, characters) {
  //Comparando el nuevo array filtrado (newData) con la data original 
  const finishData = newData ? newData : characters;
  const charactersFiltered = filterByName(finishData, searchText);

  // Limpiar el div que contiene la info de los personajes
  document.getElementById("charactersPage").innerHTML = "";

  // Mostrar los personajes filtrados
  charactersFiltered.forEach((item) => {
    const div = document.createElement("div");
    div.innerHTML =
      `Name: ${item.name}
    Birthday: ${item.birth}
    Gender: ${item.gender}`;
    characterInfo.appendChild(div);
  });
}

/*-------------------------------------------------------------------*/

//Función de ordenar
const selectSort = document.getElementById("selectSort");
selectSort.addEventListener("change", () => {
  const orderByValue = event.target.value;
  const sortedCharacters = sortCharacters(data.characters, orderByValue);
  renderCharacters(sortedCharacters);
});

function renderCharacters(characters) {
  document.getElementById("charactersPage").innerHTML = "";
  characters.forEach((item) => {
    const div = document.createElement("div");
    div.innerHTML =
      `Name: ${item.name}
    Birthday: ${item.birth}
    Gender: ${item.gender}`;
    characterInfo.appendChild(div);
  });
}
