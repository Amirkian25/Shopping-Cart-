import React from 'react';
import{Switch,Redirect,Route} from "react-router-dom";

//Context
import ProductContextProvider from './context/ProductContextProvider';
import CartContextProvider from './context/CartContextProvider';

//Components
import ProductDetails from './components/shared/ProductDetails';
import Store from './components/Store';
import Navbar from './components/Navbar';
import ShopCart from './components/ShopCart';
import Footer from './components/Footer';

function App() {
  return (
    <ProductContextProvider>
      <CartContextProvider>
        <Navbar/>
        
        <Switch>
          <Route path="/products/:id" component={ProductDetails} />
          <Route path="/Cart" component={ShopCart} />
          <Route path="/products" component={Store} />
          <Redirect to="/products" />
        </Switch>
        <Footer/>
      </CartContextProvider>
    </ProductContextProvider>
  );
}

export default App;
