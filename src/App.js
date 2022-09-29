import React from 'react';
import PantallaPrincipal from '.components/PantallaPrincipal'
import Cartas from './components/Cartas'
import PantallaJuego from './components/PantallaJuego'
import PantallaFinal from './components/PantallaFinal'
import Botones from './components/Botones'
import './App.css';

function App() {
  return (
    <div className="App">
    <PantallaPrincipal></PantallaPrincipal>
    <Cartas></Cartas>
    <PantallaJuego></PantallaJuego>
    
    </div>
  )
}

export default App;
