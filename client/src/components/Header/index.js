import React from 'react';
import { Link } from 'react-router-dom';
import LEGO from '../../pages/assets/890399.jpg'
import auth from '../../utils/auth';
import Auth from "../../utils/auth";


function Header() {

    function showNav() {
        if (auth.loggedIn()) {
            return (
                <div className="pt-8">
                    <Link to="/" onClick={() => Auth.logout()} className='text-2xl pr-5'>Logout</Link>
                    <Link to="/cart" className='text-2xl pr-5'><span role="img" aria-label="trash">🛒</span></Link>
                </div>
            )
        } else {
            return (
                <div className="pt-8">
                    <Link to="/login" className='text-2xl pr-5'> Login</Link>
                    <Link to="/signup" className='text-2xl pr-5'>Signup </Link>
                    <Link to="/cart"  className='text-2xl pr-5'><span role="img" aria-label="trash">🛒</span></Link>
                </div>
            )
        }
    }

    return (
        <header>
            <div className="relative h-64  overflow-hidden bg-neutral-500">
                <div className="absolute z-30 flex w-full h-full">
                    <div className="relative z-30 w-5/6 px-6 py-8 text-white md:py-10 md:w-1/2">
                        <Link to = "/" className="text-7xl">Buy Blakes Bricks</Link>
                        {showNav()}
                    </div>
                    <div className="absolute top-0 right-0 flex w-full h-full">
                        <div className="w-1/3 h-full bg-neutral-500"></div>
                        <div className="relative w-1/3">
                            
                            <svg
                                fill="currentColor"
                                viewBox="0 0 100 100"
                                className="absolute inset-y-0 z-20 h-full text-neutral-500"
                            >
                                <polygon id="diagonal" points="0,0 100,0 50,100 0,100"></polygon>
                            </svg>
                            <svg
                                fill="currentColor"
                                viewBox="0 0 100 100"
                                className="absolute inset-y-0 z-10 h-full ml-6 text-white opacity-50"
                            >
                                <polygon points="0,0 100,0 50,100 0,100"></polygon>
                            </svg>
                        </div>
                        
                        </div>
                        
                    </div>
                    <div className="absolute top-0 right-0 block w-9/12 h-full ">
                        <img
                        alt="LEGO"
                        className="object-cover h-full min-w-full"
                        src={LEGO}
                        />
                        
                    </div>
                    
            </div>
        </header>
    )
}

export default Header;