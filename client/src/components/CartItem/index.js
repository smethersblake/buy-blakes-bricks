import React from 'react';
import { useStoreContext } from "../../utils/GlobalState";
import { REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise, updateCartQuanity, removeFromStorage } from "../../utils/helpers";

const CartItem = ({ item }) => {

  const [, dispatch] = useStoreContext();

  const removeFromCart = item => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: item._id
    });
    idbPromise('cart', 'delete', { ...item });
    removeFromStorage(item)

  };

  const onChange = (e) => {
    const value = e.target.value;
    if (value === '0') {
      dispatch({
        type: REMOVE_FROM_CART,
        _id: item._id
      });
      removeFromStorage(item)
    } else {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: item._id,
        // purchaseQuantity: parseInt(value)
      });
      updateCartQuanity(value, item._id)
    }
  }

  return (
    
    <div className="flex flex-col items-center mx-auto bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <div className="mr-2">
        <img
          src={item.part_img_url}
          alt=""
        />
      </div>
      <div>
        <div>
          <h2 className="font-extrabold text-lg">{item.name}</h2>
        </div>
        <div className="py-2">
          <h6>{item.color_name}</h6>
          <h6>${item.price}</h6>
        </div>
        <div>
          <span>Qty:</span>
          <input
            type="number"
            placeholder="1"
            value={item.purchaseQuantity}
            onChange={onChange}
          />
          <span
            role="img"
            aria-label="trash"
            onClick={() => removeFromCart(item)}
          >
           <button> 🗑️ </button>
          </span>
        </div>
      </div>
    </div>
  );
}

export default CartItem;