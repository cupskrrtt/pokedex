import React from 'react';
import useApi from '../hooks/useApi';

const PokemonDetail = ({pokemon}) => {
  const {data, loading} = useApi(
    `https://pokeapi.co/api/v2/pokemon/${pokemon}`
  );

  return (
    <>
      <h2 className="flex gap-1 font-semibold text-sm">
        Height : <p className='font-normal'>{data ? data.height : loading}</p>
      </h2>
      <h2 className="flex gap-1 font-semibold text-sm">
        Weight : <p className='font-normal'>{data ? data.weight : loading}</p>
      </h2>
    </>
  );
};

export default PokemonDetail;
