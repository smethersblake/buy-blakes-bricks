import React, { useEffect } from 'react'
import { useQuery } from '@apollo/client';
import { QUERY_CATEGORIES } from '../utils/queries';
import { useStoreContext } from '../utils/GlobalState';
import { UPDATE_CATEGORIES, UPDATE_CURRENT_CATEGORY } from '../utils/actions';
import { Dropdown } from 'flowbite-react';



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
        <div>
          <Dropdown label="All Categories">
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
        // <form >
        //     <div className="container items-center mx-auto p-72 ">  
        //         <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
        //         <div className="relative">
        //             <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
        //                 <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        //             </div>
        //             <input type="text" name='currentSearch' id="default-search" className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-neutral-500 focus:border-neutral-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for LEGO..." required />
        //             <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-neutral-500 hover:bg-neutral-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
        //         </div>
        //     </div>    
        // </form>
//     
    )
}

export default Home
