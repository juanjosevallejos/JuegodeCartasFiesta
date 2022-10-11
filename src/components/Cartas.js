import { useState } from "react"

export default function Cartas(props){

    const [frente, setFrente] = useState(false)


const changeFrente = () => {
    
    setFrente(!frente)
}

    return(
        <div className="cartas rotate" onClick={changeFrente}>
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