import React, { useCallback, useContext } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
//components
import Cart from './shared/Cart';

//Context
import { CartContext } from '../context/CartContextProvider';

const ShopCart = () => {

   const { state, dispatch } = useContext(CartContext);

   return (
      <div>
         <div>
            {state.selectedItems.map(item => <Cart key={item.id} data={item} />)}
         </div>
         {
            state.itemsCounter > 0 && <div>
               <p><span>Total Itam:</span> {state.itemsCounter}</p>
               <p><span>Total Payments:</span> {state.total}</p>
               <div>
                  <button onClick={()=> dispatch({type: "CHECKOUT"})}>Check Out</button>
                  <button onClick={()=> dispatch({type: "CLEAR"})}>Clear</button>
               </div>
            </div>
         }
         {
            state.checkout &&
            <div>
               <h3>Check Out Successfully</h3>
               <Link to='/products'>Buy More</Link>
            </div>
         }
         {
            !state.checkout && state.itemsCounter === 0 &&
            <div>
               <h3>Want to Buy?</h3>
               <Link to='/products'>Go Back to Shop</Link>
            </div>
         }
      </div>
   );
};

export default ShopCart;