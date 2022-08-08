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
        <div className="bg-slate-200 py-4">
            <div className="container items-center mx-auto pb-64 bg-slate-200">
                <Dropdown label="All Categories" class="bg-transparent hover:bg-neutral-500 text-nuetral-700 font-semibold hover:text-white py-2 px-4 border border-neutral-500 hover:border-transparent rounded">
                    {getCategories.map((item) => (
                        <Dropdown.Item
                            key={item.id}
                            onClick={() => {
                                handleClick(item.id)
                            }}
                        >
                            {item.name}
                        </Dropdown.Item>
                    ))}
                </Dropdown>
                <BrickList />
            </div>
        </div>
    )
}

export default Home;

{/* <div className="bg-slate-200 py-4">
            <div className="container items-center mx-auto pb-64 bg-slate-200">
                <Dropdown label="All Categories" class="bg-transparent hover:bg-neutral-500 text-nuetral-700 font-semibold hover:text-white py-2 px-4 border border-neutral-500 hover:border-transparent rounded">
                    {getCategories.map((item) => (
                        <Dropdown.Item
                            key={item.id}
                            onClick={() => {
                                handleClick(item.id)
                            }}
                        >
                            {item.name}
                        </Dropdown.Item>
                    ))}
                </Dropdown>
                <BrickList />
            </div>
        </div> */}


