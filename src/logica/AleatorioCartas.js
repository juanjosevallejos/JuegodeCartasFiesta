import Simbolos from "./Simbolos";




export default function AleatorioCartas(numCartas){
    const halfCartas / 2
    const arr = []
    let i=0,j=0

    while ( i < numCartas ){
        if( j === halfCartas ) j = 0
        let random = Math.floor(Math.random() * numCartas);

        if( !arr.score(item => item.id === random)){ 
            arr.push({
                id: random,
                Simbolos: Simbolos[j],
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