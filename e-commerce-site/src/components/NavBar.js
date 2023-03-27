import React from 'react';
import { Link } from 'react-router-dom';

function NavBar(){

    window.addEventListener('scroll', () => {
        let navEle = document.querySelector('.nav-container');
        if(window.scrollY >= 100){
            navEle.classList.add('nav-containerBg');
        }
        else{
            navEle.classList.remove('nav-containerBg');
        }
    });

    function handleOverlayOpen(event){
        const overlayEle = document.querySelector('.mobile-navigation');
        overlayEle.style.width = '100%';   
    }

    function handleOverlayClose(event){
        const overlayEle = document.querySelector('.mobile-navigation');
        overlayEle.style.width = '0';
    }

    function handleCartClick(event){
        console.log('Global Console--> ',event.currentTarget);
        if(event.currentTarget.lastChild.style.height === '380px'){
            console.log('If Block Log--> ',event.currentTarget);
            event.currentTarget.lastChild.style.height = '0px';
            setTimeout(() => {
                let someCartEleNew = document.querySelector('.cart');
                someCartEleNew.firstChild.style.visibility = 'hidden';
                someCartEleNew.firstChild.nextSibling.style.visibility = 'hidden';
                someCartEleNew.lastChild.style.visibility = 'hidden';
            }, 500);
            
        }else{
            event.currentTarget.lastChild.style.height = '380px';
            event.currentTarget.lastChild.firstChild.style.visibility = 'visible';
            console.log('Else Block Log--> ',event.currentTarget);
            setTimeout(() => {
                let someCartEleNew = document.querySelector('.cart');
                someCartEleNew.firstChild.style.visibility = 'visible';
                someCartEleNew.firstChild.nextSibling.style.visibility = 'visible';
                someCartEleNew.lastChild.style.visibility = 'visible';
            }, 500);
        }
    }

    // function handleCrossClick(event){
    //     let someCartEleNewCross = document.querySelector('.cart');
    //     console.log(someCartEleNewCross);
    // }
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
                        <div className = "cart-container" onClick = {handleCartClick}>
                            <a href = "#"><img src = "icons8-shopping-cart-24.png" alt = "Cart Icon" /></a>
                            <div className = "cart">
                                <div className = "cart-row1-container">
                                    <div className = "cart-row1">
                                    <p id = "big-text">&#10005;</p>
                                    <div className = "row1-right">
                                        <p id = "small-text">Subtotal: </p>
                                        <p>$0.00</p>
                                    </div>
                                    </div>
                                </div>
                                <div className = "cart-row2">
                                    {/* Cart Items Goes Here */}
                                </div>
                                <div className = "cart-row3">
                                    <a href = "/"><button>Checkout</button></a>
                                </div>
                            </div>
                        </div>
                        <a href = "/"><img src = "icons8-search-30.png" alt = "Search Icon" /></a>
                    </div>

                    <div className = "mobile-navigation">
                        <div className = "overlay-close">
                       <button id = "overlay-closeBtn" onClick = {handleOverlayClose}>&times;</button>
                        </div>
                        {/* Mobile Navigation Overlay */}
                        <div className = "overlay-contents">
                            <a href = "/"><img src = "icons8-shopping-cart-24.png" alt = "Cart Icon" /></a>
                            <a href = "/"><img src = "icons8-search-30.png" alt = "Search Icon" /></a>
                        </div>
                    </div>
                    <div className = "overvlay-open">
                        <button onClick = {handleOverlayOpen}>+</button>
                    </div>
                </div>

                <div className = "nav-row-2">
                    <div className = "row-2-contents">
                        <Link to = "/">Home</Link>
                        <Link to = "/mens">Mens</Link>
                        <Link to = "/womens">Womens</Link>
                        <Link to = "/about">About</Link>
                    </div>
                </div>
            </div>
        );
}

export default NavBar;