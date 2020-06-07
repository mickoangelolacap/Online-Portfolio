// import logo from './logo.svg';
import React, {useState} from 'react';
import ReactDOM from 'react-dom'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import About from './components/About'
import Featured from './components/Featured'
import Extra from './components/Extra'
import Footer from './components/Footer'
import './App.css';

/*<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
</div>*/

function App() {

  return (
    <React.Fragment>
        <Navbar/>
        <Landing/>
        <About/>
        <Featured/>
        <Extra/>
        <Footer/>
    </React.Fragment>
  );
}

export default App;
