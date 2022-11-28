import React from 'react';
import { Link } from 'react-router-dom';
import useApi from '../hooks/useApi';
import PokemonSprite from './PokemonSprite';
import PokemonTypes from './PokemonTypes';

const PokemonList = ({ offset }) => {
  const { data, loading } = useApi(
    `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`
  );

  {
    loading && <p>Loading....</p>;
  }

  return (
    <>
      <div className="grid grid-cols-4 gap-5 w-[60rem] mt-[2rem]">
        {data
          ? data.results.map((item, i) => {
              return (
                <Link
                  to={`/detail/${item.name}`}
                  key={i}
                  className="border-2 justify-items-center text-center rounded-lg bg-broken-white">
                  <div className="flex items-center text-black">
                    <PokemonSprite
                      pokemon={item.name}
                      style="w-[5rem]"
                    />
                    <div className="flex flex-col text-start ml-[.4rem] text-sm font-bold">
                      {item.name.toUpperCase()}
                      <PokemonTypes
                        pokemon={item.name}
                      />
                    </div>
                  </div>
                </Link>
              );
            })
          : loading}
      </div>
    </>
  );
};

export default PokemonList;
