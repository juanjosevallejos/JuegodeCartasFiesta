// import { FaQuestion } from "react-icons/fa";
<<<<<<< HEAD
// import Simbolos from "../logica/Simbolos";
import {dataIcons} from "../logica/Simbolos";
=======
import {dataIcons} from "../logica/Simbolos.js";

export default function Cartas(props){
// const {dataIcons} = DataIcons ;
>>>>>>> b6fd382bef3fb264e528b8c844b4ccaa425f3d74

// const {dataIcons} = dataIconos; 


export default function Cartas(props){
    return(
<<<<<<< HEAD
    
    <div className={`cartas ${props.rotate ? 'rotate' : ''}`} 
=======
<<<<<<< HEAD
        <div className={`cartas ${props.rotate? 'rotate' : ''}`}
            data-id = {props.id}
            data-bind={props.bind}
            onClick={ ()=> props.actionRotate(props.id, props.fixed) }
=======
        <div className={`cartas ${props.rotate ? 'rotate' : ''} `} 
>>>>>>> b6fd382bef3fb264e528b8c844b4ccaa425f3d74
            data-id={props.id}
            data-bind={props.bind}
            onClick={ ()=> props.actionRotate(props.id, props.fixed)}
>>>>>>> 783999d8688dfda50ee2b5965d8c1fb0a5602af2
            >
            <div className="cartas--inner">
            
                <div className="cartas--front middle">
<<<<<<< HEAD
                
                {dataIcons.map((el, i) => (
=======
                    {dataIcons.map((el, i) => (
>>>>>>> b6fd382bef3fb264e528b8c844b4ccaa425f3d74
                        <div className="cartas--back middle" key={el.id}>
                    {/* <i className={el.icon}></i> */}
                    {el.icon}
                </div>
                    ))}
                </div>
            </div>


        </div>
    )
}
