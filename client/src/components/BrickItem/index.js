import React from 'react';
import { Link } from "react-router-dom"
import {pluralize } from "../../utils/helpers"
import { useStoreContext } from '../../utils/GlobalState';

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
    } = item;

    const [state, dispatch] = useStoreContext();

    return (
        <div className="max-w-sm overflow-auto">
            <Link to={`/bricks/${_id}`}>
                <div className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img class="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={part_img_url} alt=""/>
                    <div class="flex flex-col justify-between p-4 leading-normal">
                        <h5 class="overflow-y-hidden h-24 ... mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Part Number: {part_num}</p>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Color: Fix me Blake!</p>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Quantity: {quantity}{pluralize(" brick", quantity)}</p>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Price: {price}</p>
                    </div> 
                </div> 
            </Link>
        </div>
    )
}

export default BrickItem;