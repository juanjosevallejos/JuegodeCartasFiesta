import Botones from "./Botones";
import Cartas from "./Cartas";  

export default function PantallaJuego(props){


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
               <Cartas symbol="fas fa-horse" />
               <Cartas symbol="fas fa-tractor" />
               <Cartas symbol="fas fa-tractor" />


            </div>
            <div className="text-center">
                <Botones label="Reiniciar juego" action=""/>
            </div>
        </div>
    )
}


