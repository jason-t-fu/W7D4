import React from 'react';
import { Link } from 'react-router-dom';

const PokemonIndexItem = ({pokemon}) => {
  return (
    <li className="pokemon-li flex">
      <Link to={`/pokemon/${pokemon.id}`}>
        <div className="pokemon-name">{pokemon.name}</div>
        <img src={pokemon.image_url} width="50px"></img>
      </Link>
    </li>
  )
}


export default PokemonIndexItem;