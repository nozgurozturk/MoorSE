import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';
import Translator from './components/Translator';
import Footer from './components/Footer';


class App extends Component {
  render() {
    return (

      <div className="App">
       <Navbar />
       <Jumbotron />
       <Translator />
       <Footer /> 
      </div>
    );
  }
}

export default App;
