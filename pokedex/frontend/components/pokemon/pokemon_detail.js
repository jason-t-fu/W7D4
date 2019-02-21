import React from 'react'

export default class PokemonDetail extends React.Component {
  
  componentDidMount() {
    const id = this.props.match.params.pokemonId;
    // debugger;
    return this.props.requestSinglePokemon(id);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.pokemon.id !== this.props.pokemon.id) {
      this.props.requestSinglePokemon(this.props.match.params.pokemonId)
    }
  }
  
  render() {
    const { pokemon, items } = this.props;
    if (pokemon.moves === undefined){
      return null;
    }    
    return (
    <section>
      <h1>{pokemon.name}</h1>
      <h2>Type: {pokemon.poke_type}</h2>
      <h2>Attack: {pokemon.attack}</h2>
      <h2>Defense: {pokemon.defense}</h2>
        <h2>Moves: {pokemon.moves.join(", ")} </h2>
      <h1>Items</h1>
        {Object.values(items).map(item => (
          <h2>Name: {item.name}</h2> 
          <h2>Name: {item.name}</h2> 
          <h2>Name: {item.name}</h2> 
          ))}
    </section>
    )
  }
}