

import { femaleFilter } from '../src/data.js';
import { searchCharacters } from '../src/main.js';
searchCharacters

//data para ser test funcion filtrar
/*const characterTest = [
  {
    "name": "Hermione Granger",
    "gender": "Female",
  },
  {
    "name": "Harry Potter",
    "gender": "Male",
  },
  {
    "name": "Miranda Goshawk",
    "gender": "Female",
  },
  {
    "name": "German-speaking woman",
    "gender": "Female",
  },
  {
    "name": "Gloomy nuns",
    "gender": "Females",
  },
  {
    "name": "Miranda Goshawk",
    "gender": "Female",
  },
]*/

const characterTest2 = {
  "name": "Hermione Granger",
  "gender": "Female",
}

//testear si es una función y si los personajes son mujeres
describe("femaleFilter", () => {

  it('is a function', () => {
    expect(typeof femaleFilter).toBe('function');
  });

  it('should return false for females characters', () => {
    expect(femaleFilter(characterTest2, "Female")).toBe(true);
  });
}); 

