import React from 'react';
import '../../App.css';
import img1 from '../../images/img-1.jpg'

function Products() {
    return (
        <h1 
            className='products'
            style={{ backgroundImage: `url(${img1})` }}

        >
        PRODUCTS
        </h1>
    )
}

export default Products
