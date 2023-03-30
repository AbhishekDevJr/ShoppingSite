import React from "react";

function CheckOutPage(){
    return(
        <div className = "checkOut-container">
            <div className = "checkout-top">
                <h1>SHOPPING CART</h1>
            </div>
            <div className = "checkout-bottom">
                <div className = "checkout-summary">
                    <div className = "summary-row1">
                        <p>ORDER SUMMARY</p>
                    </div>
                    <div className = "summary-row2">
                        <div className = "row2-top">
                            <p>Subtotal: 0.00</p>
                            <p>Shipping: $15</p>
                            <p>Tax: $0.00</p>
                        </div>
                        <div className = "row2-bottom">
                            <p>Total: $0.00</p>
                        </div>
                    </div>
                    <div className = "summary-row3">
                        <a href = "/"><button>CHECKOUT</button></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CheckOutPage;