import React from 'react';
import {useState} from 'react';
import {useEffect} from 'react';

function MensSection(){
    return(
        <div className = "mens">
        <div className = "mens-section">
            <div className = "mens-title">
                <h1>MEN'S</h1>
            </div>

            <div className = "filters">
                <div className = "filter-1">
                    <p>Sort</p>
                    <button>+</button>
                </div>

                <div className = "filter-2">
                    <p>All Colors</p>
                    <button>+</button>
                </div>

                <div className = "filter-3">
                    <p>All Brands</p>
                    <button>+</button>
                </div>

                <div className = "filter-4">
                    <p>All Types</p>
                    <button>+</button>
                </div>
            </div>

        </div>
        <div className = "product-catalogue-container">
                <div className = "product1">
                    <img src = "product-img1.jpeg" alt = "Red Faces Shirt" />
                    <p>$2552.99</p>
                </div>

                <div className = "product2">
                    <img src = "product-img2.jpeg" alt = "Butterfly Suit" />
                    <p>$979.99</p>
                </div>

                <div className = "product3">
                    <img id = "testImg" src = "product-img3.jpeg" alt = "Balenciaga Boots" />
                    <p>$797.99</p>
                </div>

                <div className = "product4">
                    <img src = "product-img4.jpeg" alt = "Burberry Jacket" />
                    <p>$779.99</p>
                </div>

                <div className = "product5">
                    <img src = "product-img5.jpeg" alt = "Gold Leaf Jacket" />
                    <p>$3779.99</p>
                </div>

                <div className = "product6">
                    <img src = "product-img6.jpeg" alt = "Snake Coat" />
                    <p>$3779.99</p>
                </div>

                <div className = "product7">
                    <img src = "product-img7.jpeg" alt = "Bee Pin" />
                    <p>$279.99</p>
                </div>

                <div className = "product8">
                    <img src = "product-img8.jpeg" alt = "React Shoes" />
                    <p>$349.99</p>
                </div>

                <div className = "product9">
                    <img src = "product-img9.jpeg" alt = "Potrait Jacket" />
                    <p>$6349.99</p>
                </div>

                <div className = "product10">
                    <img src = "product-img10.jpeg" alt = "Red Girl Shirt" />
                    <p>$1349.99</p>
                </div>

                <div className = "product11">
                    <img src = "product-img11.jpeg" alt = "RS Pink Jacket" />
                    <p>$1149.99</p>
                </div>

                <div className = "product12">
                    <img src = "product-img12.jpeg" alt = "Playing Card Pants" />
                    <p>$949.99</p>
                </div>

                <div className = "product13">
                    <img src = "product-img13.jpeg" alt = "Castle Backpack" />
                    <p>$699.99</p>
                </div>

                <div className = "product14">
                    <img src = "product-img14.jpeg" alt = "Black Potrait Jacket" />
                    <p>$1299.99</p>
                </div>

                <div className = "product15">
                    <img src = "product-img15.jpeg" alt = "Face Long Sleeve" />
                    <p>$699.99</p>
                </div>
            </div>
        </div>
    );
}

export default MensSection;