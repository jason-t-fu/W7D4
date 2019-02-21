import { connect } from 'react-redux';
import { requestSinglePokemon } from '../../actions/pokemon_actions';
// import { selectSinglePokemon } from '../../reducers/selectors';
import PokemonDetail from './pokemon_detail';

const mapStateToProps = function(state, ownProps) {
  return ({
    pokemon: state.entities.pokemon[ownProps.match.params.pokemonId],
    items: state.entities.items
})
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  requestSinglePokemon: (id) => dispatch(requestSinglePokemon(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonDetail);