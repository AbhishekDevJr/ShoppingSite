import React from 'react';
import {useState} from 'react';
import {useEffect} from 'react';

function MensSection(){

    //Fetches the HTML Node on which event was triggered & Applies hover styles to child elements
    function handlePointerEnter(event){
        event.preventDefault();
        event.stopPropagation();
        // console.log('Event-->', event.currentTarget, event.currentTarget.lastChild, event.currentTarget.firstChild);

        //Product Info Div
        event.currentTarget.firstChild.nextSibling.style.display = 'flex';

        //Product Img element
        event.currentTarget.firstChild.style.transform = 'scale(1.1)';

        //Product Price p element
        event.currentTarget.lastChild.style.backgroundColor = 'white';
        event.currentTarget.lastChild.style.color = 'gray';
        event.currentTarget.lastChild.style.zIndex = '100';
    }

    //Fetches the HTML Node on which event was triggered & Removes hover styles to child elements
    function handlePointerLeave(event){

        //Product Info Div
        event.currentTarget.firstChild.nextSibling.style.display = 'none';

        //Product Img element
        event.currentTarget.firstChild.style.transform = 'scale(1)';

        //Product Price p element
        event.currentTarget.lastChild.style.backgroundColor = 'inherit';
        event.currentTarget.lastChild.style.color = 'inherit';
    }

    return(
        <div className = "mens">
        <div className = "mens-section">
            <div className = "mens-title">
                <h1>MEN'S</h1>
            </div>

            <div className = "filters">
                <div className = "filter-1">

                    <select name = "sort1" id ="sortF1">
                        <option value = "sort">Sort</option>
                        <option value = "default">Default</option>
                        <option value = "lowToHigh">Price: Low to High</option>
                        <option value = "highToLow">Price: High to Low</option>
                    </select>
                </div>

                <div className = "filter-2">
                    
                    <select name = "sort2" id ="sortF2">
                        <option value = "all">All Colors</option>
                        <option value = "red">Red</option>
                        <option value = "black">Black</option>
                        <option value = "brown">Brown</option>
                        <option value = "gold">Gold</option>
                        <option value = "blue">Blue</option>
                        <option value = "grey">Grey</option>
                    </select>
                </div>

                <div className = "filter-3">
                    
                    <select name = "sort3" id ="sortF3">
                        <option value = "all">All Brands</option>
                        <option value = "jean">Jean Paul Gaultier</option>
                        <option value = "alex">Alexander McQueen</option>
                        <option value = "balen">Balenciaga</option>
                        <option value = "bur">Burberry</option>
                        <option value = "dolce">Dolce Gabbana</option>
                        <option value = "dries">Dries Van Noten</option>
                        <option value = "gucci">Gucci</option>
                        <option value = "nike">Nike</option>
                        <option value = "raf">Raf Simons</option>
                        <option value = "under">Undercover</option>
                        <option value = "yohji">Yohji Yamamoto</option>
                    </select>
                </div>

                <div className = "filter-4">
                    
                    <select name = "sort2" id ="sortF2">
                        <option value = "all">All Types</option>
                        <option value = "top">Top</option>
                        <option value = "shoes">Shoes</option>
                        <option value = "acc">Accessories</option>
                        <option value = "bottom">Bottom</option>
                    </select>
                </div>

            </div>

        </div>
        <div className = "product-catalogue-container">
                <div className = "product1 productCommonStyle" onMouseEnter={handlePointerEnter} onMouseLeave = {handlePointerLeave}>
                    <img src = "product-img1.jpeg" alt = "Red Faces Shirt" />
                    <div className = "product-info">
                        <h3>Red Faces Shirt</h3>
                        <p>Jean Paul Gaultier</p>
                        <p id = "smallP">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, nemo!</p>
                    </div>
                    <p className = "price">$2552.99</p>
                </div>

                <div className = "product2 productCommonStyle" onMouseEnter={handlePointerEnter} onMouseLeave = {handlePointerLeave}>
                    <img src = "product-img2.jpeg" alt = "Butterfly Suit" />
                    <div className = "product-info">
                        <h3>Butterfly Suit</h3>
                        <p>Alexander McQueen</p>
                        <p id = "smallP">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, nemo!</p>
                    </div>
                    <p className = "price">$979.99</p>
                </div>

                <div className = "product3 productCommonStyle" onMouseEnter={handlePointerEnter} onMouseLeave = {handlePointerLeave}>
                    <img id = "testImg" src = "product-img3.jpeg" alt = "Balenciaga Boots" />
                    <div className = "product-info">
                        <h3>Balenciaga Boots</h3>
                        <p>Balenciaga</p>
                        <p id = "smallP">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, nemo!</p>
                    </div>
                    <p className = "price">$797.99</p>
                </div>

                <div className = "product4 productCommonStyle" onMouseEnter={handlePointerEnter} onMouseLeave = {handlePointerLeave}>
                    <img src = "product-img4.jpeg" alt = "Burberry Jacket" />
                    <div className = "product-info">
                        <h3>Burberry Jacket</h3>
                        <p>Burberry</p>
                        <p id = "smallP">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, nemo!</p>
                    </div>
                    <p className = "price">$779.99</p>
                </div>

                <div className = "product5 productCommonStyle" onMouseEnter={handlePointerEnter} onMouseLeave = {handlePointerLeave}>
                    <img src = "product-img5.jpeg" alt = "Gold Leaf Jacket" />
                    <div className = "product-info">
                        <h3>Gold Leaf Jacket</h3>
                        <p>Dolce & Gabbana</p>
                        <p id = "smallP">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, nemo!</p>
                    </div>
                    <p className = "price">$3779.99</p>
                </div>

                <div className = "product6 productCommonStyle" onMouseEnter={handlePointerEnter} onMouseLeave = {handlePointerLeave}>
                    <img src = "product-img6.jpeg" alt = "Snake Coat" />
                    <div className = "product-info">
                        <h3>Snake Coat</h3>
                        <p>Dries Van Noten</p>
                        <p id = "smallP">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, nemo!</p>
                    </div>
                    <p className = "price">$3779.99</p>
                </div>

                <div className = "product7 productCommonStyle" onMouseEnter={handlePointerEnter} onMouseLeave = {handlePointerLeave}>
                    <img src = "product-img7.jpeg" alt = "Bee Pin" />
                    <div className = "product-info">
                        <h3>Bee Pin</h3>
                        <p>Gucci</p>
                        <p id = "smallP">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, nemo!</p>
                    </div>
                    <p className = "price">$279.99</p>
                </div>

                <div className = "product8 productCommonStyle" onMouseEnter={handlePointerEnter} onMouseLeave = {handlePointerLeave}>
                    <img src = "product-img8.jpeg" alt = "React Shoes" />
                    <div className = "product-info">
                        <h3>React Shoes</h3>
                        <p>Nike</p>
                        <p id = "smallP">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, nemo!</p>
                    </div>
                    <p className = "price">$349.99</p>
                </div>

                <div className = "product9 productCommonStyle" onMouseEnter={handlePointerEnter} onMouseLeave = {handlePointerLeave}>
                    <img src = "product-img9.jpeg" alt = "Potrait Jacket" />
                    <div className = "product-info">
                        <h3>Potrait Jacket</h3>
                        <p>Raf Simons</p>
                        <p id = "smallP">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, nemo!</p>
                    </div>
                    <p className = "price">$6349.99</p>
                </div>

                <div className = "product10 productCommonStyle" onMouseEnter={handlePointerEnter} onMouseLeave = {handlePointerLeave}>
                    <img src = "product-img10.jpeg" alt = "Red Girl Shirt" />
                    <div className = "product-info">
                        <h3>Red Girl Shirt</h3>
                        <p>Raf Simons</p>
                        <p id = "smallP">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, nemo!</p>
                    </div>
                    <p className = "price">$1349.99</p>
                </div>

                <div className = "product11 productCommonStyle" onMouseEnter={handlePointerEnter} onMouseLeave = {handlePointerLeave}>
                    <img src = "product-img11.jpeg" alt = "RS Pink Jacket" />
                    <div className = "product-info">
                        <h3>RS Pink Jacket</h3>
                        <p>Raf Simons</p>
                        <p id = "smallP">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, nemo!</p>
                    </div>
                    <p className = "price">$1149.99</p>
                </div>

                <div className = "product12 productCommonStyle" onMouseEnter={handlePointerEnter} onMouseLeave = {handlePointerLeave}>
                    <img src = "product-img12.jpeg" alt = "Playing Card Pants" />
                    <div className = "product-info">
                        <h3>Playing Card Pants</h3>
                        <p>Undercover</p>
                        <p id = "smallP">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, nemo!</p>
                    </div>
                    <p className = "price">$949.99</p>
                </div>

                <div className = "product13 productCommonStyle" onMouseEnter={handlePointerEnter} onMouseLeave = {handlePointerLeave}>
                    <img src = "product-img13.jpeg" alt = "Castle Backpack" />
                    <div className = "product-info">
                        <h3>Castle Backpack</h3>
                        <p>Undercover</p>
                        <p id = "smallP">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, nemo!</p>
                    </div>
                    <p className = "price">$699.99</p>
                </div>

                <div className = "product14 productCommonStyle" onMouseEnter={handlePointerEnter} onMouseLeave = {handlePointerLeave}>
                    <img src = "product-img14.jpeg" alt = "Black Potrait Jacket" />
                    <div className = "product-info">
                        <h3>Black Potrait Jacket</h3>
                        <p>Undercover</p>
                        <p id = "smallP">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, nemo!</p>
                    </div>
                    <p className = "price">$1299.99</p>
                </div>

                <div className = "product15 productCommonStyle" onMouseEnter={handlePointerEnter} onMouseLeave = {handlePointerLeave}>
                    <img src = "product-img15.jpeg" alt = "Face Long Sleeve" />
                    <div className = "product-info">
                        <h3>Face Long Sleeve</h3>
                        <p>Yohji Yamamoto</p>
                        <p id = "smallP">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, nemo!</p>
                    </div>
                    <p className = "price">$699.99</p>
                </div>
            </div>
        </div>
    );
}

export default MensSection;