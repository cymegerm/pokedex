import { createReducer, on } from '@ngrx/store';
import { Pokemon } from '@app/api/models';
import { PokemonListActions } from './pokemon-list.action-types';

export interface PokemonListState {
  retrieved: boolean;
  cached: boolean;
  offset: number;
  limit: number;
  maxLength: number;
  items: Pokemon[];
}

export const initialPokemonListState: PokemonListState = {
  retrieved: false,
  cached: false,
  offset: null,
  limit: null,
  maxLength: null,
  items: [],
};

export const pokemonListReducer = createReducer(
  initialPokemonListState,
  on(PokemonListActions.pokemonListRequested, (state, action) => {
    return {
      ...state,
      retrieved: false,
      cached: action.cached,
      offset: action.offset,
      limit: action.limit,
      maxLength: action.maxLength,
    };
  }),

  on(PokemonListActions.pokemonListRetrieved, (state, action) => {
    return {
      ...state,
      retrieved: true,
      items: state.items.concat(action.items),
    };
  }),
);
