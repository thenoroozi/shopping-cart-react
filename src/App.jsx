import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
// Context
import ProductContextProvider from './context/ProductContextProvider';
import CartContextProvider from './context/CartContextProvider';
//compoents
import Store from './components/Store';
import ProductDetails from './components/ProductDetails';
import Navbar from './components/shared/Navbar';
import ShopCart from './components/ShopCart';


const App = () => {

   return (
      <ProductContextProvider>
         <CartContextProvider>
            <Navbar />
            <Switch>
               <Route path="/products/:id" component={ProductDetails}></Route>
               <Route path="/products" component={Store}></Route>
               <Route path='/cart' component={ShopCart}></Route>
               <Redirect to="/products"></Redirect>
            </Switch>
         </CartContextProvider>
      </ProductContextProvider>
   );
};

export default App;