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

  const restartGame = () =>{
      setStateGame(0)
      setLevel(0)
      resetTime(0)
  }






 //finalsegunnivel











  const changeStateGame = (value) => {
    setStateGame(value)
    if(value === 1) playTimer()
  }

const playTimer = () => {
  if(intervalId){
    clearInterval(intervalId)
    setIntervalId(0)
  }
  

  const newIntervalId = setInterval ( ()=> {
    setMiliSeconds ( miliSeconds => miliSeconds + 1000)
  }, 1000)

  setIntervalId(newIntervalId)
}

const resetTime = () => {
  setMiliSeconds(0)
  if(intervalId){
    clearInterval(intervalId)
    setIntervalId(0)

  }
}

  return (

    <div> 
   


    { stateGame === 0 ?
      <PantallaPrincipal 
      level={level} 
      changeDifficulty={changeDifficulty}
      setStart = {changeStateGame}
      />:
        stateGame === 1 ?
        <PantallaJuego 
        numCartas={CartasNivel[level]}
        time={miliSeconds}
        setRestart={restartGame}
        setFinish={changeStateGame}
      /> :<PantallaFinal setRestart={restartGame} />
    }

    
    </div>
  
  );
}

export default App;