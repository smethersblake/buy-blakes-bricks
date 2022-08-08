import React, { useEffect, useState } from 'react'
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
    // this.setState({})
    return (
        <div>

        <Dropdown id='dropdown' label="All Categories" className="bg-neutral-500" data-dropdown-toggle="dropdownNavbar">
                        {getCategories.map((item) => (
                            <Link to={`/bricklist/${item.name}`}>
                        <Dropdown.Item 
                                    key={item.id}
                            onClick={() => {
                                handleClick(item.id);
                                this.setState({})
                            }}
                            >
                            {item.name}
                                </Dropdown.Item>
                                
                                </Link>
                                ))}
        </Dropdown>
                                </div>
    )
}

export default DropdownTab