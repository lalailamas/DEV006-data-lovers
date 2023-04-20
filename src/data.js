
//aqui es donde van las funciones puras 



// FUNCION FILTRADO
export function maleFilter(character) {
  if (character.gender === "Male") {
    return true;
  } else {
    return false;
  }
}
export function femaleFilter(character = {}) {
  if (character.gender === "Female") {
    return true;
  } else {
    return false;
  }
}

// FUNCION QUE RECORRE DATA 
export function formatCharacters(characters) {
  return characters.map((item) => {
    return {
      name: item.name,
      birth: item.birth,
      gender: item.gender
    }
  });
}

//FUNCION ORDENAR
export function sortCharacters(characters, orderByValue) {
  if (orderByValue === "A-z") {
    // ordenar AZ
    return characters.sort((azSort, zaSort) => {
      if (azSort.name < zaSort.name) {
        return -1;
      }
      return 1;
    });
  } else {
    // ordenar ZA
    return characters.sort((azSort, zaSort) => {
      if (azSort.name > zaSort.name) {
        return -1;
      }
      return 1;
    });
  }
}

//FUNCION PARA INPUT BUSCAR
export function filterByName(characters, searchText) {
  return characters.filter((character) => {
    //incluir letras mayusculas y minusculas
    return character.name.toLowerCase().includes(searchText.toLowerCase());
  });
}
