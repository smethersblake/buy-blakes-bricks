import React from 'react';
import { Link } from 'react-router-dom';

function Contact() {
    return (
        <div>
            <Link to="/" className='text-sm'>← Go Home</Link>
            <div className='flex mb-4'>
                <div className='w-full h-12'>
                    <h1 className='text-5xl text-center'>Contact</h1>
         </div>
         
        </div>
        <div>
            <ul className='flex mb-4'>
                <li className='w-full h-12 text-center '><strong>Phone:</strong> 555-555-55555</li>
                
            </ul>
         </div>
         <div>
            <ul className='flex mb-4'>
                
                <li className='w-full h-12 text-center '><strong>Email:</strong> sample@sample.com</li>
            </ul>
         </div>
        </div>
        
    )
}

export default Contact