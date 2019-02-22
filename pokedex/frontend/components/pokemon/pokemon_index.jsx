import React from 'react'
import PokemonIndexItem from './pokemon_index_item';
import { Route } from 'react-router-dom';
import PokemonDetailContainer from './pokemon_detail_container';

export default class PokemonIndex extends React.Component {

  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {
    return (
      <ul className="pokemon-ul flex">
        { this.props.pokemon.map( pokemon => (
          <PokemonIndexItem key={pokemon.id} pokemon={pokemon} />
          )
        )}
      </ul>
    )}
} 