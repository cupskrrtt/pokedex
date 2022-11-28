import React from 'react';
import useApi from '../hooks/useApi';

const PokemonName = ({pokemon}) => {
  const {data, loading} = useApi(
    `https://pokeapi.co/api/v2/pokemon/${pokemon}`
  );

  return (
    <>
    <div className='font-bold font-xl'>
        <h1>{data ? data.name.toUpperCase() : loading}</h1>
    </div>
    </>
  );
};

export default PokemonName;
