import React from "react";
import CartItem from "../CartItem";
import Auth from "../../utils/auth";
import { useStoreContext } from "../../utils/GlobalState";
import { TOGGLE_CART } from "../../utils/actions";
import "./style.css";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <div>
      <div>
        <Link to="/" className="text-sm">
          ← Go Home
        </Link>
      </div>
      <div class="orderCheckout">
        <div class="shoppingCart-Container">
          <div className="cart">
            <div className="close">[close]</div>
            <h2>Shopping Cart</h2>
            <div>
              <p>cart items</p>
            </div>
          </div>
        </div>
        <div class="paymentCart-Container">
          <div>
            
          <div class="address">
            <h2>Payment</h2>
            <label for="fname">Accepted Cards</label>
            <br />
              <br />
            <label for="cname">Name on Card</label>
            <br />
            <input type="text" id="cname" name="cardname" placeholder="John More Doe"/>
            <br />
            <label for="cname">Credit card number</label>
            <br />
            <input type="text" id="ccnum" name="cardnumber"placeholder="1111-2222-3333-4444" />
            <br />
            <label for="cname">Exp Month</label>
            <br />
            <input type="text" id="expmonth" name="cardnumber" placeholder="02"/>
            <br />
            <label for="cname">Exp Year</label>
            <br />
            <input type="text" id="expmonth" name="cardnumber" placeholder="2022"/>
            <br />
            <label for="cname">CVV</label>
            <br />
            <input type="text" id="expmonth" name="cardnumber" placeholder="123"/>
          </div>
          <br />
          <div class="billing">
          <h2>Billing Address</h2>
            <br />
  
          <label for="fname">Full Name</label>
          <hr />
          <input type="text" id="expmonth" name="cardnumber" placeholder="John M. Doe"/>
          <hr />
          <label for="fname">Email</label>
          <br />
          <input type="text" id="email" name="emailaddress" placeholder="John@doe.com"/>
          <hr />
          <label for="fname">Address</label>
          <hr />
          <input type="text" id="address" name="eaddress" placeholder="123 1st"/>
          <hr />
          <label for="fname">City</label>
          <hr />
          <input type="text" id="city" name="city" placeholder="St. Paul"/>
          <hr />
          <label for="fname">State</label>
          <hr />
          <input type="text" id="state" name="state" placeholder="Minnesota"/>
          <hr />
          <label for="fname">Zip Code</label>
          <hr />
          <input type="text" id="zip" name="zip" placeholder="55123"/>
          <br />
          
    
          <label htmlFor="">
            <button></button>
          <input type="checkbox" name="sameaddress" id="sameaddress" />
             Shipping Address same as billing </label>

             <input type="submit" value="Continue to Checkout" />
             <br />
             <div>
             <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
  Button
</button>
             </div>
          </div>
          </div>
        </div>
      </div>

      <div>
        <ul className="flex mb-4">
          <li className="w-full h-12 text-center ">
            <strong>Phone:</strong> 555-555-55555
          </li>
        </ul>
        <ul className="flex mb-4">
          <li className="w-full h-12 text-center ">
            <strong>Email:</strong> sample@sample.com
          </li>
        </ul>
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
