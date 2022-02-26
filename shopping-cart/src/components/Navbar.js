import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

// Style
import styles from "./Navbar.module.css";

//Context
import { cartContext } from '../context/CartContextProvider';

//Icons
import shopIcon from "../assets/icons/shop.svg";


const Navbar = () => {
    const {state} = useContext(cartContext)
    return (
        <div className={styles.mainContainer}>
            <div className={styles.container}>
                <Link className={styles.productLink} to="/products">Products</Link>
                <div className={styles.iconContainer}>
                   <Link to="/Cart"><img src={shopIcon} alt="shop" /></Link>
                    <span>{state.itemsCounter}</span>
                </div>

            </div>
            
        </div>
    );
};

export default Navbar;