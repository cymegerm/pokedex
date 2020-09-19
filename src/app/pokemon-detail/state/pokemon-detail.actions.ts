import { createAction, props } from '@ngrx/store';
import { Pokemon } from '@app/api/models/pokemon';

export const pokemonDetailRequested = createAction(
  '[PokemonDetail Resolver] Pokemon Detail Requested',
  // The `id` of the individual pokemon
  props<{ id: string }>(),
);

export const pokemonDetailRetrieved = createAction(
  '[PokemonDetail Resolver] Pokemon Detail Retrieved',
  // The detailed profile of the individual pokemon
  props<{ pokemon: Pokemon }>(),
);
