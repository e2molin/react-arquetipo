import React, { Fragment, useState, useRef, useEffect } from 'react';
//import { v4 as uuidv4 } from 'uuid'
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
                <Layout />  
            </section>
        </div>
    );
}

export default App;