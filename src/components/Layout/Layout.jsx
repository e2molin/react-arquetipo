import React, { Component } from 'react';
import { Loader } from 'react-loaders';
//import { translate } from 'react-i18next';


import Header from 'components/Header/Header';
import MapAPICNIG from 'components/MapAPICNIG/MapAPICNIG';
import CustomModal from 'components/CustomModal/CustomModal';

//import 'loaders.css/loaders.min.css';

// Componente de clase
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
    //initMap();
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
        <MapAPICNIG />
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
