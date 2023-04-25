

import { femaleFilter, maleFilter, formatCharacters, sortCharacters, filterByName, formatBooks, sortBooks } from '../src/data.js';


//función filtrado
describe("femaleFilter", () => {

  it('is a function', () => {
    expect(typeof femaleFilter).toBe('function');
  });

  it('should return true for females characters', () => {
    const characterTestFemale = { gender: 'Female' };
    expect(femaleFilter(characterTestFemale)).toBe(true);
  });

  it('should return false for males characters', () => {
    const characterTestFemale = { gender: 'Male' };
    expect(femaleFilter(characterTestFemale)).toBe(false);
  });
})

describe("maleFilter", () => {

  it('is a function', () => {
    expect(typeof maleFilter).toBe('function');
  });

  it('should return true for males characters', () => {
    const characterTestMale = { gender: 'Male' };
    expect(maleFilter(characterTestMale)).toBe(true);
  });

  it('should return true for males characters', () => {
    const characterTestMale = { gender: 'Female' };
    expect(maleFilter(characterTestMale)).toBe(false);
  });
})

//función que muestra y recorre data 
describe("formatCharacters", () => {

  it('is a function', () => {
    expect(typeof formatCharacters).toBe('function');
  });

  it('should return data of characters', () => {
    const characterTestData =
      [
        { name: "Stewart Ackerley", birth: "between 1 September 1982and 31 August 1983", gender: "Male", ancestry: "Pureblood" },
        { name: "Ivonne", birth: "Marzo 1991", gender: "Female", ancestry: "Pureblood" },
      ]
    expect(formatCharacters(characterTestData)).toEqual(
      [
        { name: "Stewart Ackerley", birth: "between 1 September 1982and 31 August 1983", gender:"Male"},
        { name: "Ivonne", birth: "Marzo 1991", gender: "Female"},
      ]);
  })
})

// función ordenar 
describe("sortCharacters", () => {

  it('is a function', () => {
    expect(typeof sortCharacters).toBe('function');
  });

  it('should return order ZA of characters', () => {
    const charactersOrderedZa = 
    [
      {name:"Alejandra"}, {name:"Camila"},{name:"Beatriz"},
    ]
    expect(sortCharacters(charactersOrderedZa,"Z-a" )).toEqual( 
      [
        {name:"Camila"}, {name:"Beatriz"} ,{name:"Alejandra"}
      ]
    )})

  it('should return order AZ of characters', () => {
    const charactersOrderedAz = 
      [
        {name:"Camila"}, {name:"Beatriz"} ,{name:"Alejandra"}
      ]
    expect(sortCharacters(charactersOrderedAz, "A-z")).toEqual( 
      [
        {name:"Alejandra"}, {name:"Beatriz"},{name:"Camila"},
      ]
    )})
});

//función buscador
describe("filterByName", () => {

  it('is a function', () => {
    expect(typeof filterByName).toBe('function');
  });

  it('should return characters filtered', () => {
    const charactersFilteredTest = 
      [
        {name:"Hermione"}, {name:"Harry Potter"} ,{name:"Harry Style"}
      ]
    expect(filterByName(charactersFilteredTest, "Harr")).toEqual( 
      [
        {name:"Harry Potter"}, {name:"Harry Style"},
      ]
    )})
});

// TEST FUNCIONES BOOKS
// Funcion Mostrar Books

describe("formatBooks", () => {

  it('is a function', () => {
    expect(typeof formatCharacters).toBe('function');
  });

  it('should return data of books', () => {
    const BooksData =
      [
        { id: 5, title:"Harry Potter and the Goblet of Fire", image:"./images/GobletofFire.png", releaseDay: "July 8, 2000", author: "J. K. Rowling" },
        { id:2, title: "Harry Potter and the Order of the Phoenix", image:"./images/OrderofthePhoenix.png", releaseDay: "June 21, 2003", author: "J. K. Rowling"},
      ]
    expect(formatBooks(BooksData)).toEqual(
      [
        { title:"Harry Potter and the Goblet of Fire", image:"./images/GobletofFire.png", releaseDay: "July 8, 2000" },
        { title: "Harry Potter and the Order of the Phoenix", image:"./images/OrderofthePhoenix.png", releaseDay: "June 21, 2003"},
      ]);
  })
})

// Funcion Mostrar Books

describe("sortBooks", () => {

  it('is a function', () => {
    expect(typeof sortBooks).toBe('function');
  });

  it('should return order ZA of books', () => {
    const booksOrderedZa = 
    [
      {title:"sorcerers"}, {title:"prisoner"},{title:"chamber"},
    ]
    expect(sortBooks(booksOrderedZa,"Z-a" )).toEqual( 
      [
        {title:"sorcerers"}, {title:"prisoner"} ,{title:"chamber"}
      ]
    )})
    
  it('should return order AZ of books', () => {
    const booksOrderedAz = 
      [
        {title:"sorcerers"}, {title:"chamber"} ,{title:"prisoner"}
      ]
    expect(sortBooks(booksOrderedAz, "A-z")).toEqual( 
      [
        {title:"chamber"}, {title:"prisoner"},{title:"sorcerers"},
      ]
    )})
})



  
      