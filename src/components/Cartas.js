// import { Simbolos } from "../logica/Simbolos";
// import { FaQuestion } from "react-icons/fa";
// import { FaHorse }  from "react-icons/fa";

// const {dataIcons}= dataIconos;

export default function Cartas(props){

    return(
        <div className={`cartas ${props.rotate ? 'rotate' : ''} `} 
        data-id={props.id}
        data-bind={props.bind}
        onClick={ ()=> props.actionRotate(props.id, props.fixed) }
        >
            <div className="cartas--inner">

                <div className="cartas--front middle">                   
                </div>

            <div className="cartas--back middle">
                
                </div>  
            </div>
        </div>

    )
}