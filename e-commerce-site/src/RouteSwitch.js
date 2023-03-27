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

function RouteSwitch(){

    const [someTruth, setSomeTruth] = useState(true);
    const [someTitle, setSomeTitle] = useState('');
    const [productBrand, setProductBrand] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productImgSrc, setProductImgSrc] = useState('');
    // const [currentProductRoute, setCurrentProductRoute] = useState('');

    function setProductPageTitle(selectedProductTitle, selectedProductBrand, selectedProductPrice, selectedProductImgSrc){
        setSomeTitle(selectedProductTitle);
        setProductBrand(selectedProductBrand);
        setProductPrice(selectedProductPrice);
        setProductImgSrc(selectedProductImgSrc);
        // setCurrentProductRoute(selectedProductRoute);
        // return null;
    }

    useEffect(() => {
        if(window.innerWidth < 500){
            setSomeTruth(false);
        }
    }, [])

    window.onresize = (event) => {
        // console.log('Resizing');
        if(window.innerWidth > 500){
            setSomeTruth(true);
        }
    };

    function handleBodyClick(event){
        let someCartEleNewBody = document.querySelector('.cart');
        console.log('Route Switch--> ',event.target.firstChild);
        if(event.target.firstChild !== null){
            someCartEleNewBody.style.height = '0px';
            setTimeout(() => {
                let someCartEleNew = document.querySelector('.cart');
                someCartEleNew.firstChild.style.visibility = 'hidden';
                someCartEleNew.firstChild.nextSibling.style.visibility = 'hidden';
                someCartEleNew.lastChild.style.visibility = 'hidden';
            }, 500);
        }
    }
    
    return(
        <div className = "route-switch" onClick = {handleBodyClick}>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path = "/" element = {<div className = "testView">{ (someTruth)&&(<HomeMainVideo />)}<Buttons /></div>} />
                    <Route path = "/mens" element = {<><MensSection someFunction = {setProductPageTitle} /></>} />
                    <Route path = "/womens" element = {<><WomenSection someFunction = {setProductPageTitle} /></>} />
                    <Route path = "/about" element = {<><About /></>} />
                    <Route path = "/productPage" element = {<><ProductPage title = {someTitle} brand = {productBrand} price = {productPrice} imgSrc = {productImgSrc} /></>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default RouteSwitch;