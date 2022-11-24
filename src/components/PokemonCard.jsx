import React, { useState } from 'react';
import PokemonList from './PokemonList';

const PokemonCard = () => {
  const [offset, setOffset] = useState(0);

  const getDataNext = (amount) => {
    setOffset(amount + offset);
  };

  const getDataPrev = (amount) => {
    if (offset >= 20) {
      setOffset(amount + offset);
    }
  };

  return (
    <>
      {/* POKEMON LIST */}
      <PokemonList offset={offset} />
      {/* BUTTON */}
      <div className="flex justify-between p-10">
        <button onClick={() => getDataPrev(-20)}> Prev </button>
        <button onClick={() => getDataNext(20)}> Next </button>
      </div>
    </>
  );
};

export default PokemonCard;
