import React from 'react'

export default class PokemonIndex extends React.Component {

  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {
    return (
      <ul className="pokemon-ul flex">
        { this.props.pokemon.map( pokemon => (
            <li key={pokemon.id} className="pokemon-li flex">
              <div className="pokemon-name">{pokemon.name}</div>
              <img src={pokemon.image_url} width="50px"></img>
            </li>
          )
        )}
      </ul>
    )}
} 