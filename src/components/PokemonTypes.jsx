import React from 'react';
import useApi from '../hooks/useApi';
import ColorConfig from '../config/ColorConfig';

const PokemonTypes = ({pokemon}) => {
  const {data, loading} = useApi(
    `https://pokeapi.co/api/v2/pokemon/${pokemon}`
  );

  return (
    <>
      <div className="flex gap-4">
        {data
          ? data.types
              .map(item => item.type)
              .map(item => {
                return (
                  <p key={item.name} className={ColorConfig[`${item.name}`]}>
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
