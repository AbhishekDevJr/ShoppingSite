import React from 'react';

function ProductPage(props){
    return(
        <div className = "productDiv">
            This is ProductPage Component for {props.title}
        </div>
    );
}

export default ProductPage;