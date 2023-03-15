import React, { Fragment } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {useState, useEffect} from 'react';
import MensSection from './components/MensSection';
import NavBar from './components/NavBar';
import HomeMainVideo from './components/HomeMainVideo';
import Buttons from './components/Buttons';
import App from './App';
import WomenSection from './components/WomenSection';
import About from './components/About';

function RouteSwitch(){
    
    return(
        <div className = "route-switch">
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path = "/" element = {<div className = "testView"><HomeMainVideo /><Buttons /></div>} />
                    <Route path = "/mens" element = {<><MensSection /></>} />
                    <Route path = "/womens" element = {<><WomenSection /></>} />
                    <Route path = "/about" element = {<><About /></>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default RouteSwitch;