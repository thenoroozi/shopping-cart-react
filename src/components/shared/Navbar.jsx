import React, { useContext } from 'react';
import {Link} from 'react-router-dom'
//Context
import { CartContext } from '../../context/CartContextProvider';

//Icons
import shopIcon from '../../assets/icons/cart.png';

const Navbar = () => {

  const {state}= useContext(CartContext);

   return (
      <div>
         <div>
            <Link to='/product'>Products</Link>
            <div>
               <Link to='/cart'><img src={shopIcon} alt="shop" /></Link>
               <span>{state.itemsCounter}</span>
            </div>
         </div>
      </div>
   );
};

export default Navbar;