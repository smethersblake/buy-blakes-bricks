import React from 'react';
import { Link } from "react-router-dom"
import {pluralize } from "../../utils/helpers"
import { useStoreContext } from '../../utils/GlobalState';
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from '../../utils/actions'

function BrickItem(item) {
    const {
        _id,
        part_num,
        name,
        part_cat_id,
        part_url,
        part_img_url,
        quantity,
        price,
        color_id,
        color_name,
        rgb,
        is_trans,
    } = item;

    const [state, dispatch] = useStoreContext();

    const addToCart = () => {
        dispatch({
          type: ADD_TO_CART,
          getBricks: { ...item, purchaseQuantity: 1 }
        });
      };
    return (
        <div>
            <Link to={`/bricks/${_id}`}>
                <div className="flex flex-col items-center bg-white rounded-xl border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img className="object-scale-down h-28 w-14 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={part_img_url} alt=""/>
                    
                    <div className="p-4 leading-normal">
                        <h5 className="overflow-y-scroll h-24 ... mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Part Number: {part_num}</p>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Color: {color_name }</p>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Quantity: {quantity}{pluralize(" brick", quantity)}</p>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Price: {price}</p>
                    </div>
                    
                    <button onClick={addToCart}>Add to cart</button>
                </div> 
                </Link>

        </div>
    )
}

export default BrickItem;