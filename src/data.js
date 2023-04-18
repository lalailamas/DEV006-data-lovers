// estas funciones son de ejemplo

//export const data = () => {
// return 'data';
//};

//export const anotherExample = () => {
//return 'OMG';
//};

//aqui es donde van las funciones puras 

// FUNCION FILTRADO
export function maleFilter(character) {
  if (character.gender === "Male") {
    return true;
  } else {
    return false;
  }
}
export function femaleFilter(character) {
  if (character.gender === "Female") {
    return true;
  } else {
    return false;
  }
}