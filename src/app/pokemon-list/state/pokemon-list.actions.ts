import { createAction, props } from '@ngrx/store';
import { Pokemon } from '@app/api/models/pokemon';

export const pokemonListRequested = createAction(
  '[PokemonList Resolver] Pokemon List Requested',
  // The total number of items already returned by the API since the beginning of pagination (the `offset`) and the
  // maximum number of items (individual pokemons) that should be returned by the API for this request (the `limit`)
  props<{ offset: string; limit: string }>(),
);
export const pokemonListRetrieved = createAction(
  '[PokemonList Resolver] Pokemon List Retrieved',
  // A paginated list of individual pokemons (the number of list items and the actual items depends on the `props`
  // passed via the previous `pokemonListRequested` action)
  props<{ list: Pokemon[] }>(),
);
