import React from 'react';
import {useState} from 'react';
import {useEffect} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function Buttons(props){
    return(
        <div className = "buttons-container">
            <div className = "buttons">
                <a href = "/"><button>SS23 Collection</button></a>
                <a href = "/"><button>FW23 Collection</button></a>
            </div>
        </div>
    );
}

export default Buttons;