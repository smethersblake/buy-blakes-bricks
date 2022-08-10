import React from 'react';
import { Link } from 'react-router-dom';

function Contact() {
    return (
        <div className="container items-center mx-auto p-32">
            <div>
                <h1 className='text-5xl text-center'>Contact</h1>
            </div>
            <div className='pt-8'>
                <ul className='flex mb-4'>
                    <li className='w-full h-12 text-center '><strong>Phone:</strong> 555-555-55555</li>
                </ul>
                <ul>
                    <li className='w-full h-12 text-center '><strong>Email:</strong> <a href="mailto:buyblakesbricks@gmail.com">buyblakesbricks@gmail.com</a></li>
                </ul>
            </div>
        </div>
        
    )
}

export default Contact