import React from 'react';
import {useState, useEffect} from 'react';

function WomenSection(){

    const [womensProductArray, setWomensProductArray] = useState([
        {src : 'product-img1.jpeg', price : '2552.99', h3 : 'Red Faces Shirt', p1 : 'Jean Paul Gaultier', color : 'red', alias : 'jean', type : 'top'}, 
        {src : 'product-img2.jpeg', price : '979.99', h3 : 'Butterfly Suit', p1 : 'Alexander McQueen', color : 'black', alias : 'alex', type : 'top'},
        {src : 'product-img3.jpeg', price : '797.99', h3 : 'Balenciaga Boots', p1 : 'Balenciaga', color : 'black', alias : 'balen', type : 'shoes'},
        {src : 'product-img4.jpeg', price : '779.99', h3 : 'Burberry Jacket', p1 : 'Burberry', color : 'brown', alias : 'bur', type : 'top'},
        {src : 'product-img5.jpeg', price : '3779.99', h3 : 'Gold Leaf Jacket', p1 : 'Dolce & Gabbana', color : 'gold', alias : 'dolce', type : 'top'},
        {src : 'product-img6.jpeg', price : '3779.99', h3 : 'Snake Coat', p1 : 'Dries Van Noten', color : 'blue', alias : 'dries', type : 'top'},
        {src : 'product-img7.jpeg', price : '279.99', h3 : 'Bee Pin', p1 : 'Gucci', color : 'gold', alias : 'gucci', type : 'acc'},
        {src : 'product-img8.jpeg', price : '349.99', h3 : 'React Shoes', p1 : 'Nike', color : 'red', alias : 'nike', type : 'shoes'},
        {src : 'product-img9.jpeg', price : '6349.99', h3 : 'Potrait Jacket', p1 : 'Raf Simons', color : 'black', alias : 'raf', type : 'top'},
        {src : 'product-img10.jpeg', price : '1349.99', h3 : 'Red Girl Shirt', p1 : 'Raf Simons', color : 'red', alias : 'raf', type : 'top'},
        {src : 'product-img11.jpeg', price : '1149.99', h3 : 'RS Pink Jacket', p1 : 'Raf Simons', color : 'red', alias : 'raf', type : 'top'},
        {src : 'product-img12.jpeg', price : '949.99', h3 : 'Playing Card Pants', p1 : 'Undercover', color : 'black', alias : 'under', type : 'bott'},
        {src : 'product-img13.jpeg', price : '699.99', h3 : 'Castle Backpack', p1 : 'Undercover', color : 'grey', alias : 'under', type : 'acc'},
        {src : 'product-img14.jpeg', price : '1299.99', h3 : 'Black Potrait Jacket', p1 : 'Undercover', color : 'filter', alias : 'under', type : 'top'},
        {src : 'product-img15.jpeg', price : '699.99', h3 : 'Face Long Sleeve', p1 : 'Yohji Yamamoto', color : 'red', alias : 'yohji', type : 'top'},
    ]);

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

    function handleSelectW1(event){
        //Do Something
    }

    function handleF2SelectW2(event){
        //Do Something
    }

    function handleF3SelectW3(event){
        //Do Something
    }

    function handleF4SelectW4(event){
        //Do Something
    }

    return(
    <div className = "women">
        <div className = "womens-section">
            <div className = "mens-title">
                <h1>WOMEN'S</h1>
            </div>

            <div className = "filters">
                <div className = "filter-1">

                <select name = "sort1" id ="sortF1" onChange = {handleSelectW1}>
                    <option value = "sort">Sort</option>
                    <option value = "default">Default</option>
                    <option value = "lowToHigh">Price: Low to High</option>
                    <option value = "highToLow">Price: High to Low</option>
                </select>
                </div>

                <div className = "filter-2">
                
                <select name = "sort2" id ="sortF2" onChange = {handleF2SelectW2}>
                    <option value = "all">All Colors</option>
                    <option value = "white">White</option>
                    <option value = "black">Black</option>
                    <option value = "gold">Gold</option>
                    <option value = "blue">Blue</option>
                    <option value = "grey">Grey</option>
                </select>
                </div>

                <div className = "filter-3">
                
                <select name = "sort3" id ="sortF3" onChange = {handleF3SelectW3}>
                    <option value = "all">All Brands</option>
                    <option value = "gucci">Gucci</option>
                    <option value = "simone">Simone Rocha</option>
                    <option value = "maison">Maison Margiela</option>
                    <option value = "luisa">Luisa Beccaria</option>
                    <option value = "anne">Anne Sofie Madsen</option>
                    <option value = "comme">Comme De Garcons</option>
                    <option value = "jean">Jean Paul Gaultier</option>
                    <option value = "dolce">Dolce Gabbana</option>
                    <option value = "manish">Manish Arora</option>
                    <option value = "moshchino">Moshchino</option>
                    <option value = "versace">Versace</option>
                    <option value = "valentino">Valentino</option>
                    <option value = "yohji">Yohji Yamamoto</option>
                </select>
                </div>

                <div className = "filter-4">
                
                <select name = "sort2" id ="sortF4" onChange = {handleF4SelectW4}>
                    <option value = "all">All Types</option>
                    <option value = "top">Top</option>
                    <option value = "shoes">Shoes</option>
                    <option value = "acc">Accessories</option>
                    <option value = "bott">Bottom</option>
                </select>
                </div>

            </div>

        </div>

        <div className = "product-catalogue-container">
                {womensProductArray.map((item, index) => {
                    return(
            <div key = {index} className = "productCommonStyle" onMouseEnter={handlePointerEnter} onMouseLeave = {handlePointerLeave}>
                <img src = {item.src} alt = {item.h3} />
                <div className = "product-info">
                    <h3>{item.h3}</h3>
                    <p>{item.p1}</p>
                    <p id = "smallP">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, nemo!</p>
                </div>
                <p className = "price">${item.price}</p>
            </div>
                    );
                })}
            </div>
    </div>
    );
}

export default WomenSection;