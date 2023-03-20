import React from 'react';
import { Link } from 'react-router-dom';

export function Button() {
  return (
    <Link to='sign-up'>
      <button className='py-2 px-5 rounded-[4px] outline-none border-none text-lg text-[#fff] cursor-pointer bg-primary hover:py-1 hover:px-4 hover:bg-transparent hover:border-2 hover:border-solid hover:border-primary transition duration-150 hover:ease-out'>Sign Up</button>
    </Link>
  );
}
