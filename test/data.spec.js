

import { femaleFilter, maleFilter } from '../src/data.js';
import { searchCharacters } from '../src/main.js';


//función filtrado
describe("femaleFilter", () => {

  it('is a function', () => {
    expect(typeof femaleFilter).toBe('function');
  });

  it('should return true for females characters', () => {
    const characterTestFemale = { gender: 'Female'};
    expect(femaleFilter(characterTestFemale)).toBe(true);
  });

  it('should return false for males characters', () => {
    const characterTestFemale = { gender: 'Male'};
    expect(femaleFilter(characterTestFemale)).toBe(false);
  });
})

describe("maleFilter", () => {

  it('is a function', () => {
    expect(typeof maleFilter).toBe('function');
  });

  it('should return true for males characters', () => {
    const characterTestMale = {gender: 'Male'};
    expect(maleFilter(characterTestMale)).toBe(true);
  });

  it('should return true for males characters', () => {
    const characterTestMale = {gender: 'Female'};
    expect(maleFilter(characterTestMale)).toBe(false);
  });
})

//función buscar
describe("searchCharacters"), () => {
  it('is a function', () => {
    expect(typeof searchCharacters).toBe('function');
  });




}