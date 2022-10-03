export default function Cartas(props){

    return(
        <div className={`cartas ${props.rotate ? 'rotate' : ''} `} >
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