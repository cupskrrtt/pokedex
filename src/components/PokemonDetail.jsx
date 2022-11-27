import React from 'react';
import useApi from '../hooks/useApi';

const PokemonDetail = ({ pokemon }) => {
  const { data, loading } = useApi(
    `https://pokeapi.co/api/v2/pokemon/${pokemon}`
  );

  return (
    <>
      <div className="flex gap-3 justify-center items-center">
        <h1 className="font-bold">
          {data ? data.name.toUpperCase() : loading}
        </h1>
        <p className="font-medium text-xs text-center">ID : {data ? data.id : loading}</p>
      </div>
      <div className="flex gap-3">
        <h2 className="font-semibold text-sm">
          Height : {data ? data.height : loading}
        </h2>
        <h2 className="font-semibold text-sm">
          Weight : {data ? data.weight : loading}
        </h2>
      </div>
    </>
  );
};

export default PokemonDetail;
