import React, { Component } from 'react';
import { Loader } from 'react-loaders';
//import { translate } from 'react-i18next';

import {MapAPICNIG} from 'components/MapAPICNIG/MapAPICNIG';
import Header from 'components/Header/Header';
import CustomModal from 'components/CustomModal/CustomModal';
import { initMap } from 'utils/Visor';

//import 'loaders.css/loaders.min.css';
import './Layout.css';

class Layout extends Component {

  constructor(props) {
    super(props);
    this.state = {
      blocking: true,
    };
  }

  componentDidMount() {
    // initMap(this.unblock, this.props.t, this.props.params);
    // initMap();
    console.log("componentDidMount");
  }

  unblock = () => {
    this.setState({ blocking: false });
  }

  render() {
    return (
      <div className='content-wrapper'>
        <Header />
        <section className='layout-wrapper'>
          {/* <MapAPICNIG /> */}
            <div className="visor-wrapper">
                <div id="mapjs" className="maplienzo"></div>
            </div>
        </section>
        <CustomModal open={this.state.blocking} blocking={true} onClose={this.unblock}>
          <div className='block-loader-container'>
            <Loader active type={'ball-triangle-path'} color='#494780'/>
          </div>
        </CustomModal>
      </div>
    );
  }
}

//export default translate()(Layout);
export default Layout;
