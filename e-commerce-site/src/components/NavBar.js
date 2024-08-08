import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Popover } from 'antd';

function NavBar(props) {
    const [receivedCartProductArray, setReceivedCartProductArray] = useState(props.productObjArray);
    const cartItems = useSelector(state => state.cart.cart);

    useEffect(() => {
        setReceivedCartProductArray(props.productObjArray);
    }, [props]);

    window.addEventListener('scroll', () => {
        let navEle = document.querySelector('.nav-container');
        if (window.scrollY >= 100) {
            navEle.classList.add('nav-containerBg');
        }
        else {
            navEle.classList.remove('nav-containerBg');
        }
    });

    function handleOverlayOpen(event) {
        const overlayEle = document.querySelector('.mobile-navigation');
        overlayEle.style.width = '100%';
    }

    function handleOverlayClose(event) {
        const overlayEle = document.querySelector('.mobile-navigation');
        overlayEle.style.width = '0';
    }

    function handleCartClick(event) {
        console.log('Cart Products Array-->', props.productObjArray);
        if (event.currentTarget.lastChild.style.height === '380px') {
            console.log('If Block Log--> ', event.currentTarget);
            event.currentTarget.lastChild.style.height = '0px';
            setTimeout(() => {
                let someCartEleNew = document.querySelector('.cart');
                someCartEleNew.firstChild.style.visibility = 'hidden';
                someCartEleNew.firstChild.nextSibling.style.visibility = 'hidden';
                someCartEleNew.lastChild.style.visibility = 'hidden';
            }, 500);

        } else {
            event.currentTarget.lastChild.style.height = '380px';
            event.currentTarget.lastChild.firstChild.style.visibility = 'visible';
            // console.log('Else Block Log--> ',event.currentTarget);
            setTimeout(() => {
                let someCartEleNew = document.querySelector('.cart');
                someCartEleNew.firstChild.style.visibility = 'visible';
                someCartEleNew.firstChild.nextSibling.style.visibility = 'visible';
                someCartEleNew.lastChild.style.visibility = 'visible';
            }, 500);
        }
    }

    const popoverContent = (<div className="cart-container" style={{ outline: '1px solid cyan', position: 'relative' }}>
        {console.log('HI------------->', cartItems)}
        <div className="cart" style={{ backgroundColor: 'violet', minHeight: '400px' }}>
            <div className="cart-row1-container">
                <div className="cart-row1">
                    <p id="big-text">&#10005;</p>
                    <div className="row1-right">
                        <p id="small-text">Subtotal: </p>
                        {/* <p> {item.price}</p> */}
                    </div>
                </div>
            </div>
            <div className="cart-row2-container" style={{ gap: '5px', display: 'flex', flexDirection: 'column' }}>
                {cartItems.map((item, index) => {
                    return (
                        <div className="cart-row2">
                            <div className="cartImgContainer">
                                <img src={item.src} alt="Item" />
                            </div>

                            <div className="cartItemInfoContainer">
                                <p id="Itemtitle">{item.h3}</p>
                                <p id="ItemPrice">Price: {item.price} Quantity: {item.quantity}</p>
                                <p id="ItemSize">{item.size}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="cart-row3">
                <Link to="/checkout" ><button>Checkout</button></Link>
            </div>
        </div>

    </div>);

    return (
        <div className="nav-container">
            <div className="nav-row-1">
                <div className="row-1-contactInfo">
                    <a target="_blank" href="https://github.com/AbhishekDevJr"><img src="icons8-github-48.png" alt="GitHub Icon" /></a>
                    <a target="_blank" href="https://www.linkedin.com/in/abhishek-choudhari-408526173/">Abhishek Choudhari</a>
                </div>

                <div className="row-1-siteLogo">
                    <h1>OCTAVIA</h1>
                </div>

                <div className="row-1-utilities">
                    <Popover trigger="click" placement="bottom" content={popoverContent} title="">
                        <img src="icons8-shopping-cart-24.png" alt="Cart Icon" />
                    </Popover>
                    <a href="/"><img src="icons8-search-30.png" alt="Search Icon" /></a>
                </div>

                <div className="mobile-navigation">
                    <div className="overlay-close">
                        <button id="overlay-closeBtn" onClick={handleOverlayClose}>&times;</button>
                    </div>
                    {/* Mobile Navigation Overlay */}
                    <div className="overlay-contents">
                        <a href="/"><img src="icons8-shopping-cart-24.png" alt="Cart Icon" /></a>
                        <a href="/"><img src="icons8-search-30.png" alt="Search Icon" /></a>
                    </div>
                </div>
                <div className="overvlay-open">
                    <button onClick={handleOverlayOpen}>+</button>
                </div>
            </div>

            <div className="nav-row-2">
                <div className="row-2-contents">
                    <Link to="/">Home</Link>
                    <Link to="/mens">Mens</Link>
                    <Link to="/womens">Womens</Link>
                    <Link to="/about">About</Link>
                </div>
            </div>
        </div>
    );
}

export default NavBar;