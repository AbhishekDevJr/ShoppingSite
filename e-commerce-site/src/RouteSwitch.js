import React, { Fragment } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {useState, useEffect} from 'react';
import MensSection from './MensSection';
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
                <Routes>
                    <Route path = "/" element = {<App />} />
                    <Route path = "/mens" element = {<><NavBar /><MensSection /></>} />
                    <Route path = "/womens" element = {<><NavBar /><WomenSection /></>} />
                    <Route path = "/about" element = {<><NavBar /><About /></>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default RouteSwitch;