import React from 'react';
import useApi from '../hooks/useApi';

const PokemonTypes = ({ pokemon, style }) => {
  const { data, loading } = useApi(
    `https://pokeapi.co/api/v2/pokemon/${pokemon}`
  );

  return (
    <>
      <div className='flex gap-4'>
        {data
          ? data.types
              .map((item) => item.type)
              .map((item) => {
                // TODO Figure out how to make the bg color based on pokemon type
                return <p className={`${style}`}>{item.name}</p>;
              })
          : loading}
      </div>
    </>
  );
};

export default PokemonTypes;
