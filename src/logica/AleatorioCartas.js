<<<<<<< HEAD
import {dataIcons} from "../logica/Simbolos";
=======
import {dataIcons} from "./Simbolos";
>>>>>>> b6fd382bef3fb264e528b8c844b4ccaa425f3d74




export default function AleatorioCartas(numCartas){
<<<<<<< HEAD
    const halfCartas= numCartas / 2
=======
    const halfCartas = numCartas / 2
>>>>>>> 783999d8688dfda50ee2b5965d8c1fb0a5602af2
    const arr = []
    let i=0, j=0

    while (i < numCartas ){
        if( j === halfCartas ) j = 0
        let random = Math.floor(Math.random() * numCartas);

<<<<<<< HEAD
        if( !arr.some(item => item.id === random)){ 
=======
        
<<<<<<< HEAD
         if( arr.some(item => item.id === random)){
            arr.push({
                id: random,
                symbol: dataIcons[j],
=======
         if( !arr.some(item => item.id === random)){
>>>>>>> 783999d8688dfda50ee2b5965d8c1fb0a5602af2
            arr.push({
                id: random,
                simbolos: dataIcons[j],
>>>>>>> b6fd382bef3fb264e528b8c844b4ccaa425f3d74
                bind: j,
                rotate: false, 
                validating: 0,
                fixed: 0 
            })
            i++
            j++ 
            
        }

    }
    return arr
}


    