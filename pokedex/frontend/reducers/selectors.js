export const selectAllPokemon = (state) => (
  Object.values(state.entities.pokemon)
)


// export const selectSinglePokemon = (state, id) => (
//   state.entities.pokemon[id]
// )
