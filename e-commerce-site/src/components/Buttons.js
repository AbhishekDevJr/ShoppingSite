import React from 'react';
import { Link } from 'react-router-dom';

function Buttons(props){
    return(
        <div className = "buttons-container">
            <div className = "buttons">
                <Link to = "/mens">
                    <a href = "/"><button disabled = {false} className = "collection-btn">SS23 Collection</button></a>
                </Link>
                <Link to = "/womens">
                    <a href = "/"><button disabled = {false} className = "collection-btn">FW23 Collection</button></a>
                </Link>
            </div>
        </div>
    );
}

export default Buttons;