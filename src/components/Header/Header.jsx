import React, { Component, Fragment } from 'react';
//import { translate } from 'react-i18next';
import LocalStorage from 'utils/LocalStorage';

import Logo from 'static/img/logo.png';
import LogoCNIG from 'static/img/logo-cnig.png';
import LogoIGN from 'static/img/logo_ign.jpg';

import './Header.css';

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      langSelected: LocalStorage.getString('language') || 'es',
    };
  }

  changeLanguage = (lang) => {
    this.setState({ langSelected: lang }, () => {
      LocalStorage.putString('language', lang);
      window.location.reload();
    });
  }

  navigate = () => {
    window.location.href = '/comparador_pnoa/visor';
  }

  render() {
    const { langSelected } = this.state;
    console.log(this.props);
    return (<Fragment>
      <header className='h-desktop'>
        <div className='logo-ign'>
          <img src={LogoIGN} alt='Logo'/>
        </div>
        <div className='logo'>
          <img src={LogoCNIG} alt='Logo'/>
        </div>
        <div className='visor-title' onClick={this.navigate}>
          <img src={Logo} alt='Logo'/>
        </div>
        <div className='visor-language'>
          <span className={langSelected === 'es' ? 'lang-selected' : 'lang-option'} onClick={this.changeLanguage.bind(null, 'es')}>es</span>
          <span className={langSelected === 'en' ? 'lang-selected' : 'lang-option'} onClick={this.changeLanguage.bind(null, 'en')}>en</span>
        </div>
      </header>
    </Fragment>);
  }
}

//export default translate()(Header);
export default Header;