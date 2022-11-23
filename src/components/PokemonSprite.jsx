import React from 'react';
import useApi from '../hooks/useApi';

const PokemonSprite = ({ pokemon }) => {
  const { data, loading } = useApi(
    `https://pokeapi.co/api/v2/pokemon/${pokemon}`
  );

  return (
    <>
      {data ? (
        <img
          src={data.sprites.front_default}
          alt="Pokemon Sprites"
        />
      ) : (
        loading
      )}
    </>
  );
};

export default PokemonSprite;
