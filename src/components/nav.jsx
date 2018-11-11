import React, { Component } from "react";
import '../styles/nav.css';
import logo from '../winner logo.svg';

class Nav extends Component {

  render() {
    return (
    <div className="nav-outer">
        <div className="nav-img-container">
          <a href="/contact"><img src={logo} className="logo-nav" alt="Luxe Staging"/></a>
        </div>
        <div className="nav-group">
          <a href="/" 
            className={this.props.selected === "Homes" ? "selected-nav-item": "nav-item"}>
          Homes</a>
          <a href="/yacht" 
            className={this.props.selected === "Yachts" ? "selected-nav-item": "nav-item"}>
          Yachts</a>
          <a href="/about" 
            className={this.props.selected === "About" ? "selected-nav-item": "nav-item"}>
          About</a>
          <a href="/contact" 
            className={this.props.selected === "Contact" ? "selected-nav-item": "nav-item"}>
          Contact</a>
        </div>
    </div>
    );
  }
}

export default Nav;
