import Botones from "./Botones"


export default function PantallaFinal(props){
    
    return(

        <div className="PantallaFinal text-center">
        <h1 className="pantallafinal--tittle">Ganaste pa!</h1>
        <br/>
        <Botones label="Reiniciar Juego" action={props.setRestart} />
        </div>

    )

}