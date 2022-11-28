import React from 'react';
import useApi from '../hooks/useApi';

const PokemonStats = ({pokemon}) => {
  const {data, loading} = useApi(
    `https://pokeapi.co/api/v2/pokemon/${pokemon}`
  );

  return(
    <>
        {data ? data.stats.map(item => {
           return <p>{item.base_stat}</p>
        }) : loading }
        {data ? data.stats.map(item => item.stat).map(item => {
            return <p>{item.name}</p>
        }) : loading }
    </>
  )
};

export default PokemonStats;
