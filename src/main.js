
import data from './data/harrypotter/data.js';

const characterInfo = document.getElementById('charactersPage');

// MOSTRAR LA DATA
data.characters.forEach((item) => {
  const div = document.createElement('div');
  div.innerHTML = `Name: ${item.name} <br> Birthday: ${item.birth} <br>  Gender: ${item.gender}`;
  characterInfo.appendChild(div);
});

// FUNCION FILTRADO
function maleFilter(character) {
  if (character.gender === "Male") {
    return true;
  } else {
    return false;
  }
}
function femaleFilter(character) {
  if (character.gender === "Female") {
    return true;
  } else {
    return false;
  }
}
let newArray;
const selectGender = document.getElementById("selectGender");
selectGender.addEventListener("change", (event) => {
  console.log(selectGender.value);
  /*const charactersFiltered = data.characters.filter(maleFilter);*/
  
  let charactersFiltered = [];
  if (selectGender.value === "Female") {
    charactersFiltered = data.characters.filter(femaleFilter);
    const counterFemale = charactersFiltered.length
    console.log(charactersFiltered.length);
    document.getElementById("counter").innerHTML = "Characters females are  "+ counterFemale;
  } else {
    charactersFiltered = data.characters.filter (maleFilter);
    const counterMale = charactersFiltered.length
    document.getElementById("counter").innerHTML = "Characters males are  "+ counterMale;
  }
  console.log(charactersFiltered);
  newArray = charactersFiltered;

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
function searchCharacters(searchText) {
  const finishArray = newArray ? newArray : data.characters; 
  console.log(finishArray);
  const charactersFiltered = finishArray.filter((character) => {
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

const caractersSortered = finishArray.sort((character)=> {
  const azSort = document.getElementById("azSort");
  const zaSort = document.getElementById("zaSort");

  azSort.addEventListener("change", (event) => {
    let charactersSortered = [];
    if (caractersSortered ){}
  })
});


document.getElementById("charactersPage").innerHTML = "";
  // Mostrar los personajes filtrados
  charactersFiltered.forEach((item) => {
    const div = document.createElement("div");
    div.innerHTML = `Name: ${item.name} <br> Birthday: ${item.birth} <br>  Gender: ${item.gender}`;
    characterInfo.appendChild(div);

