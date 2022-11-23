import React from 'react';
import { Link } from 'react-router-dom';
import useApi from '../hooks/useApi';

const PokemonList = ({ offset }) => {
  const { data, loading } = useApi(
    `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`
  );

  {loading && <p>Loading....</p>}

  return (
    <>
      {data
        ? data.results.map((item, i) => {
            return (
              <Link
                to={`/detail/${item.name}`}
                key={i}
                // Still need to figure out why tailwind grid dont work
                className='grid grid-cols-2 border-2 justify-items-center text-center'>
                {item.name}
              </Link>
            );
          })
        : loading}
    </>
  );
};

export default PokemonList;
