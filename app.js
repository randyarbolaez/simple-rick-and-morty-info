let characterName = document.getElementById('character-name');
let characterGender = document.getElementById('character-gender');
let characterImg = document.getElementById('character-img');
let characterSpecies = document.getElementById('character-species');

let randomCharacterIndex = Math.floor(Math.random() * 20) + 1;
fetch(`https://rickandmortyapi.com/api/character/${randomCharacterIndex}`)
  .then(res => res.json())
  .then(res => {
    console.log(res);
    characterName.innerHTML = res.name;
    characterGender.innerHTML = res.gender;
    characterImg.innerHTML = `<img src="${res.image}" alt="${res.name}"/>`;
    characterSpecies.innerHTML = res.species;
  });
