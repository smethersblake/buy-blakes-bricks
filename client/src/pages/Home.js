import React, { useEffect } from 'react'
import { useQuery } from '@apollo/client';
import { QUERY_CATEGORIES } from '../utils/queries';
import { useStoreContext } from '../utils/GlobalState';
import { UPDATE_CATEGORIES, UPDATE_CURRENT_CATEGORY } from '../utils/actions';
import { Dropdown } from 'flowbite-react';
import BrickList from '../components/BrickList';



function Home() {
    const [state, dispatch] = useStoreContext();
    const { getCategories } = state;
    const { data: categoryData } = useQuery(QUERY_CATEGORIES)

    useEffect(() => {
        if (categoryData) {
            dispatch({
                type: UPDATE_CATEGORIES,
                getCategories: categoryData.getCategories
            })
        }
    }, [categoryData, dispatch])

    const handleClick = id => {
        dispatch({
            type: UPDATE_CURRENT_CATEGORY,
            currentCategory: id
        });
    }

    return (
        <div className="container items-center mx-auto pb-64">
            <div>
                <Dropdown label="All Categories" className="bg-neutral-500">
                {getCategories.map((item) => (
                    <Dropdown.Item 
                        key={item.id}
                        onClick={() => {
                            handleClick(item.id);
                        }}
                    >
                        {item.name}
                    </Dropdown.Item>
                ))}
                </Dropdown>
            </div>
            <BrickList />
        </div>
    )
}

export default Home;
