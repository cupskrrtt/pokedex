import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useApi from '../hooks/useApi';

const PokemonDetail = () => {
  const { pokemon } = useParams();
<<<<<<< HEAD
  const {
    data,
    loading,
    error,
    refetch,
  } = useApi(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)


// TODO BENERIN POKEMON DETAIL SAMA REFACTOR

  console.log(data);
=======
  const { data, loading, error, refetch } = useApi(
    `https://pokeapi.co/api/v2/pokemon/${pokemon}`
  );

  // TODO BENERIN POKEMON DETAIL SAMA REFACTOR
>>>>>>> a544e1f (Creating the structure for pokemon detail)

  return (
    <>
    {/* POKEMON SPRITE */}
      <img
        src={data ? data.sprites.front_default : ''}
        alt={pokemon}
        className="w-[10rem]"
      />
      {/* ID AND NAME */}
      {/* HEIGHT AND WEIGHT */}
      {/* POKEMON TYPES */}
      {/* CHART STATS */}
      <Link to="/"> BACK </Link>
    </>
  );
};

export default PokemonDetail;
