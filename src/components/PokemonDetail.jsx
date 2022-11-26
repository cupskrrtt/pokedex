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
      <div className="flex flex-col justify-center items-center">
        <PokemonSprite
          pokemon={pokemon}
          style="w-[10rem]"
        />
        <h1>{data ? data.name.toUpperCase() : loading}</h1>
        <p>id : {data ? data.id : loading}</p>
        <h2>Height : {data ? data.height : loading}</h2>
        <h2>Weight : {data ? data.weight : loading}</h2>
        <PokemonTypes pokemon={pokemon} />
      </div>
      {/* TODO Fixing the params to restore the last state before back */}
      <Link to={`/`} className='m-10 border-[1px] p-2 rounded-md bg-red text-white'> BACK </Link>
    </>
  );
};

export default PokemonDetail;
