import React, { Component, PropTypes } from "react";
import ES6Promise from "es6-promise";

// import Header from "./header";

export default class App extends Component {
  static propTypes = {
    children: PropTypes.object
  };

  render() {
    // for ie 11 ...
    ES6Promise.polyfill();
    return (
      <div id="app">
        <h2>Header!</h2>
        {this.props.children}
      </div>
    );
  }
}
