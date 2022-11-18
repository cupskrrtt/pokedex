import React from 'react';
import logo from '../assets/logo.png'

const Navbar = () =>{
  return (
    <>
      <div className="bg-red-500 flex items-center justify-center h-[3rem] border-b-2 border-black">
        <img
          src={logo}
          alt="pokedex"
          className="w-[7rem]"
        />
      </div>
    </>
  );
};

export default Navbar
