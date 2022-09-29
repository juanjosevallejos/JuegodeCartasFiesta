import Botones from "./Botones";

export default function PantallaPrincipal(props){
    const levelText = ['facil','mediana','dificil']

    return(
        <div className="PantallaPrincipal text-center">

         <h1 className="PantallaPrincipal--title">Juego de pares</h1>

         <div className="PantallaPrincipal--menu">
            <p>Seleccione el nivel</p>
            <Botones label={levelText[props.level]} action={props.changeDifficulty}></Botones>
            <br></br>
            <Botones label="iniciar juego" action={ () => props.setSart(1) }></Botones>
         </div>
         <p>made with<span className="logo-react"><i className="fab fa-react"></i></span></p>
        </div>
    )
}