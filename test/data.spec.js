

import { femaleFilter, maleFilter } from '../src/data.js';
/*import { searchCharacters } from '../src/main.js';
searchCharacters*/

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

const characterTestFemale = {
  "name": "Hermione Granger",
  "gender": "Female",
}

//testear si es una función y si los personajes son mujeres
describe("femaleFilter", () => {

  it('is a function', () => {
    expect(typeof femaleFilter).toBe('function');
  });

  it('should return true for females characters', () => {
    expect(femaleFilter(characterTestFemale, "Female")).toBe(true);
  });
});

const characterTestMale = {
  "name": "Ladislaw Zamojski",
  "gender": "Male",
}

//testear si es una función y si los personajes son hombres
describe("maleFilter", () => {

  it('is a function', () => {
    expect(typeof maleFilter).toBe('function');
  });

  it('should return true for males characters', () => {
    expect(maleFilter(characterTestMale, "Male")).toBe(true);
  });
});