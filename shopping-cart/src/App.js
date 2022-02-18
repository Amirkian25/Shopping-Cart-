import React from 'react';
//Context
import ProductContextProvider from './context/ProductContextProvider';
//Components
import Store from './components/Store';
const App = () => {
  return (
   <ProductContextProvider>
     <Store/>
   </ProductContextProvider>
  );
};

export default App;
