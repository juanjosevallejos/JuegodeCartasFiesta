import React from "react";

const PanelAdm = () => {
  return (
    <div className="container mt-3"> 
    <div className="row">
      <div className="col-md-6">
      

        <select class="form-select" aria-label="Default select example">
      <option selected disabled>seleccione la baraja</option>
      <option value="centros_culturales">centros culturales</option>
      <option value="monumentos">monumentos</option>
      <option value="jugadores_futbol">jugadores de futbol</option>
     </select>
      
     
      </div>
      
      <div className="col-md-6">
        <select class="form-select" aria-label="Default select example">
          <option selected disabled>Selecciona la dificultad</option>
          <option value="facil">facil</option>
          <option value="medio">medio</option>
          <option value="dificil">Dificil</option>
        </select>
      </div>
    </div>

    <center>
    <div className="col-md-6"> <br></br> 
    <input placeholder="Ingrese los segundos "
        type="text"
        class="form-control"
        aria-label="Sizing example input"
        aria-describedby="inputGroup-sizing-default">

        </input>
    </div>
     <br></br>
    <button type="button" class="btn btn-dark">Aceptar Configuracion</button>
</center>





</div>





    //     <div class="input-group mb-3">
    //   <span class="input-group-text" id="inputGroup-sizing-default">Aceptar</span>
    //   <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">

    //   </input>

    // <select class="form-select" aria-label="Default select example">
    //   <option selected>seleccione la dificultad</option>
    //   <option value="facil">facil</option>
    //   <option value="medio">medio</option>
    //   <option value="dificil">Dificil</option>
    // </select>

    // <select class="form-select" aria-label="Default select example">
    //   <option selected>seleccione la baraja</option>
    //   <option value="centros_culturales">centros culturales</option>
    //   <option value="monumentos">monumentos</option>
    //   <option value="jugadores_futbol">jugadores de futbol</option>

    // </select>

    // </div>
  );
};

export default PanelAdm;
