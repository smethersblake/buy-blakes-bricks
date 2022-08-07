import React from 'react';
import { Link } from "react-router-dom"
import {pluralize } from "../../utils/helpers"
import { useStoreContext } from '../../utils/GlobalState';
import { Card } from 'flowbite-react';

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
        <div className="max-w-sm">
            <Card
                horizontal={true}
                imgSrc={part_img_url}
            >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {name}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    Part Number: {part_num}
                </p>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    Part URL: {part_url}
                </p>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    Quantity: {quantity}
                </p>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    Price: {price}
                </p>
            </Card>
        </div>
    )
}

export default BrickItem;