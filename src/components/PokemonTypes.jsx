import React from 'react';
import useApi from '../hooks/useApi';

const PokemonTypes = ({ pokemon }) => {
  const { data, loading } = useApi(
    `https://pokeapi.co/api/v2/pokemon/${pokemon}`
  );

  return (
    <>
      {data
        ? data.types
            .map((item) => item.type)
            .map((item) => {
              return <p>{item.name}</p>;
            })
        : loading}
    </>
  );
};

export default PokemonTypes;
