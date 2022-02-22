import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
//Icons
import trashIcon from "../../assets/icons/trash.svg"; 

//Functions
import { isInCart, quantityCount, shorten } from '../../helper/functions';
//Context
import { cartContext } from '../../context/CartContextProvider';

const Products = ({productData}) => {
   const{state , dispatch} = useContext(cartContext)
    return (
        <div>
            <img src={productData.image} alt="products" style={{width: "200px"}} />
            <h3>{shorten(productData.title)}</h3>
            <p>{productData.price}</p>
            <div>
                <Link to={`/products/${productData.id}`}>Details</Link>
                <div>
                {quantityCount(state , productData.id) === 1 && <button onClick={() => dispatch({type : "REMOVE_ITEM" , payload : productData})}><img style={{width : "20px"}} src={trashIcon} alt="trash" /></button> }
                { quantityCount(state , productData.id) > 1 && <button onClick={() => dispatch({type : "DECREASE" , payload : productData})}>-</button> }
                
                {
                isInCart(state , productData.id) ? 
                <button onClick={() => dispatch({type : "INCREASE" , payload : productData})}>+</button> : 
                <button onClick={() => dispatch({type : "ADD_ITEM" , payload : productData})}>add to cart</button>
                }
               
                </div>
            </div>
        </div>
    );
};

export default Products;