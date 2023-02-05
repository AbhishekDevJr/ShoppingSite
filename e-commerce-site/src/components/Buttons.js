import React from 'react';
import {Component} from 'react';

class Buttons extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className = "buttons-container">
                <div className = "buttons">
                    <a href = "/"><button>SS23 Collection</button></a>
                    <a href = "/"><button>FW23 Collection</button></a>
                </div>
            </div>
        );
    }
}

export default Buttons;