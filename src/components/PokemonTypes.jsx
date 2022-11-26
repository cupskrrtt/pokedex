import React from 'react';
import useApi from '../hooks/useApi';

const PokemonTypes = ({ pokemon }) => {
  const { data, loading } = useApi(
    `https://pokeapi.co/api/v2/pokemon/${pokemon}`
  );

  return (
    <>
      <div className="flex gap-4">
        {data
          ? data.types
              .map((item) => item.type)
              .map((item) => {
                // TODO Figure out how to make the bg color based on pokemon type
                return (
                  <p
                    className={`flex text-xs font-medium border-[1px] border-black w-[3.4rem] h-[1.2rem] mt-[1rem] align-center justify-center rounded-md`}>
                    {item.name}
                  </p>
                );
              })
          : loading}
      </div>
    </>
  );
};

export default PokemonTypes;
