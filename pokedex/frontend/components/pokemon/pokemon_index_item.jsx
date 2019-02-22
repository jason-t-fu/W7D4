import React from 'react';
import { Link } from 'react-router-dom';

const PokemonIndexItem = ({pokemon}) => {
  return (
    <li className="pokemon-li-block">
      <Link to={`/pokemon/${pokemon.id}`}>
        <div className="pokemon-li flex">
          <img src={pokemon.image_url} width="25px"></img>
          <div className="pokemon-name"><span>{pokemon.name}</span></div>
        </div>
      </Link>
    </li>
  )
}


export default PokemonIndexItem;