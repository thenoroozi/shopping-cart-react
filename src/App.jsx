import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'
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
            <Routes>
               <Route path="/products/:id" element={<ProductDetails/>}></Route>
               <Route path="/products" element={<Store/>}></Route>
               <Route path='/cart' element={<ShopCart/>}></Route>
               <Route path='/*' element={<Navigate to="/products"/>}></Route>
            </Routes>
         </CartContextProvider>
      </ProductContextProvider>
   );
};

export default App;