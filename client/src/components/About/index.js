import React from 'react';
import { Link } from 'react-router-dom';

function About() {
    return (
        <div>
            <Link to="/" className='text-sm'>← Go Home</Link>
            <div className='flex mb-4'>
                <div className='w-full h-12'>
                    <h1 className='text-5xl text-center'>About</h1>
                </div>
            </div>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget blandit ipsum. Cras pulvinar dapibus eros ut finibus. Aenean eget lacus lorem. Duis at velit sit amet nunc ornare rhoncus nec ac elit. Vestibulum euismod sagittis nunc, sed vehicula justo lobortis varius. Aenean lobortis molestie nulla id eleifend. Praesent et turpis consectetur, lobortis dolor blandit, accumsan erat. Phasellus laoreet sem nec ultrices consectetur. Aenean interdum ipsum ut nulla suscipit, non condimentum nulla rutrum. Etiam cursus eros id mi consectetur, vel facilisis ante finibus. </p>
        <p> In volutpat nisi vel ultricies convallis. Aenean libero felis, dignissim sit amet egestas ut, suscipit sed augue. Etiam vitae felis molestie, venenatis lectus ut, interdum augue. Donec eros nisl, placerat eu lobortis id, tristique in augue. Nulla ac diam dolor. Vestibulum nisi metus, sollicitudin et faucibus eget, placerat at massa. Quisque quis orci nec tortor ornare suscipit. Phasellus posuere id odio eu porta. Pellentesque ex dui, accumsan id libero a, varius fringilla purus. Duis odio lacus, tincidunt in vulputate vel, ullamcorper sed arcu. Quisque vehicula purus vitae elit feugiat, non viverra sapien ullamcorper. Suspendisse ac nibh gravida, aliquet erat eu, ultrices arcu. Sed scelerisque magna in molestie imperdiet.</p>
        </div>
        
    )
}

export default About