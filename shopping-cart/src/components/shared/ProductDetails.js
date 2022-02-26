import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
// Style
import styles from "./ProductDetails.module.css";

//Context
import { ProductContext } from '../../context/ProductContextProvider';

const ProductDetails = (props) => {
    const id = props.match.params.id;
    const product = useContext(ProductContext);
    const data = product[id -1];
    const {image , title , description, price , category}= data
    return (
        <div className={styles.container}>
            <img className={styles.image}  src={image} alt="product" />
            <div className={styles.textContainer}>
                <h3>{title}</h3>
                <p className={styles.description}>{description}</p>
                <p className={styles.category}><span>Category:</span>{category}</p>
                <div className={styles.buttonContainer}>
                    <span  className={styles.price}>{price} $</span>
                    <Link to="/products">Back to shop</Link>
                </div>
            </div>

            
        </div>
    );
};

export default ProductDetails;