import React ,{useContext} from 'react';

//Context
import { ProductContext } from '../context/ProductContextProvider';

// Components
import Products from './shared/Products';

const Store = () => {
    const products = useContext(ProductContext)
    return (
        <div style={{display : "flex" , flexWrap :"wrap" , justifyContent: "space-between"}}>
            {
                products.map(product => <Products  key={product.id} productData ={product}/>

                )
            }
            
        </div>
    );
};

export default Store;