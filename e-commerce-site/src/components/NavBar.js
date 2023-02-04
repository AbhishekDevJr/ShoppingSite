import React from 'react';
import {Component} from 'react';

class NavBar extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className = "nav-container">
                <div className = "nav-row-1">
                    <div className = "row-1-contactInfo">
                        <img src = "" alt = "GitHub Icon" />
                        <a href = "/">Abhishek Choudhari</a> 
                    </div>

                    <div className = "row-1-siteLogo">
                        <h1>Octavia</h1>
                    </div>

                    <div className = "row-1-utilities">
                        <a href = "/"><img src = "" alt = "Cart Icon" /></a>
                        <a href = "/"><img src = "" alt = "Search Icon" /></a>
                    </div>
                </div>
            </div>
        );
    }
}

export default NavBar;