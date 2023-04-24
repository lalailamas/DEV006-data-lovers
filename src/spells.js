import data from './data/harrypotter/data.js';
import { formatSpells,charmFilter, tranfigurationFilter,hexFilter, jinxFilter, curseFilter, transportationFilter, 
  healingFilter, sortSpells } from './data.js';


//Manipulación del DOM

//Mostrar la data spells
const spellsPage = document.getElementById('spellsPage');

const formattedSpells = formatSpells(data.spells);

formattedSpells.forEach((item) => {
  const div = document.createElement('div');
  div.innerHTML = `
    <div class="spellsPageInner">
      <strong> Name </strong> ${item.name} 
      <strong> Spell Type  </strong> ${item.spell_type}
    </div>
  `;
  spellsPage.appendChild(div);

  const spellsPageInner = div.querySelector('.spellsPageInner');
  const nuevoDiv = document.createElement('div');
  nuevoDiv.classList.add('nueva-clase');
  div.push= `<div class="spellsPageBack"> <strong>Description</strong> ${item.description} </div>`
  spellsPageInner.appendChild(nuevoDiv);
});


//Función filtrado spells
let newData;
const selectSpellType = document.getElementById("selectSpellType");
selectSpellType.addEventListener("change", () => {
  let spellFiltered = [];
  if (selectSpellType.value === "Charm"){
    spellFiltered = data.spells.filter (charmFilter);
  } else if (selectSpellType.value === "Transfiguration") {
    spellFiltered = data.spells.filter (tranfigurationFilter);
  } else if (selectSpellType.value === "Hex") {
    spellFiltered = data.spells.filter (hexFilter);
  } else if (selectSpellType.value === "Jinx") {
    spellFiltered = data.spells.filter (jinxFilter);
  } else if (selectSpellType.value === "Curse") {
    spellFiltered = data.spells.filter (curseFilter);
  } else if (selectSpellType.value === "Transportation") {
    spellFiltered = data.spells.filter (transportationFilter);
  } else if (selectSpellType.value === "Healing"){    
    spellFiltered = data.spells.filter (healingFilter);
  }
  newData = spellFiltered;

  document.getElementById("spellsPage").innerHTML = "";
  spellFiltered.forEach((item) => {
    const div = document.createElement('div');
    div.innerHTML =
      `<strong> Name </strong> ${item.name} 
      <strong> Spell Type  </strong> ${item.spell_type} 
      <strong> Description </strong> ${item.description}`;
    spellsPage.appendChild(div);
  });

});

//Función ordenar spells

const selectSortSpell = document.getElementById("selectSortSpell");
selectSortSpell.addEventListener("change", () => {
  const orderByLetters= event.target.value;
  const sortedSpells = sortSpells(data.spells, orderByLetters);
  renderSpells (sortedSpells);
});


function renderSpells() {
  document.getElementById("spellsPage").innerHTML = "";
  formattedSpells.forEach((item) => {
    const div = document.createElement('div');
    div.innerHTML =
      `<strong> Name </strong> ${item.name} 
      <strong> Spell Type  </strong> ${item.spell_type} 
      <strong> Description </strong> ${item.description}`;
    spellsPage.appendChild(div);
  })
}
