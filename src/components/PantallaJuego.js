import Botones from "./Botones";
import Cartas from './Cartas';
import AleatorioCartas from "../logica/AleatorioCartas"
import { useEffect, useState } from "react";


export default function PantallaJuego({numCartas}){

    
    const [cartasArr, setCartasArr] = useState([])


    useEffect( () => {
        setCartasArr( AleatorioCartas ( numCartas ) )
    }, [numCartas])

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
               }

            </div>
            <div className="text-center">
                <Botones label="Reiniciar juego" action={()=> {}}/>
            </div>
        </div>
    )
}


