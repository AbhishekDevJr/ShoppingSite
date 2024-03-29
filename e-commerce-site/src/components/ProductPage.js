import React from 'react';

function ProductPage(props){

    let styleObj = {
        backgroundImage : `linear-gradient(transparent,100%,#000),linear-gradient(90deg,transparent,90%,#000),linear-gradient(270deg,transparent,90%,#000),url(${props.imgSrc})`,
    };

    function handleAddToCart(event){
        const selectDomNode = document.querySelector('#size');
        console.log(selectDomNode.value, typeof(selectDomNode.value));
        if(selectDomNode.value === ''){
            alert('Please select a size.');
        }
        else{
            //Do Something
            props.cartDetailsFunc(props.imgSrc, props.title, props.price, 1, selectDomNode.value);
            alert('Item added to Cart.');
        }
    }

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
                        <option value = "S">S</option>
                        <option value = "M">M</option>
                        <option value = "L">L</option>
                    </select>

                    <button onClick = {handleAddToCart}>ADD TO CART</button>
                </div>
                </div>
            </div>
        </div>
    );
}

export default ProductPage;