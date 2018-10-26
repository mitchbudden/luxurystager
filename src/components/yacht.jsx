import React, { Component } from "react";
import Nav from './nav';

class Yacht extends Component {

  render() {
    return (
      <div>
        <Nav selected="Yachts"/>
        <div className="home-page-container">
          <div>
            <h1 className="home-description">Luxe Staging Yachts</h1>
          </div>
        </div>
      </div>);
  }
}

export default Yacht;
