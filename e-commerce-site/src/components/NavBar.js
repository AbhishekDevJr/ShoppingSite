import React from 'react';
import {Component} from 'react';

class NavBar extends Component {
    constructor(props){
        super(props);
    }

    handleOverlayOpen(event){
        const overlayEle = document.querySelector('.mobile-navigation');
        overlayEle.style.width = '100%';
        const buttonEles = document.querySelectorAll('.buttons-container button');
        buttonEles.forEach((item, index, array) => {
            item.style.position = "relative";
            item.style.style.zIndex = -1000;
        });
    }

    handleOverlayClose(event){
        const overlayEle = document.querySelector('.mobile-navigation');
        overlayEle.style.width = '0';
    }

    render(){
        return(
            <div className = "nav-container">
                <div className = "nav-row-1">
                    <div className = "row-1-contactInfo">
                        <a target = "_blank" href = "https://github.com/AbhishekDevJr"><img src = "icons8-github-48.png" alt = "GitHub Icon" /></a>
                        <a target = "_blank" href = "https://www.linkedin.com/in/abhishek-choudhari-408526173/">Abhishek Choudhari</a> 
                    </div>

                    <div className = "row-1-siteLogo">
                        <h1>OCTAVIA</h1>
                    </div>

                    <div className = "row-1-utilities">
                        <a href = "/"><img src = "icons8-shopping-cart-24.png" alt = "Cart Icon" /></a>
                        <a href = "/"><img src = "icons8-search-30.png" alt = "Search Icon" /></a>
                    </div>

                    <div className = "mobile-navigation">
                        <div className = "overlay-close">
                        <a href = "javascript:void(0)" className = "closebtn" onClick = {this.handleOverlayClose}>&times;</a>
                        </div>
                        {/* Mobile Navigation Overlay */}
                        <div className = "overlay-contents">
                            <a href = "/"><img src = "icons8-shopping-cart-24.png" alt = "Cart Icon" /></a>
                            <a href = "/"><img src = "icons8-search-30.png" alt = "Search Icon" /></a>
                        </div>
                    </div>
                    <div className = "overvlay-open">
                        <button onClick = {this.handleOverlayOpen}>+</button>
                    </div>
                </div>

                <div className = "nav-row-2">
                    <div className = "row-2-contents">
                        <a href = "/">Home</a>
                        <a href = "/">Men</a>
                        <a href = "/">Women</a>
                        <a href = "/">About</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default NavBar;