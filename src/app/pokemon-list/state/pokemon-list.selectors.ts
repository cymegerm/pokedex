import { createSelector } from '@ngrx/store';

export const selectRouterState = (state) => {
  return state.router;
};

export const selectPokemonListState = (state) => {
  return state.pokemonList;
};

export const pokemonList = createSelector(selectPokemonListState, (pokemonList) => {
  return pokemonList;
});

export const pokemonListRetrieved = createSelector(selectPokemonListState, (pokemonList) => {
  return pokemonList.retrieved;
});

export const pokemonListItems = createSelector(selectPokemonListState, (pokemonList) => {
  return pokemonList.items;
});

export const pokemonListParams = createSelector(selectRouterState, (router) => {
  return router.state.queryParams;
});
