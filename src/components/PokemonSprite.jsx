import React from 'react';
import useApi from '../hooks/useApi';

const PokemonSprite = ({ pokemon, style }) => {
  const { data, loading } = useApi(
    `https://pokeapi.co/api/v2/pokemon/${pokemon}`
  );

  return (
    <>
      {data ? (
        <img
          src={data.sprites.versions['generation-vii']['ultra-sun-ultra-moon'].front_default}
          alt="Pokemon Sprites"
          className={style}
        />
      ) : (
        loading
      )}
    </>
  );
};

export default PokemonSprite;
