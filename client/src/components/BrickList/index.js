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
            <h2>Our Bricks:</h2>
            {state.getbricks.length ? (
                <div className="flex-row">
                    {filterBricks().map((bricks) => (
                        <p>{bricks.name}</p>
                    ))}
                </div>
            ) : (
                <h2>You haven't added any Bricks yet!</h2>
            )}
        </div>
    )
}

export default BrickList;