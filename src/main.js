
import data from './data/harrypotter/data.js';

const characterInfo = document.getElementById('charactersPage');

data.characters.forEach((item) => {
  const div = document.createElement('div');
  div.innerHTML = `Name: ${item.name} <br>  Birthday: ${item.birth} <br>  Gender: ${item.gender}`;
  characterInfo.appendChild(div);
});

/*const optionMale = document.getElementById("optionMale");
data.characters.filter((gender) => {
 if (characters.gender === "Male") {
     console.log (gender);
  }
  });*/

document.getElementById("optionMale").innerHTML = data.characters.filter(gender);
function gender (checkMale){
  return checkMale;
}



/*
Para acortar data
function myFunction(item, index, arr) {
    arr[index] = item * 10;
  }*/