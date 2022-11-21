import React, { useState, useEffect } from 'react';
import useApi from '../hooks/useApi';
import { Link } from 'react-router-dom';

const PokemonCard = () => {
  const [offset, setOffset] = useState(0);

  const {
    data: pokemon,
    loading,
    error,
    refetch,
  } = useApi(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`);

  if (loading) return <h1>Loading..</h1>;
  if (error) return console.log(error);

  const getData = (amount) => {
    setOffset(amount + offset);
    refetch;
    console.log(pokemon);
  };

  return (
    <>
      {/* TODO BIKIN POKEMON LISTNYA LAGI */}
      <div className="grid grid-cols-2 justify-items-center content-center">
        {pokemon ? (
          pokemon.results.map((item, i) => {
            return (
              <Link
                to={`/detail/${item.name}`}
                key={i}
                className="flex items-center justify-center w-[8rem] h-[2.5rem] border-2">
                {item.name}
              </Link>
            );
          })
        ) : (
          <p>No Data</p>
        )}
      </div>
<<<<<<< HEAD
      <div className="flex items-center justify-evenly">
        <button> PREV </button>
=======
      <div className="flex items-center justify-between p-9">
        <button onClick={() => getData(-20)}> PREV </button>
>>>>>>> a544e1f (Creating the structure for pokemon detail)
        <button onClick={() => getData(20)}> NEXT </button>
      </div>
    </>
  );
};

export default PokemonCard;
