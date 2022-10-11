<<<<<<< HEAD
import Simbolos, { dataIcons } from "./Simbolos";

export default function AleatorioCartas(numCartas){
    const halfCartas= numCartas / 2
=======
import {dataIcons} from "./Simbolos";




export default function AleatorioCartas(numCartas){
<<<<<<< HEAD
    const halfCartas= numCartas / 2
=======
    const halfCartas = numCartas / 2
>>>>>>> 783999d8688dfda50ee2b5965d8c1fb0a5602af2
>>>>>>> b6fd382bef3fb264e528b8c844b4ccaa425f3d74
    const arr = []
    let i=0, j=0

    while (i < numCartas ){
        if( j === halfCartas ) j = 0
        let random = Math.floor(Math.random() * numCartas);

<<<<<<< HEAD
        if( !arr.some(item => item.id === random)){ 
=======
<<<<<<< HEAD
        if( !arr.some(item => item.id === random)){ 
=======
        
         if( !arr.some(item => item.id === random)){
>>>>>>> 783999d8688dfda50ee2b5965d8c1fb0a5602af2
>>>>>>> b6fd382bef3fb264e528b8c844b4ccaa425f3d74
            arr.push({
                id: random,
                simbolos: dataIcons[j],
                bind: j,
                rotate: false, 
                validating: 0,
                fixed: 0 
            })
            i++
            j++ 
<<<<<<< HEAD
=======
            
>>>>>>> b6fd382bef3fb264e528b8c844b4ccaa425f3d74
    }

}
return arr
<<<<<<< HEAD



}

=======
}
>>>>>>> b6fd382bef3fb264e528b8c844b4ccaa425f3d74
