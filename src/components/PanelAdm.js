import React from "react";
import Botones from "./Botones";

const PanelAdm = (props) => {
  return (
   <div className="admin">

<div className="container mt-7">
      <div className="row">
        <div className="col-md-6">
          <select
            className="form-select"
            id="baraja"
            aria-label="Default select example"
          >
            <option defaultValue disabled>
              seleccione la baraja
            </option>
            <option value={0}>colores</option>
            <option value={1}>personajes</option>
          </select>
        </div>

        <div className="col-md-6">
          <select
            className="form-select"
            id="dificultad"
            aria-label="Default select example"
          >
            <option defaultValue disabled>
              Selecciona la dificultad
            </option>
            <option value="0">Facil (25s)</option>
            <option value="1">Mediana (20s) </option>
            <option value="2">Dificil (15s)</option>
          </select>
        </div>
      </div>

      <center>
        {/* <div className="col-md-6"> <br></br> 
    <input placeholder="Ingrese los segundos "
        type="text"
        id="tiempo"
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
            // props.numCartas();
            props.changeDifficulty(document.getElementById("dificultad").value);
            props.changeBaraja(document.getElementById("baraja").value);
            // console.log(document.getElementById("baraja").value);
          }}
        >
          Aceptar Configuracion
        </button>
        <br></br>
        <br></br>
      </center>
    </div>

    
   </div>
  );
};

export default PanelAdm;