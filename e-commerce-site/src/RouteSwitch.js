import React, { Fragment } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {useState, useEffect} from 'react';
import MensSection from './components/MensSection';
import NavBar from './components/NavBar';
import HomeMainVideo from './components/HomeMainVideo';
import Buttons from './components/Buttons';
// import App from './App';
import WomenSection from './components/WomenSection';
import About from './components/About';

function RouteSwitch(){

    const [someTruth, setSomeTruth] = useState(true);

    useEffect(() => {
        if(window.innerWidth < 500){
            setSomeTruth(false);
        }
    }, [])

    window.onresize = (event) => {
        // console.log('Resizing');
        if(window.innerWidth > 500){
            setSomeTruth(true);
        }
    };
    
    return(
        <div className = "route-switch">
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path = "/" element = {<div className = "testView">{ (someTruth)&&(<HomeMainVideo />)}<Buttons /></div>} />
                    <Route path = "/mens" element = {<><MensSection /></>} />
                    <Route path = "/womens" element = {<><WomenSection /></>} />
                    <Route path = "/about" element = {<><About /></>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default RouteSwitch;