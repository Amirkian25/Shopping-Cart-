import React from 'react';
import { Link } from 'react-router-dom';

//Functions
import { shorten } from '../../helper/functions';

const Products = ({productData}) => {
    return (
        <div>
            <img src={productData.image} alt="products" style={{width: "200px"}} />
            <h3>{shorten(productData.title)}</h3>
            <p>{productData.price}</p>
            <div>
                <Link to={`/products/${productData.id}`}>Details</Link>
                <button>add to cart</button>
            </div>
        </div>
    );
};

export default Products;