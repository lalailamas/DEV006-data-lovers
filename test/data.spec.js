

import { femaleFilter } from '../src/data.js';

//data para ser test funcion filtrar
const characterTest = [{
  "id": 587,
  "name": "Hermione Granger",
  "birth": "19 September, 1979",
  "death": null,
  "species": "Human",
  "ancestry": "Muggle-born",
  "gender": "Female",
  "hair_color": "Brown",
  "eye_color": "Brown",
  "wand": "10¾\", vine wood, dragon heartstring",
  "patronus": "Otter",
  "house": "Gryffindor",
  "associated_groups": [
    "Granger family",
    "Weasley family",
    "Potter family",
    "Hogwarts School of Witchcraft and Wizardry",
    "Gryffindor",
    "Slug Club",
    "S.P.E.W.",
    "Dumbledore's Army",
    "Order of the Phoenix",
    "British Ministry of Magic",
    "Department for the Regulation and Control of Magical Creatures",
    "Department of Magical Law Enforcement"
  ],
  "books_featured_in": [1, 2, 3, 4, 5, 6, 7]
},
{ 
  "id": 326,
  "name": "Harry Potter",
  "birth": "31 July, 1980",
  "death": null,
  "species": "Human",
  "ancestry": "Half-blood",
  "gender": "Male",
  "hair_color": "Jet-black",
  "eye_color": "Bottle green",
  "wand": "11\", Holly, phoenix feather",
  "patronus": "Stag",
  "house": "Gryffindor",
  "associated_groups": [
    "Potter family",
    "Weasley family",
    "Albus Dumbledore",
    "Dumbledore's Army",
    "Order of the Phoenix",
    "Hogwarts School of Witchcraft and Wizardry",
    "Gryffindor",
    "Gryffindor Quidditch team",
    "Slug Club",
    "British Ministry of Magic",
    "Auror Office",
    "Department of Magical Law Enforcement",
    "S.P.E.W."
  ],
  "books_featured_in": [1, 2, 3, 4, 5, 6, 7]
},
{
  "id": 585,
  "name": "Miranda Goshawk",
  "birth": "1921",
  "death": null,
  "species": "Human",
  "ancestry": null,
  "gender": "Female",
  "hair_color": "Grey",
  "eye_color": "Blue",
  "wand": null,
  "patronus": null,
  "house": null,
  "associated_groups": ["Hogwarts School of Witchcraft and Wizardry"],
  "books_featured_in": [1, 2, 4]
},
{
  "id": 579,
  "name": "German-speaking woman",
  "birth": null,
  "death": "1 September, 1997",
  "species": "Human",
  "ancestry": null,
  "gender": "Female",
  "hair_color": null,
  "eye_color": null,
  "wand": null,
  "patronus": null,
  "house": null,
  "associated_groups": ["her family"],
  "books_featured_in": [7]
},
{
  "id": 580,
  "name": "Gloomy nuns",
  "birth": null,
  "death": "Before 1992",
  "species": "Humans (formerly)",
  "ancestry": null,
  "gender": "Females",
  "hair_color": null,
  "eye_color": null,
  "wand": null,
  "patronus": null,
  "house": null,
  "associated_groups": ["Catholic Church"],
  "books_featured_in": [2]
},
{
  "id": 587,
  "name": "Hermione Granger",
  "birth": "19 September, 1979",
  "death": null,
  "species": "Human",
  "ancestry": "Muggle-born",
  "gender": "Female",
  "hair_color": "Brown",
  "eye_color": "Brown",
  "wand": "10¾\", vine wood, dragon heartstring",
  "patronus": "Otter",
  "house": "Gryffindor",
  "associated_groups": [
    "Granger family",
    "Weasley family",
    "Potter family",
    "Hogwarts School of Witchcraft and Wizardry",
    "Gryffindor",
    "Slug Club",
    "S.P.E.W.",
    "Dumbledore's Army",
    "Order of the Phoenix",
    "British Ministry of Magic",
    "Department for the Regulation and Control of Magical Creatures",
    "Department of Magical Law Enforcement"
  ],
  "books_featured_in": [1, 2, 3, 4, 5, 6, 7]
},
{
  "id": 585,
  "name": "Miranda Goshawk",
  "birth": "1921",
  "death": null,
  "species": "Human",
  "ancestry": null,
  "gender": "Female",
  "hair_color": "Grey",
  "eye_color": "Blue",
  "wand": null,
  "patronus": null,
  "house": null,
  "associated_groups": ["Hogwarts School of Witchcraft and Wizardry"],
  "books_featured_in": [1, 2, 4]
},
]

//testear si es una función y si los personajes son mujeres
describe("femaleFilter", () => {

  it('is a function', () => {
    expect(typeof femaleFilter).toBe('function');
  });

  it('should return false for females characters', () => {
    expect(femaleFilter(characterTest, "Female")).toBe(false);
  });
});