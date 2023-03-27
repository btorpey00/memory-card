import shuffle from 'lodash.shuffle'

let indexArray = [];
for (let i = 1; i <= 151; i++) {
    indexArray.push(i);
}

function shuffleArray() {
    let shuffledArray = shuffle(indexArray);
    return shuffledArray
}

async function cardArray(numCards) {
    let shuffledArray = shuffleArray();
    let pokeArray = []
    for (let i = 0; i < numCards; i++){
        let input = shuffledArray[i]; 
        try {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon/'+input);
            const pokeData = await response.json();
            let pokeSrc = pokeData.sprites.other.dream_world.front_default;
            let pokemonNameData = pokeData.forms[0].name;
            let pokeName = pokemonNameData.charAt(0).toUpperCase() + pokemonNameData.slice(1);
            let newPoke = {name: pokeName, src: pokeSrc}
            pokeArray.push(newPoke);
        } catch (error) {
            console.log(error);
        }
    }
    return pokeArray;
}

export default cardArray




