import React from 'react';
import logo from '../assets/logo.png';

export const Navbar = () => {
  return (
    <>
      <div className="bg-red-500 flex items-center justify-center">
        <img
          src={logo}
          alt="pokedex"
          className='w-[7rem]'
        />
      </div>
    </>
  );
};
