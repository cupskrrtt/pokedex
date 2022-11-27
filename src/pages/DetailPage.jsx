import React from 'react';
import { useParams, Link } from 'react-router-dom';
import useApi from '../hooks/useApi';
import PokemonSprite from '../components/PokemonSprite';
import PokemonTypes from '../components/PokemonTypes';
import PokemonDetail from '../components/PokemonDetail';

const DetailPage = () => {
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
        <PokemonDetail pokemon={pokemon} />
        <hr className="border-black border-[1px] m-2" />
        <PokemonTypes pokemon={pokemon} />
      </div>
      {/* TODO Fixing the params to restore the last state before back */}
      <Link
        to={`/`}
        className="m-10 border-[1px] p-2 rounded-md bg-red text-white">
        {' '}
        BACK{' '}
      </Link>
    </>
  );
};

export default DetailPage;
