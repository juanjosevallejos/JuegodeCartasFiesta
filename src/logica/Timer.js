import { isEditable } from "@testing-library/user-event/dist/utils";
import React, { useEffect, useState } from "react";
import PantallaJuego from "../components/PantallaJuego";

let Timer = ({
  difficulty,
  level,
  setStateGame,
  resultados,
  setResultados,
  moves,
}) => {
  const [contador, setContador] = useState(0);
  const [seconds, setSeconds] = useState();


  
  

  useEffect(() => {
    let limit;

    switch (difficulty) {
      case "0":
        limit = 25;
        break;
      case "1":
        limit = 20;
        break;
      case "2":
        limit = 15;
        break;
      default:
        limit = 25;
        break;
    }
    const Timer = setInterval(() => {
      
      setContador(contador + 1);
      setSeconds(limit - contador);
      if (seconds === 0) {
        
          clearInterval(Timer);
          setResultados({
            ...resultados,
            gana: false,
            movimientos: moves,
          }); 
          setStateGame(4);

      }

    }, 1000);
    return () => clearInterval(Timer);



    

  });

  return (
    <div className="timer">
      <div className="container">
        <div className="timer-container">
          <h1>Timer</h1>
          <h1>{seconds}</h1>
        </div>
      </div>
    </div>
  );
};
export default Timer;
