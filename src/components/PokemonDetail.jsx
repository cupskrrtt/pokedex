import React from 'react';
import { useParams } from 'react-router-dom';
import useApi from '../hooks/useApi';

const PokemonDetail = () => {
  const { pokemon } = useParams();
  const pokemonDetail = useApi(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

  const img = pokemonDetail ? pokemonDetail.sprites.front_default : '';
  console.log(pokemonDetail);
  return (
    <>
      <img src={img} alt={pokemon} />
      <h1>{pokemon}</h1>
    </>
  );
};

export default PokemonDetail;
