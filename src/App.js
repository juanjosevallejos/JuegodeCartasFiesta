import React, { Children, useState } from "react";
import PantallaPrincipal from "./components/PantallaPrincipal";
import PantallaJuego from "./components/PantallaJuego";
import PantallaFinal from "./components/PantallaFinal";
import Timer from "./logica/Timer";
import PanelAdm from "./components/PanelAdm";

function App() {
  let [level, setLevel] = useState(0);
  let [stateGame, setStateGame] = useState(0);
  let [simbolos, setSimbolos] = useState(0);

  // let changeTiempo = () => {
  //   setTiempo(tiempo === 2 ? 0 : tiempo + 1 );
  // };

  let changeDifficulty = (difficulty) => {
    setLevel(difficulty);
  };

  // console.log(changeDifficulty)

  //segun nivel

  // if (condicion1) {
  //   console.log("algo")
  // } else if (condicion2) {
  //   console.log("algo2")
  // } else if (condicion3) {
  //   console.log("algo3")
  // }

  let CartasNivel = {
    0: 12,
  };

  //panel de administracion

  // const PanelAdm = () => {

  // }

  //finalsegunnivel

  let changeStateGame = (value) => {
    setStateGame(value);
  };

  const [resultados, setResultados] = useState({
    movimientos: null,
    tiempo:null,
    gana: false,
    paresEncontrados: null,
  });

  return (
    <div>
      {stateGame === 0 && (
        <PantallaPrincipal
          level={level}
          changeDifficulty={changeDifficulty}
          setStart={changeStateGame}
        />
      )}

      {stateGame === 1 && (
        <PantallaJuego
          difficulty={level}
          numCartas={12}
          simbolos={simbolos}
          resultados={resultados}
          setResultados={setResultados}
          setStateGame={setStateGame}
        />
      )}

      {stateGame === 2 && (
        <PanelAdm
          setStart={changeStateGame}
          level={level}
          changeDifficulty={changeDifficulty}
          changeBaraja={setSimbolos}
        />
      )}

      {stateGame === 4 && <PantallaFinal resultados={resultados} />}
    </div>
  );
}

export default App;
