import Botones from "./Botones";
import Cartas from "./Cartas"; 
import AleatorioCartas from "../logica/AleatorioCartas"
import { useEffect, useState } from "react";

export default function PantallaJuego(props){

    const [cartasArr, setCartasArr] = useState([])


    useEffect( () => {
        setCartasArr(AleatorioCartas( props.numCartas ))
    }, [props.numCartas])



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
                        .sort((a,b) =>a.id - b.id )
                        .map( Cartas => ) {
                            return <Cartas>
                                key={Cartas.id}
                                id={Cartas.id}
                                rotate={Cartas.rotate}
                                Simbolos={Cartas.Simbolos}
                                bind={Cartas.bind}
                            </Cartas>
                        }
               }

            </div>
            <div className="text-center">
                <Botones label="Reiniciar juego" action=""/>
            </div>
        </div>
    )
}


