import React from 'react';
import {useParams, Link} from 'react-router-dom';
import PokemonSprite from '../components/PokemonSprite';
import PokemonTypes from '../components/PokemonTypes';
import PokemonDetail from '../components/PokemonDetail';
import PokemonAbility from '../components/PokemonAbility';
import PokemonName from '../components/PokemonName';
import PokemonId from '../components/PokemonId';
import StatsChart from '../components/StatsChart';

const DetailPage = () => {
  const {pokemon} = useParams();

  return (
    <>
      {/* TODO Fixing the params to restore the last state before back */}
      <Link
        to={`/`}
        className="top-[4rem] left-[1rem] absolute border-[1px] p-2 rounded-md bg-red text-white"
      >
        BACK
      </Link>
      <div className="flex flex-col justify-center items-center mt-[2rem]">
        <div className='flex gap-2'>
          <PokemonName pokemon={pokemon} />
          <PokemonId pokemon={pokemon} />
        </div>
        <PokemonSprite pokemon={pokemon} style="w-[10rem]" />
        <PokemonTypes pokemon={pokemon} />
        <div className='flex flex-row-reverse justify-center items-center gap-5'>
          <div>
            <PokemonDetail pokemon={pokemon} />
            <PokemonAbility pokemon={pokemon} />
          </div>
          <StatsChart pokemon={pokemon} />
        </div>
      </div>
    </>
  );
};

export default DetailPage;
