import blastoisePic from '../assets/blastoise.svg'
import bulbasaurPic from '../assets/bulbasaur.svg'
import charizardPic from '../assets/charizard.svg'
import gengarPic from '../assets/gengar.svg'
import lucarioPic from '../assets/lucario.svg'
import mewTwoPic from '../assets/mewTwo.svg'
import pikachuPic from '../assets/pikachu.svg'
import arcaninePic from '../assets/arcanine.svg'
import blazikenPic from '../assets/blaziken.svg'
import umbreonPic from '../assets/umbreon.svg'
import eeveePic from '../assets/eevee.svg'
import absolPic from '../assets/absol.svg'
import ninetalesPic from '../assets/ninetales.svg'
import infernapePic from '../assets/infernape.svg'
import snorlaxPic from '../assets/snorlax.svg'


export default function cardArray() { 
    const cardArray = [
        {name: 'Blastoise', src: blastoisePic}, 
        {name: 'Bulbasaur', src: bulbasaurPic}, 
        {name: 'Charizard', src: charizardPic}, 
        {name: 'Gengar', src: gengarPic}, 
        {name: 'Lucario', src: lucarioPic}, 
        {name: 'MewTwo', src: mewTwoPic},
        {name: 'Pickachu', src: pikachuPic},
        {name: 'Arcanine', src: arcaninePic},
        {name: 'Blaziken', src: blazikenPic},
        {name: 'Umbreon', src: umbreonPic},
        {name: 'Eevee', src: eeveePic},
        {name: 'Absol', src: absolPic},
        {name: 'Ninetales', src: ninetalesPic},
        {name: 'Infernape', src: infernapePic},
        {name: 'Snorlax', src: snorlaxPic},
    ]; 
    return cardArray
}