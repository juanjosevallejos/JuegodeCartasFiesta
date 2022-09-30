import React, {useState} from 'react';
import PantallaPrincipal from './components/PantallaPrincipal';
//import Cartas from './components/Cartas';
import PantallaJuego from './components/PantallaJuego';
import PantallaFinal from './components/PantallaFinal';
//import Botones from './components/Botones';
import './App.css';

function App() {

  const [ level,setLevel ] = useState(0)
  const [ stateGame, setStateGame ] = useState(0)
  
  const changeDifficulty = () => { 
    setLevel( level === 2 ? 0 : level + 1)
  }

  const changeStateGame = (value) => {
    setStateGame(value)
  }

  return (

    <div> 

    { stateGame === 0 ?
      <PantallaPrincipal 
      level={level} 
      changeDifficulty={changeDifficulty}
      setStart = {changeStateGame}
      />:<PantallaJuego/>
    }
     <PantallaFinal />
    
    </div>
  
  );
}

export default App;
