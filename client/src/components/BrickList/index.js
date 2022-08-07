import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_BRICKS } from '../../utils/actions';
import BrickItem from '../BrickItem';
import { QUERY_BRICKS } from '../../utils/queries';
import { Card } from 'flowbite-react';

function BrickList() {
    const [state, dispatch] = useStoreContext();
    const {currentCategory } = state;
    const { loading, data } = useQuery(QUERY_BRICKS);

    useEffect(() => {
        if (data) {
            dispatch({
                type: UPDATE_BRICKS,
                getBricks: data.getBricks
            })
        }
    }, [data, dispatch]);

    function filterBricks() {
        if (!currentCategory) {
            return state.getBricks;
        }

        return state.getBricks.filter(
            (bricks) => bricks.part_cat_id === currentCategory
        );
    }

    return (
        <div>
            <h2 className='mt-10 text-3xl'>Our Bricks:</h2>
            {state.getBricks.length ? (
                <div className="flex-row mt-10">
                    {filterBricks().map((bricks) => (
                        <div className='mb-10'>
                        <BrickItem
                        key={bricks._id}
                        _id={bricks._id}
                        part_num={bricks.part_num}
                        name={bricks.name}
                        part_cat_id={bricks.part_cat_id}
                        part_url={bricks.part_url}
                        part_img_url={bricks.part_img_url}
                        quantity={bricks.quantity}
                        price={bricks.price}
                        color_id={bricks.color_id}
                        />
                        </div>
                    ))}
                </div>
            ) : (
                <h2>You haven't added any Bricks yet!</h2>
            )}
        </div>
    )
}

export default BrickList;