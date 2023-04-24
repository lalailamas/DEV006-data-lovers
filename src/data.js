
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


// FUNCION QUE RECORRE DATA BOOKS
export function formatBooks(books) {
  return books.map((item) => {
    return {
      title: item.title,
      image: item.image,
      description: item.description,
      releaseDay: item.releaseDay
    }
})
}

// FUNCION QUE RECORRE DATA SPELLS
export function formatSpells(spells) {
  return spells.map((item) => {
    return {
      name: item.name,
      spell_type: item.spell_type,
      description: item.description,
    }
  });
}

//Funcion para crear la imagen 
export function createImage(url) {
  return `<img class="imageBook" src="${url}" alt="harryBooks" width="300"> `;
}


//FUNCION ORDENAR BOOKS
export function sortBooks(books, orderByValue) {
  if (orderByValue === "A-z") {
    // ordenar AZ
    return books.sort((azSort, zaSort) => {
      if (azSort.title < zaSort.title) 
     }
    )}
}

//FUNCION FILTRAR DATA SPELLS
export function charmFilter(spells) {
  if (spells.spell_type === "Charm") {
    return true;
  } else {
    return false;
  }
}
export function tranfigurationFilter(spells) {
  if (spells.spell_type === "Transfiguration") {
    return true;
  } else {
    return false;
  }
}
export function hexFilter(spells) {
  if (spells.spell_type === "Hex") {
    return true;
  } else {
    return false;
  }
}
export function jinxFilter(spells) {
  if (spells.spell_type === "Jinx") {
    return true;
  } else {
    return false;
  }
}
export function curseFilter(spells) {
  if (spells.spell_type === "Curse") {
    return true;
  } else {
    return false;
  }
}
export function transportationFilter(spells) {
  if (spells.spell_type === "Transportation") {
    return true;
  } else {
    return false;
  }
}
export function healingFilter(spells) {
  if (spells.spell_type === "Healing Spell") {
    return true;
  } else {
    return false;
  }
}

//FUNCION ORDENAR SPELLS
export function sortSpells (spells, orderByLetters) {
  if (orderByLetters === "A-z") {
    // ordenar AZ
    return spells.sort((azSort, zaSort) => {
      if (azSort.name < zaSort.name) {
        return -1;
      }
      return 1;
    });
  } else {
    // ordenar ZA
    return books.sort((azSort, zaSort) => {
      if (azSort.title > zaSort.title) {
    return spells.sort((azSort, zaSort) => {
      if (azSort.name > zaSort.name) {
        return -1;
      }
      return 1;
    });
      }}
    )} 
  }