import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

//Context
import { ProductContext } from '../../context/ProductContextProvider';

const ProductDetails = (props) => {
    const id = props.match.params.id;
    const product = useContext(ProductContext);
    const data = product[id -1];
    const {image , title , description, price , category}= data
    return (
        <div>
            <img src={image} alt="product" />
            <div>
                <h3>{title}</h3>
                <p>{description}</p>
                <p><span>Category:</span>{category}</p>
                <div>
                    <span>{price} $</span>
                    <Link to="/products">Back to shop</Link>
                </div>
            </div>

            
        </div>
    );
};

export default ProductDetails;