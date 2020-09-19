/*
import { createSelector } from '@ngrx/store';

export const selectRouterState = (state) => {
  return state.router;
};

export const selectPokemonDetailState = (state) => {
  return state.pokemonDetail;
};

// Might not be the best way to get the `id`; Can be fetched directly from the Activated Route (in
// `pokemon-detail.resolver.ts`); See how the `storeFrontId` is retrieved in the `store-front.resolver.ts`
/!*export const pokemonId = createSelector(selectRouterState, (router) => {
  return router.state.params.id || '';
});*!/
*/
