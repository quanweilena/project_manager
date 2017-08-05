import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class Header extends Component {
  render() {
    return (
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to {this.props.title}</h2>
      </div>
    );
  }
}

export default Header;
