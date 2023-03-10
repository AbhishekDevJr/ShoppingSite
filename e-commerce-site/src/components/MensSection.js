import React from 'react';
import {useState} from 'react';
import {useEffect} from 'react';

function MensSection(){

    const [someProductArray, setSomeProductArray] = useState([
{src : 'product-img1.jpeg', price : '2552.99', h3 : 'Red Faces Shirt', p1 : 'Jean Paul Gaultier'}, 
{src : 'product-img2.jpeg', price : '979.99', h3 : 'Butterfly Suit', p1 : 'Alexander McQueen'},
{src : 'product-img3.jpeg', price : '797.99', h3 : 'Balenciaga Boots', p1 : 'Balenciaga'},
{src : 'product-img4.jpeg', price : '779.99', h3 : 'Burberry Jacket', p1 : 'Burberry'},
{src : 'product-img5.jpeg', price : '3779.99', h3 : 'Gold Leaf Jacket', p1 : 'Dolce & Gabbana'},
{src : 'product-img6.jpeg', price : '3779.99', h3 : 'Snake Coat', p1 : 'Dries Van Noten'},
{src : 'product-img7.jpeg', price : '279.99', h3 : 'Bee Pin', p1 : 'Gucci'},
{src : 'product-img8.jpeg', price : '349.99', h3 : 'React Shoes', p1 : 'Nike'},
{src : 'product-img9.jpeg', price : '6349.99', h3 : 'Potrait Jacket', p1 : 'Raf Simons'},
{src : 'product-img10.jpeg', price : '1349.99', h3 : 'Red Girl Shirt', p1 : 'Raf Simons'},
{src : 'product-img11.jpeg', price : '1149.99', h3 : 'RS Pink Jacket', p1 : 'Raf Simons'},
{src : 'product-img12.jpeg', price : '949.99', h3 : 'Playing Card Pants', p1 : 'Undercover'},
{src : 'product-img13.jpeg', price : '699.99', h3 : 'Castle Backpack', p1 : 'Undercover'},
{src : 'product-img14.jpeg', price : '1299.99', h3 : 'Black Potrait Jacket', p1 : 'Undercover'},
{src : 'product-img15.jpeg', price : '699.99', h3 : 'Face Long Sleeve', p1 : 'Yohji Yamamoto'},
    ]);

    let productArray = [
        {src : 'product-img1.jpeg', price : '2552.99', h3 : 'Red Faces Shirt', p1 : 'Jean Paul Gaultier'}, 
        {src : 'product-img2.jpeg', price : '979.99', h3 : 'Butterfly Suit', p1 : 'Alexander McQueen'},
        {src : 'product-img3.jpeg', price : '797.99', h3 : 'Balenciaga Boots', p1 : 'Balenciaga'},
        {src : 'product-img4.jpeg', price : '779.99', h3 : 'Burberry Jacket', p1 : 'Burberry'},
        {src : 'product-img5.jpeg', price : '3779.99', h3 : 'Gold Leaf Jacket', p1 : 'Dolce & Gabbana'},
        {src : 'product-img6.jpeg', price : '3779.99', h3 : 'Snake Coat', p1 : 'Dries Van Noten'},
        {src : 'product-img7.jpeg', price : '279.99', h3 : 'Bee Pin', p1 : 'Gucci'},
        {src : 'product-img8.jpeg', price : '349.99', h3 : 'React Shoes', p1 : 'Nike'},
        {src : 'product-img9.jpeg', price : '6349.99', h3 : 'Potrait Jacket', p1 : 'Raf Simons'},
        {src : 'product-img10.jpeg', price : '1349.99', h3 : 'Red Girl Shirt', p1 : 'Raf Simons'},
        {src : 'product-img11.jpeg', price : '1149.99', h3 : 'RS Pink Jacket', p1 : 'Raf Simons'},
        {src : 'product-img12.jpeg', price : '949.99', h3 : 'Playing Card Pants', p1 : 'Undercover'},
        {src : 'product-img13.jpeg', price : '699.99', h3 : 'Castle Backpack', p1 : 'Undercover'},
        {src : 'product-img14.jpeg', price : '1299.99', h3 : 'Black Potrait Jacket', p1 : 'Undercover'},
        {src : 'product-img15.jpeg', price : '699.99', h3 : 'Face Long Sleeve', p1 : 'Yohji Yamamoto'},
    ];

    


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

    //Rerenders the Product Catalogue by change State Array according to user Filter Choice
    function handleSelect(event){
        console.log(event.target, event.currentTarget, event.target.value);
        let tempProductArray = [...someProductArray];

        if(event.target.value === 'sort' || event.target.value === 'default'){
            setSomeProductArray(productArray);
        }
        else if(event.target.value === 'lowToHigh'){
            console.log('Getting in lowTohigh block');
            tempProductArray.sort((a, b) => {
                a = Number(a.price);
                b = Number(b.price);
                if(a > b){
                    return 1;
                }
                else if(a === b){
                    return 0;
                }
                else{
                    return -1;
                }
            });
            console.log(productArray);
            setSomeProductArray(tempProductArray);
        }
        else if(event.target.value === 'highToLow'){
            tempProductArray.sort((a, b) => {
                a = Number(a.price);
                b = Number(b.price);
                if(a > b){
                    return -1;
                }
                else if(a === b){
                    return 0
                }
                else{
                    return 1;
                }
            });
            setSomeProductArray(tempProductArray);
        }
    }

    return(
        <div className = "mens">
        <div className = "mens-section">
            <div className = "mens-title">
                <h1>MEN'S</h1>
            </div>

            <div className = "filters">
                <div className = "filter-1">

                    <select name = "sort1" id ="sortF1" onChange = {handleSelect}>
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
                {someProductArray.map((item, index) => {
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

export default MensSection;