

import { femaleFilter, maleFilter, formatCharacters, sortCharacters, filterByName, formatBooks, sortBooks, charmFilter
  ,tranfigurationFilter, hexFilter, jinxFilter, curseFilter, transportationFilter, healingFilter, formatSpells, sortSpells} from '../src/data.js';

//TEST CHARACTERS
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

// TEST SPELLS
//Función mostrar data spells
describe("formatSpells", () => {

  it('is a function', () => {
    expect(typeof formatSpells).toBe('function');
  });

  it('should return data of spells', () => {
    const spellsTestData =
      [
        { name: "Evanesce", spell_type: "Transfiguration", pronunciation: "ev-an-ES-key", description: "Vanishes the target", mention:"null" },
        { name: "Feather-light charm", spell_type: "Charm", pronunciation: "null", description: "Makes an object light as a feather.", mention: "Harry Potter contemplated using this in 1993 to lighten his trunk so that he could carry it by broom to Gringotts, though he decided against it." },
      ]
    expect(formatSpells(spellsTestData)).toEqual(
      [
        {name: "Evanesce", spell_type: "Transfiguration", pronunciation: "ev-an-ES-key", description: "Vanishes the target"},
        { name: "Feather-light charm", spell_type: "Charm", pronunciation: "null", description: "Makes an object light as a feather."},
      ]);
  })
})

//Función filtrado
describe("charmFilter", () => {

  it('is a function', () => {
    expect(typeof charmFilter).toBe('function');
  });

  it('should return true for charm spells', () => {
    const spellsTestCharm = { spell_type: 'Charm' };
    expect(charmFilter(spellsTestCharm)).toBe(true);
  });

})

describe("tranfigurationFilter", () => {

  it('is a function', () => {
    expect(typeof tranfigurationFilter).toBe('function');
  });

  it('should return true for transfiguration spells', () => {
    const spellsTestTransfiguration = { spell_type: 'Transfiguration' };
    expect(tranfigurationFilter(spellsTestTransfiguration)).toBe(true);
  });
})

describe("hexFilter", () => {

  it('is a function', () => {
    expect(typeof hexFilter).toBe('function');
  });

  it('should return true for hex spells', () => {
    const spellsTestTransfiguration= { spell_type: 'Hex' };
    expect(hexFilter(spellsTestTransfiguration)).toBe(true);
  });
})

describe("jinxFilter", () => {

  it('is a function', () => {
    expect(typeof jinxFilter).toBe('function');
  });

  it('should return true for jinx spells', () => {
    const spellsTestJinx= { spell_type: 'Jinx' };
    expect(jinxFilter(spellsTestJinx)).toBe(true);
  });
})

describe("curseFilter", () => {

  it('is a function', () => {
    expect(typeof curseFilter).toBe('function');
  });

  it('should return true for curse spells', () => {
    const spellsTestCurse= { spell_type: 'Curse' };
    expect(curseFilter(spellsTestCurse)).toBe(true);
  });
})

describe("transportationFilter", () => {

  it('is a function', () => {
    expect(typeof transportationFilter).toBe('function');
  });

  it('should return true for transportation spells', () => {
    const spellsTestTransp= { spell_type: 'Transportation' };
    expect(transportationFilter(spellsTestTransp)).toBe(true);
  });
})

describe("healingFilter", () => {

  it('is a function', () => {
    expect(typeof healingFilter).toBe('function');
  });

  it('should return true for healing spells', () => {
    const spellsTestHealing= { spell_type: 'Healing Spell' };
    expect(healingFilter(spellsTestHealing)).toBe(true);
  });
})

//Función ordenar AZ
describe("sortSpells", () => {

  it('is a function', () => {
    expect(typeof sortSpells).toBe('function');
  });
  it('should return order AZ of spells', () => {
    const spellsOrderedAz = 
      [
        {name:"Camila"}, {name:"Beatriz"} ,{name:"Alejandra"}
      ]
    expect(sortSpells(spellsOrderedAz, "A-z")).toEqual( 
      [
        {name:"Alejandra"}, {name:"Beatriz"},{name:"Camila"},
      ]
    )})
});





  
      