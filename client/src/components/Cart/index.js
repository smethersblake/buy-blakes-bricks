import React from "react";
import CartItem from "../CartItem";
import Auth from "../../utils/auth";
import './style.css'
import { useStoreContext } from "../../utils/GlobalState";
import { Link } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import {QUERY_CHECKOUT} from '../../utils/queries'
import { useLazyQuery } from '@apollo/client';

const Cart = () => {
  const [state, dispatch] = useStoreContext();
  const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);
  function calculateTotal() {
      let sum = 0;
      state.cart.forEach(item => {
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
            {state.cart.map(item => (
              <CartItem key={item._id} item={item} />
            ))}
            <div className="flex-row space-between">
              <strong>Total: ${calculateTotal()}</strong>
            </div>

              { Auth.loggedIn() ?
                  <button onClick={submitCheckout} className="bg-transparent hover:bg-neutral-500 text-nuetral-700 font-semibold hover:text-white py-2 px-4 border border-neutral-500 hover:border-transparent rounded">
                  Checkout
                  </button>
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
      <div class='paymentCart-Container flex flex-col items-center pt-16'>
        <div>
          <div class='address font-bold'>
            <h2 className="text-4xl font-bold">Billing Address</h2>
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
          <div class='billing font-bold'>
              <h2 className="text-4xl font-bold">Payment</h2>
              
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

            { Auth.loggedIn() ?
                  <button className="bg-transparent hover:bg-neutral-500 text-nuetral-700 font-semibold hover:text-white py-2 px-4 border border-neutral-500 hover:border-transparent rounded">
                  Checkout
                  </button>
                  :
                  <span>(log in to check out)</span>
              }
          </div>
        </div>
    </div>
  )
};

export default Cart;
