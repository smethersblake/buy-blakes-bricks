import React, { useEffect } from 'react'
import { useQuery } from '@apollo/client';
import { QUERY_CATEGORIES } from '../../utils/queries';
import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_CATEGORIES, UPDATE_CURRENT_CATEGORY } from '../../utils/actions';
import { Dropdown } from 'flowbite-react';
import { Link } from "react-router-dom"


function DropdownTab ()
{

    const [state, dispatch] = useStoreContext();
    const { getCategories } = state;
    const { data: categoryData } = useQuery(QUERY_CATEGORIES)
    
    useEffect(() => {
        if (categoryData) {
            dispatch({
                type: UPDATE_CATEGORIES,
                getCategories: categoryData.getCategories,
            })
        }
    }, [categoryData, dispatch])
    
    const handleClick = id =>
    {
        dispatch({
            type: UPDATE_CURRENT_CATEGORY,
            currentCategory: id,
            
        })
    }
    return (
        <div>
            <Dropdown id='dropdown' label="All Categories" class="bg-transparent hover:bg-neutral-500 text-nuetral-700 font-semibold hover:text-white py-2 px-4 border border-neutral-500 hover:border-transparent rounded" data-dropdown-toggle="dropdownNavbar">
                {getCategories.map((item) => (
                    
                        <Dropdown.Item
                        key={item.id}
                        onClick={() => {
                            handleClick(item.id);
                            }}
                    >
                        <Link to={`/bricklist/${item.name}`}>
                            {item.name}
                    </Link>
                        </Dropdown.Item>
                                
                                ))}
            </Dropdown>
        </div>
    )
}

export default DropdownTab