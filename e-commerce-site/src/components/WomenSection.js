import React from 'react';
import {useState, useEffect} from 'react';

function WomenSection(){

    const [womensProductArray, setWomensProductArray] = useState([
        {src : 'w-product-img1.jpeg', price : '1849.99', h3 : 'Black Snake Dress', p1 : 'Gucci', color : 'black', alias : 'gucci', type : 'top'}, 
        {src : 'w-product-img2.jpeg', price : '1379.99', h3 : 'Tattered Silk Coat', p1 : 'Maison Margiela', color : 'black', alias : 'maison', type : 'top'},
        {src : 'w-product-img3.jpeg', price : '859.99', h3 : 'Royal Gold Gown', p1 : 'Luisa Beccaria', color : 'blue', alias : 'luisa', type : 'top'},
        {src : 'w-product-img4.jpeg', price : '1319.99', h3 : 'Fine Ripped Shirt', p1 : 'Maison Margiela', color : 'black', alias : 'maison', type : 'top'},
        {src : 'w-product-img5.jpeg', price : '2899.99', h3 : 'Renaissance Dress', p1 : 'Simone Rocha', color : 'white', alias : 'simone', type : 'top'},
        {src : 'w-product-img6.jpeg', price : '6599.99', h3 : 'Black Buttoned Overcoat', p1 : 'Yohji Yamamoto', color : 'black', alias : 'yohji', type : 'top'},
        {src : 'w-product-img7.jpeg', price : '779.99', h3 : 'Black Layered Top', p1 : 'Anne Sofie Madsen', color : 'black', alias : 'anne', type : 'top'},
        {src : 'w-product-img8.jpeg', price : '579.99', h3 : 'White Bracelet Sneakers', p1 : 'Comme De Garcons', color : 'white', alias : 'comme', type : 'shoes'},
        {src : 'w-product-img9.jpeg', price : '739.99', h3 : 'Gold and Black Heels', p1 : 'Dolce & Gabbana', color : 'gold', alias : 'dolce', type : 'shoes'},
        {src : 'w-product-img10.jpeg', price : '1239.99', h3 : 'Gold and Pink Floral Heels', p1 : 'Dolce & Gabbana', color : 'gold', alias : 'dolce', type : 'shoes'},
        {src : 'w-product-img11.jpeg', price : '669.99', h3 : 'Stitched Mouse Top', p1 : 'Dolce & Gabbana', color : 'white', alias : 'dolce', type : 'top'},
        {src : 'w-product-img12.jpeg', price : '279.99', h3 : 'Black Emblem Bag', p1 : 'Jean Paul Gaultier', color : 'black', alias : 'jean', type : 'acc'},
        {src : 'w-product-img13.jpeg', price : '339.99', h3 : 'Glitter Skull Bag', p1 : 'Manish Arora', color : 'blue', alias : 'manish', type : 'acc'},
        {src : 'w-product-img14.jpeg', price : '489.99', h3 : 'Portrait Bag', p1 : 'Moschino', color : 'gold', alias : 'moschino', type : 'acc'},
        {src : 'w-product-img15.jpeg', price : '1239.99', h3 : 'Gold Bow Heels', p1 : 'Versace', color : 'gold', alias : 'versace', type : 'shoes'},
        {src : 'w-product-img16.jpeg', price : '2579.99', h3 : 'Black Lace Dress', p1 : 'Valentino', color : 'black', alias : 'valentino', type : 'top'},
        {src : 'w-product-img17.jpeg', price : '899.99', h3 : 'Aged Snake Bag', p1 : 'Valentino', color : 'gold', alias : 'valentino', type : 'acc'},
        {src : 'w-product-img18.jpeg', price : '1529.99', h3 : 'Transparent Stitched Dress', p1 : 'Valentino', color : 'grey', alias : 'valentino', type : 'top'},
    ]);

    let ogWomensProductArray = [
        {src : 'w-product-img1.jpeg', price : '1849.99', h3 : 'Black Snake Dress', p1 : 'Gucci', color : 'black', alias : 'gucci', type : 'top'}, 
        {src : 'w-product-img2.jpeg', price : '1379.99', h3 : 'Tattered Silk Coat', p1 : 'Maison Margiela', color : 'black', alias : 'maison', type : 'top'},
        {src : 'w-product-img3.jpeg', price : '859.99', h3 : 'Royal Gold Gown', p1 : 'Luisa Beccaria', color : 'blue', alias : 'luisa', type : 'top'},
        {src : 'w-product-img4.jpeg', price : '1319.99', h3 : 'Fine Ripped Shirt', p1 : 'Maison Margiela', color : 'black', alias : 'maison', type : 'top'},
        {src : 'w-product-img5.jpeg', price : '2899.99', h3 : 'Renaissance Dress', p1 : 'Simone Rocha', color : 'white', alias : 'simone', type : 'top'},
        {src : 'w-product-img6.jpeg', price : '6599.99', h3 : 'Black Buttoned Overcoat', p1 : 'Yohji Yamamoto', color : 'black', alias : 'yohji', type : 'top'},
        {src : 'w-product-img7.jpeg', price : '779.99', h3 : 'Black Layered Top', p1 : 'Anne Sofie Madsen', color : 'black', alias : 'anne', type : 'top'},
        {src : 'w-product-img8.jpeg', price : '579.99', h3 : 'White Bracelet Sneakers', p1 : 'Comme De Garcons', color : 'white', alias : 'comme', type : 'shoes'},
        {src : 'w-product-img9.jpeg', price : '739.99', h3 : 'Gold and Black Heels', p1 : 'Dolce & Gabbana', color : 'gold', alias : 'dolce', type : 'shoes'},
        {src : 'w-product-img10.jpeg', price : '1239.99', h3 : 'Gold and Pink Floral Heels', p1 : 'Dolce & Gabbana', color : 'gold', alias : 'dolce', type : 'shoes'},
        {src : 'w-product-img11.jpeg', price : '669.99', h3 : 'Stitched Mouse Top', p1 : 'Dolce & Gabbana', color : 'white', alias : 'dolce', type : 'top'},
        {src : 'w-product-img12.jpeg', price : '279.99', h3 : 'Black Emblem Bag', p1 : 'Jean Paul Gaultier', color : 'black', alias : 'jean', type : 'acc'},
        {src : 'w-product-img13.jpeg', price : '339.99', h3 : 'Glitter Skull Bag', p1 : 'Manish Arora', color : 'blue', alias : 'manish', type : 'acc'},
        {src : 'w-product-img14.jpeg', price : '489.99', h3 : 'Portrait Bag', p1 : 'Moschino', color : 'gold', alias : 'moschino', type : 'acc'},
        {src : 'w-product-img15.jpeg', price : '1239.99', h3 : 'Gold Bow Heels', p1 : 'Versace', color : 'gold', alias : 'versace', type : 'shoes'},
        {src : 'w-product-img16.jpeg', price : '2579.99', h3 : 'Black Lace Dress', p1 : 'Valentino', color : 'black', alias : 'valentino', type : 'top'},
        {src : 'w-product-img17.jpeg', price : '899.99', h3 : 'Aged Snake Bag', p1 : 'Valentino', color : 'gold', alias : 'valentino', type : 'acc'},
        {src : 'w-product-img18.jpeg', price : '1529.99', h3 : 'Transparent Stitched Dress', p1 : 'Valentino', color : 'grey', alias : 'valentino', type : 'top'},
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

    //Function to Filter the ProductArray based on User Choice and ReRender Product Catalogue Section
    function handleSelectW1(event){
        //Do Something

        let tempProductArray = [...womensProductArray];

        if(event.target.value === 'sort' || event.target.value === 'default'){
            setWomensProductArray(ogWomensProductArray);
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
            setWomensProductArray(tempProductArray);
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
            setWomensProductArray(tempProductArray);
        }
    }

    //Function to Filter the ProductArray based on User Choice and ReRender Product Catalogue Section
    function handleF2SelectW2(event){
        //Do Something

        let tempProductArrayF2 = [...ogWomensProductArray];

        if(event.target.value === 'all'){
            let filteredProductArray = [...ogWomensProductArray];
            setWomensProductArray(filteredProductArray);
        }
        else if(event.target.value === 'black'){
            let filteredProductArray = tempProductArrayF2.filter((item) => {
                if(item.color === 'black'){
                    return item;
                }
            });
            setWomensProductArray(filteredProductArray);
        }
        else if(event.target.value === 'gold'){
            let filteredProductArray = tempProductArrayF2.filter((item) => {
                if(item.color === 'gold'){
                    return item;
                }
            });
            setWomensProductArray(filteredProductArray);
        }
        else if(event.target.value === 'white'){
            let filteredProductArray = tempProductArrayF2.filter((item) => {
                if(item.color === 'white'){
                    return item;
                }
            });
            setWomensProductArray(filteredProductArray);
        }
        else if(event.target.value === 'blue'){
            let filteredProductArray = tempProductArrayF2.filter((item) => {
                if(item.color === 'blue'){
                    return item;
                }
            });
            setWomensProductArray(filteredProductArray);
        }
        else if(event.target.value === 'grey'){
            let filteredProductArray = tempProductArrayF2.filter((item) => {
                if(item.color === 'grey'){
                    return item;
                }
            });
            setWomensProductArray(filteredProductArray);
        }
    }

    //Function to Filter the ProductArray based on User Choice and ReRender Product Catalogue Section
    function handleF3SelectW3(event){
        //Do Something

        let tempProductArrayF3 = [...ogWomensProductArray];
        let filteredProductArray2 = tempProductArrayF3;

        if(event.target.value === 'all'){
            filteredProductArray2 = [...ogWomensProductArray];
            setWomensProductArray(filteredProductArray2);
        }
        else if(event.target.value === 'jean'){
            filteredProductArray2 = tempProductArrayF3.filter((item) => {
                if(item.alias === 'jean'){
                    return item;
                }
            });
            setWomensProductArray(filteredProductArray2);
        }
        else if(event.target.value === 'maison'){
            filteredProductArray2 = tempProductArrayF3.filter((item) => {
                if(item.alias === 'maison'){
                    return item;
                }
            });
            setWomensProductArray(filteredProductArray2);
        }
        else if(event.target.value === 'comme'){
            filteredProductArray2 = tempProductArrayF3.filter((item) => {
                if(item.alias === 'comme'){
                    return item;
                }
            });
            setWomensProductArray(filteredProductArray2);
        }
        else if(event.target.value === 'moschino'){
            filteredProductArray2 = tempProductArrayF3.filter((item) => {
                if(item.alias === 'moschino'){
                    return item;
                }
            });
            setWomensProductArray(filteredProductArray2);
        }
        else if(event.target.value === 'dolce'){
            filteredProductArray2 = tempProductArrayF3.filter((item) => {
                if(item.alias === 'dolce'){
                    return item;
                }
            });
            setWomensProductArray(filteredProductArray2);
        }
        else if(event.target.value === 'manish'){
            filteredProductArray2 = tempProductArrayF3.filter((item) => {
                if(item.alias === 'manish'){
                    return item;
                }
            });
            setWomensProductArray(filteredProductArray2);
        }
        else if(event.target.value === 'gucci'){
            filteredProductArray2 = tempProductArrayF3.filter((item) => {
                if(item.alias === 'gucci'){
                    return item;
                }
            });
            setWomensProductArray(filteredProductArray2);
        }
        else if(event.target.value === 'luisa'){
            filteredProductArray2 = tempProductArrayF3.filter((item) => {
                if(item.alias === 'luisa'){
                    return item;
                }
            });
            setWomensProductArray(filteredProductArray2);
        }
        else if(event.target.value === 'simone'){
            filteredProductArray2 = tempProductArrayF3.filter((item) => {
                if(item.alias === 'simone'){
                    return item;
                }
            });
            setWomensProductArray(filteredProductArray2);
        }
        else if(event.target.value === 'anne'){
            filteredProductArray2 = tempProductArrayF3.filter((item) => {
                if(item.alias === 'anne'){
                    return item;
                }
            });
            setWomensProductArray(filteredProductArray2);
        }
        else if(event.target.value === 'yohji'){
            filteredProductArray2 = tempProductArrayF3.filter((item) => {
                if(item.alias === 'yohji'){
                    return item;
                }
            });
            setWomensProductArray(filteredProductArray2);
        }
        else if(event.target.value === 'versace'){
            filteredProductArray2 = tempProductArrayF3.filter((item) => {
                if(item.alias === 'versace'){
                    return item;
                }
            });
            setWomensProductArray(filteredProductArray2);
        }
        else if(event.target.value === 'valentino'){
            filteredProductArray2 = tempProductArrayF3.filter((item) => {
                if(item.alias === 'valentino'){
                    return item;
                }
            });
            setWomensProductArray(filteredProductArray2);
        }
    }

    //Function to Filter the ProductArray based on User Choice and ReRender Product Catalogue Section
    function handleF4SelectW4(event){
        //Do Something

        let tempProductArrayF4 = [...ogWomensProductArray];
        let filteredProductArray3 = tempProductArrayF4;

        if(event.target.value === 'all'){
            filteredProductArray3 = [...ogWomensProductArray];
            setWomensProductArray(filteredProductArray3);
        }
        else if(event.target.value === 'top'){
            filteredProductArray3 = tempProductArrayF4.filter((item) => {
                if(item.type === 'top'){
                    return item;
                }
            });
            setWomensProductArray(filteredProductArray3);
        }
        else if(event.target.value === 'shoes'){
            filteredProductArray3 = tempProductArrayF4.filter((item) => {
                if(item.type === 'shoes'){
                    return item;
                }
            });
            setWomensProductArray(filteredProductArray3);
        }
        else if(event.target.value === 'acc'){
            filteredProductArray3 = tempProductArrayF4.filter((item) => {
                if(item.type === 'acc'){
                    return item;
                }
            });
            setWomensProductArray(filteredProductArray3);
        }
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
                    <option value = "dolce">Dolce & Gabbana</option>
                    <option value = "manish">Manish Arora</option>
                    <option value = "moschino">Moschino</option>
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