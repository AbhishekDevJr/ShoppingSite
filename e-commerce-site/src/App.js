import React from 'react';
import NavBar from './components/NavBar';
import HomeMainVideo from './components/HomeMainVideo';
import Buttons from './components/Buttons';
import './App.css';

function App(){
    return(
      <div className = "App">
        <NavBar />
        <HomeMainVideo />
        <Buttons />
      </div>
    );
}

export default App;
