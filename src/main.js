
import data from './data/harrypotter/data.js';
import { maleFilter, femaleFilter } from './data.js';

const characterInfo = document.getElementById('charactersPage');

// MOSTRAR LA DATA
data.characters.forEach((item) => {
  const div = document.createElement('div');
  div.innerHTML = `Name: ${item.name} <br> Birthday: ${item.birth} <br>  Gender: ${item.gender}`;
  characterInfo.appendChild(div);
});


//declaramos nueva variable de data
let newData;
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

  //limpiando el div que contiene la info de los personajes
  document.getElementById("charactersPage").innerHTML = "";
  // Mostrar los personajes filtrados
  charactersFiltered.forEach((item) => {
    const div = document.createElement('div');
    div.innerHTML = `Name: ${item.name} <br> Birthday: ${item.birth} <br>  Gender: ${item.gender}`;
    characterInfo.appendChild(div);
  });
});

/*---------------------------------------------------------------*/

// Controlador de eventos para el elemento de búsqueda
const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("input", (event) => {
  const searchText = event.target.value;
  searchCharacters(searchText);
});

// FUNCION BUSCAR
export function searchCharacters(searchText) {
  //comparando el nuevo array filtrado (newData) con la data original 
  const finishData = newData ? newData : data.characters;
  const charactersFiltered = finishData.filter((character) => {
    //incluir letras mayusculas y minusculas
    return character.name.toLowerCase().includes(searchText.toLowerCase());
  });

  // Limpiar el div que contiene la info de los personajes
  document.getElementById("charactersPage").innerHTML = "";


  // Mostrar los personajes filtrados
  charactersFiltered.forEach((item) => {
    const div = document.createElement("div");
    div.innerHTML = `Name: ${item.name} <br> Birthday: ${item.birth} <br>  Gender: ${item.gender}`;
    characterInfo.appendChild(div);
  });
}

/*-------------------------------------------------------------------*/

//FUNCION DE ORDENAR 
const selectSort = document.getElementById("selectSort");
selectSort.addEventListener("change", () => {
  //value aZ zA
  const orderByValue = event.target.value;
  if (orderByValue === "A-z"){
    //ordenar AZ
    data.characters.sort((azSort, zaSort) => {
      if (azSort.name < zaSort.name){
        return -1;
      } 
      return 1;
    });
  } else {
    //ordenar ZA
    data.characters.sort((azSort, zaSort) => {
      if (azSort.name > zaSort.name){
        return -1;
      } 
      return 1;
    });
  }
  
  document.getElementById("charactersPage").innerHTML = "";
  // Mostrar los personajes filtrados
  data.characters.forEach((item) => {
    const div = document.createElement("div");
    div.innerHTML = `Name: ${item.name} <br> Birthday: ${item.birth} <br>  Gender: ${item.gender}`;
    characterInfo.appendChild(div);
  });
});


/*---------------------------------------------------------------*/
