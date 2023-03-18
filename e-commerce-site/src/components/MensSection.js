import React from 'react';
import {useState} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
// import {useEffect} from 'react';

function MensSection(props){

    const [someProductArray, setSomeProductArray] = useState([
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

    // const[productRoute, setProductRoute] = useState('');

    let productArray = [
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
        event.currentTarget.lastChild.style.zIndex = '0';
    }

    //Rerenders the Product Catalogue by change State Array according to user Filter Choice
    function handleSelect(event){
        // console.log(event.target, event.currentTarget, event.target.value);
        // let tempOgProductArray = [...someProductArray];
        let tempProductArray = [...someProductArray];

        if(event.target.value === 'sort' || event.target.value === 'default'){
            setSomeProductArray(productArray);
        }
        else if(event.target.value === 'lowToHigh'){
            // console.log('Getting in lowTohigh block');
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
            // console.log(productArray);
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

    //Rerenders Product Catalogue based on Filter applied by the User by changing State Array variable
    function handleF2Select(event){
        // console.log(event, event.target, event.currentTarget, event.target.value);
        // let ogProductArray = [...productArray];
        let tempProductArrayF2 = [...productArray];

        if(event.target.value === 'all'){
            let filteredProductArray = [...productArray];
            setSomeProductArray(filteredProductArray);
        }
        else if(event.target.value === 'red'){
            let filteredProductArray = tempProductArrayF2.filter((item) => {
                if(item.color === 'red'){
                    return item;
                }
            });
            setSomeProductArray(filteredProductArray);
        }
        else if(event.target.value === 'black'){
            let filteredProductArray = tempProductArrayF2.filter((item) => {
                if(item.color === 'black'){
                    return item;
                }
            });
            setSomeProductArray(filteredProductArray);
        }
        else if(event.target.value === 'brown'){
            let filteredProductArray = tempProductArrayF2.filter((item) => {
                if(item.color === 'brown'){
                    return item;
                }
            });
            setSomeProductArray(filteredProductArray);
        }
        else if(event.target.value === 'gold'){
            let filteredProductArray = tempProductArrayF2.filter((item) => {
                if(item.color === 'gold'){
                    return item;
                }
            });
            setSomeProductArray(filteredProductArray);
        }
        else if(event.target.value === 'blue'){
            let filteredProductArray = tempProductArrayF2.filter((item) => {
                if(item.color === 'blue'){
                    return item;
                }
            });
            setSomeProductArray(filteredProductArray);
        }
        else if(event.target.value === 'grey'){
            let filteredProductArray = tempProductArrayF2.filter((item) => {
                if(item.color === 'grey'){
                    return item;
                }
            });
            setSomeProductArray(filteredProductArray);
        }
    }

    //ReRenders Product Catalogue with filtered products based on filter applied by the User
    function handleF3Select(event){
        // console.log(event, event.target, event.currentTarget, event.target.value);
        // let ogProductArray2 = [...productArray];
        let tempProductArrayF3 = [...productArray];
        let filteredProductArray2 = tempProductArrayF3;

        if(event.target.value === 'all'){
            filteredProductArray2 = [...productArray];
            setSomeProductArray(filteredProductArray2);
        }
        else if(event.target.value === 'jean'){
            filteredProductArray2 = tempProductArrayF3.filter((item) => {
                if(item.alias === 'jean'){
                    return item;
                }
            });
            setSomeProductArray(filteredProductArray2);
        }
        else if(event.target.value === 'alex'){
            filteredProductArray2 = tempProductArrayF3.filter((item) => {
                if(item.alias === 'alex'){
                    return item;
                }
            });
            setSomeProductArray(filteredProductArray2);
        }
        else if(event.target.value === 'balen'){
            filteredProductArray2 = tempProductArrayF3.filter((item) => {
                if(item.alias === 'balen'){
                    return item;
                }
            });
            setSomeProductArray(filteredProductArray2);
        }
        else if(event.target.value === 'bur'){
            filteredProductArray2 = tempProductArrayF3.filter((item) => {
                if(item.alias === 'bur'){
                    return item;
                }
            });
            setSomeProductArray(filteredProductArray2);
        }
        else if(event.target.value === 'dolce'){
            filteredProductArray2 = tempProductArrayF3.filter((item) => {
                if(item.alias === 'dolce'){
                    return item;
                }
            });
            setSomeProductArray(filteredProductArray2);
        }
        else if(event.target.value === 'dries'){
            filteredProductArray2 = tempProductArrayF3.filter((item) => {
                if(item.alias === 'dries'){
                    return item;
                }
            });
            setSomeProductArray(filteredProductArray2);
        }
        else if(event.target.value === 'gucci'){
            filteredProductArray2 = tempProductArrayF3.filter((item) => {
                if(item.alias === 'gucci'){
                    return item;
                }
            });
            setSomeProductArray(filteredProductArray2);
        }
        else if(event.target.value === 'nike'){
            filteredProductArray2 = tempProductArrayF3.filter((item) => {
                if(item.alias === 'nike'){
                    return item;
                }
            });
            setSomeProductArray(filteredProductArray2);
        }
        else if(event.target.value === 'raf'){
            filteredProductArray2 = tempProductArrayF3.filter((item) => {
                if(item.alias === 'raf'){
                    return item;
                }
            });
            setSomeProductArray(filteredProductArray2);
        }
        else if(event.target.value === 'under'){
            filteredProductArray2 = tempProductArrayF3.filter((item) => {
                if(item.alias === 'under'){
                    return item;
                }
            });
            setSomeProductArray(filteredProductArray2);
        }
        else if(event.target.value === 'yohji'){
            filteredProductArray2 = tempProductArrayF3.filter((item) => {
                if(item.alias === 'yohji'){
                    return item;
                }
            });
            setSomeProductArray(filteredProductArray2);
        }
    }

    function handleF4Select(event){
        console.log(event, event.target, event.currentTarget, event.target.value);

        let tempProductArrayF4 = [...productArray];
        let filteredProductArray3 = tempProductArrayF4;

        if(event.target.value === 'all'){
            filteredProductArray3 = [...productArray];
            setSomeProductArray(filteredProductArray3);
        }
        else if(event.target.value === 'top'){
            filteredProductArray3 = tempProductArrayF4.filter((item) => {
                if(item.type === 'top'){
                    return item;
                }
            });
            setSomeProductArray(filteredProductArray3);
        }
        else if(event.target.value === 'shoes'){
            filteredProductArray3 = tempProductArrayF4.filter((item) => {
                if(item.type === 'shoes'){
                    return item;
                }
            });
            setSomeProductArray(filteredProductArray3);
        }
        else if(event.target.value === 'acc'){
            filteredProductArray3 = tempProductArrayF4.filter((item) => {
                if(item.type === 'acc'){
                    return item;
                }
            });
            setSomeProductArray(filteredProductArray3);
        }
        else if(event.target.value === 'bott'){
            filteredProductArray3 = tempProductArrayF4.filter((item) => {
                if(item.type === 'bott'){
                    return item;
                }
            });
            setSomeProductArray(filteredProductArray3);
        }
    }

    let productRouteLink = '';
    let productSrc = '';
    let productBrand = '';
    let productPrice = '';
    // let realProductRouteLink = '';

    function handleLinkClick(event){
        // event.preventDefault();
        event.stopPropagation();
        // console.log('Product Link was clicked', event.currentTarget.firstChild.lastChild.textContent);

        productRouteLink = event.currentTarget.firstChild.firstChild.nextSibling.firstChild.textContent;
        // realProductRouteLink = productRouteLink.replaceAll(' ', '');
        // console.log(realProductRouteLink);
        // setProductRoute(realProductRouteLink);
        // console.log('route state--> ', productRoute);
        productBrand = event.currentTarget.firstChild.firstChild.nextSibling.firstChild.nextSibling.textContent;
        productPrice = event.currentTarget.firstChild.lastChild.textContent;
        productSrc = event.currentTarget.firstChild.firstChild.src;
        console.log('Product Link was clicked', productRouteLink, productBrand, productPrice, productSrc);
        
        props.someFunction(productRouteLink, productBrand, productPrice, productSrc);
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
                    
                    <select name = "sort2" id ="sortF2" onChange = {handleF2Select}>
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
                    
                    <select name = "sort3" id ="sortF3" onChange = {handleF3Select}>
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
                    
                    <select name = "sort2" id ="sortF4" onChange = {handleF4Select}>
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
                {someProductArray.map((item, index) => {
                    return(
            <Link key = {index} className = "reactLinks" to = "/productPage" onClick = {handleLinkClick}>
            <div key = {index} className = "productCommonStyle" onMouseEnter={handlePointerEnter} onMouseLeave = {handlePointerLeave}>
                <img src = {item.src} alt = {item.h3} />
                <div className = "product-info">
                    <h3>{item.h3}</h3>
                    <p>{item.p1}</p>
                    <p id = "smallP">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, nemo!</p>
                </div>
                <p className = "price">${item.price}</p>
            </div>
            </Link>
                    );
                })}
            </div>
        </div>
    );
}

export default MensSection;