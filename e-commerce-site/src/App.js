import React from 'react';
import {Component} from 'react';
import NavBar from './components/NavBar';
import HomeMainVideo from './components/HomeMainVideo';
import Buttons from './components/Buttons';
import './App.css';

class App extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className = "App">
        <NavBar />
        <HomeMainVideo />
        <Buttons />
      </div>
    );
  }
}

export default App;
