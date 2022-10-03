export default function Cartas(props){

    return(
        <div className={`cartas ${props.rotate ? 'rotate' : ''} `} 
            data-id={props.id}
            data-bind={props.bind}
            onClick={ ()=> props.actionRotate(props.id, props.fixed)}
            >
            <div className="cartas--inner">
                <div className="cartas--front middle">
                    <i className="fas fa-question"></i>
                </div>
                <div className="cartas--back middle">
                    <i className={props.symbol}></i>
                </div>
            </div>


        </div>
    )
}