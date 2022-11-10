import React from "react";


const Sorteo = (props) => {
    return (
        <div className="sorteo">
          
          <center>
        <br></br>
           <div className="col-md-6 btn btn-ligth">
      <input placeholder="Ingrese su usuario de instagram "
          type="text"
          id="instagram"
          class="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default">
  
          </input>
      </div>
      <br></br>
      <br></br>
           <div className="col-md-6 btn btn-ligth">
      <input placeholder="Nombre y apellido"
          type="text"
          id="Nombre-Apellido"
          class="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default">
  
          </input>
      </div> 
      {/* <br></br>
      <br></br>
           <div className="col-md-6 btn btn-primary"> <br></br> 
      <input placeholder="Apellido"
          type="text"
          id="Apellido"
          class="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default">
  
          </input>
      </div> */}
      <br></br>
         <br></br>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              // console.log(document.getElementById("dificultad").value);
              props.setStart(1);
              props.changeInstagram(document.getElementById("instagram").value);
              props.channgeNombreApellido(document.getElementById("Nombre-Apellido").value);
              // props.numCartas(
              // console.log(document.getElementById("baraja").value);
            }}
          >
            ingresar datos y jugar
          </button>
          <br></br>
          <br></br> 
        </center>
  
      



        </div>
    );
  };
  
  export default Sorteo;