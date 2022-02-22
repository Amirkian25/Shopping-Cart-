import React from 'react';
import{Switch,Redirect,Route} from "react-router-dom";

//Context
import ProductContextProvider from './context/ProductContextProvider';
import CartContextProvider from './context/CartContextProvider';

//Components
import ProductDetails from './components/shared/ProductDetails';
import Store from './components/Store';

function App() {
  return (
    <ProductContextProvider>
      <CartContextProvider>
        
        <Switch>
          <Route path="/products/:id" component={ProductDetails} />
          <Route path="/products" component={Store} />
          
          <Redirect to="/products" />
        </Switch>
      </CartContextProvider>
    </ProductContextProvider>
  );
}

export default App;
