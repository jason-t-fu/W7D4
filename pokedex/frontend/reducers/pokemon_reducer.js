import { RECEIVE_ALL_POKEMON, RECEIVE_SINGLE_POKEMON } from '../actions/pokemon_actions';

const pokemonReducer = (state = {}, action) => {
  let newState = {}
  switch(action.type) {
    case RECEIVE_ALL_POKEMON:
      newState = Object.assign({}, action.pokemons, state);
      return newState;
      
    case RECEIVE_SINGLE_POKEMON:
      newState = Object.assign({}, state);
      newState[action.pokemon.pokemon.id] = action.pokemon.pokemon;
      return newState;

    default:
      return state;
  }
}

export default pokemonReducer;