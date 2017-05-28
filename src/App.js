import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
// import "bootswatch/journal/bootstrap.css";
// import "bootswatch/superhero/bootstrap.css";
import "bootswatch/slate/bootstrap.css";

import HeaderNavigation from './HeaderNavigation';
import Footer from './Footer';
import Body from './Body';
import JumbotronGrid from './JumbotronGrid';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderNavigation/>
        <Body></Body>
        <JumbotronGrid></JumbotronGrid>
        <Footer/>
      </div>
    );
  }
}

export default App;
