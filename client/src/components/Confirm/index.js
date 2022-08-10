import React from "react";
import { Link } from "react-router-dom";

function Confirm() {
  return (
    <div>
      <div>
        <Link to='/' className='text-sm ml-10'>
          ← Go Home
        </Link>
      </div>
      <div className='h-56 grid grid-cols-3 gap-4 content-center '>
        <p className='text-green-600d ml-20'>
          Thank you for your order. It will be shipped in aproxmatly{" "}
          <span className='text-red-600'>300 years.</span>
        </p>
      </div>
    </div>
  );
}

export default Confirm;
