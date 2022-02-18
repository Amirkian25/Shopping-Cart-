import React,{useState,useEffect,createContext} from 'react';

// API
import { getProduct } from '../services/api';

export const ProductContext = createContext()
const ProductContextProvider = ({children}) => {
    const[products ,setProduct]=useState([])

    useEffect(() =>{
        const fetchAPI = async () =>{
            setProduct(await getProduct())
        }
        fetchAPI();

    },[])
    return (
        <ProductContext.Provider value={products}>
            {children}
        </ProductContext.Provider>
    );
};

export default ProductContextProvider;