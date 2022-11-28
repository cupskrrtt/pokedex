import React from 'react';
import useApi from '../hooks/useApi';

const PokemonId = ({pokemon}) => {
  const {data, loading} = useApi(
    `https://pokeapi.co/api/v2/pokemon/${pokemon}`
  );

  return(
    <>
    <p>#{data ? data.id : loading}</p>
    </>
  )
};

export default PokemonId