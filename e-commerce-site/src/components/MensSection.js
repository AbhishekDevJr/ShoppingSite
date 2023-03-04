import React from 'react';
import {useState} from 'react';
import {useEffect} from 'react';

function MensSection(){
    return(
        <div className = "mens-section">
            <div className = "mens-title">
                <h1>MEN'S</h1>
            </div>

            <div className = "filters">
                <div className = "filter-1">
                    <p>Sort</p>
                    <button>+</button>
                </div>

                <div className = "filter-2">
                    <p>All Colors</p>
                    <button>+</button>
                </div>

                <div className = "filter-3">
                    <p>All Brands</p>
                    <button>+</button>
                </div>

                <div className = "filter-4">
                    <p>All Types</p>
                    <button>+</button>
                </div>
            </div>
        </div>
    );
}

export default MensSection;