import React from 'react';
import { Link, useParams } from 'react-router-dom';
import useApi from '../hooks/useApi';
import PokemonSprite from './PokemonSprite';
import PokemonTypes from './PokemonTypes';

const PokemonDetail = () => {
  const { pokemon } = useParams();
  const { data, loading } = useApi(
    `https://pokeapi.co/api/v2/pokemon/${pokemon}`
  );

  return (
    <>
      <PokemonSprite pokemon={pokemon} />

      <h1>{data ? data.name : loading}</h1>
      <p>{data ? data.id : loading}</p>

      <h2>Height : {data ? data.height : loading}</h2>
      <h2>Weight : {data ? data.weight : loading}</h2>

      <PokemonTypes pokemon={pokemon} />
      {/* TODO Fixing the params to restore the last state before back */}
      <Link to="/"> BACK </Link>
    </>
  );
};

export default PokemonDetail;
