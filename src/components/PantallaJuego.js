import Botones from "./Botones";
import Cartas from "./Cartas";
import AleatorioCartas from "../logica/AleatorioCartas";
import { useState, useEffect } from "react";
import Timer from "../logica/Timer";

export default function PantallaJuego({ numCartas,props }) {
  const [cartasArr, setCartasArr] = useState([]);

  useEffect(() => {
    setCartasArr(AleatorioCartas(numCartas));
  }, [numCartas]);

  const rotate = (id, set) => {
    setCartasArr((prevArr) => {
      prevArr[id].rotate = true;
      prevArr[id].validating = 1;
      return [...prevArr];
    });
    console.log(cartasArr);
    setTimeout(() => validate(), 500);
  };



  const validate = () => {
    const validarCartas = cartasArr.filter((cartas) => cartas.validating === 1);

    if (validarCartas.length === 2) {
      if (validarCartas[0].bind !== validarCartas[1].bind) {
        console.log("retornamos cartas por defecto ");

        setCartasArr((prevArr) => {
          prevArr[validarCartas[0].id].rotate = false;
          prevArr[validarCartas[0].id].validating = 0;
          prevArr[validarCartas[1].id].rotate = false;
          prevArr[validarCartas[1].id].validating = 0;

          return [...prevArr];
        });
        
      } 
      
      
      else {
        console.log("elementos iguales");
        setCartasArr((prevArr) => {
          prevArr[validarCartas[0].id].set = 1; 
          prevArr[validarCartas[0].id].validating = 0;
          prevArr[validarCartas[1].id].set = 1;
          prevArr[validarCartas[1].id].validating = 0;

          

          // const query = `[data-bind="${validarCartas[0].bind}"]`
          // const nodeList = document.querySelectorAll(query);

          // for (var item of nodeList) {
          //   item.classList.add('d-none')
          // }

          


          /* console.log(validarCartas[0]);
          console.log(validarCartas[1]); */
          return [...prevArr];

          
              

        });
      }
    }
  };








  return (
    <div className="PantallaJuego">
      <div className="PantallaJuego--score grid grid 2">
        <div className="PantallaJuego--moves">
          <p>Movimientos</p>
        </div>
        <center>
        <div className="tiempo">
        <Timer></Timer>
        </div>
        </center>
        
      </div>

      <div className="PantallaJuego--cartas grid grid-4"> 
        {cartasArr
          .sort((a, b) => a.id - b.id)
          .map((cartas) => {
            return (
              <Cartas
                key={cartas.id}
                id={cartas.id}
                rotate={cartas.rotate}
                symbol={cartas.symbol}
                pinUp={cartas.pinUp}
                bind={cartas.bind}
                actionRotate={rotate}
                // onClick={changeFrente}
              />
            );
          })} 
      </div> 
      <div className="text-center"> 
        <Botones label="Reiniciar juego" action={() => {}} /> 
      </div>
    </div>
  );
}