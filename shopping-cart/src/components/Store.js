import React ,{useContext} from 'react';


// Style
import styles from "./Store.module.css";

//Context
import { ProductContext } from '../context/ProductContextProvider';

// Components
import Products from './shared/Products';

const Store = () => {
    const products = useContext(ProductContext)
    return (
        <div className={styles.container}>
            {
                products.map(product => <Products  key={product.id} productData ={product}/>

                )
            }
            
        </div>
    );
};

export default Store;