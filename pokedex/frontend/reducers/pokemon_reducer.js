import { RECEIVE_ALL_POKEMON, RECEIVE_SINGLE_POKEMON } from '../actions/pokemon_actions';

const pokemonReducer = (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_ALL_POKEMON:
      return action.pokemons;
      
    case RECEIVE_SINGLE_POKEMON:
      let newState = Object.assign({}, state);
      newState[action.pokemon.pokemon.id] = action.pokemon.pokemon;
      return newState;

    default:
      return state;
  }
}

export default pokemonReducer;