import Botones from "./Botones";

export default function PantallaPrincipal(props){



    const levelText = ['Facil']

    const PanelAdm = ['Configuracion Del Juego']
    
    const Sorteo = ['iniciar juego con participacion del sorteo']

    return(



        <div className="PantallaPrincipal text-center">

         <h1 className="PantallaPrincipal--title"></h1>

         <div className="PantallaPrincipal--menu">
            {/* <Botones label={levelText[props.level]} action={props.changeDifficulty}></Botones> */}
            <br></br>
            <Botones label={PanelAdm} setStart={props.setStart} action={ () => props.setStart(2) }></Botones>
            <br></br>
            <Botones label="iniciar juego sin la participacion del sorteo" action={ () => props.setStart(1) }></Botones>
            <br></br>
            <Botones label={Sorteo} setStart={(props.setStart)} action={() => props.setStart(3)}></Botones>



        {/* <center>
            <div className="col-md-6 btn btn-primary"> <br></br> 
    <input placeholder="Ingrese su usuario de instagram"
        type="text"
        id="tiempo"
        border
        class="form-control"
        
        aria-label="Sizing example input"
        aria-describedby="inputGroup-sizing-default">
    </input>
    </div>
</center> */}








         </div>
        </div>

    )
}