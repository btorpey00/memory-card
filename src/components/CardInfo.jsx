import blastoisePic from '../assets/blastoise.svg'
import bulbasaurPic from '../assets/bulbasaur.svg'
import charizardPic from '../assets/charizard.svg'
import gengarPic from '../assets/gengar.svg'
import lucarioPic from '../assets/lucario.svg'
import mewTwoPic from '../assets/mewTwo.svg'
import pikachuPic from '../assets/pikachu.svg'


export default function cardArray() { 
    const cardArray = [
        {name: 'Blastoise', src: blastoisePic}, 
        {name: 'Bulbasaur', src: bulbasaurPic}, 
        {name: 'Charizard', src: charizardPic}, 
        {name: 'Gengar', src: gengarPic}, 
        {name: 'Lucario', src: lucarioPic}, 
        {name: 'MewTwo', src: mewTwoPic},
        {name: 'Pickachu', src: pikachuPic}
    ]; 
    return cardArray
}