import React from 'react';
import ItemDetailContainer from '../item/item_detail_container';
import { Link, Route } from 'react-router-dom';

export default class PokemonDetail extends React.Component {
  
  componentDidMount() {
      const id = this.props.match.params.pokemonId;
      return this.props.requestSinglePokemon(id);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.pokemon === undefined){
      this.props.requestSinglePokemon(this.props.match.params.pokemonId)
    } else if (prevProps.pokemon.id !== this.props.pokemon.id) {
        this.props.requestSinglePokemon(this.props.match.params.pokemonId)
    }
  }
  
  render() {
    const { pokemon, items } = this.props;
    if (pokemon === undefined || pokemon.moves === undefined){
      return null;
    }    
    return (
    <section className="pokemon-detail flex">
      <h1>{pokemon.name}</h1>
        <img src={pokemon.image_url} width="100px" />
      <h3>Type: {pokemon.poke_type}</h3>
      <h3>Attack: {pokemon.attack}</h3>
      <h3>Defense: {pokemon.defense}</h3>
      <h3>Moves: {pokemon.moves.join(", ")} </h3>

      <h1>Items</h1>
      <div className="item-container">
        {Object.values(items).map( item =>
                            <Link to={`/pokemon/${pokemon.id}/item/${item.id}`}>
                              <img src={item.image_url} width="50px" />
                            </Link>
                          )
        }
        </div>
        <div className="item-container-detail">
        <Route path="/pokemon/:pokemonId/item/:itemId" component={ItemDetailContainer} />
        </div>
    </section>
    )
  }
}