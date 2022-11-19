import React, { useState, useEffect } from 'react';
import useApi from '../hooks/useApi';

import { Link } from 'react-router-dom';

const PokemonCard = () => {
  const url = 'https://pokeapi.co/api/v2/pokemon'

  const pokemonList = useApi(url);

  const handleClickNext = (e) => {
    e.preventDefault()
    const next = pokemonList ? pokemonList.next : ''
    console.log(next)
  }

  const handleClickPrev = (e) => {
    e.preventDefault()
    const prev = pokemonList ? pokemonList.prev : ''
    console.log(prev)
  }

  


  return (
    <>
      <div className='grid grid-cols-2 justify-items-center content-center'>
        {pokemonList ? (
          pokemonList.results.map((item, i) => {
            return (
                <Link to={`/detail/${item.name}`}
                  key={i}
                  className="flex items-center justify-center w-[8rem] h-[2.5rem] border-2">
                  {item.name}
                </Link>
            );
          })
        ) : (
          <p>No Data</p>
        )}
      </div>
      <div className='flex items-center justify-between p-6'>
          <button onClick={handleClickPrev}> PREV </button>
          <button onClick={handleClickNext}> NEXT </button>
        </div>
    </>
  );
};

export default PokemonCard;
