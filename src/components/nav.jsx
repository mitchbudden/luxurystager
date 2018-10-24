import React, { Component } from "react";
import './nav.css';
import logo from '../winner logo.svg';

class Nav extends Component {

  render() {
    return (
    <div className="nav-outer">
        <div className="nav-img-container">
          <img src={logo} className="logo-nav" alt="Luxe Staging"/>
        </div>
        <div className="nav-group">
          <a href="/home" className="nav-item">Home</a>
          <a href="/about" className="nav-item">About</a>
          <a href="/contact" className="nav-item">Contact</a>
        </div>
    </div>
    );
  }
}

export default Nav;
