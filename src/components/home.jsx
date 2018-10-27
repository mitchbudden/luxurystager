import React, { Component } from "react";
import Nav from './nav';
import Footer from './footer';
import './home.css';

class Home extends Component {

  render() {
    return (
      <div>
        <Nav selected="Homes"/>
        <div className="home-page-container">
          <div className="home-picture-group">
            <img src="https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b749ef140950edd755a159baaca6b6f0&auto=format&fit=crop&w=1500&q=80" 
                className="display-image"
                alt="before"/>
            <img src="https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c7adacd8460808aaa0168f7cd060ec23&auto=format&fit=crop&w=500&q=80" 
                className="display-image"
                alt="after"/>
          </div>
          <div className="home-picture-group">
            <img src="https://images.unsplash.com/photo-1527349151308-98178412dfbd?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7c95436e5ae5c058c778106139f3888a&auto=format&fit=crop&w=334&q=80" 
                className="display-image"
                alt="before"/>
            <img src="https://images.unsplash.com/photo-1499814375754-a481db8ab6c5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=341c0acc8a6428b8896da5a7632e8384&auto=format&fit=crop&w=667&q=80" 
                className="display-image"
                alt="after"/>
          </div>
        </div>
        <Footer />
      </div>);
  }
}

export default Home;
