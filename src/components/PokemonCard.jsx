import React, { useState } from 'react';
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

  const getDataNext = (amount) => {
    setOffset(amount + offset);
    refetch;
  };

  const getDataPrev = (amount) => {
    if (offset >= 20) {
      setOffset(amount + offset);
    }
    refetch;
  };

  console.log(offset);

  return (
    <>
      {/* POKEMON LIST */}
      <div className='grid grid-cols-2 justify-items-center'>
        {pokemon
          ? pokemon.results.map((item, i) => {
              return (
                <Link
                  to={`/detail/${item.name}`}
                  key={i}
                  className='border-2 w-[10rem] text-center'>
                  {item.name}
                </Link>
              );
            })
          : loading}
      </div>

      {/* BUTTON */}
      <div>
        <button onClick={() => getDataPrev(-20)}> Prev </button>
        <button onClick={() => getDataNext(20)}> Next </button>
      </div>
    </>
  );
};

export default PokemonCard;
