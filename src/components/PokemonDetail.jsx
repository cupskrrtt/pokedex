import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useApi from '../hooks/useApi';

const PokemonDetail = () => {
  const { pokemon } = useParams();
  const { data, loading, error, refetch } = useApi(
    `https://pokeapi.co/api/v2/pokemon/${pokemon}`
  );

  console.log(data)

  return (
    <>
    {/* TODO Refactor code and making chart */}
      {/* POKEMON SPRITE */}
      <img
        src={data ? data.sprites.front_default : loading}
        alt={pokemon}
        className="w-[10rem]"
      />
      {/* ID AND NAME */}  
      <h1>{data ? data.name : loading}</h1>
      <p>{data ? data.id : loading}</p>
      {/* HEIGHT AND WEIGHT */}
      <h2>Height : {data ? data.height : loading}</h2>
      <h2>Weight : {data ? data.weight : loading}</h2>
      {/* POKEMON TYPES */}
      {data ? data.types.map(item => item.type).map(item => {
        return <p>{item.name}</p>
      }) : loading}
      {/* CHART STATS */}
      <Link to="/"> BACK </Link>
    </>
  );
};

export default PokemonDetail;
