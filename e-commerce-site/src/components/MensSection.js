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
                    <img src = "" alt = "Red Faces Shirt" />
                    <p>$2552.99</p>
                </div>

                <div className = "product2">
                    <img src = "" alt = "Butterfly Suit" />
                    <p>$979.99</p>
                </div>

                <div className = "product3">
                    <img src = "" alt = "Balenciaga Boots" />
                    <p>$797.99</p>
                </div>

                <div className = "product4">
                    <img src = "" alt = "Burberry Jacket" />
                    <p>$779.99</p>
                </div>

                <div className = "product5">
                    <img src = "" alt = "Gold Leaf Jacket" />
                    <p>$3779.99</p>
                </div>

                <div className = "product6">
                    <img src = "" alt = "Snake Coat" />
                    <p>$3779.99</p>
                </div>

                <div className = "product7">
                    <img src = "" alt = "Bee Pin" />
                    <p>$279.99</p>
                </div>

                <div className = "product8">
                    <img src = "" alt = "React Shoes" />
                    <p>$349.99</p>
                </div>

                <div className = "product9">
                    <img src = "" alt = "Potrait Jacket" />
                    <p>$6349.99</p>
                </div>

                <div className = "product10">
                    <img src = "" alt = "Red Girl Shirt" />
                    <p>$1349.99</p>
                </div>

                <div className = "product11">
                    <img src = "" alt = "RS Pink Jacket" />
                    <p>$1149.99</p>
                </div>

                <div className = "product12">
                    <img src = "" alt = "Playing Card Pants" />
                    <p>$949.99</p>
                </div>

                <div className = "product13">
                    <img src = "" alt = "Castle Backpack" />
                    <p>$699.99</p>
                </div>

                <div className = "product14">
                    <img src = "" alt = "Black Potrait Jacket" />
                    <p>$1299.99</p>
                </div>

                <div className = "product15">
                    <img src = "" alt = "Face Long Sleeve" />
                    <p>$699.99</p>
                </div>
            </div>
        </div>
    );
}

export default MensSection;