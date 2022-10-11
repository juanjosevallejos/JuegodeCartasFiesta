import Botones from "./Botones";
import Cartas from './Cartas';
import AleatorioCartas from "../logica/AleatorioCartas"
import { useState,useEffect } from "react";


export default function PantallaJuego({numCartas}){
    
    const [cartasArr, setCartasArr] = useState([])


    useEffect( () => {
        setCartasArr( AleatorioCartas ( numCartas ) )
<<<<<<< HEAD
    }, [    numCartas])
=======
    }, [numCartas])
<<<<<<< HEAD
>>>>>>> 783999d8688dfda50ee2b5965d8c1fb0a5602af2
>>>>>>> b6fd382bef3fb264e528b8c844b4ccaa425f3d74
=======
>>>>>>> ac71599589d6d5b0ad472e95f26b9ee36ddbe14b

    const rotate = (id,fixed) => {
        setCartasArr(prevArr => {
            prevArr[id].rotate = true;
            prevArr[id].validating = 1;
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
<<<<<<< HEAD
               {

               
                    cartasArr
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
                
               }
               
            </div>
=======
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
>>>>>>> b6fd382bef3fb264e528b8c844b4ccaa425f3d74
            <div className="text-center">
                <Botones label="Reiniciar juego" action={()=> {}}/>
            </div>
        </div>
    )
}

<<<<<<< HEAD


=======
>>>>>>> ac71599589d6d5b0ad472e95f26b9ee36ddbe14b
