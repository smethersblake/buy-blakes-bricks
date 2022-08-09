import React from "react";
import CartItem from "../CartItem";
import Auth from "../../utils/auth";
import './style.css'
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
    <div className="container items-center mx-auto p-36">
       <Link to="/" className='bg-transparent hover:bg-neutral-500 text-nuetral-700 font-semibold hover:text-white py-2 px-4 border border-neutral-500 hover:border-transparent rounded'>← Go Home</Link>
       <div className="cart flex flex-col items-center">
        <div className="close" onClick={toggleCart}>[close]</div>
        <h2 className="text-5xl text-bold">Shopping Cart</h2>
        {state.cart.length ? (
          <div>
            {state.cart.map(item => (
              <CartItem key={item._id} item={item} />
            ))}
            <div className="flex-row space-between">
              <strong>Total: ${calculateTotal()}</strong>
              {
              Auth.loggedIn() ?
                <div clasName="items-left">
                  <button className="bg-transparent hover:bg-neutral-500 text-nuetral-700 font-semibold hover:text-white py-2 px-4 border border-neutral-500 hover:border-transparent rounded">
                  Checkout
                  </button>
                </div>  
                  :
                  <span>(log in to check out)</span>
              }
            </div>
        </div>    
        ) : (
          <h3>
            <span rorole="img" aria-label="shocked">
            😱
            </span>
            You haven't added anything to your cart yet!
          </h3>
        )}
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
