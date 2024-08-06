import React from 'react';
import { Link } from 'react-router-dom';

function Buttons(props) {
    return (
        <div className="buttons-container">
            <div className="buttons">
                <Link to="/mens">
                    <button className="collection-btn">SS24 Collection</button>
                </Link>
                <Link to="/womens">
                    <button className="collection-btn">FW24 Collection</button>
                </Link>
            </div>
        </div>
    );
}

export default Buttons;