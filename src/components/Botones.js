export default function Botones (props){

    return(

    <button className="Botones" onClick={props.action}>{props.label}</button>

    )
}
