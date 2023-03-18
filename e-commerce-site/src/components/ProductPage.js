import React from 'react';

function ProductPage(props){

    let styleObj = {
        backgroundImage : `linear-gradient(transparent,100%,#000),linear-gradient(90deg,transparent,90%,#000),linear-gradient(270deg,transparent,90%,#000),url(${props.imgSrc})`,
    };

    return(
        <div className = "productDiv">
            <div style = {styleObj} className = "product-img"></div>
            <div className = "product-info-div">
                <div className = "info-div-container">
                <div className = "product-info-top">
                    <p id = "title">{props.brand}</p>
                    <h1>{props.title}</h1>
                    <h2>{props.price}</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, ratione?</p>
                </div>
                <div className = "product-info-bottom">
                    <select name = "size" id = "size">
                        <option value = "">Size</option>
                        <option value = "s">S</option>
                        <option value = "m">M</option>
                        <option value = "l">L</option>
                    </select>

                    <button>ADD TO CART</button>
                </div>
                </div>
            </div>
        </div>
    );
}

export default ProductPage;