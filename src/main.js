
import data from './data/harrypotter/data.js';

const characterInfo = document.getElementById('charactersPage');

data.characters.forEach((item) => {
  const div = document.createElement('div');
  div.innerHTML = `Name: ${item.name} <br> Birthday: ${item.birth} <br>  Gender: ${item.gender}`;
  characterInfo.appendChild(div);
});


function maleFilter(character) {
  if (character.gender === "Male") {
    return true;
  } else {
    return false;
  }
}
function femaleFilter(character) {
  if (character.gender === "Female") {
    return true;
  } else {
    return false;
  }
}

const selectGender = document.getElementById("selectGender");
selectGender.addEventListener("change", (event) => {
  console.log(selectGender.value);
  /*const charactersFiltered = data.characters.filter(maleFilter);*/
  
  let charactersFiltered = [];
  if (selectGender.value === "Female") {
    charactersFiltered = data.characters.filter(femaleFilter);
    const counterFemale = charactersFiltered.length
    console.log(charactersFiltered.length);
    document.getElementById("counter").innerHTML = "Characters females are  "+ counterFemale;
  } else {
    charactersFiltered = data.characters.filter (maleFilter);
    const counterMale = charactersFiltered.length
    document.getElementById("counter").innerHTML = "Characters males are  "+ counterMale;
  }
  console.log(charactersFiltered);
  //limpiando el div que contiene la info de los personajes
  document.getElementById("charactersPage").innerHTML = "";
  
  charactersFiltered.forEach((item) => {
    const div = document.createElement('div');
    div.innerHTML = `Name: ${item.name} <br> Birthday: ${item.birth} <br>  Gender: ${item.gender}`;
    characterInfo.appendChild(div);
  });
});






/*data.characters.filter(function(filterGender, Gender));



const optionMale = data.characters.filter(gender);
function gender (optionMale){
return true;*/




/*
Para acortar data
function myFunction(item, index, arr) {
    arr[index] = item * 10;
  }*/