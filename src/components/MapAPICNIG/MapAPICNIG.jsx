import React, { Component } from 'react';
import { initMap } from 'utils/Visor';

import './MapAPICNIG.css';

class MapAPICNIG extends Component {

    constructor(props) {
        super(props);
        this.state = {
          blocking: true,
        };
      }
    
      componentDidMount() {
        // initMap(this.unblock, this.props.t, this.props.params);
         initMap();
        console.log("componentDidMount");

        
      }

      render() {
        return (
            <div className="visor-wrapper">
                <div id="mapjs" className="maplienzo"></div>
            </div>
        );


      }
}

export default MapAPICNIG;