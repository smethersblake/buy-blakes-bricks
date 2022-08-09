import React, { useEffect, Component } from "react";
import { useQuery } from "@apollo/client";
import CartItem from "../CartItem";
import Auth from "../../utils/auth";
import cartItem from "../CartItem/index";
import { TOGGLE_CART } from "../../utils/actions";
import "./style.css";
import { Link } from "react-router-dom";
import { useStoreContext } from "../../utils/GlobalState";

const Cart = () => {
  const [state, dispatch] = useStoreContext();
  function toggleCart() {
    dispatch({ type: TOGGLE_CART });
  }

  if (!state.cartOpen) {
    return (
      <div className='cart-closed' onClick={toggleCart}>
        <span role='img' aria-label='trash'>
          🛒
        </span>
      </div>
    );
  }

  function calculateTotal() {
    let sum = 0;
    state.cart.forEach((item) => {
      sum += item.price * item.purchaseQuantity;
    });
    return sum.toFixed(2);
  }
  return (
    <div>
      <div>
        <Link to='/' className='text-sm'>
          ← Go Home
        </Link>
      </div>
      <div class='orderCheckout ml-10'>
        <div class='shoppingCart-Container'>
          <div className='cart'>
            <h2>Shopping Cart</h2>
            <div>
              <div>
                {state.cart.map((item) => (
                  <CartItem key={item._id} item={item} />
                ))}
                <div className='flex-row space-between'>
                  <strong>Total: ${calculateTotal()}</strong>
                  {Auth.loggedIn() ? (
                    <div clasName='items-left'></div>
                  ) : (
                    <span>(log in to check out)</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class='paymentCart-Container'>
          <div>
            <div class='address'>
              <h2>Billing Address</h2>
              <br />

              <label for='fname'>Full Name</label>
              <br />
              <input
                className='rounded-full'
                type='text'
                id='expmonth'
                name='cardnumber'
                placeholder='John M. Doe'
              />
              <br />
              <label for='fname'>Email</label>
              <br />
              <input
                className='rounded-full'
                type='text'
                id='email'
                name='emailaddress'
                placeholder='John@doe.com'
              />
              <br />
              <label for='fname'>Address</label>
              <br />
              <input
                className='rounded-full'
                type='text'
                id='address'
                name='eaddress'
                placeholder='123 1st'
              />
              <br />
              <label for='fname'>City</label>
              <br />
              <input
                className='rounded-full'
                type='text'
                id='city'
                name='city'
                placeholder='St. Paul'
              />
              <br />
              <label for='fname'>State</label>
              <br />
              <input
                className='rounded-full'
                type='text'
                id='state'
                name='state'
                placeholder='Minnesota'
              />
              <br />
              <label for='fname'>Zip Code</label>
              <br />
              <input
                className='rounded-full'
                type='text'
                id='zip'
                name='zip'
                placeholder='55123'
              />
              <br />
            </div>
            <br />
            <div class='billing'>
              <h2>Payment</h2>
              
              <br />
              
              <label for='cname'>Name on Card</label>
              <br />
              <input
                className='rounded-full'
                type='text'
                id='cname'
                name='cardname'
                placeholder='John More Doe'
              />
              <br />
              <label for='cname'>Credit card number</label>
              <br />
              <input
                className='rounded-full'
                type='text'
                id='ccnum'
                name='cardnumber'
                placeholder='1111-2222-3333-4444'
              />
              <br />
              <label for='cname'>Exp Month</label>
              <br />
              <input
                className='rounded-full'
                type='text'
                id='expmonth'
                name='cardnumber'
                placeholder='02'
              />
              <br />
              <label for='cname'>Exp Year</label>
              <br />
              <input
                className='rounded-full'
                type='text'
                id='expmonth'
                name='cardnumber'
                placeholder='2022'
              />
              <br />
              <label for='cname'>CVV</label>
              <br />
              <input
                className='rounded-full'
                type='text'
                id='expmonth'
                name='cardnumber'
                placeholder='123'
              />
            </div>
            <br />
            <div class='submit'></div>
            <label htmlFor=''>
              <button></button>
              <input type='checkbox' name='sameaddress' id='sameaddress' />
              Shipping Address same as billing{" "}
            </label>

            <input type='submit' value='Continue to Checkout' />
            <br />

            <button class='inline-flex py-2 px-4  hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white bg-green-100 rounded-full mt-8 mb-10'>
              checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );

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