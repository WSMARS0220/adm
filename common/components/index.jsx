import React, { Component } from 'react';
import ES6Promise from 'es6-promise';

import Header from './header';
import Footer from './footer'

export default class App extends Component {

  render() {
    // for ie 11 ...
    ES6Promise.polyfill();
    return (
      <div id='app'>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}
