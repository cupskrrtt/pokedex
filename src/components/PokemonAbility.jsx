import React from 'react';
import useApi from '../hooks/useApi';

const PokemonAbility = ({pokemon}) => {
  const {data, loading} = useApi(
    `https://pokeapi.co/api/v2/pokemon/${pokemon}`
  );

  return (
    <>
      <div className='flex gap-1 justify-center items-start text-sm'>
        <h2 className='font-bold'>Abilities : </h2>
          <div className='flex flex-col'>
            {data
              ? data.abilities
                  .map(item => item.ability)
                  .map(item => {
                    return <p>{item.name}</p>;
                  })
              : loading}
          </div>
      </div>
    </>
  );
};

export default PokemonAbility;
