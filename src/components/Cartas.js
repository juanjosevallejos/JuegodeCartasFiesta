import { useState } from "react"

export default function Cartas(props){

if (props.rotate){
    setTimeout(() => { 
     document.getElementById("font-" + props.id).classList.remove("d-none");   
    },300);
}

return (
    <div 
        className={`cartas ${props.rotate ? 'rotate': ''}`}
        data-id={props.id} 
        onClick={ () => props.actionRotate(props.id, props.pinUp) } 
        data-bind={props.bind}
        >
        <div className='cartas--inner'>
         {!props.rotate && ( 
            <div className='cartas--front middle'>
            <i className="fas fa-question"></i>
            </div>

         )}
            {props.rotate && (
                <div className='cartas--back middle'>
                 <i className={props.symbol + " d-none"} id={"font-" + props.id}></i>

            </div>
            )}
            

        </div>
    </div>
);
}