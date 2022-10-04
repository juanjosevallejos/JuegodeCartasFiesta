// import { FaQuestion } from "react-icons/fa";
import {dataIcons} from "../logica/Simbolos.js";

export default function Cartas(props){
// const {dataIcons} = DataIcons ;

    return(
        <div className={`cartas ${props.rotate? 'rotate' : ''}`}
            data-id = {props.id}
            data-bind={props.bind}
            onClick={ ()=> props.actionRotate(props.id, props.fixed) }
            >
            <div className="cartas--inner">
                <div className="cartas--front middle">
                    {dataIcons.map((el, i) => (
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
