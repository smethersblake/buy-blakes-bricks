import React from 'react';
import { Link } from 'react-router-dom';
import Heart from '../../pages/assets/LEGO_Heart 2.png'

function Footer() {
    return (
        <footer className="mt-auto p-4 bg-neutral-500 rounded-t-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
                <span className="text-lg text-white sm:text-center dark:text-gray-400"><a href="/" className="hover:underline">BuyBlakesBricks </a>
                Made with <img alt="Heart Shaped LEGO" width="50px" className="ml-20" src={Heart} /> Bricks 
                </span>
                
                <ul className="flex flex-wrap items-center mt-3 text-lg text-white dark:text-gray-400 sm:mt-0">
                    <li className="hover:underline md:mr-6">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="hover:underline">
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
        
        </footer>
    )
}

export default Footer;