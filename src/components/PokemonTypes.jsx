import React from 'react';
import useApi from '../hooks/useApi';

const PokemonTypes = ({ pokemon, style }) => {
  const { data, loading } = useApi(
    `https://pokeapi.co/api/v2/pokemon/${pokemon}`
  );

  return (
    <>
      {data
        ? data.types
            .map((item) => item.type)
            .map((item) => {
              return <p className={style}>{item.name}</p>;
            })
        : loading}
    </>
  );
};

export default PokemonTypes;
