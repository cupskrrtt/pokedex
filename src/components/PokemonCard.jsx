import React, { useState } from 'react';
import useApi from '../hooks/useApi';

import { Link } from 'react-router-dom';

const PokemonCard = () => {
  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon/');

  const pokemonList = useApi(url);

 

  return (
    <>
      {pokemonList ? (
        pokemonList.results.map((item, i) => {
          return (
              <Link to={`/detail/${item.name}`}
                key={i}
                className="w-[8rem] h-[2.5rem] border-2">
                {item.name}
              </Link>
          );
        })
      ) : (
        <p>No Data</p>
      )}
    </>
  );
};

export default PokemonCard;
