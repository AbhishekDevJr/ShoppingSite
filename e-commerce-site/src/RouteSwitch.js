import React, { Fragment } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {useState, useEffect} from 'react';
import MensSection from './components/MensSection';
import NavBar from './components/NavBar';
import HomeMainVideo from './components/HomeMainVideo';
import Buttons from './components/Buttons';
// import App from './App';
import WomenSection from './components/WomenSection';
import About from './components/About';
import ProductPage from './components/ProductPage';
import CheckOutPage from './components/CheckOutPage';

function RouteSwitch(){

    //State Variables that hold the User Selected Product Data and passes it to Product Page
    const [someTruth, setSomeTruth] = useState(true);
    const [someTitle, setSomeTitle] = useState('');
    const [productBrand, setProductBrand] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productImgSrc, setProductImgSrc] = useState('');

    //State variables that hold the User Selected Product when User adds Product to Cart and passes it to Cart Component
    const [cartImgSrc, setCartImgSrc] = useState('');
    const [cartItemTitle, setCartItemTitle] = useState('');
    const [cartItemPrice, setCartItemPrice] = useState('');
    const [cartItemQuantity, setCartItemQuantity] = useState(0);
    const [cartItemSize, setCartItemSize] = useState('');
    const [productObjArray, setProductObjArray] = useState([]);

    //Function that fetches User Selected Product Info and passes it to Product Page
    function setProductPageTitle(selectedProductTitle, selectedProductBrand, selectedProductPrice, selectedProductImgSrc){
        setSomeTitle(selectedProductTitle);
        setProductBrand(selectedProductBrand);
        setProductPrice(selectedProductPrice);
        setProductImgSrc(selectedProductImgSrc);
    }

    //Function that fetches User Added to Cart Item info and passes it to Cart Component
    function fetchCartDetails(userCartImgSrc, userCartItemTitle, userCartItemPrice, userCartItemQuantity, userCartItemSize){
        setCartImgSrc(userCartImgSrc);
        setCartItemTitle(userCartItemTitle);
        setCartItemPrice(userCartItemPrice);
        setCartItemQuantity(userCartItemQuantity);
        setCartItemSize(userCartItemSize);

        let currentProductObj = {
            userCartImgSrc,
            userCartItemTitle,
            userCartItemPrice,
            userCartItemQuantity,
            userCartItemSize
        };

        setProductObjArray([...productObjArray, currentProductObj]);
    }

    useEffect(() => {
        if(window.innerWidth < 500){
            setSomeTruth(false);
        }
    }, [])

    window.onresize = (event) => {
        if(window.innerWidth > 500){
            setSomeTruth(true);
        }
    };
    
    return(
        <div className = "route-switch">
            <BrowserRouter>
                <NavBar cartImgSrc = {cartImgSrc} cartItemTitle = {cartItemTitle} cartItemPrice = {cartItemPrice} cartItemQuantity = {cartItemQuantity} cartItemSize = {cartItemSize} productObjArray = {productObjArray}/>
                <Routes>
                    <Route path = "/" element = {<div className = "testView">{ (someTruth)&&(<HomeMainVideo />)}<Buttons /></div>} />
                    <Route path = "/mens" element = {<><MensSection someFunction = {setProductPageTitle} /></>} />
                    <Route path = "/womens" element = {<><WomenSection someFunction = {setProductPageTitle} /></>} />
                    <Route path = "/about" element = {<><About /></>} />
                    <Route path = "/productPage" element = {<><ProductPage title = {someTitle} brand = {productBrand} price = {productPrice} imgSrc = {productImgSrc} cartDetailsFunc = {fetchCartDetails} /></>} />
                    <Route path = "/checkout" element = {<><CheckOutPage /></>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default RouteSwitch;