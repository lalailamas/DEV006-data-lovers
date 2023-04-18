//INTERESTING FACTS

//import, export
import data from './data/harrypotter/data.js';

const pureBlood = document.getElementById("pureBlood");
const muggle = document.getElementById("muggle");
const pureBloodorHalf = document.getElementById("pureBloodorHalf");
const halfBlood = document.getElementById("halfBlood");

data.characters.forEach((item) => {
  if (item.ancestry === "Pure-blood"){
    const p = document.createElement ('p');
    p.innerHTML = `${item.name}`;
    pureBlood.appendChild(p);
  } else if (item.ancestry === "Muggle"){
    const p = document.createElement ('p');
    p.innerHTML = `${item.name}`;
    muggle.appendChild(p);
  } else if (item.ancestry === "Pure-blood or Half-blood"){
    const p = document.createElement ('p');
    p.innerHTML = `${item.name}`;
    pureBloodorHalf.appendChild(p);
  }
  else if (item.ancestry === "Half-blood"){
    const p = document.createElement ('p');
    p.innerHTML = `${item.name}`;
    halfBlood.appendChild(p);
  }
});

