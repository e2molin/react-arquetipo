import React, { Fragment, useState, useRef, useEffect } from 'react';
//import { v4 as uuidv4 } from 'uuid'
import { MapAPICNIG } from "components/MapAPICNIG/MapAPICNIG"
import { initMap } from 'utils/Visor';
import './App.css';
import Layout from 'components/Layout/Layout';

function App() {
  
    //initMap();


    return (
        /**
         * Los componentes tienen que renderizarse dentro de un componente padre
         * Antes se utilizaba un <div> para envolverlos, pero a la hora de aplicar estilos podría dar problemas
         * React utiliza ahora Fragment. Realmente es React.Fragment, pero podemos hacer un destructuring importándolo de React
         */
         <div className="App">
             <section className="App-content">
            {/* <h1>My Little Map XXXI</h1>
            <button >➕</button>
            <button >💩</button>*/}
            <Layout />  
            {/* <MapAPICNIG idlienzo="mapjs"/> */}
            {/* <div id="mapjs" className="maplienzo"></div> */}
            </section>
        </div>
    );
}

export default App;