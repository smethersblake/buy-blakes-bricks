import React from 'react';
import { Link } from "react-router-dom"
// import {pluralize } from "../../utils/helpers"
// import { useStoreContext } from '../../utils/GlobalState';
import BrickList from '../BrickList';

function SearchList (item)
{
    return (
        <div>
            <Link to={`/this`}>
            <BrickList></BrickList>
            </Link>
        </div>
    )
}

export default SearchList