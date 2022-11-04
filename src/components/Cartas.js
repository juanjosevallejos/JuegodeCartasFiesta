
import { useState } from "react";

export default function Cartas(props) {



  //     const [frente, setFrente] = useState(false)

  // const changeFrente = (id) => {
  //     console.log(id)

  //     setFrente(!frente)
  // }

  //     return(
  //         <div className="cartas rotate" onClick={()=>changeFrente(props.id)}
  //         dataid={props.id}
  //         data-bind={props.bind}>
  //             <div className="cartas--inner">

  //                 {!frente && (<div className="cartas--front middle">
  //                     <i className="fas fa-question"></i>
  //                 </div>)}

  //                 {frente && (<div className="cartas--back middle">
  //                     <i className={props.symbol}></i>
  //                 </div>)}

  //             </div>

  //         </div>
  //     )

  if (props.rotate) {
    
    setTimeout(() => {
      document.getElementById("font-" + props.id).classList.remove("d-none");
    }, 300);
  }
  return (
    <div
      className={`cartas ${props.rotate ? "rotate" : ""}`}
      data-id={props.id}
      onClick={() => props.actionRotate(props.id, props.pinUp)}
      data-bind={props.bind}
    >
      <div className="cartas--inner">
        {!props.rotate && (
          <div className="cartas--front middle">
            <i className="fas fa-question"></i>
          </div>
        )}

        {props.rotate && (
          <div className="cartas--back middle">
            {/* <i className={props.symbol + " d-none"} id={"font-" + props.id}></i> */}
            <img src={props.symbol} style={{width:'356px', height:'250px', overflow:'hidden'  }} alt="carta" className="d-none" id={"font-" + props.id}/>
            {/* {console.log(props.symbol,'simbolos')} */}
          </div>
        )}
      </div>
    </div>
  );
}