import Botones from "./Botones";

export default function PantallaPrincipal(props){
    
    return(
        <div className="PantallaPrincipal text-center">
        <h1 className="PantallaPrincipal--title">Juego de pares</h1>
        <Botones label="iniciar juego"></Botones>
        </div>
    )
}