import React from 'react';

function ProductPage(props){
    return(
        <div className = "productDiv">
            <div className = "product-img"></div>
            <div className = "product-info">
                <div className = "product-info-top">
                    <p>{props.brand}</p>
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
    );
}

export default ProductPage;