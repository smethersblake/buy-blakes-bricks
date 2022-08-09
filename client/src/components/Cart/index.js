import React from "react";
import CartItem from "../CartItem";
import Auth from "../../utils/auth";
import { useStoreContext } from "../../utils/GlobalState";
import { TOGGLE_CART } from "../../utils/actions";
import { Link } from 'react-router-dom';

const Cart = () => {
  const [state, dispatch] = useStoreContext();
  function toggleCart() {
    dispatch({ type: TOGGLE_CART });
  }

  if (!state.cartOpen) {
      return (
        <div className="cart-closed" onClick={toggleCart}>
          <span
            role="img"
            aria-label="trash">🛒</span>
        </div>
      );
  }

  function calculateTotal() {
      let sum = 0;
      state.cart.forEach(item => {
          sum += item.price * item.purchaseQuantity;
      });
      return sum.toFixed(2)
  }
  return (
    <div>
       <Link to="/" className='text-sm'>← Go Home</Link>
       <div className="cart">
      <div className="close">[close]</div>
      <h2>Shopping Cart</h2>
      <div>
        <p>cart items</p> 
      </div>
      <div>
     </div>
     
    </div>
    <div>
        <ul className='flex mb-4'>
            <li className='w-full h-12 text-center '><strong>Phone:</strong> 555-555-55555</li>
            
        </ul>
     </div>
     <div>
        <ul className='flex mb-4'>
            
            <li className='w-full h-12 text-center '><strong>Email:</strong> sample@sample.com</li>
        </ul>
     </div>
    </div>
    
)
 

  // function toggleCart() {
  //   dispatch({ type: TOGGLE_CART });
  // }

  // function calculateTotal() {
  //   let sum = 0;
  //   state.cart.forEach(item => {
  //     sum += item.price * item.purchaseQuantity;
  //   });
  //   return sum.toFixed(2);
  // }

  // if (!state.cartOpen) {
  //   return (
  //     <div className="cart-closed" onClick={toggleCart}>
  //       <span
  //         role="img"
  //         aria-label="trash">🛒</span>
  //     </div>
  //   );
  // }

  // return (
  //   <div className="cart">
  //     <div className="close" onClick={toggleCart}>[close]</div>
  //     <h2>Shopping Cart</h2>
  //     {state.cart.length ? (
  //       <div>
  //         {state.cart.map(item => (
  //           <CartItem key={item._id} item={item} />
  //         ))}

  //         <div className="flex-row space-between">
  //           <strong>Total: ${calculateTotal()}</strong>

  //           {
  //             Auth.loggedIn() ?
  //               <button>
  //                 Checkout
  //             </button>
  //               :
  //               <span>(log in to check out)</span>
  //           }
  //         </div>
  //       </div>
  //     ) : (
  //         <h3>
  //           <span role="img" aria-label="shocked">
  //             😱
  //         </span>
  //         You haven't added anything to your cart yet!
  //         </h3>
  //       )}
  //   </div>
  // );
};

export default Cart;
