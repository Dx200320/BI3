import React from 'react';
import './App.css';
import fondo from './imagenes/fondo.jpg';
import foto3 from './imagenes/foto3.jpg';
import foto4 from './imagenes/foto4.jpg';
import foto5 from './imagenes/foto5.jpg';
import foto6 from './imagenes/foto6.jpg';
import foto9 from './imagenes/foto9.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>DUOMANIA 2025</h1>

        {/* Fila 1 - Imagen grande */}
        <div className="grid-row large-row">
          <div className="grid-item large">
            <img src={fondo} alt="DeoMania Saga" />
          </div>
        </div>

        {/* Fila 2 - Tres imágenes pequeñas alineadas al centro */}
        <div className="grid-row small-row">
          <div className="grid-item small">
            <img src={foto6} alt="DeoMania Ica" />
            <p className="saga-text">DuoMania Ica</p>
          </div>
          <div className="grid-item small">
            <img src={foto5} alt="DeoMania Lima" />
            <p className="saga-text">DuoMania Lima</p>
          </div>
          <div className="grid-item small">
            <img src={foto9} alt="DeoMania Pasco" />
            <p className="saga-text">DuoMania Pasco</p>
          </div>
        </div>

        {/* Texto "DeoMania - Saga" entre las dos imágenes grandes */}
        <p className="saga-text">DuoMania - Saga</p>

        {/* Fila 3 - Imagen grande */}
        <div className="grid-row large-row">
          <div className="grid-item large">
            <img src={fondo} alt="DeoMania Saga" />
          </div>
        </div>

        {/* Fila 4 - Dos imágenes medianas */}
        <div className="grid-row medium-row">
          <div className="grid-item medium">
            <img src={foto3} alt="DeoMania Tacna" />
            <p className="saga-text">DuoMania Tacna</p>
          </div>
          <div className="grid-item medium">
            <img src={foto4} alt="DeoMania Puno" />
            <p className="saga-text">DuoMania Puno</p>
          </div>
        </div>
      </header>

      <footer>
        <h4>Derechos Reservados: FAVIO PEÑA FLORES</h4>
        <h5>Consulta: 966265623</h5>
      </footer>
    </div>
  );
}

export default App;
