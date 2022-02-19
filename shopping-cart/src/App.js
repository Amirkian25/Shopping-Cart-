import React from 'react';
import{Switch,Redirect,Route} from "react-router-dom";

//Context
import ProductContextProvider from './context/ProductContextProvider';

//Components
import ProductDetails from './components/shared/ProductDetails';
import Store from './components/Store';

const App = () => {
  return (
   <ProductContextProvider>
     <Switch>
        <Route path="/products/:id" component={ProductDetails}/>
        <Route path="/products" component={Store} />
        <Redirect to="/products" />
     
      </Switch>
   </ProductContextProvider>
  );
};

export default App;
