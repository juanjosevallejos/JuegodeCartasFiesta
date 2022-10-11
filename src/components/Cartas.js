import { useState } from "react"

export default function Cartas(props){

    const [frente, setFrente] = useState(false)

const changeFrente = () => {
    
    setFrente(!frente)
}

    return(
        <div className={`cartas ${props.rotate ? 'rotate' : ''}`}
            data-id={props.id}
            data-bind={props.bind}
            onClick={ ()=> props.actionRotate(props.id, props.fixed)}
            >
            <div className="cartas--inner">

                {!frente && (<div className="cartas--front middle">
                    <i className="fas fa-question"></i>
                </div>)}


                {frente && (<div className="cartas--back middle">
                    <i className={props.symbol}></i>
                </div>)}
                
            
                
            </div>


        </div>
    )
}