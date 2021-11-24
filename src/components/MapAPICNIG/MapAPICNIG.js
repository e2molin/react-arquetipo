import React from 'react'
import { initMap } from 'utils/Visor';

import './MapAPICNIG.css';

export function MapAPICNIG({idlienzo}) {
    //const {id, task, completed} = elemento;

    /*const handleElementoClick = () =>{
        toggleElemento(id);
    };*/

    initMap();

    return (
        <div className="visor-wrapper">
            <div id={idlienzo} className="maplienzo"></div>
        </div>
    )
}