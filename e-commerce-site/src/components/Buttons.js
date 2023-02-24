import React from 'react';
import {useState} from 'react';
import {useEffect} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function Buttons(props){
    return(
        <div className = "buttons-container">
            <div className = "buttons">
                <a href = "/"><button disabled = {false} className = "collection-btn">SS23 Collection</button></a>
                <a href = "/"><button disabled = {false} className = "collection-btn">FW23 Collection</button></a>
            </div>
        </div>
    );
}

export default Buttons;