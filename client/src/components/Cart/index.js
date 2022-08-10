import React from "react";
import CartItem from "../CartItem";
import Auth from "../../utils/auth";
import './style.css'
import { useStoreContext } from "../../utils/GlobalState";
import { Link } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import {QUERY_CHECKOUT} from '../../utils/queries'
import { useLazyQuery } from '@apollo/client';
import Confirm from "../Confirm";

const Cart = () => {
  const [state, dispatch] = useStoreContext();
  const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);
  function calculateTotal() {
      let sum = 0;
      JSON.parse(localStorage.getItem('BrickCart')).forEach(item => {
          sum += item.price * item.purchaseQuantity;
      });
      return sum.toFixed(2)
  }
  function submitCheckout() {
    const productIds = [];

    state.cart.forEach((item) => {
      for (let i = 0; i < item.purchaseQuantity; i++) {
        productIds.push(item._id);
      }
    });

    getCheckout({
      variables: { products: productIds },
    });
  }

  return (
    <div className="container items-center mx-auto p-36">
       <Link to="/" className='bg-transparent hover:bg-neutral-500 text-nuetral-700 font-semibold hover:text-white py-2 px-4 border border-neutral-500 hover:border-transparent rounded'>← Go Home</Link>
       <div className="cart flex flex-col items-center">
        <h2 className="text-5xl text-bold">Shopping Cart</h2>
        {state.cart.length ? (
          <div>
            {JSON.parse(localStorage.getItem('BrickCart')).map(item => (
              <CartItem key={item._id} item={item} />
            ))}
            <div className="flex-row space-between">
              <strong>Total: ${calculateTotal()}</strong>
            </div>
              { Auth.loggedIn() ?
                 <Link to = "/confirm">   <button className="bg-transparent hover:bg-neutral-500 text-nuetral-700 font-semibold hover:text-white py-2 px-4 border border-neutral-500 hover:border-transparent rounded">
                 Checkout
                 </button>
                 </Link>
                  :
                  <span>(log in to check out)</span>
              }
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
};

export default Cart;