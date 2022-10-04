import Botones from "./Botones";
<<<<<<< HEAD
import Cartas from "./Cartas" 
=======
import Cartas from './Cartas';
>>>>>>> 783999d8688dfda50ee2b5965d8c1fb0a5602af2
import AleatorioCartas from "../logica/AleatorioCartas"
import { useState,useEffect } from "react";

<<<<<<< HEAD
export default function PantallaJuego({numCartas}){
=======
>>>>>>> 783999d8688dfda50ee2b5965d8c1fb0a5602af2

export default function PantallaJuego({numCartas}){

    
    const [cartasArr, setCartasArr] = useState([])


    useEffect( () => {
<<<<<<< HEAD
        setCartasArr ( AleatorioCartas ( numCartas ) )
    }, [numCartas])


    const rotate = (id,fixed) => {
        setCartasArr(prevArr => {
            prevArr[id].rotate = true;
            prevArr[id].validating = 1;
            return[...prevArr]
        })
    }

    

=======
        setCartasArr( AleatorioCartas ( numCartas ) )
    }, [numCartas])
>>>>>>> 783999d8688dfda50ee2b5965d8c1fb0a5602af2

    const rotate = (id,fixed) => {
        setCartasArr(prevArr => {
            prevArr[id].rotate = true;
            prevArr[id].validateing = 1;
            return[...prevArr]
        })
    }

    return(
        <div className="PantallaJuego">
            <div className="PantallaJuego--score grid grid 2">
                <div className="PantallaJuego--moves">
                <p>Movimientos</p>

                </div>
                <div className="PantallaJuego--time text-right">
                <p>Tiempo</p>
                </div>
            </div>

            <div className="PantallaJuego--cartas grid grid-4">
            {
                    cartasArr
<<<<<<< HEAD
                        .sort( (a,b) => a.id - b.id)
                        .map( (cartas,key) =>   
                            (<Cartas
                                key={key}
                                id={cartas.id}
                                rotate={cartas.rotate}
                                Simbolos={cartas.Simbolos}
                                bind={cartas.bind}
                                fixed={cartas.fixed}
                                actionRotate={rotate}
                                
                            />)
                    )    
=======
                        .sort( (a,b) =>a.id - b.id )
                        .map( (cartas, key) =>  
                            (<Cartas
                                    key={key}
                                    id={cartas.id}
                                    rotate={cartas.rotate}
                                    Simbolos={cartas.Simbolos}
                                    bind={cartas.bind}
                                    fixed={cartas.fixed}
                                    actionRotate={rotate}
                                />)
                        )
>>>>>>> 783999d8688dfda50ee2b5965d8c1fb0a5602af2
               }

            </div>   
            <div className="text-center">
                <Botones label="Reiniciar juego" action={()=> {}}/>
            </div>
        </div>
    )
}


