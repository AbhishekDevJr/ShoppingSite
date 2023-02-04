import React from 'react';
import {Component} from 'react';
import NavBar from './components/NavBar';
import './App.css';

class App extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className = "App">
        <NavBar />
      </div>
    );
  }
}

export default App;
