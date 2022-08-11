import React from 'react';
import { Link } from 'react-router-dom';

function About() {
    return (
        <div className="container items-center mx-auto p-36">
            <div className='flex mb-4 pb-4'>
                <div className='w-full h-12'>
                    <h1 className='text-6xl text-center font-bold'>About</h1>
                </div>
               
            </div>

            <img src={ require('../assets/Blake.jpg') } />
        
            <p>Hello My name is Blake. Do you have the same problem I have where you can never find the correct
                LEGO brick to finish your newest creation? Well I am here to tell you that on www.buyblakesbricks.com you can
                (you guessed it) buy my LEGO bricks. Every brick on this site has been cleaned and carefully inspected. When 
                you order form www.buyblakesbricks.com each package is shipped with love and care and the hope that LEGO
                brings you as much joy as it has for me though out the years.
                </p>
            <p>This website was created for a group project for the University of Minnesota Coding Bootcamp.
                The LEGO bricks are truly for sale at the price shown please contact me if you are intrested in any item.
            </p>
            
        </div>
        
    )
}

export default About