import React, { useState } from "react";
import PantallaPrincipal from "./components/PantallaPrincipal";
import PantallaJuego from "./components/PantallaJuego";
import PantallaFinal from "./components/PantallaFinal";

import PanelAdm from "./components/PanelAdm";

function App() {
  const [level, setLevel] = useState(1);
  const [stateGame, setStateGame] = useState(0);

  const changeDifficulty = () => {
    setLevel(level === 2 ? 0 : level + 1);
  };

  //segun nivel

  const CartasNivel = {
    0: 8,
    1: 16,
    2: 24,
  };

  //panel de administracion

  // const PanelAdm = () => {

  // }

  //finalsegunnivel

  const changeStateGame = (value) => {
    setStateGame(value);
  };

  return (
    <div>
      {stateGame === 0 && (
        <PantallaPrincipal
          level={level}
          changeDifficulty={changeDifficulty}
          setStart={changeStateGame}
        />
      )}

      {stateGame === 1 && <PantallaJuego numCartas={CartasNivel[level]} />}
      {stateGame === 2 && <PanelAdm />}
    </div>
  );
}

export default App;
