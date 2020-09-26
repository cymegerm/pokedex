import { createSelector } from '@ngrx/store';

export const selectPokemonDetailState = (state) => {
  return state.pokemonDetail;
};

export const pokemonDetailRetrieved = createSelector(selectPokemonDetailState, (pokemonDetail) => {
  return pokemonDetail.retrieved;
});

export const pokemonDetail = createSelector(selectPokemonDetailState, (pokemonDetail) => {
  console.log(pokemonDetail.detail);
  return pokemonDetail.detail;
});
