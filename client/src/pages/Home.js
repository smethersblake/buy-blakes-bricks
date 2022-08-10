import React from 'react'

// import { useQuery } from '@apollo/client';
// import { QUERY_CATEGORIES } from '../utils/queries';
// import { useStoreContext } from '../utils/GlobalState';
// import { UPDATE_CATEGORIES, UPDATE_CURRENT_CATEGORY } from '../utils/actions';
// import { Dropdown } from 'flowbite-react';
// import BrickList from '../components/BrickList';
// import { DropdownItem } from 'flowbite-react/lib/esm/components/Dropdown/DropdownItem';
// import SearchList from '../components/Search';
// import { Link } from "react-router-dom"
import DropdownTab from '../components/Dropdown';



function Home() {

    return (
        <div className="bg-slate-200 py-4">
            <div className="container items-center mx-auto pb-64 bg-slate-200">
                <div>
                    <DropdownTab></DropdownTab>
                    
                </div>
            </div>
        </div>
    )
}

export default Home;




