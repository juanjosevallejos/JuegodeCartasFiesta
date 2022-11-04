import Simbolos from "./Simbolos"




export default function AleatorioCartas(numCartas = 12, simbolos){
    const halfCartas = numCartas / 2
    // console.log(Simbolos[simbolos]);
    let baraja = Simbolos[simbolos];
    const arr = []
    let i=0,j=0

    while ( i < numCartas ){
        if( j === halfCartas ) j = 0
        let random = Math.floor(Math.random() * numCartas);

        
         if( !arr.some(item => item.id === random)){
            arr.push({
                id: random,
                symbol: baraja[j],
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