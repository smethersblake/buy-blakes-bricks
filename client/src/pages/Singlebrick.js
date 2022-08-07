import React, { useEffect, useState } from 'react';
import {Link, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { useStoreContext } from '../utils/GlobalState';
import { UPDATE_BRICKS } from '../utils/actions';
import { QUERY_BRICKS } from '../utils/queries';
import { pluralize } from "../utils/helpers"

function Singlebrick() {
    const [state, dispatch] = useStoreContext();
    const { id } = useParams();

    const [currentBrick, setCurentBrick] = useState({});

    const { loading, data } = useQuery(QUERY_BRICKS);

    const { getBricks } = state;

    useEffect(() => {
        if (getBricks.length) {
            setCurentBrick(getBricks.find((bricks) => bricks._id === id));
        } else if (data) {
            dispatch({
                type: UPDATE_BRICKS,
                getBricks: data.getBricks
            })
        }
    }, [getBricks, data, dispatch, id]);

    return (
        <>
            {currentBrick ? (
                <div className='container my-1'>
                    <Link to="/">Back to Bricks</Link>

                    <div className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <img class="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={currentBrick.part_img_url} alt=""/>
                        <div class="flex flex-col justify-between p-4 leading-normal">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{currentBrick.name}</h5>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Part Number: {currentBrick.part_num}</p>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Color: Fix me Blake!</p>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Quantity: {currentBrick.quantity}{pluralize(" brick", currentBrick.quantity)}</p>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Price: {currentBrick.price}</p>
                        </div> 
                    </div>


                </div>
            ) : null}
        </>
    )
}

export default Singlebrick;