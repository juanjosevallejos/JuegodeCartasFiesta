import Botones from "./Botones";

export default function PantallaFinal({ resultados }) {
  return (
    <div className="PantallaFinal text-center">
    
    {/* Ganaste */}

    {resultados.gana ? (
        <h1 className="PantallaFinal--title">
          Ganaste
        </h1>
      ) :
      
      
      //Perdiste
        ( 
      <h1 className="PantallaFinal--title">
          Perdiste
        </h1>
      )}






      <div className="puntajes">
        <table class="table table-striped table-light">
          <thead>
            <tr>
              <th scope="col">movimientos totales</th>
              <th scope="col">veces que acertó</th>
              <th scope="col">tiempo restante </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">{resultados.movimientos} </th>
              <td>{resultados.paresEncontrados} </td>
              <td>{resultados.tiempo}</td>
            </tr>
            <tr></tr>
            <tr> </tr>
          </tbody>
        </table>
      </div>

      
      <br />
      <Botones label="Reinciar Juego" action="" />
    </div>
  );
}
