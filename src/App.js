import React, {useState} from 'react';
import PantallaPrincipal from './components/PantallaPrincipal';
import PantallaJuego from './components/PantallaJuego';
import PantallaFinal from './components/PantallaFinal';


function App() {


  const [ level,setLevel ] = useState(0)
  const [ stateGame, setStateGame ] = useState(0)
  

  const [intervalId, setIntervalId] = useState(0)
  const [miliSeconds, setMiliSeconds] = useState(0)


  const changeDifficulty = () => { 
    setLevel( level === 2 ? 0 : level + 1)
  }



  //segun nivel

  const CartasNivel = {
    0: 8,
    1: 16,
    2: 24
  }







 //finalsegunnivel











  const changeStateGame = (value) => {
    setStateGame(value)
    if(value === 1) playTimer(30)
  }

const playTimer = () => {
  if(intervalId){
    clearInterval(intervalId)
    setIntervalId(0)
  }
  
  const newIntervalId = setInterval ( ()=>{
    setMiliSeconds ( miliSeconds => miliSeconds + 1000)
  }, 1000)

  setIntervalId(newIntervalId)
}



  return (

    <div> 
   


    { stateGame === 0 ?
      <PantallaPrincipal 
      level={level} 
      changeDifficulty={changeDifficulty}
      setStart = {changeStateGame}
      />:
      <PantallaJuego 
        numCartas={CartasNivel[level]}
        time={miliSeconds}
      /> 
    }
     <PantallaFinal />
    
    </div>
  
  );
}

export default App;